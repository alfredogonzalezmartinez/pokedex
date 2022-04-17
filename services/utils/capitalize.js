export const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('capitalize method expected a string as parameter')
  }

  const capitalizedString = string.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase())

  return capitalizedString
}
