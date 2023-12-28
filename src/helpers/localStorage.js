const LOCAL_STORAGE_KEY = 'reduxState'

export const saveState = (state) => {
  const serializedState = JSON.stringify(state)
  localStorage.setItem(LOCAL_STORAGE_KEY, serializedState)
}

export const loadState = () => {
  const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (serializedState === null) {
    return undefined
  }
  return JSON.parse(serializedState)
}
