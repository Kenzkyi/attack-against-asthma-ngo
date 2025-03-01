import React, { useState } from 'react';
import { FaCreditCard, FaUniversity } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import "../style/ChoosePayment.css"

const ChoosePayment = ({setpage}) => {
    const [selectedMethod, setSelectedMethod] = useState('card');
  return (
    <>
    
        <div className="payment-form">
          <h1>Choose a payment Method</h1>
          
          {/* <div className="progress-indicators">
            <div className="indicator"></div>
            <div className="indicator-line"></div>
            <div className="indicator"></div>
            <div className="indicator-line"></div>
            <div className="indicator"></div>
          </div> */}
          
          <div className="payment-methods">
            <div 
              className={`payment-method ${selectedMethod === 'card' ? 'selected' : ''}`}
              onClick={() => setSelectedMethod('card')}
            >
   <FaCreditCard className="method-icon" />
              <p>Card</p>
            </div>
            
            <div 
              className={`payment-method ${selectedMethod === 'bank' ? 'selected' : ''}`}
              onClick={() => setSelectedMethod('bank')}
            >
              <FaUniversity className="method-icon" />
              <p>Bank</p>
            </div>
            
            <div 
              className={`payment-method ${selectedMethod === 'google' ? 'selected' : ''}`}
              onClick={() => setSelectedMethod('google')}
            >
              <FcGoogle className="method-icon" />
              <p>Google Pay</p>
            </div>
          </div>
          
          <div className="card-form">
            <div className="form-group">
              <label>Card Number</label>
              <div className="card-number-input">
                <input type="text" placeholder="Type here" />
                <img src="/src/assets/master.jpg"className='card-logo' />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label>Expiry</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              
              <div className="form-group half">
                <label>CVV</label>
                <input type="text" placeholder="Type here" />
              </div>
            </div>
            
            <button className="donate-button" onClick={()=> setpage("Success")}>Donate</button>
          </div>
        </div>
  </>
  )
}

export default ChoosePayment
