import React, { useState } from 'react'
import "../style/SelectAmount.css"

const SelectAmount = ({setpage}) => {
    const [Amount, SetAmount] = useState()

    return (
        <>
            <div className='Body2'>
                <div className='AmountDiv1'>
                    <p className='Amount' onClick={() => SetAmount("N10,000")}>N10,000</p>
                    <p className='Amount' onClick={() => SetAmount("N20,000")}>N20,000</p>
                    <p className='Amount' onClick={() => SetAmount("N30,000")}>N30,000</p>
                    <p className='Amount' onClick={() => SetAmount("N40,000")}>N40,000</p>

                </div>
                <div className='AmountDiv2'>
                    <p className='Amount' onClick={() => SetAmount("N50,000")}>N50,000</p>
                    <p className='Amount' onClick={() => SetAmount("N60,000")}>N60,000</p>
                    <p className='Amount' onClick={() => SetAmount("N70,000")}>N70,000</p>
                    <p className='Amount' onClick={() => SetAmount("N80,000")}>N80,000</p>
                </div>
                <div className='InputDiv2'>
                    <div className='InputDiv3'>Costum Amount</div>
                    <input className='InputStyle2' type="Text"
                        onChange={(e) => SetAmount(e.target.value)}
                        value={Amount}
                        placeholder='1,000,000 max' />
                </div>
            </div>
            <div className='Body3'>
                <div className='Button2' onClick={()=> setpage("Submit")}> Comfirm Amount</div>
            </div>
        </>
    )
}

export default SelectAmount