<<<<<<< HEAD
import Header from '../components/Header'
import Footer from '../components/Footer'
=======
import React from 'react'
>>>>>>> 33554b8ba99b183bdb833139adbe84207593b0ab
import '../style/ContactUs.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons'

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className="contact-us-wrapper">
        <div className="contactus-left">
            <h6>Contact Us</h6>
            <h5>Wed love to hear from you</h5>
            <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
            <nav>
              <a><FaYoutube fontSize={35} cursor={'pointer'}/></a>
              <a><FaTwitter fontSize={35} cursor={'pointer'}/></a>
              <a><FaFacebook fontSize={35} cursor={'pointer'}/></a>
              <a><FaInstagram fontSize={35} cursor={'pointer'}/></a>
            </nav>
        </div>
        <a href='https://maps.app.goo.gl/r7X7p9zsf5Vq1y6f9' className="contactus-right">
            <img src="/src/assets/map.png" />
        </a>
      </div>
    </div>
  )
}

export default ContactUs
