"use server"

import { revalidatePath } from "next/cache"
import { createNewVideo } from "."

export async function handleFormSubmit(formData: FormData) {
  const ownerId = `${formData.get("ownerId") || ""}`
  await createNewVideo(ownerId, {
    prompt: `${formData.get("prompt") || ""}`,
  })
  // for doc see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
  revalidatePath(`/studio/${ownerId}`)
}

export async function refreshStudio(ownerId: string) {
  revalidatePath(`/studio/${ownerId}`)
}