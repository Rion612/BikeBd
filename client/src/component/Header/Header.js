import React from 'react';
import './header.css'
import { Navbar, Button, Form, FormControl, Dropdown, ButtonGroup } from 'react-bootstrap'



const Header = () => {
    return (
        <div>
            <div>
                <Navbar style={{ backgroundColor: '#060b26' }} variant="dark">
                    <Navbar.Brand href="#home" className="mr-auto" style={{ fontSize: '30px' }}>Bongo Bike</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>

            </div>

            <div className="navdiv">
                <a href="!#"> Home</a>
                <a href="!#"> Bike price</a>
                <a href="!#">Brands</a>
                <a href="!#"> Helmet</a>
                <a href="!#"> Showrooms</a>
                <a href="!#"> Scooter</a>
                <a href="!#"> Electric Bikes</a>
                <a href="!#"> News</a>
                <a href="!#"> Compare</a>
                <a href="!#"> Contact us</a>

            </div>

        </div>
    );
};

export default Header;