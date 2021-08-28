import React from 'react';
import './footer.css';
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <div className="maindiv">
                <Container fluid>
                    <Row>
                        <Col md={6} className="text-white p-5">
                            <h3 className="text-center">About BongoPedia</h3>
                            <p className="text-justify">BongoPedia is one of the motorcycle oriented website in Bangladesh
                                where Bike enthusiasts from all over the country can find
                                all the information about any bike. From motorcycle price
                                in Bangladesh and Motorcycle Specification to the test ride
                                reviews of various bikes and first impression reviews of
                                any newly launched bikes.BongoPedia is providing
                                information to everyone across the nation about various
                                offers from the motorcycle or related companies, news,
                                coverage of motorcycle based or related events, and any
                                update on any rules about motorcycle sector in Bangladesh.</p>
                        </Col>
                        <Col md={6} className="text-white p-5">
                            <h3>Information</h3>
                            <ul>
                                <li>Disclaimer</li>
                                <li>Privacy policy</li>
                                <li>Terms and condition</li>
                            </ul>

                        </Col>

                    </Row>
                    <Row>
                        <Col className="text-white text-center">
                            &#169; Copyright 2021 - All Rights Reserved
                        </Col>
                    </Row>

                </Container>


            </div>
        </div>
    );
};

export default Footer;