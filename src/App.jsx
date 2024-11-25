import React, {useState} from 'react'
import Intro from './Components/Home/intro'
import Main from './Components/Home/Main'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Routes , Route } from 'react-router-dom'

const App = () => {
  const [time, settime] = useState(false)
    setTimeout(() => {
        settime(true)
    }, 4500);
  return (
    <div>
      <Routes>
      {time ? 
          <Route path="/" element={<Main />}/>
        : <Route path="/" element={<Intro />}/>
        }
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      
    </div>
  )
}

export default App
