import { describe, expect, it } from "vitest";
import { TEST_ACCOUNT_A } from "~test/test-wallets.js";
import { TEST_WALLET_B } from "../../test/src/addresses.js";
import { USDT_CONTRACT_WITH_ABI } from "../../test/src/test-contracts.js";
import { fromHex, toHex } from "../utils/encoding/hex.js";
import { toWei } from "../utils/units.js";
import { sendAndConfirmTransaction } from "./actions/send-and-confirm-transaction.js";
import { prepareContractCall } from "./prepare-contract-call.js";

const extraString = "I'm a cat";
const extraCallData = toHex(extraString);
const account = TEST_ACCOUNT_A;

describe.runIf(process.env.TW_SECRET_KEY)("prepareContractCall", () => {
  it("should prepare a contract call with ABI", () => {
    const preparedTx = prepareContractCall({
      contract: USDT_CONTRACT_WITH_ABI,
      method: "transfer",
      params: [TEST_WALLET_B, toWei("100")],
    });
    expect(preparedTx.to).toBe(USDT_CONTRACT_WITH_ABI.address);
  });

  it("should be able to prepare a contract call with parameters & extra call data", async () => {
    const transaction = prepareContractCall({
      contract: USDT_CONTRACT_WITH_ABI,
      method: "approve",
      params: [TEST_WALLET_B, 100n],
      extraCallData,
    });
    const callData =
      typeof transaction.data === "string"
        ? transaction.data
        : (await transaction.data?.()) || "0x";
    const decodedData = fromHex(callData, "string");
    expect(decodedData).toContain(extraString);

    // Make sure the transaction is executable
    const receipt = await sendAndConfirmTransaction({ transaction, account });
    expect(receipt).toBeDefined();
    expect(receipt.transactionHash.startsWith("0x")).toBe(true);
    expect(receipt.status).toBe("success");
  });

  it("should be able to prepare a contract call with NO parameters & extra call data", async () => {
    const transaction = prepareContractCall({
      contract: USDT_CONTRACT_WITH_ABI,
      method: "decimals",
      params: [],
      extraCallData,
    });
    const callData =
      typeof transaction.data === "string"
        ? transaction.data
        : (await transaction.data?.()) || "0x";
    const decodedData = fromHex(callData, "string");
    expect(decodedData).toContain(extraString);

    // Make sure the transaction is executable
    const receipt = await sendAndConfirmTransaction({ transaction, account });
    expect(receipt).toBeDefined();
    expect(receipt.transactionHash.startsWith("0x")).toBe(true);
  });
});
