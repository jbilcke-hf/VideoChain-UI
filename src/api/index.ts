
import { VideoTask } from "@/app/types"

import { get } from "./base"

export const getPendingTasks = async () => {
  const tasks = await get<VideoTask[]>("", [])

  return tasks
}

export const getTask = async (id: string) => {
  const task = await get<VideoTask>(id, null as unknown as VideoTask)

  return task
}