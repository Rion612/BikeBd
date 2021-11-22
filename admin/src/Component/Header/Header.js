import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import { sidebarData } from '../Data/sidebarData';
import { IconContext } from 'react-icons'
import './style.css'
function Header() {
    const [sidebar, setsidebar] = useState(false);

    const showSideBar = () => setsidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className="navbar" style={{zIndex:'1000'}}>
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={showSideBar} />

                    </Link>
                    <h3 className="text">Admin Dashboard</h3>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{zIndex:'1000'}}>
                    <ul className="nav-menu-items" onClick={showSideBar}>
                        <li className="navbar-toggle">
                            <Link to="#">
                                <AiOutlineClose onClick={showSideBar}/>
                            </Link>
                        </li>
                        {
                            sidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>

                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Header
