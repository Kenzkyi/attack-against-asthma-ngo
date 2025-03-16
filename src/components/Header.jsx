import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import pix from "../assets/public/logo1.png";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { LuMessageSquareMore } from "react-icons/lu";
import { BiDonateBlood } from "react-icons/bi";
import { CiHospital1 } from "react-icons/ci";
import { MdBabyChangingStation } from "react-icons/md"
import { RiKakaoTalkFill } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  const [line,setLine] = useState({
    line1:true,
    line2:false,
    line3:false,
    line4:false

  })

  const handleHome = () => {
    navigate("/");
    setMenuVisible(false)
    setLine({line1:true})
  };

  const handleBlog = () => {
    navigate("/blog");
    setMenuVisible(false)
    setLine({line3:true})
  };

  const handleContact = () => {
    navigate("/contact-us");
    setMenuVisible(false)
    setLine({line4:true})
  };

  const handleAbout = () => {
    navigate("/about-us");
    setMenuVisible(false)
    setLine({line2:true})
  };

  const handleDonate = () => {
    navigate("/donate");
    
  };

  const handleVolunteer = () => {
    navigate("/volunteer");
    setIsOpen(false)
    setMenuVisible(false)
    
  };

  const handleASthmatic = () => {
    navigate("/asthmatic-student");
    setIsOpen(false)
    setMenuVisible(false)
  };



  return (
    <div className="header">
      
      <div className="bug1">
      <div className="icon" onClick={() => setMenuVisible(!menuVisible)}>
        <RxHamburgerMenu />
      </div>

      {menuVisible && (
        <div className="menubar1">
          <ul className="bugtextwrap">
            <li className="bugtext" onClick={handleHome}>
              <span><GoHome /></span> Home
            </li>
            <li className="bugtext" onClick={handleAbout}>
              <span><GrGroup /></span> About
            </li>
            <li className="bugtext" onClick={handleBlog}>
              <span><RiKakaoTalkFill /></span> Blog
            </li>
            <li className="bugtext"  onClick={handleContact}>
              <span><LuMessageSquareMore /></span> Contact-Us
            </li>
            <li className="bugtext" onClick={handleDonate}>
              <span><BiDonateBlood /></span> Donate
            </li>
            <li className="bugtext" onClick={handleASthmatic}>
              <span><CiHospital1 /></span> Asthmatic-student
            </li>
            <li className="bugtext"  onClick={handleVolunteer}>
              <span><MdBabyChangingStation /></span> Volunteer
            </li>
          </ul>
        </div>
      )}
      </div>
      <div className="headerwarp">
        <img src={pix} alt="" />
      </div>
      <div className="headerwarp1">
        <h1 onClick={handleHome}>Home
        <div style={{display:line.line1?'flex':'none'}} className="home-line1"></div>
        </h1>
        <h1 onClick={handleAbout}>About
        <div style={{display:line.line2?'flex':'none'}} className="home-line2"></div>
        </h1>
        <h1 onClick={handleBlog}>Blog
        <div style={{display:line.line3?'flex':'none'}} className="home-line3"></div>
        </h1>
        <h1 onClick={handleContact}>Contact-us
        <div style={{display:line.line4?'flex':'none'}} className="home-line4"></div>
        </h1>
      </div>
      <div className="headerwarp2">
        <div className="dropdown1">
          <h1 className="dropdown1-header" onClick={() => setIsOpen(!isOpen)}>
            Apply As
            <span onClick={() => setIsOpen(!isOpen)} className="icon">
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </h1>

          {isOpen && (
            <div className="dropdown1-menu">
              <ul style={{ width: "160%" }}>
                <li onClick={handleASthmatic}>Asthmatic student</li>
                <li onClick={handleVolunteer}>Volunteer</li>
              </ul>
            </div>
          )}
        </div>
        
        <button className="buttonwrap" onClick={handleDonate}>
          Donate
        </button>
      </div>
    </div>
  );
};

export default Header;
