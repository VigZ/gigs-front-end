import {listUsers} from './user'
import {listInstruments} from './instrument'
import {listEnsembles} from './ensemble'


export function setSearchTerm(searchTerm, searchFor, options) {
  return {
    type: "SET_SEARCH_TERM",
    payload:{ searchTerm, searchFor, options }
  }
}

export function fetchData(search_term, search_for, options) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/search?search=${search_term}?target=${search_for}?options=${options}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
    .then(response => response.json())
    .then(searchData =>{
      if(search_for === "user"){
        dispatch(listUsers(searchData))}
      else if (search_for === "instrument"){
        dispatch(listInstruments(searchData))}
      else if (search_for === "ensemble"){
        dispatch(listEnsembles(searchData))}
          }
        )
      }
    }
