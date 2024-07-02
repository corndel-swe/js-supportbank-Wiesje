// Exercise 2 Part 1
// Finish this function by throwing an error if the id is invalid.
export function validateId(id) {
  // Check that the id exists
  if (id === null || id === undefined) {
    throw new Error('ID is required')
  }

  // The id should be a string:
  if (typeof id !== 'string') {
    throw new Error('ID should be a string')
  }

  // The id should be an odd number of characters long:
  if (id.length % 2 === 0) {
    throw new Error('ID should have an odd length')
  }

  // The id should contain the letter 'a':
  if (!id.includes('a')) {
    throw new Error('ID should include letter a')
  }

  // The id should be all lowercase:
  if (id !== id.toLowerCase()) {
    throw new Error('ID should be all lowercase')
  }

}

// Exercise 2 Part 2
// Use try/catch with the `validateId` function above to validate the id.
// Return `true` if the id is valid.
// If an error is thrown: catch it, log a useful message, then return `false`
export function isIdValid(id, logger) {
  logger.error('ID is invalid')
  return null
}
