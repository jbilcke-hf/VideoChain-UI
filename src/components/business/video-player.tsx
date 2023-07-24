"use client"

import { Video } from "@/app/types"

export const VideoPlayer = ({ video }: { video?: Video }) => {

  if (typeof video === "undefined") {
    return <div className="flex w-full h-screen items-center justify-center text-center">
      <div>No video to display</div>
    </div>
  }

  return (
    <div className="w-full py-8 px-2">
       <video
          src={`${
            process.env.NEXT_PUBLIC_DOWNLOAD_URL
          }/${
            video.ownerId
          }/${
            video.id
          }.mp4?progress=${
            video.progressPercent
          }`}
          muted
          autoPlay
          loop
          controls
          className="w-full rounded-md overflow-hidden"
        />
    </div>
  )
}