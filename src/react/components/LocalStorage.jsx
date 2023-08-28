/**
 * We obtain an object table of the list of employees submitted by the form
 * @returns {Array} from localStorage
 */
export const localStorageEmployee = () => {
  const data = localStorage.getItem("employees")
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}
