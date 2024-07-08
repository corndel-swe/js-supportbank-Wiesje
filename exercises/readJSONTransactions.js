import fs from 'fs/promises'

export async function readJSONTransactions() {
  // Read the Transactions2013.json file
  const path = new URL('../data/Transactions2013.json', import.meta.url)
  const data = await fs.readFile(path)

  // Use JSON.parse to convert the string into an array of objects
  const obj = JSON.parse(data)

  // and return it
  return obj
}
