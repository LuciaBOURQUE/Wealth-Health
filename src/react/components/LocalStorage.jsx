export const localStorageEmployee = () => {
  const data = localStorage.getItem("employees")
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}
