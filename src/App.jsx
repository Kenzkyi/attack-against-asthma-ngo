import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import AsthmaticStudent from './pages/AsthmaticStudent'
import Volunteer from './pages/Volunteer'
import Donate from './pages/Donate'
import PersonalInfo from './components/PersonalInfo'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='about-us' element={<AboutUs/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
        <Route path='asthmatic-student' element={<AsthmaticStudent/>}/>
        <Route path='volunteer' element={<Volunteer/>}/>
        <Route path='donate' element={<Donate/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
