export default function instrumentsReducer(state = {isLoading: false, instruments: [] }, action) {
  switch (action.type) {
    case "FETCHING_INSTRUMENTS":
      return {...state, isLoading:true}
    case "LIST_INSTRUMENT_DATA":
      console.log(action.payload)
      return {...state, instruments: action.payload}
    case "FETCHED_INSTRUMENTS":
      return {...state, isLoading:false}
    default:
      return state
  }
}
