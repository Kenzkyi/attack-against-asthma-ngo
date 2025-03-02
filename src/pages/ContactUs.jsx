import React, { useState } from 'react'
import '../style/ContactUs.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Success from '../components/Success'
import map from "../assets/public/map.png"
import toast, { Toaster } from 'react-hot-toast'

const ContactUs = () => {
  const [all,setAll] = useState({
    type1:'',
    type2:'',
    type3:'',
    type4:'',
    type5:''
  })
  const [isSuccess,setIsSuccess] = useState(false)
  // console.log(all)

  const funcSuccess = () =>{
    if(all.type1 && all.type2 && all.type3 && all.type4 && all.type5){
      setIsSuccess(true)
    }else{
      toast.error('All Field Required')
    }
  }

  return (
<>
    <Toaster/>
<div className='contact-us'>
      <div className="contact-us-wrapper">
        <div className="contactus-left">
            <h6>Contact Us</h6>
            <h5>We do love to hear from you</h5>
            <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
            <nav>
              <a><FaYoutube fontSize={35} cursor={'pointer'}/></a>
              <a><FaTwitter fontSize={35} cursor={'pointer'}/></a>
              <a><FaFacebook fontSize={35} cursor={'pointer'}/></a>
              <a><FaInstagram fontSize={35} cursor={'pointer'}/></a>
            </nav>
        </div>
        <a href='https://maps.app.goo.gl/r7X7p9zsf5Vq1y6f9' className="contactus-right">
            <img src={map} />
        </a>
      </div>
      <div className="contactus-input">
        <div className="contactusinput-holder">
          <nav>
            <main>
              <header>
                <div>
                <label htmlFor="">Your Full Name</label>
                <input type="text" placeholder='Type here'
                name='type1'
                value={all.type1}
                onChange={(e)=>setAll({...all,type1:e.target.value})}
                />
                </div>
                <div>
                <label htmlFor="">Your Email Address</label>
                <input type="text" placeholder='Type here'
                name='type2'
                value={all.type2}
                onChange={(e)=>setAll({...all,type2:e.target.value})}
                />
                </div>
              </header>
              <header>
                <div>
                <label htmlFor="">Your Phone Number</label>
                <input type="text" placeholder='Type here'
                name='type3'
                value={all.type3}
                onChange={(e)=>setAll({...all,type3:e.target.value})}
                />
                </div>
                <div>
                <label htmlFor="">Message Subject</label>
                <input type="text" placeholder='Type here'
                name='type4'
                value={all.type4}
                onChange={(e)=>setAll({...all,type4:e.target.value})}
                />
                </div>
              </header>
            </main>
            <aside>
              <label htmlFor="">Message Subject</label>
              <textarea placeholder='Type here'
              name='type5'
              value={all.type5}
              onChange={(e)=>setAll({...all,type5:e.target.value})}
              ></textarea>
            </aside>
            <button onClick={funcSuccess}>Submit</button>
          </nav>
        </div>
      </div>
    </div>
    {isSuccess && <Success/>}
</>
  )
}

export default ContactUs
