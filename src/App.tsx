import { Stack } from '@mui/material'
import Hero from './Components/Home'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import GetInTouch from './Components/GetInTouch'

function App() {

  return (
    <>
      <Stack>
        <Navbar/>
        <Hero/>
        <Work/>
        <Skills/>
        <GetInTouch/>
        <Footer/>
      </Stack>
    </>
  )
}

export default App
