import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import './DashboardLayout.css';

export default function DashboardLayout({ title, children }) {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen((prev) => !prev);
  };


  return (
    <>
      <SideNav open={open} />
      <div className={`main ${open ? 'sidebar-open' : ''}`}>
        <TopNav
          open={open}
          toggle={toggle}
          title={title}
          currUsr={"Edward William"}
          role = {"Admin"}
        />
        <div className="content">
          {children}
        </div>
      </div>
    </>
  );
}