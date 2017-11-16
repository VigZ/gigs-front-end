import React from 'react'
import { connect } from 'react-redux'
import {Card, Image} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Ensemble = (props) => {
  let userData
  if(props.ensembleData.users){
    userData = props.ensembleData.users.map((user) => <li> {user.username} </li>)
  }
  return (
    <Card>
      <Image src='https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/toeondafnum4pw5kzjqj.jpg'/>
      <Card.Content>
        <Card.Header>
          <NavLink to={`/ensembles/${props.ensembleData.name}`}>{props.ensembleData.name}</NavLink>
          </Card.Header>
          <Card.Description>
            <h1>Members:</h1><ul>
                {userData}
              </ul>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Ensemble
