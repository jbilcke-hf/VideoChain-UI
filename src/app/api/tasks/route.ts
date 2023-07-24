import { Video, VideoRequest } from "@/app/types"
import { getAllVideos, createNewVideo } from "@/server"
import { NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"
 
// TODO: implement some kind of quota system
export async function GET() {
  return NextResponse.json({
    videos: await getAllVideos()
  })
}

// TODO: implement some kind of quota system
export async function POST(
  req: NextRequest,
  res: NextApiResponse<Video | {
    error?: string
  }>
) {
  const taskRequest = req.body as VideoRequest
  const task = await createNewVideo(taskRequest)
  res.status(200).json(task)
}