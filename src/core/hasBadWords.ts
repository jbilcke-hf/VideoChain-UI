
// as the tool will be public, we need some level of moderation to bred unfair use
// note: another possibility could be to use the moderation api from openai,
// but it is paying
const config = JSON.parse(`${process.env.VC_MODERATION_FILTER_PATTERN}`)

export const hasBadWords = (userPrompt: string) => {
  const normalized = userPrompt.trim().toLowerCase()
  return !!config[normalized]
}