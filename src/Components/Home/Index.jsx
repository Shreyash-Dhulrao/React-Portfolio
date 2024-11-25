import React, { useState } from 'react'
import Intro from './intro'
import Main from './Main'

const index = () => {
    const [time, settime] = useState(false)
    setTimeout(() => {
        settime(true)
    }, 4500);
  return (
    <div>
      <div>
        {time ? 
          <Main />
        : <Intro />}
      </div>
    </div>
  )
}

export default index
