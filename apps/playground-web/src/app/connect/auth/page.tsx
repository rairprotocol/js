import { BasicAuthPreview } from "@/components/auth/basic-auth";
import { GatedContentPreview } from "@/components/auth/gated-content";
import { CodeExample } from "@/components/code/code-example";
import { Button } from "@/components/ui/button";
import { metadataBase } from "@/lib/constants";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase,
  title: "Auth | thirdweb Connect",
  description: "lorem ipsum",
};

export default function Page() {
  return (
    <main className="flex-1 content-center relative py-12 md:py-24 lg:py-32 xl:py-48 space-y-12 md:space-y-24">
      <section className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 min-h-[100%]">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-inter mb-6 text-balance">
                Auth
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-300 mb-6 font-inter">
                lorem ipsum
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link
                  target="_blank"
                  href="https://portal.thirdweb.com/typescript/v5/auth"
                >
                  View docs
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link target="_blank" href="https://thirdweb.com/contact-us">
                  Book a Demo
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full mx-auto my-auto sm:w-full order-first lg:order-last relative flex flex-col space-y-2">
            <div className="max-w-full sm:max-w-[600px]">
              <Image
                src={""}
                width={600}
                height={400}
                objectFit={"contain"}
                alt=""
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 space-y-8">
        <BasicAuth />
      </section>

      <section className="container px-4 md:px-6 space-y-8">
        <GatedContent />
      </section>
    </main>
  );
}

function BasicAuth() {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Basic Auth
        </h2>
        <p className="max-w-[600px]">lorem</p>
      </div>

      <CodeExample
        preview={<BasicAuthPreview />}
        code={`import { getContract } from "thirdweb";
import { ethereum } from "thirdweb/chains";
import { MediaRenderer, useReadContract } from "thirdweb/react";
`}
        lang="tsx"
      />
    </>
  );
}

function GatedContent() {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Gating content with Auth
        </h2>
        <p className="max-w-[600px]">lorem</p>
      </div>

      <CodeExample
        preview={<GatedContentPreview />}
        code={`import { getContract } from "thirdweb";
import { ethereum } from "thirdweb/chains";
import { MediaRenderer, useReadContract } from "thirdweb/react";
`}
        lang="tsx"
      />
    </>
  );
}
