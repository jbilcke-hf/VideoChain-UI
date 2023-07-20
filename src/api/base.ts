
// note: there is no / at the end in the variable
// so we have to add it ourselves if needed
const apiUrl = process.env.VC_VIDEOCHAIN_API_URL

export const get = async <T>(path: string = '', defaultValue: T): Promise<T> => {
  try {
    const res = await fetch(`${apiUrl}/${path}`, {
      headers: {
        method: "GET",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.VC_SECRET_ACCESS_TOKEN}`,
      }
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    
    // Recommendation: handle errors
    if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    const data = await res.json()

    return ((data as T) || defaultValue)
  } catch (err) {
    console.error(err)
    return defaultValue
  }
}