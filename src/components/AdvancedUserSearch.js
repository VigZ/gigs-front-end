import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom"
import { setSearchTerm } from '../actions/search'
import {Grid, Button, Checkbox, Form, Radio} from 'semantic-ui-react'





class AdvancedUserSearch extends React.Component {
  state = {
    searchTerm:"",
    searchFor:"user",
    instruments: [],
    options: {}
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/api/v1/instruments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
    .then(response => response.json())
    .then(instrumentData =>{
      this.setState({
        instruments: instrumentData
      })
  })
}

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleOptions = (event) => {
    const key = event.target.name
    if(!this.state.options.key){
    this.setState({
      options: {...this.state.options, [key]:event.target.value}
    })
    }
    else
    this.setState({
      options: {...this.state.options, [key]:false}
    })
  }

  convertOptions = () => {
    const optionsArray = []
    const options = this.state.options
    for(let key in options){
      optionsArray.push(`${key}=${options[key]}`)
    }
    return "?" + optionsArray.join("?")

  }
  toggleCheckbox = (name, event) => {
    this.setState({
      options: {...this.state.options, [name]:!this.state.options[name]}
    })
 }

  handleSubmit = (event) => {
    event.preventDefault()
    const options = this.convertOptions()
    if(Object.keys(this.state.options).length !== 0){
    this.props.setSearchTerm(this.state.searchTerm, this.state.searchFor, options)
    this.props.history.push(`/search?search=${this.state.searchTerm}?target=user${options}`)
    }
    else{
      this.props.setSearchTerm(this.state.searchTerm, this.state.searchFor)
      this.props.history.push(`/search?search=${this.state.searchTerm}?target=${this.state.searchFor}`)
    }
    this.setState({
      searchTerm: ""
    })
  }

  render() {
    let instruments
      if(this.state.instruments.length !== 0){
        instruments = this.state.instruments.map((instrument) =>{
        return <Form.Field>{instrument.name}<input type="checkbox" name={instrument.name} value={this.state.options[instrument.name]} onChange={() => this.toggleCheckbox(instrument.name)}></input></Form.Field>
      })}
      else{
        instruments = []
      }

     return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
        </Form.Field>
        <Form.Field>
          Only find users who are looking for a group.
        <input type="checkbox" name="lfg" value={this.state.options.lfg} checked={this.state.options.lfg} onChange={() => this.toggleCheckbox("lfg")}></input>
        </Form.Field>
        <Form.Field>
        Only find users that play:
        {instruments}
        </Form.Field>
        <button type="submit">Search</button>
      </Form>
        )
      }
}

export default withRouter(connect(null,{ setSearchTerm })(AdvancedUserSearch))
