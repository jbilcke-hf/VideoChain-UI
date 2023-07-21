"use client"

import { useState } from "react"

import { VideoTasksQueue } from "@/components/business/tasks/video-tasks-queue"
import { RefreshStudio } from "@/components/business/refresh"
import { VideoForm } from "@/components/business/video-form"
import { VideoTask } from "@/app/types"
import { VideoPlayer } from "@/components/business/video-player"

export default function Main({ videoTasks }: { videoTasks: VideoTask[] }) {
  const [selectedVideo, selectVideo] = useState<VideoTask>()

  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-full flex flex-col space-y-4 w-full md:w-[800px] px-4 py-8">
        <VideoForm />
        <VideoTasksQueue videoTasks={videoTasks} onSelectVideo={selectVideo} />
        <RefreshStudio />
      </div>
      <div className="flex flex-col w-auto">
        <VideoPlayer video={selectedVideo} />
      </div>
    </div>
  )
}