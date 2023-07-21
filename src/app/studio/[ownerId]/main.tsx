"use server"

import { getTasks } from "@/server"
import { VideoTasksQueue } from "@/components/business/tasks/video-tasks-queue"
import { RefreshStudio } from "@/components/business/refresh"
import { VideoForm } from "@/components/business/videoForm"

export default async function Main({ ownerId }: { ownerId: string }) {
  const tasks = await getTasks(ownerId)

  return (
    <div className="h-full flex flex-col space-y-4 max-w-4xl w-full px-4 py-8">
      <VideoForm />
      <VideoTasksQueue tasks={tasks} />
      <RefreshStudio />
    </div>
  )
}