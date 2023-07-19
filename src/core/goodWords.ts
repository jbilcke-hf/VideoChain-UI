import { promises as fs } from "node:fs"

type GoodWordsDB = Record<string, Record<string, string[]>>

// import ngrams from "talisman/tokenizers/ngrams"

let db: GoodWordsDB = {}

export let goodWords: Set<string> = new Set()
export let goodWordsList: string[] = []

export const getGoodWords = async () => {

  if (!Object.entries(db)) {
    const dbFileContent = await fs.readFile("./data/good_words.json", "utf8")
  
    db = JSON.parse(dbFileContent) as GoodWordsDB


    // we don't want those categories to be part of the acceptable, fair use words
    const unwantedCategories = {
      celeb: true
    } as Record<string, boolean>
    
    for (const [category, words] of Object.entries(db)) {
      if (unwantedCategories[category]) {
        continue
      }

      for (const word in words) {
        const normalizedWord = word.trim().toLowerCase()
        goodWords.add(normalizedWord)
        goodWordsList.push(normalizedWord)
      }
    }
  }

  return { db, goodWords, goodWordsList }
}