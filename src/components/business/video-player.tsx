"use client"

import { VideoTask } from "@/app/types"

export const VideoPlayer = ({ video }: { video?: VideoTask }) => {

  if (typeof video === "undefined") {
    return <p>No video to display</p>
  }

  return (
    <div className="w-full py-8 px-2">
       <video
          src={`${
            process.env.NEXT_PUBLIC_DOWNLOAD_URL
          }/${
            video.fileName
          }?progress=${
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