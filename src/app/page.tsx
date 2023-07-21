import { redirect } from 'next/navigation'
import { v4 as uuidv4 } from "uuid"

export default function Index() {
  const uuid = uuidv4()
  redirect(`/studio/${uuid}`)
}