import Head from "next/head"

import { getPendingTasks } from "@/api"


export default async function Pending() {
  const tasks = await getPendingTasks()
  console.log(`tasks:`, tasks)
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86" />
      </Head>
      <main className="h-screen w-full flex bg-gray-700 text-gray-200">
        <div className="flex flex-col">
          Nb tasks: {tasks.length}
        </div>
      </main>
    </div>
  )
}