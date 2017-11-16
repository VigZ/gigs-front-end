export function listEnsembles(ensembleData){
  return {
    type: "LIST_ENSEMBLE_DATA",
    payload: ensembleData
  }
}

export function getEnsembleProfileInfo(name){
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/ensembles/${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(ensembleData =>{
       dispatch(setEnsembleCurrentlyViewingData(ensembleData))
     })
  }
}

// export function joinEnsemble(username, ensembleName){
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/ensembles/${name}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({user: username, ensemble: ensembleName}
//     })
//     .then(response => response.json())
//     .then(ensembleData =>{
//        dispatch(setEnsembleCurrentlyViewingData(ensembleData))
//      })
//   }
// }

export function setEnsembleCurrentlyViewingData(ensembleData){
  return {
    type:"SET_ENSEMBLE_CURRENTLY_VIEWING",
    payload: ensembleData
  }
}
