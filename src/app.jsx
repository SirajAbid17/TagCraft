import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Videotag from './components/Videotag'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
   <Routes>
    <Route path='/' element={<Videotag/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes> 
   <Footer/>
    </>
  )
}
