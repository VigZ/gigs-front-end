import React from 'react'
import { connect } from 'react-redux'
import { getEnsembleProfileInfo } from '../actions/ensemble'
import EnsembleProfile from './EnsembleProfile'

class EnsembleProfileContainer extends React.Component {

  componentDidMount = () => {
      this.props.getEnsembleProfileInfo(this.props.match.params.name)
  }

  render(){
    return(
      <div>
      <EnsembleProfile currentlyViewingData={this.props.currentlyViewingData}/>
      </div>

    )

  }
}

const mapStateToProps = (state) => ({ currentlyViewingData: state.ensemblesReducer.currentlyViewingData})

export default connect(mapStateToProps,{getEnsembleProfileInfo})(EnsembleProfileContainer)
