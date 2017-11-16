export default function searchReducer(state = { searchTerm: null,searchFor: null, options: null }, action) {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {...state, searchTerm: action.payload.searchTerm, searchFor: action.payload.searchFor, options: action.payload.options}
    default:
      return state
  }
}
