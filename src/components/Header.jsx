import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import pix from "../assets/public/logo1.png"

const Header = () => {
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
          <select name="Apply As" id="" className="dropwrap">
            <option value="" className="dropdowntext" onClick={handleASthmatic}>Asthmatic student</option>
            <option value=""  className="dropdowntext" onClick={ handleVolunteer}>Volunteer</option>
          </select>
        
        <button className="buttonwrap" onClick={handleDonate}>Donate</button>
      </div>
    </div>
  );
};

export default Header;
