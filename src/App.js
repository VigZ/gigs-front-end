import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'
import ProfileContainer from './components/ProfileContainer'
import EnsembleProfileContainer from './components/EnsembleProfileContainer'
import LoginForm from './components/LoginForm'
import CreateForm from './components/CreateForm'
import UserList from './components/UserList'
import Search from './components/Search'
import SearchResult from './components/SearchResult'
import Navbar from './components/Navbar'
import MyButton from './components/MyButton'
import Splash from './components/Splash'
import { connect } from 'react-redux'
import AdvancedUserSearch from './components/AdvancedUserSearch'
import AdvancedEnsembleSearch from './components/AdvancedEnsembleSearch'
import {verifyUser} from './actions/user'
import {Grid} from 'semantic-ui-react'


const App = (props) => {
  if(localStorage.getItem("jwt") && !props.username){
    props.verifyUser()
  }
  return (
    <div>
      <Navbar/>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/create" component={CreateForm} />
      <Route exact path="/users/:username" component={ProfileContainer} />
      <Route exact path="/ensembles/:name" component={EnsembleProfileContainer} />
      <Route path="/search" component={SearchResult} />
      <Route exact path="/" component={Splash} />

      <Route exact path="/advanced" component={AdvancedUserSearch}/>
      <Route exact path="/advanced" component={AdvancedEnsembleSearch}/>
    </div>
  )
}

const mapStateToProps = (state) => ({ username: state.usersReducer.username})
export default withRouter(connect(mapStateToProps, {verifyUser})(App))
