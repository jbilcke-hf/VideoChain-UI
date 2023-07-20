import Head from "next/head"

import { Timeline } from "@/components/business/timeline"

export default function Index() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86" />
      </Head>
      <main className="h-screen w-full flex bg-gray-700 text-gray-200">
        <div className="flex flex-col">
          <Timeline />
        </div>
      </main>
    </div>
  )
}