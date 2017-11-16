import React from 'react'
import { connect } from 'react-redux'
import { fetchData, setSearchTerm } from '../actions/search'
import User from './User.js'
import Instrument from './Instrument'
import Ensemble from './Ensemble'


class SearchResult extends React.Component {

  componentDidMount = () => {
    this.props.fetchData(this.props.searchTerm, this.props.searchFor, this.props.options)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.searchFor !== this.props.searchFor || prevProps.searchTerm !== this.props.searchTerm || prevProps.options !== this.props.options){
    this.props.fetchData(this.props.searchTerm, this.props.searchFor, this.props.options)
    }
  }
  render(){
    let data
    if(this.props.searchFor === "user"){
      data = this.props.data.users.map((user) => <User userData={user}/>)
      }
    else if(this.props.searchFor === "instrument"){
      data = this.props.data.instruments.map((instrument) => <Instrument instrumentData={instrument}/>)
    }
    else if(this.props.searchFor === "ensemble"){
      data = this.props.data.ensembles.map((ensemble) => <Ensemble ensembleData={ensemble}/>)
    }
    return (
    <div>
    {data}
    </div>
    )
    }
}

const mapStateToProps = (state) => ({ data: {users:state.usersReducer.users, instruments:state.instrumentsReducer.instruments, ensembles: state.ensemblesReducer.ensembles} , searchTerm: state.searchReducer.searchTerm, searchFor: state.searchReducer.searchFor, options:state.searchReducer.options})
export default connect(mapStateToProps, { fetchData, setSearchTerm })(SearchResult)
