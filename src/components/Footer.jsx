import React from "react";
import "../style/Footer.css"
import picture from "../assets/public/logo1.png"
import pix1 from "../assets/public/youtube1.png"
import pix2 from "../assets/public/twitter1.png"
import pix3 from "../assets/public/instagram1.png"
import pix4 from "../assets/public/facebook1.png"
import { useNavigate } from "react-router-dom";





function Footer(){

    const navigate = useNavigate();

    const handleHome=()=>{
      navigate("/")
    }
  
    // const handleAbout=()=>{
    //   navigate("/about-us")
    // }
  
    const handleBlog=()=>{
      navigate("/blog")
    }
  
    const handleContact=()=>{
      navigate("/contact-us")
    }
  
   
  
  
  
    return(
        <div className="fullwrap">
            <div className="footernotifications">
               
                    <img src={picture} alt="" className="homeicon" />
               
                
                <div className="writeupcont">
                <div className="">
                    <h2 className="wrapname">Quick links</h2>
                    <h3 className="word" onClick={handleHome} >Home</h3>
                    <h3 className="word">About Us</h3>
                    <h3 className="word"onClick={handleContact}>Contact Us</h3>
                    <h3 className="word" onClick={handleBlog}>Blog</h3>
                </div>

                <div>
                    <h2 className="wrapname">Quick links</h2>
                    <p className="word1">Donate</p>
                    <p className="word1">Apply now</p>
                    <p className="word1">Events</p>
                    <p className="word1">Projects</p>
                </div>

                <div>
                    <h2 className="wrapname">Contact info</h2>
                    <p className="word1">+238121530907</p>
                    <p className="word1"> attackagainstasthma@gmail.com</p>
                    <p className="word1">Privacy policy</p>
                </div>

                <div>
                    <h1 className="name1">Subscribe to get our latest updates</h1>

                    <div className="inputwrap">
                   <input type="text" placeholder="enter your email address" style={{width: "100%", height: "50px", 
                    borderRadius: "10px", backgroundColor: "black", color: "white"
                   }}/>
                   <button className="btn">Subscribe</button>
                   </div>
                </div>
                </div>

            </div>

            
            <div className="socialmediawrap">
                <h3>Copyright 2025 attackagainstasthma</h3>

                <div className="iconwrap">
                    <img src={pix1} alt="" className="mediaicon"/>
                    <img src={pix2} alt="" className="mediaicon"/>
                    <img src={pix3} alt="" className="mediaicon"/>
                    <img src={pix4} alt="" className="mediaicon"/>

                </div>

            </div>

            

        </div>


    )
}

export default Footer
