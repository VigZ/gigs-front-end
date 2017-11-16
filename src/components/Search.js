import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom"
import { setSearchTerm } from '../actions/search'
import {Grid, Button, Checkbox, Form, Radio} from 'semantic-ui-react'





class Search extends React.Component {
  state = {
    searchTerm:"",
    searchFor:"user"
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleRadioChange = (event) => {
    this.setState({
      searchFor: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.setSearchTerm(this.state.searchTerm, this.state.searchFor)
    this.props.history.push(`/search?search=${this.state.searchTerm}?target=${this.state.searchFor}`)
    this.setState({
      searchTerm: ""
    })
  }

  setPlaceholder = () =>{
    switch(this.state.searchFor) {
    case "user":
        return "Search all performers by username..."
    case "instrument":
        return "Search all performers by instrument..."
    case "ensemble":
        return "Search all performers by ensemble..."
}
  }

  render() {

     return(
       <Grid>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <input  style={{display : 'inline-block'}} type="text" className="myInput"
value={this.state.searchTerm} onChange={this.handleChange} placeholder={this.setPlaceholder()}></input>
              </Form.Field>
              <Form.Field inline={true}>
                <Grid centered columns={3}>
                  <input type="radio" name="searchFor" value="user" onChange={this.handleRadioChange} checked={this.state.searchFor === 'user'} ></input>
                  <label>Performers</label>
                  <input type="radio" name="searchFor" value="instrument" onChange={this.handleRadioChange} checked={this.state.searchFor === 'instrument'}></input>
                  <label>Instruments</label>
                  <input type="radio" name="searchFor" value="ensemble" onChange={this.handleRadioChange} checked={this.state.searchFor === 'ensemble'}></input>
                  <label>Ensembles</label>
                </Grid>
              </Form.Field>
            </Form>
       </Grid.Column>
      </Grid>
        )
      }
}

export default withRouter(connect(null,{ setSearchTerm })(Search))
