"use server"

import { VideoTask, VideoTaskRequest } from "@/app/types"

import { get, post } from "./base"

// note: for security purposes we do not directly expose the VideoChain API:
// all calls are protected with a token, that way it the VideooChain API can stay
// lightweight, security and quotas are handled outside

// attention: this return *ALL* pending tasks, including those of other users
export const getPendingTasks = async () => {
  const tasks = await get<VideoTask[]>("", [])

  return tasks
}

// return all tasks of a owner
export const getTasks = async (ownerId: string) => {
  const tasks = await get<VideoTask[]>(`owner/${ownerId}`, [])

  return tasks
}

export const getTask = async (ownerAndVideoId: string) => {
  const task = await get<VideoTask>(ownerAndVideoId, null as unknown as VideoTask)

  return task
}

export const submitNewTask = async (taskRequest: VideoTaskRequest) => {
  const task = await post<VideoTaskRequest, VideoTask>(
    "",
    taskRequest,
    null as unknown as VideoTask
  )

  return task
}