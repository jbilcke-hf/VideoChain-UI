"use client"

import { useState } from "react"

import { VideosQueue } from "@/components/business/videos/video-table"
import { RefreshStudio } from "@/components/business/refresh"
import { VideoForm } from "@/components/business/video-form"
import { Video } from "@/app/types"
import { VideoPlayer } from "@/components/business/video-player"

export default function Main({ videos }: { videos: Video[] }) {
  const [selectedVideo, selectVideo] = useState<Video>()

  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-full flex flex-col space-y-4 w-full md:w-[800px] px-4 py-8">
        <VideoForm />
        <VideosQueue videos={videos} onSelectVideo={selectVideo} />
        <RefreshStudio />
      </div>
      <div className="flex flex-col w-auto">
        <VideoPlayer video={selectedVideo} />
      </div>
    </div>
  )
}