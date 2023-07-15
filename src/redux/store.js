import { configureStore } from "@reduxjs/toolkit"

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = configureStore({
  reduxDevtools,
})

export default store
