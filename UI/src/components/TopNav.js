import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import './TopNav.css';

const TopNav = ({ title, toggle, open, setShowlogoutPopup, currUsr, role }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="top-nav">
      <p className="nav-title">{title}</p>

      <ul className="nav-right">
        <li className="dropdown">
          <button type="button" className="dropdown-btn">
            <MdOutlineNotifications size={24} />
            <div className="notification-indicator"></div>
          </button>
        </li>

        <li className="user-dropdown">
          
            <div className="user-avatar">
              <div className="avatar-container">
                <img
                  className="avatar-img"
                  src="admin.png"
                  alt=""
                />
                <div className="status-indicator"></div>
              </div>
            </div>
            <div className="user-info">
              <h2 className="user-name">{currUsr}</h2>
              <p className="user-role">{role}</p>
            </div>
            <button
              type="button"
              className="user-dropdown-toggle"
              onClick={handleDropdownToggle}
            >
              <RiArrowDropDownLine size={30} />
            </button>
        </li>
      </ul>

      <DropdownMenu isDropdownOpen={isDropdownOpen} />
    </div>
  );
};

const DropdownMenu = ({ isDropdownOpen }) => {
  return (
    <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
      <li>
        <a href="#" className="dropdown-item">
          Profile
        </a>
      </li>
      <li>
        <a href="#" className="dropdown-item">
          Settings
        </a>
      </li>
      <li>
        <form method="POST" action="">
          <a
            role="menuitem"
            className="dropdown-item"
          >
            Log Out
          </a>
        </form>
      </li>
    </ul>
  );
};

export default TopNav;