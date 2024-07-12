// import { getChain } from "../../../utils";
import { getRpcClient, eth_getTransactionByHash, eth_getTransactionReceipt, eth_getBlockByHash } from "thirdweb/rpc";
import { thirdwebClient } from "@/constants/client";
import { ethereum } from "thirdweb/chains";
import { Separator } from "@/components/ui/separator";
import { InfoIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { hexToNumber, toEther } from "thirdweb/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const shrinkAddressString = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}` 
const formatUnits = (value: bigint, decimals: number) => Number(value / BigInt(10 ** decimals))

export default async function Page(props: { params: { chain_id: string, txHash: `0x${string}` } }) {
  // const chain = await getChain(props.params.chain_id);
  const rpcRequest = getRpcClient({ 
    client: thirdwebClient,
    chain: ethereum,
  });

  const transaction = await eth_getTransactionByHash(rpcRequest, {
    hash: props.params.txHash
  })
  const receipt = await eth_getTransactionReceipt(rpcRequest, {
    hash: props.params.txHash
  })
  const block = await eth_getBlockByHash(rpcRequest, {
    blockHash: transaction.blockHash!,
  });

  console.log("transaction: ", transaction)
  console.log("transaction receipt: ", receipt)
  console.log("block: ", block)

  return (
    <TooltipProvider>
      <main className="flex flex-col gap-y-10">
        <header className="flex flex-col gap-y-2">
          <p className="text-3xl font-bold">Transaction Details</p>
          <div className="flex gap-x-2">
            {shrinkAddressString(transaction.from)} called on {shrinkAddressString(transaction.to)}
          </div>
        </header>

        <Separator orientation="horizontal" />

        <section className="flex flex-col gap-y-2">
          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Transaction hash
            </div>
            <p>{transaction.hash}</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Status {/* and method */}
            </div>
            <div className="flex gap-x-2">
              <Badge className={receipt.status === "success" ? "bg-green-500" : "bg-red-500"}>{receipt.status}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Block
            </div>
            <p>{Number(transaction.blockNumber)}</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Timestamp
            </div>
            <p>{new Date(Number(block.timestamp)).toLocaleString()}</p>
          </div>
        </section>

        <Separator orientation="horizontal" />

        <section className="flex flex-col gap-y-2">
          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              From
            </div>
            <p>{transaction.from}</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Interacted with contract
            </div>
            <p>{transaction.to}</p>
          </div>
        </section>

        <Separator orientation="horizontal" />

        <section className="flex flex-col gap-y-2">
          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Value
            </div>
            <p>{toEther(transaction.value)} ETH</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Transaction fee
            </div>
            <p>{toEther(transaction.gasPrice! * receipt.gasUsed)} ETH</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Gas price
            </div>
            <p>{toEther(transaction.gasPrice!)} ETH</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Gas usage
            </div>
            <p>{receipt.gasUsed.toString()}</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Gas fees (Gwei)
            </div>
            <p>Base: {formatUnits(block.baseFeePerGas!, 9)} | Max: {formatUnits(transaction.maxFeePerGas!, 9)} | Max priority: {transaction.maxPriorityFeePerGas.toString()}</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Burnt fees
            </div>
            <p>{toEther(block.baseFeePerGas! * receipt.gasUsed)}</p>
          </div>
        </section>

        <Separator orientation="horizontal" />

        <section className="flex flex-col gap-y-2">
          <div className="grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Other
            </div>
            <p>Txn type: {hexToNumber(transaction.typeHex!)} ({transaction.type}) | Nonce: {transaction.nonce} | Position: {transaction.transactionIndex}</p>
          </div>

          <div className="grid grid-cols-2 items-start">
            <div className="flex gap-x-2 items-center">
              <Tooltip>
                <TooltipTrigger><InfoIcon size={16} /></TooltipTrigger>
                <TooltipContent>
                  <p></p>
                </TooltipContent>
              </Tooltip>
              Raw Input:
            </div>
            <div className="bg-gray-800 p-4 rounded-lg break-words text-sm">
              {transaction.input}
            </div>
          </div>
        </section>
      </main>
    </TooltipProvider>
  )
}