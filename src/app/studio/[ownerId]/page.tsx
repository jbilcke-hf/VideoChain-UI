import Head from "next/head"

import Main from "./main"

export default async function StudioPage({ params: { ownerId } }: { params: { ownerId: string }}) {
  console.log('ownerId:', ownerId)

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86" />
      </Head>
      <main className="dark h-screen w-full flex flex-col items-center bg-stone-900 text-stone-100">
        <Main ownerId={`${ownerId || ""}`} />
      </main>
    </div>
  )
}