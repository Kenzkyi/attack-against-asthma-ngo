
import React, { useEffect, useState } from 'react'
import "../style/Donate.css"
import SelectAmount from '../components/SelectAmount'
import PersonalInfo from '../components/PersonalInfo'
import ChoosePayment from '../components/ChoosePayment'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill, RiCheckboxCircleLine } from 'react-icons/ri'
import donate1 from '../assets/public/donate-second-pic.png'
const Donate = () => {
  // const [Amount, SetAmount] = useState()
  const [page, setpage] = useState("Personal information")
  const [pageNum, setpageNum] = useState(0)

  const checked = [
    { id: 1, name: "Personal information", isChecked: pageNum > 0 ? <RiCheckboxCircleFill className='Iconstyle' /> : <RiCheckboxBlankCircleLine className='Iconstyle' /> },
    { id: 2, name: "Select Amount", isChecked: pageNum > 1 ? <RiCheckboxCircleFill  className='Iconstyle'/> : <RiCheckboxBlankCircleLine  className='Iconstyle'/> },
    { id: 3, name: "Choose payment", isChecked: pageNum > 2 ? <RiCheckboxCircleFill  className='Iconstyle'/> : <RiCheckboxBlankCircleLine className='Iconstyle' /> },
  ]
  useEffect(() => {
    if (page == "Personal information") {
      setpageNum(0)
    } else if (page == "Select Amount") {
      setpageNum(1)
    } else if (page == "Choose payment") {
      setpageNum(2)
    } else if (page == "submit") {
      setpageNum(3)
    }
  }, [page])
  //  const [Amount,SetAmount]=useState()
  return (
    <div>
      <div className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="donate-label">Donate to a Student</span>
          <h1 className="hero-title">"Only By Helping Each Other Can We Make The World A Better Place"</h1>
          <p className="hero-quote">
            "Donating is not just about giving; it's about creating a ripple of kindness that touches lives and inspires
            others to do the same."
          </p>
        </div>
      </div>
      <div className='SelectAmount'>
        <div className='RightDiv'>
          <div className='ImgDiv'>
            <img className='Img' src={donate1} />
          </div>
        </div>
        <div className='leftside2'>
          <div className='Wrapper2'>
            <div className='Header2'>
              <h1 className='TextDiv2'>{page}</h1>
              <div className='CircleDiv2'>
                {
                  checked.map((item) => (
                    <p key={item.id} className='Circle'>{item.isChecked}</p>
                  ))
                }
                {/* // <p className='Circle'><RiCheckboxCircleLine /></p>
                // <p className='Circle'><RiCheckboxCircleLine /></p>
                // <p className='Circle'><RiCheckboxCircleLine /></p> */}
              </div>
            </div>
            {
              page == "Personal information" ?
                <PersonalInfo setpage={setpage} />
                : page == "Select Amount" ?
                  <SelectAmount setpage={setpage} />
                  : page == "Choose payment" || "submit" ?
                    <ChoosePayment setpage={setpage} />
                    : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
