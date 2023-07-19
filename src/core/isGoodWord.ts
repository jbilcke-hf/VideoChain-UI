import { getGoodWords } from "./goodWords"

//
export const isGoodWord = async (word: string) => {
  const { goodWords } = await getGoodWords()
  return goodWords.has(word.trim().toLowerCase())
}