import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import pix from "../assets/logo1.png"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHome=()=>{
    navigate("/")
  }

  const handleBlog=()=>{
    navigate("/blog")
  }

  const handleContact=()=>{
    navigate("/contact-us")
  }

  // const handleAbout=()=>{
  //   navigate("/about-us")
  // }


  const handleDonate=()=>{
    navigate("/donate")
  }

  const handleVolunteer=()=>{
    navigate("/volunteer")
  }

  const handleASthmatic=()=>{
    navigate("/asthmatic-student")
  }


  return (
    <div className="header">
      <div className="headerwarp">
        <img src={pix} alt= "" />
      </div>
      <div className="headerwarp1">
        <h1 onClick={handleHome}>Home</h1>
        <h1>About</h1>
        <h1 onClick={handleBlog}>Blog</h1>
        <h1 onClick={handleContact}>Contact-us</h1>
      </div>
      <div className="headerwarp2">

      <div className="dropdown">
          <h1 className="dropdown-header">
            Apply As
            <span onClick={() => setIsOpen(!isOpen)} className="icon">
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </h1>

         
          {isOpen && ( 
            <div className="dropdown-menu">
              <ul style={{width: '160%'}}>
                <li onClick={handleASthmatic}>Asthmatic student</li>
                <li onClick={handleVolunteer}>Volunteer</li>
              </ul>
            </div>
          )}
        </div>
          {/* <select name="Apply As" id="" className="dropwrap">
            <option value="" className="dropdowntext" onClick={handleASthmatic}>Asthmatic student</option>
            <option value=""  className="dropdowntext" onClick={ handleVolunteer}>Volunteer</option>
          </select> */}
        
        <button className="buttonwrap" onClick={handleDonate}>Donate</button>
      </div>
    </div>
  );
};

export default Header;
