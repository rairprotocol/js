import { THIRDWEB_CLIENT } from "@/lib/client";
import { cookies } from "next/headers";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { balanceOf } from "thirdweb/extensions/erc20";
import { AuthButton } from "./auth-button";
import { thirdwebAuth } from "./thirdweb-auth";

export async function GatedContentPreview() {
  const Content = ({ title }: { title: string }) => {
    return (
      <div className="flex flex-col gap-5">
        <div className="mx-auto">
          <AuthButton />
        </div>
        <div className="text-center">{title}</div>
      </div>
    );
  };
  const jwt = cookies().get("jwt");
  if (!jwt?.value) {
    return <Content title="Log in to see the secret content" />;
  }

  const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
  if (!authResult.valid) {
    return <Content title="Log in to see the secret content" />;
  }

  // If the user has logged in, get their wallet address
  const address = authResult.parsedJWT.sub;
  if (!address) throw new Error("could not get wallet address");

  // This is the part that we do the gating condition.
  // If pass -> Allow them to access the page.
  const requiredQuantity = 10n; // 10 erc20 token

  const erc20Contract = getContract({
    address: "0xACf072b740a23D48ECd302C9052fbeb3813b60a6",
    chain: sepolia,
    client: THIRDWEB_CLIENT,
  });

  const ownedBalance = await balanceOf({
    contract: erc20Contract,
    address,
  });

  // For this example, we check if a user has more than 10 $TWCOIN
  if (ownedBalance < requiredQuantity) {
    return (
      <Content title="You are logged in but you cannot see the content because own less than 10 TWCOIN" />
    );
  }

  // Finally! We can load the gated content for them now

  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto">
        <AuthButton />
      </div>
      <div className="text-center mx-auto">
        You can see this message because you own more than 10 TWCOIN
      </div>
    </div>
  );
}
