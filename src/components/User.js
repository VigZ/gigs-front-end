import React from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import Anime from 'react-anime'

const User = (props) => {
  const instrumentData = props.userData.instruments.map((instrument) => instrument.name)
  const ensembleData = props.userData.ensembles.map((ensemble) => ensemble.name)
    // function handleClick() {
    //   props.history.push(`http://localhost:3001/users/${props.userData.username}`)
    // }

  return (
    <Card>
      <Image src='https://vignette.wikia.nocookie.net/dragonball/images/6/61/KingKaiNV.png/revision/latest/scale-to-width-down/350?cb=20100502151704'/>
      <Card.Content>
        <Card.Header>


      <NavLink to={`/users/${props.userData.username}`}>{props.userData.username}</NavLink>
        </Card.Header>
        <Card.Description>
        Check out {props.userData.username}'s profile!
        Instruments: {instrumentData}
        Ensembles: {ensembleData}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='anchor' />
        {props.userData.followers.length} Fans
      </a>
    </Card.Content>
  </Card>
  )
}

export default User
