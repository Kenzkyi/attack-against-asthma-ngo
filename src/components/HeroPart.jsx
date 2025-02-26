import React from 'react'
import "../style/herostyle.css"
import arrow from "../assets/arrow.png"

const HeroPart = () => {
    return (
        <div className='heroPart'>

            <div className='leftContainer'>
                <div className="leftContainerWrapper">
                    <div className='arrowCon'>
                        <img src={arrow} alt="" />
                    </div>
                    <div className="ourservice">
                        {/* <div className="line"></div> */}
                        <span>Our Services</span>
                    </div>
                    <div className="empower">
                        "Empower Your Future With Better Health"
                    </div>
                    <div className="applyNow">
                        Fight against asthma, secure yourselves a brighter future, and live the best as an impact to the world,
                        <span> Apply now</span>
                    </div>
                </div>
            </div>
            <div className='rightContainer'>

            </div>

        </div>
    )
}

export default HeroPart
