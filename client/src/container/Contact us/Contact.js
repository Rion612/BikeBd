import React from 'react';
import Layout from '../../component/Layout/Layout';
import { Col, Row, Form, Button } from 'react-bootstrap'
import './contactUs.css'

const Contact = () => {
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="title p-1"><h2>Contact Us</h2></div>
                    
                    <Row>
                        <Col className="details" md={5}>
                          <div>
                              <i className="fa fa-map-marker" style={{fontSize:'25px'}}> Address</i>
                              <p>9A dhanmondi, Dhaka</p>
                         </div>
                         <div>
                              <i className="fa fa-phone" style={{fontSize:'25px'}}> Phone</i>
                              <p>+8801754809025</p>
                         </div>
                         <div>
                              <i className="fa fa-envelope" style={{fontSize:'25px'}}> Email</i>
                              <p>nazmul15-9557@diu.edu.bd</p>
                         </div>
                        </Col>
                        <Col className="contactForm"  md={6}>
                            <h2 className="text-center">Leave a message</h2>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" rows="6" cols="54" />

                                </div>
                                <Button variant="primary" type="submit" size="lg" block>
                                    Send
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Layout>
        </div>
    );
};

export default Contact;