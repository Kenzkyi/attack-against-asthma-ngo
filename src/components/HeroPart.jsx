import React, { useState } from 'react'
import "../style/herostyle.css"
import arrow from "../assets/public/arrow.png"

const HeroPart = ({settingHeroPart}) => {
    const [hero, setHero] = useState(settingHeroPart || "asthmaticsStudent")
    return (
        
        hero == "asthmaticsStudent" ?
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
        : hero == "volunteer" ?
        <>
        <div className='heroPart'>

            <div className='leftContainer'>
                <div className="leftWrapper">
                    <div className='arrowCon'>
                        <img src={arrow} alt="" />
                    </div>
                    <div className="ourservice">
                        {/* <div className="line"></div> */}
                        <span>Our Services</span>
                    </div>
                    <div className="empower">
                    Be a Volunteer
                    Today
                    </div>
                    <div className="applyNow">
                        <span>Volunteering</span> for an this vision is planting seeds of hope in the hearts of others, knowing the impact will grow far beyond what the eye can
                    </div>
                </div>
            </div>
            <div className='Container'>

            </div>
        
        </div>
        </>
        : null  
        )
}

export default HeroPart
