import { VideoTask, VideoTaskRequest } from "@/app/types"
import { getPendingTasks, submitNewTask } from "@/server"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
 
// TODO: implement some kind of quota system
export async function GET() {
  return NextResponse.json({
    tasks: await getPendingTasks()
  })
}

// TODO: implement some kind of quota system
export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<VideoTask | {
    error?: string
  }>
) {
  console.log('POST req.body:', req.body)
  const taskRequest = req.body as VideoTaskRequest
  const task = await submitNewTask(taskRequest)
  res.status(200).json(task)
}