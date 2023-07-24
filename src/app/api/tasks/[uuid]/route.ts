import { NextRequest, NextResponse } from "next/server"
import { getVideo } from "@/server"

// TODO: implement some kind of quota system
export async function GET(req: NextRequest) {
  return NextResponse.json({
    video: await getVideo(`${req.url?.split('/').pop() || ""}`)
  })
}
