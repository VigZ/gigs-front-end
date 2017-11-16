export function loginUser(username, password) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {username, password} })
    })
    .then(response => response.json())
    .then(userData =>{
       dispatch(setCurrentUser(userData))
     })
  }
}
export function createUser(username, password, email) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {username, password, email} })
    })
    .then(response => response.json())
    .then(userData =>{
       dispatch(setCurrentUser(userData))
     })
  }
}
export function becomeFan(followedUser, followerUser) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/fans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({fan: {followed: followedUser, follower_id: followerUser } })
    })
    .then(response => response.json())
    .then(userData =>{
       dispatch(setCurrentlyViewingData(userData))
     })
  }
}

export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}

export function editUser(username, update) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {username}, payload:update})
    })
  }
}

export function logOutUser(){
  return {
    type:"LOG_OUT_USER"
  }
}
export function verifyUser() {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':  `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response => response.json())
    .then(userData =>{
       dispatch(setCurrentUser(userData))
     })
  }
}
export function getUserProfileInfo(username){
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(userData =>{
       dispatch(setCurrentlyViewingData(userData))
     })
  }
}

export function setCurrentlyViewingData(userData){
  return {
    type:"SET_CURRENTLY_VIEWING",
    payload: userData
  }
}
export function listUsers(userData){
  return {
    type: "LIST_USERS_DATA",
    payload: userData
  }
}
