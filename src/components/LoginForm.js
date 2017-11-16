import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'
import {Form} from 'semantic-ui-react'

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.username, this.state.password)
    this.props.history.push(`/users/${this.state.username}`)
  }

  render() {
    return(
      <Form onSubmit={this.handleLoginSubmit}>
        <Form.Field>
          Username:
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
      </Form.Field>
        <Form.Field>
          Password:
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
      </Form.Field>
      <button type='submit'>Submit</button>
      </Form>
    )
  }
}

export default connect(null, { loginUser })(LoginForm)
