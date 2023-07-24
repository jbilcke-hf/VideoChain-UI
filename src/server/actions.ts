"use server"

import { revalidatePath } from "next/cache"
import { createNewVideo } from "."

export async function handleFormSubmit(formData: FormData) {
  const ownerId = `${formData.get("ownerId") || ""}`
  await createNewVideo(ownerId, {
    prompt: `${formData.get("prompt") || ""}`,
  })
}

export async function refreshStudio(ownerId: string) {
  revalidatePath(`/studio/${ownerId}`)
}