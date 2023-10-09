import React from "react";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Sidebar.css';
import { IconContext } from "react-icons";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const onLogout = () => {
    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser && accounts) {
      const index = accounts.findIndex(account => account.accountNumber === currentUser.accountNumber);

      if (index !== -1) {
        accounts[index] = currentUser;
        localStorage.setItem("accounts", JSON.stringify(accounts));
      }

      localStorage.removeItem("currentUser");
      navigate("/");
    }
  };

    return (
   <>
    <IconContext.Provider value={{color:'black'}}>
      <div className="sidebar">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <div>
            <li className="navbar-toggle"><span />EXIT</li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </div>
          <div className='logout'>
          <button onClick={onLogout}>Logout</button>
          </div>
        </ul>
      </nav>
      </IconContext.Provider>
    </>
    );
  }
  
  export default Sidebar;