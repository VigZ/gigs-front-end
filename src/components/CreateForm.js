import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/user'

class CreateForm extends React.Component {
  state = {
    username: "",
    password: "",
    email:""
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleCreateSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state.username, this.state.password, this.state.email)
  }

  render() {
    return(
      <form onSubmit={this.handleCreateSubmit}>
        <label>
          Username:
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
        </label>
        <label>
          Password:
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        </label>
        <label>
            Email:
        <input type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
        </label>
        <button type="submit">Create an Account!</button>
      </form>
    )
  }
}



export default connect(null, { createUser })(CreateForm)
