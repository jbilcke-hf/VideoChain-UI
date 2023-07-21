import type { NextApiRequest, NextApiResponse } from "next"

import { VideoTask } from "@/app/types"
import { NextResponse } from "next/server"
import { getTask } from "@/server"

// TODO: implement some kind of quota system
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<{
    task?: VideoTask
    error?: string
  }>
) {
  return NextResponse.json({
    task: await getTask(`${req.url?.split('/').pop() || ""}`)
  })
}
