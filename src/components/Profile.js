import React from 'react'
import { connect } from 'react-redux'
import {Grid, Image, Checkbox, Button} from 'semantic-ui-react'

class Profile extends React.Component {
        state = {
          lfg: this.props.currentlyViewingData.lfg,
          owner: (this.props.currentlyViewingData.username === this.props.username? true : false),
          followed: (this.props.currentlyViewingData.followers) && (this.props.currentlyViewingData.followers.find((follower) =>{
            return ((follower.follower_id) === this.props.id)
          }))? true : false
        }

        componentDidMount = () =>{
          this.setState({
            followed: (this.props.currentlyViewingData.followers) && (this.props.currentlyViewingData.followers.find((follower) =>{
              return ((follower.follower_id) === this.props.id)
            }))? true : false
          })
        }
      componentWillReceiveProps = (prevProps,nextProps) => {
        this.setState({
          followed: (this.props.currentlyViewingData.followers) && (this.props.currentlyViewingData.followers.find((follower) =>{
            return ((follower.follower_id) === this.props.id)
          }))? true : false
        })
      }
      handleChange = () =>{
        console.log(this.state.lfg)
        this.props.editUser(this.props.username, (this.state.lfg))
        this.setState({
          lfg: !this.state.lfg
        })
      }
      handleFollow = () => {
        this.props.becomeFan(this.props.currentlyViewingData.username, this.props.id)
      }
      render(){
        console.log(this.props.currentlyViewingData)
        console.log(this.state.followed)
        let instrumentData, ensembleData, followerCount, messageData
          if(this.props.currentlyViewingData.instruments){
            instrumentData = this.props.currentlyViewingData.instruments.map((instrument) => instrument.name)
            }

            if(this.props.currentlyViewingData.ensembles){
              ensembleData = this.props.currentlyViewingData.ensembles.map((ensemble) => ensemble.name)
            }
            if(this.props.currentlyViewingData.receivers){
              messageData = this.props.currentlyViewingData.receivers.map((message) => message.id)
            }
          if(this.props.currentlyViewingData.followers){
            followerCount = this.props.currentlyViewingData.followers.length
          }
            if(this.state.owner){
              return (
                  <div className='profile-container'>
                      <Image src='https://vignette.wikia.nocookie.net/dragonball/images/6/61/KingKaiNV.png/revision/latest/scale-to-width-down/350?cb=20100502151704' />
                      LFG <Checkbox toggle checked={this.state.lfg ? true : false} onChange={this.handleChange}/>
                      Fans:{followerCount}
                      <h2>Username:</h2> {this.props.currentlyViewingData.username}
                      <h2>Instruments:</h2> {instrumentData}
                      <h2>Ensembles:</h2> {ensembleData}
                      <h2>Comments:</h2> {messageData}
                  </div>
              )
            }
          else {return (
            <Grid celled>
               <Grid.Row>
                <Grid.Column width={3}>
                  <Image src='https://vignette.wikia.nocookie.net/dragonball/images/6/61/KingKaiNV.png/revision/latest/scale-to-width-down/350?cb=20100502151704' />
                  LFG {this.props.currentlyViewingData['LFG'] ? "True" : "False"}
                  {this.state.followed?this.state.followed.toString():null}
                  Fans:{followerCount}
                  {this.state.followed? null : <Button onClick={this.handleFollow}/>}
                  </Grid.Column>
                    <Grid.Column width={13}>
                  <h2>Username:</h2> {this.props.currentlyViewingData.username}
                  <h2>Instruments:</h2> {instrumentData}
                  <h2>Ensembles:</h2> {ensembleData}
                </Grid.Column>
              </Grid.Row>
          </Grid>
        )
      }
  }
}

export default Profile
