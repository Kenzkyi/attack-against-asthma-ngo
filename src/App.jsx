import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import AsthmaticStudent from './pages/AsthmaticStudent'
import Volunteer from './pages/Volunteer'
import Donate from './pages/Donate'
import MainHolder from './components/MainHolder'
import ChoosePayment from './components/ChoosePayment'
import PersonalInfo from './components/PersonalInfo'
import SelectAmount from './components/SelectAmount'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (


    <HashRouter>
      <Header />
      <Routes>
        <Route element={<Donate />}>
          {/* <Route element={<PersonalInfo/>}> */}
          {/* <Route element={<SelectAmount/>}> */}
          {/* <Route element={<ChoosePayment/>}> */}
          <Route path='' element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='asthmatic-student' element={<AsthmaticStudent />} />
          <Route path='volunteer' element={<Volunteer />} />
          <Route path='donate' element={<Donate />} />
        </Route>
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
