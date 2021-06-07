import React from 'react';
import './header.css'
import { Jumbotron,Container } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Bongo Bike</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Header;