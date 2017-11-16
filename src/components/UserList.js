import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/search'
import User from './User.js'
import Search from './Search.js'

class UserList extends React.Component {

  handleClick = () => {
    this.props.fetchData()
  }
  render(){
    const users = this.props.users.map((user) => <User userData={user}/> )
    return (
    <div>
    {users}
    </div>
    )
    }
}
const mapStateToProps = (state) => ({ users: state.usersReducer.users })
export default connect(mapStateToProps, { fetchData })(UserList)
