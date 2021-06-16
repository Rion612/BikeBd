import React, { useState } from 'react';
import './header.css'
import { Navbar, Button, Form, FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const showBar = ()=>setIsMobile(!isMobile);
    return (
        <div>
            <div>
                
                <Navbar style={{ backgroundColor: '#060b26' }} variant="dark">
                <button className="mobile-menu-icon" onClick={showBar}>{ isMobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}</button>
                    <Navbar.Brand href="#home" className="mr-auto" style={{ fontSize: '30px' }}>Bongo Bike</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>

            </div>

            <div className="navdiv">
                <ul className={ isMobile ? "nav-link-mobile" : "nav-links"} onClick={()=>setIsMobile(false)}>
                    <Link to="/" className="home" > <li>Home</li></Link>
                    <Link to="/bike_price" className="bike" ><li>Bike price</li></Link>
                    <Link to="/brands" className="brands" ><li>Brands</li></Link>
                    <Link to="/helmets" className="helmet" ><li>Helmet</li></Link>
                    <Link to="/showrooms" className="showrooms"><li>Showrooms</li></Link>
                    <Link to="/bike/scooter" className="scooter" ><li>Scooter</li></Link>
                    <Link to="/bikes/electric_bikes" className="ebikes"><li>Electric Bikes</li></Link>
                    <Link to="/news" className="news" > <li>News</li></Link>
                    <Link to="/comparison" className="compare" ><li>Comparison</li></Link>
                    <Link to="/contact" className="contact"><li>Contact us</li></Link>
                </ul>
            </div>

        </div>
    );
};

export default Header;