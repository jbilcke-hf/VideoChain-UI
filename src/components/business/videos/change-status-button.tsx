"use client"

import { ReactNode, useTransition } from "react"

import { Video, VideoStatus } from "@/app/types"
import { setVideoStatus } from "@/server"

export function ChangeStatusButton({ video, children, status }: { video: Video; children: ReactNode; status: VideoStatus }) {
  let [isPending, startTransition] = useTransition()
 
 return (
  <div
    className="hover:underline cursor-pointer"
    onClick={() => {
      startTransition(async () => {
        await setVideoStatus(video.ownerId, video.id, status)
      })
    }}>{children}</div>
  )
}