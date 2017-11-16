import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom"
import { setSearchTerm } from '../actions/search'
import {Grid, Button, Checkbox, Form, Radio} from 'semantic-ui-react'





class AdvancedEnsembleSearch extends React.Component {
  state = {
    searchTerm:"",
    searchFor:"ensemble",
    instruments: [],
    options: {
      members: "any"
    }
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

  handleRadioChange = (event) => {
    this.setState({
      options: {...this.state.options, members:event.target.value}
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
          Only find ensembles that have:
          <Form.Field>
            any
            <input type="radio" name="members" value="any" onChange={this.handleRadioChange} checked={this.state.options.members === 'any'} ></input>
          </Form.Field>
          <Form.Field>
            1-3 members
            <input type="radio" name="members" value="1-3" onChange={this.handleRadioChange} checked={this.state.options.members === '1-3'} ></input>
          </Form.Field>
          <Form.Field>
            4-6 members
            <input type="radio" name="members" value="4-6" onChange={this.handleRadioChange} checked={this.state.options.members=== '4-6'} ></input>
          </Form.Field>
          <Form.Field>
            7+ members
            <input type="radio" name="members" value="7+" onChange={this.handleRadioChange} checked={this.state.options.members === '7+'} ></input>
          </Form.Field>

        <h1>Only find ensembles with users that play:</h1>
        {instruments}
        <button type="submit">Search</button>
      </Form>
        )
      }
}

export default withRouter(connect(null,{ setSearchTerm })(AdvancedEnsembleSearch))
