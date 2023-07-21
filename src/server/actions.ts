"use server"

import { revalidatePath } from "next/cache"
import { submitNewTask } from "."

export async function formSubmit(formData: FormData) {
  await submitNewTask({
    prompt: `${formData.get("prompt") || ""}`,
    ownerId: `${formData.get("ownerId") || ""}`,
  })

  // for doc see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
  revalidatePath('/')
}