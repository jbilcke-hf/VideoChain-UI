"use server"

import { revalidatePath } from "next/cache"
import { submitNewTask } from "."

export async function formSubmit(formData: FormData) {

  const ownerId = `${formData.get("ownerId") || ""}`
  await submitNewTask({
    prompt: `${formData.get("prompt") || ""}`,
    ownerId,
  })

  // for doc see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
  revalidatePath(`/studio/${ownerId}`)
}

export async function refreshStudio(ownerId: string) {
  revalidatePath(`/studio/${ownerId}`)
}