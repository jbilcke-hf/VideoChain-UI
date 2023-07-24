"use server"

import { Video, VideoAPIRequest, GenericAPIResponse, VideoStatusRequest, VideoStatus } from "@/app/types"

import { GET, POST, DELETE, PATCH } from "./base"

// note: for security purposes we do not directly expose the VideoChain API:
// all calls are protected with a token, that way it the VideooChain API can stay
// lightweight, security and quotas are handled outside

// this should be used by the admin only
export const getAllVideos = async () => {
  const tasks = await GET<Video[]>("", [])

  return tasks
}

// return all tasks of a owner
export const getVideos = async (ownerId: string) => {
  const tasks = await GET<Video[]>(ownerId, [])

  return tasks
}

export const getVideo = async (ownerId: string, videoId: string) => {
  const task = await GET<Video>(`${ownerId}/${videoId}`, null as unknown as Video)

  return task
}

export const setVideoStatus = async (ownerId: string, videoId: string, status: VideoStatus) => {
  const task = await PATCH<VideoStatusRequest, GenericAPIResponse>(`${ownerId}/${videoId}`, { status }, null as unknown as Video)

  return task
}

/*
export const deleteVideo = async (ownerId: string, videoId: string) => {
  const task = await DELETE<GenericAPIResponse>(`${ownerId}/${videoId}`, { success: false })
  return task
}

*/
/*
export async function deleteVideos(ownerId: string, videoIds: string[]) {
  const task = await DELETE<GenericAPIResponse>(ownerAndVideoId, { success: true })
  
  return task
}
*/

export const createNewVideo = async (ownerId: string, taskRequest: VideoAPIRequest) => {
  console.log("create new video")
  const task = await POST<VideoAPIRequest, Video>(
    ownerId,
    taskRequest,
    null as unknown as Video
  )

  return task
}

