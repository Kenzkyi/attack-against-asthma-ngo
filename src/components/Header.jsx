import { useState } from "react";
import "../style/Header.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="headerwarp">
        <img src="src/assets/Logo.jpg" alt="Logo" />
      </div>
      <div className="headerwarp1">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Blog</h1>
        <h1>Contact-us</h1>
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
              <ul style={{width: '100%'}}>
                <li onClick={() => setIsOpen(false)}>Asthmatic student</li>
                <li onClick={() => setIsOpen(false)}>Volunteer</li>
              </ul>
            </div>
          )}
        </div>
        <button className="buttonwrap">Donate</button>
      </div>
    </div>
  );
};

export default Header;
