import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { MdContentPasteSearch } from "react-icons/md";
import { LuFolderEdit } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import './SideNav.css';

const SideNav = ({ open }) => {
  const SideNavLinks = [
    {
      id: 1,
      title: "Dashboard",
      img: <MdOutlineDashboard color="#ffffff" size={24} />,
      link: "/",
    },
    {
      id: 2,
      title: "Analytics",
      img: <MdBarChart color="#ffffff" size={24} />,
      link: "/analytics",
    },
    {
      id: 3,
      title: "Rate Request",
      img: <MdContentPasteSearch color="#ffffff" size={24} />,
      link: "/rate-request",
    },
    {
      id: 4,
      title: "Quote",
      img: <LuFolderEdit color="#ffffff" size={24} />,
      link: "/quote",
    },
    {
      id: 5,
      title: "Shipments",
      img: <LuPackage color="#ffffff" size={24} />,
      link: "/shipments",
    },
    {
      id: 6,
      title: "User List",
      img: <FaRegUserCircle color="#ffffff" size={24} />,
      link: "/user-list",
    },
    {
      id: 7,
      title: "Archive",
      img: <MdOutlineArchive color="#ffffff" size={24} />,
      link: "/archive",
    },
    {
      id: 8,
      title: "History",
      img: <MdOutlineHistory color="#ffffff" size={24} />,
      link: "/history",
    },
  ];

  

  const location = useLocation();
  const isActiveLink = (link) => {
    return location.pathname === link ;
  };

  return (
    <div className={`side-nav ${open ? 'open' : ''}`}>
      <div className="top-links">
        {SideNavLinks.map((ele) => (
          <Link to={ele.link} key={ele.id} className='nav-link'>
            <div className={`nav-item ${isActiveLink(ele.link) ? 'active' : ''}`}>
              {ele.img}
              <p className='nav-text'>{ele.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ${isActiveLink(ele.link) ? 'active' : ''}

export default SideNav;