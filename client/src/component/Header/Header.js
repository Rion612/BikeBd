import React, { useState } from 'react';
import './header.css'
import { Navbar, Button, Form, FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'



const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const showBar = () => setIsMobile(!isMobile);
    return (
        <div>
            <div>

                <Navbar style={{ backgroundColor: '#060b26' }} variant="dark">
                    <button className="mobile-menu-icon" onClick={showBar}>{isMobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}</button>
                    <Navbar.Brand href="#home" className="mr-auto" style={{ fontSize: '30px' }}>BikePedia</Navbar.Brand>

                </Navbar>

            </div>

            <div className="navdiv">
                <ul className={isMobile ? "nav-link-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                    <NavLink to="/" className="home" activeStyle={{ color: "blue" }} exact={true} > <li>Home</li></NavLink>
                    <NavLink to="/brands" className="brands" activeStyle={{ color: "blue" }}><li>Bikes & Brands</li></NavLink>
                    <NavLink to="/helmets" className="helmet" activeStyle={{ color: "blue" }}><li>Helmet</li></NavLink>
                    <NavLink to="/showrooms" className="showrooms" activeStyle={{ color: "blue" }}><li>Showrooms</li></NavLink>
                    <NavLink to="/bike/scooter" className="scooter" activeStyle={{ color: "blue" }}><li>Scooter</li></NavLink>
                    <NavLink to="/bikes/electric_bikes" className="ebikes" activeStyle={{ color: "blue" }}><li>Electric Bikes</li></NavLink>
                    <NavLink to="/news" className="news" activeStyle={{ color: "blue" }}> <li>News,Offers & Travel Story</li></NavLink>
                    <NavLink to="/comparison" className="compare" activeStyle={{ color: "blue" }}><li>Comparison</li></NavLink>
                    <NavLink to="/contact" className="contact" activeStyle={{ color: "blue" }}><li>Contact us</li></NavLink>
                </ul>
            </div>

        </div>
    );
};

export default Header;