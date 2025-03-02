import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import pix from "../assets/public/logo1.png";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { CiMenuBurger } from "react-icons/ci";
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

  const handleHome = () => {
    navigate("/");
    setMenuVisible(false)
  };

  const handleBlog = () => {
    navigate("/blog");
    setMenuVisible(false)
  };

  const handleContact = () => {
    navigate("/contact-us");
    setMenuVisible(false)
  };

  const handleAbout = () => {
    navigate("/about-us");
    setMenuVisible(false)
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
            <li className="bugtext" nClick={handleHome}>
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
        <h1 onClick={handleHome}>Home</h1>
        <h1 onClick={handleAbout}>About</h1>
        <h1 onClick={handleBlog}>Blog</h1>
        <h1 onClick={handleContact}>Contact-us</h1>
      </div>
      <div className="headerwarp2">
        <div className="dropdown1">
          <h1 className="dropdown1-header">
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
        {/* <select name="Apply As" id="" className="dropwrap">
            <option value="" className="dropdowntext" onClick={handleASthmatic}>Asthmatic student</option>
            <option value=""  className="dropdowntext" onClick={ handleVolunteer}>Volunteer</option>
          </select> */}

        <button className="buttonwrap" onClick={handleDonate}>
          Donate
        </button>
      </div>
    </div>
  );
};

export default Header;
