import React from 'react'
import { connect } from 'react-redux'

const EnsembleProfile = (props) => {

  let userData

      if(props.currentlyViewingData.users){
        userData = props.currentlyViewingData.users.map((user) => user.username)
      }
  return (
    <div>
      <p>Viewing Ensemble Profile</p>
    <h2>Name:</h2> {props.currentlyViewingData.name}
    <h2>Users:</h2> {userData}
  </div>
  )
}

export default EnsembleProfile
