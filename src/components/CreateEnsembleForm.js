import React from 'react'
import { connect } from 'react-redux'
import { createEnsemble } from '../actions/ensemble'

class CreateEnsembleForm extends React.Component {
  state = {
    name: "",
    image: "",
    info: ""
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleImageChange = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handleInfoChange = (event) => {
    this.setState({
      info: event.target.value
    })
  }

  handleCreateSubmit = (event) => {
    event.preventDefault()
    this.props.createEnsemble(this.state.name, this.state.image, this.state.info)
  }

  render() {
    return(
      <form onSubmit={this.handleCreateSubmit}>
        <label>
          Ensemble Name:
        <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
        </label>
        <label>
          Image Url:
        <input type="password" value={this.state.image} onChange={this.handleImageChange}></input>
        </label>
        <label>
            Info:
        <input type="email" value={this.state.info} onChange={this.handleInfoChange}></input>
        </label>
        <button type="submit">Create an Ensemble!</button>
      </form>
    )
  }
}



export default connect(null, { createEnsemble })(CreateEnsembleForm)
