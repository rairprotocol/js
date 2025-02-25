"use client";
import { useEffect, useState } from "react";
import type { ThirdwebClient } from "../../../../client/client.js";
import { webLocalStorage } from "../../../../utils/storage/webStorage.js";
import { getWalletInfo } from "../../../../wallets/__generated__/getWalletInfo.js";
import { getInstalledWalletProviders } from "../../../../wallets/injected/mipdStore.js";
import { getStoredActiveWalletId } from "../../../../wallets/manager/index.js";
import type { WalletId } from "../../../../wallets/wallet-types.js";
import { radius } from "../../../core/design-system/index.js";
import {
  appleIconUri,
  emailIcon,
  facebookIconUri,
  genericWalletIcon,
  googleIconUri,
  passkeyIcon,
  phoneIcon,
} from "../../../core/utils/socialIcons.js";
import { getLastAuthProvider } from "../../../core/utils/storage.js";
import { useWalletImage } from "../../../core/utils/wallet.js";
import { useActiveWallet } from "../../hooks/wallets/useActiveWallet.js";
import { Img } from "./Img.js";

/**
 * @internal
 */
export function WalletImage(props: {
  id: WalletId;
  size: string;
  client: ThirdwebClient;
  style?: React.CSSProperties;
}) {
  const [image, setImage] = useState<string | undefined>(undefined);
  const activeWallet = useActiveWallet();
  useEffect(() => {
    async function fetchImage() {
      // show EOA icon for external wallets
      // show auth provider icon for in-app wallets
      // show the admin EOA icon for smart
      const storage = webLocalStorage;
      let activeEOAId = props.id;
      if (props.id === "smart") {
        const storedId = await getStoredActiveWalletId(storage);
        if (storedId) {
          activeEOAId = storedId;
        }
      }
      let image: string | undefined;

      if (
        activeEOAId === "inApp" &&
        activeWallet &&
        (activeWallet.id === "inApp" || activeWallet.id === "smart")
      ) {
        // when showing an active wallet icon - check last auth provider and override the IAW icon
        const lastAuthProvider = await getLastAuthProvider(storage);
        switch (lastAuthProvider) {
          case "google":
            image = googleIconUri;
            break;
          case "apple":
            image = appleIconUri;
            break;
          case "facebook":
            image = facebookIconUri;
            break;
          case "phone":
            image = phoneIcon;
            break;
          case "email":
            image = emailIcon;
            break;
          case "passkey":
            image = passkeyIcon;
            break;
        }
      } else {
        const mipdImage = getInstalledWalletProviders().find(
          (x) => x.info.rdns === activeEOAId,
        )?.info.icon;

        if (mipdImage) {
          image = mipdImage;
        } else {
          image = await getWalletInfo(activeEOAId, true);
        }
      }

      setImage(image);
    }
    fetchImage();
  }, [props.id, activeWallet]);

  if (image) {
    return (
      <Img
        src={image}
        width={props.size}
        height={props.size}
        loading="eager"
        client={props.client}
        style={{
          borderRadius: radius.md,
          ...props.style,
        }}
      />
    );
  }

  return (
    <WalletImageQuery id={props.id} size={props.size} client={props.client} />
  );
}

function WalletImageQuery(props: {
  id: WalletId;
  size: string;
  client: ThirdwebClient;
}) {
  const walletImage = useWalletImage(props.id);

  if (walletImage.isFetched && !walletImage.data) {
    return (
      <Img
        client={props.client}
        src={genericWalletIcon}
        width={props.size}
        height={props.size}
      />
    );
  }

  return (
    <Img
      client={props.client}
      src={walletImage.isLoading ? undefined : walletImage.data}
      fallbackImage={genericWalletIcon}
      width={props.size}
      height={props.size}
      loading="eager"
      style={{
        borderRadius: radius.md,
      }}
    />
  );
}
