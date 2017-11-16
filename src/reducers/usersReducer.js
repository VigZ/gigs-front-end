export default function usersReducer(state = { username: null, users: [], currentlyViewingData: {} }, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      localStorage.setItem('jwt', action.payload.jwt)
      return {...state, username: action.payload.username, id: action.payload.id}
    case "LIST_USERS_DATA":
      return {...state, users: action.payload}
    case "SET_CURRENTLY_VIEWING":
      return {...state, currentlyViewingData: action.payload}
    case "LOG_OUT_USER":
    return {...state, username: null}
    default:
      return state
  }
}
