import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonToggle = () => {
    setIsOpen(!isOpen);
  };

  // ✅ Automatically close menu when a link is clicked
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <header>
        <div className="grid nav-grid">
      <div>
     <h1> Portfolio</h1>
      </div>
      <nav  className={isOpen ? "menu-mobile" : "menu-web"}> 
        <ul>
          <li>
          <a href="#Home" className="nav_items">
            Home
          </a>
          </li>
          <li><a href="#Education" className="nav_items">
            Education
          </a>
          </li>
          <li>
            <a href="#Skills" className="nav_items">
            Skills
          </a>
          </li>
          <li> <a href="#Projects" className="nav_items">
            Projects
          </a>
          </li>
          <li>
          <a href="#Contact" className="nav_items">
            Contact
          </a>
          </li>
        </ul>
      </nav>
      <div className="menu">
      <button   className="hamburger" onClick={handleButtonToggle}>
            {isOpen ? <FaTimes /> : <RxHamburgerMenu />}
          </button>
     </div>
      </div>
    </header>
    
  )
}

export default Navbar;