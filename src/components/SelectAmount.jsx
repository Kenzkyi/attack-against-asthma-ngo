import React from 'react'
import "../style/SelectAmount.css"

const SelectAmount = () => {
  return (
    <div className='SelectAmount'>
      <div className='RightDiv'>
     <div className='ImgDiv'>
    <img className='Img' src='src/assets/donate-second-pic.png'/>
     </div>
     </div>
   <div className='leftside2'>
  <div className='Wrapper2'>
  <div className='Header2'>
     <h1 className='TextDiv2'>Select an Amount</h1>
     <div className='CircleDiv2'>
        <p className='Circle'></p>
        <p className='Circle'></p>
        <p className='Circle'></p>
     </div>
     </div>
     <div className='Body2'>
  <div className='AmountDiv1'>
<p  className='Amount'>N10,000</p>
<p  className='Amount'>N20,000</p>
<p  className='Amount'>N30,000</p>
<p  className='Amount'>N40,000</p>

  </div>
  <div className='AmountDiv2'>
 <p  className='Amount'>N50,000</p>
<p  className='Amount'>N60,000</p>
<p  className='Amount'>N70,000</p>
<p  className='Amount'>N80,000</p>
  </div>
  <div className='InputDiv2'>
        <div className='InputDiv3'>Costum Amount</div>
        <input className='InputStyle2' type="Text" placeholder='1,000,000 max' />
     </div>
</div>
<div className='Body3'>
<div className='Button2'> Comfirm Amount</div>
</div>
  </div>
   </div>
    </div>
  )
}

export default SelectAmount