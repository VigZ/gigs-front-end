import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Search from './Search'


const Splash = (props) => {

  return (
    <div className='splash-container'>
      <div className='image-div'>
      <Image src='http://www.clker.com/cliparts/i/i/e/R/n/W/panda-clear-background-hi.png' height='500px' width='500px' />
      </div>
      <div className='image-div'>
      <Search/>
      </div>
    </div>
  )
}

export default Splash
