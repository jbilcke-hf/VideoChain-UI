import { NextRequest, NextResponse } from "next/server"
import { getTask } from "@/server"

// TODO: implement some kind of quota system
export async function GET(req: NextRequest) {
  return NextResponse.json({
    task: await getTask(`${req.url?.split('/').pop() || ""}`)
  })
}
