import React from 'react'
import { connect } from 'react-redux'
import {Card, Image} from 'semantic-ui-react'

const Instrument = (props) => {
  const userData = props.instrumentData.users.map((user) => <li> {user.username} </li>)
  console.log(userData)
  return (
    <Card>
      <Image src='https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png'/>
      <Card.Content>
        <Card.Header>
          {props.instrumentData.name}
          </Card.Header>
          <Card.Description>
            <h1>Instrument:</h1> {props.instrumentData.name}
          Users that play this instrument: <ul>{userData}</ul>
          Family this instrument belongs to: {props.instrumentData.family.name}
        </Card.Description>
      </Card.Content>
    </Card>

  )
}

export default Instrument
