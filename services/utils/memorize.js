export const memorize = (callback) => {
  if (typeof callback !== 'function') {
    throw new TypeError('memorize method expected a function as parameter')
  }

  const cache = new Map()

  return async (...args) => {
    const key = JSON.stringify(...args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = await callback(...args)
    cache.set(key, result)
    return result
  }
}
