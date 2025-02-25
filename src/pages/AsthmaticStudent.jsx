import React from 'react'
import "../style/AsthmaticStudent.css"
import arrow from "../assets/arrow.png"


const AsthmaticStudent = () => {
  return (
    <div className="bodyCon" >
      <div className='heroPart'>

        <div className='leftContainer'>
          <div className='arrowCon'>
            <img src={arrow} alt="" />
          </div>
          
        </div>
        <div className='rightContainer'></div>

      </div>
    </div>
  )
}

export default AsthmaticStudent
