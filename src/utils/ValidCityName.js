import isValid from './ValidityChecker'

/**
 * util func to check and return the valid name
 * @param {*} name (city or state or country)
 * @param {*} showDelimeter (false for country)
 */
const validName = (name, showDelimeter = true) => {
  // debugger
  return isValid(name) ? `${name}${showDelimeter ? ', ' : ''}` : ''
}

export default validName
