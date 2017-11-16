import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {logOutUser} from '../actions/user'
import Search from './Search'

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    if(name === 'logOut'){
      localStorage.removeItem('jwt')
      this.setState({ activeItem: 'logIn' })
      this.props.logOutUser()
    }
    else{
    this.setState({ activeItem: name })
  }

  }
  render() {
    const { activeItem } = this.state
    const currentUser = this.props.username

    if(currentUser){
      return (
        <Menu style= {{backgroundColor: '#8e4fc9'}} inverted>
          <Menu.Item header >Ensembles</Menu.Item>
          <Menu.Item as={Link} to={`/users/${currentUser}`} name='myProfile' active={activeItem === 'myProfile'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to={'/login'} name='logOut' active={activeItem === 'logOut'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to={'/advanced'} name='advancedSearch' active={activeItem === 'advancedSearch'} onClick={this.handleItemClick} />
        </Menu>
      )
    }
    else{
      return (
        <Menu style= {{backgroundColor: '#8e4fc9'}} inverted>
          <Menu.Item header >Ensembles</Menu.Item>
          <Menu.Item as={Link} to={'/login'} name='logIn' active={activeItem === 'logIn'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to={'/create'} name='createAnAccount' active={activeItem === 'createAnAccount'} onClick={this.handleItemClick} />
        </Menu>
      )
    }



  }
}
const mapStateToProps = (state) => ({ username: state.usersReducer.username})
export default connect(mapStateToProps, {logOutUser})(Navbar)
