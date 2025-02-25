import React from 'react'
import "../style/PersonalInfo.css"

const PersonalInfo = () => {
  return (
    <div className='PersonalBody'>
     <div className='RightDiv'>
     <div className='ImgDiv'>
    <img className='Img' src='src/assets/donate-second-pic.png'/>
     </div>
     </div>
     <div className='LeftDiv'>
      <div className='Wrapper'>
      <div className='Header'>
     <h1 className='TextDiv'> Personal Information</h1>
     <div className='CircleDiv'>
        <p className='Circle'></p>
        <p className='Circle'></p>
        <p className='Circle'></p>
     </div>
      </div>
      <div className='Body'>
     <div className='InputDiv'>Your full Name
        <input className='InputStyle' type="Text" placeholder='Type here' />
     </div>
     <div className='InputDiv'>Your Phone Number
        <input className='InputStyle' type="Text" placeholder='Type here' />
     </div>
     <div className='InputDiv'>Address
        <input className='InputStyle' type="Text" placeholder='Type here' />
     </div>
     <div className='InputDiv'>Additional Tnformation
        <input className='InputStyle' type="Text" placeholder='Type here' />
     </div>
    <div className='ButtonDiv'>
    <div className='Button'>Next</div>
    </div>
   

      </div>

      </div>
     </div>

    </div>
  )
}

export default PersonalInfo