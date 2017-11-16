import React from 'react'
import { connect } from 'react-redux'
import { getUserProfileInfo, editUser, becomeFan } from '../actions/user'
import Profile from './Profile'

class ProfileContainer extends React.Component {

  componentDidMount = () => {
      this.props.getUserProfileInfo(this.props.match.params.username)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.currentlyViewingData.id !== this.props.currentlyViewingData.id ){
    this.props.getUserProfileInfo(this.props.match.params.username)
    }
  }
  render(){
    console.log("SUPPPPP", this.props.id)
    let followed

    const test = (follower) =>{
      return ((follower.follower_id) === this.props.id)
    }
    if(this.props.currentlyViewingData.followers){
      console.log(this.props.currentlyViewingData.followers.find(test))
    }

    return(
      <div>
      <Profile currentlyViewingData={this.props.currentlyViewingData} editUser={this.props.editUser} username={this.props.username} becomeFan={this.props.becomeFan} id={this.props.id}/>
      </div>

    )

  }
}

const mapStateToProps = (state) => ({ username: state.usersReducer.username, currentlyViewingData: state.usersReducer.currentlyViewingData, id: state.usersReducer.id })

export default connect(mapStateToProps,{getUserProfileInfo,editUser, becomeFan})(ProfileContainer)
