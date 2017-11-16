export default function ensemblesReducer(state = {isLoading: false, ensembles: [], currentlyViewingData: {} }, action) {
  switch (action.type) {
    case "FETCHING_ENSEMBLES":
      return {...state, isLoading:true}
    case "LIST_ENSEMBLE_DATA":
      return {...state, ensembles: action.payload}
    case "FETCHED_ENSEMBLES":
      return {...state, isLoading:false}
      case "SET_ENSEMBLE_CURRENTLY_VIEWING":
        return {...state, currentlyViewingData: action.payload}
    default:
      return state
  }
}
