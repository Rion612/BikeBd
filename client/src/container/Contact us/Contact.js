import React, { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import { Col, Row, Form, Button } from 'react-bootstrap'
import './contactUs.css'
import axios from '../../helpers/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault();
        const mailObject = { fullname, email, subject, message };
        const response = await axios.post("/create/message", mailObject );
        if(response.status == 200){
            toast.success("Message sent to BikePedia successfully!");
        }
        else{
            toast.error("Message is not sent!");
        }
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
    }
    return (
        <div>
            <ToastContainer/>
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
                              <p>bikepedia10581@gmail.com</p>
                         </div>
                        </Col>
                        <Col className="contactForm"  md={6}>
                            <h2 className="text-center">Leave a message</h2>
                            <Form onSubmit={sendMessage}>
                                <Form.Group>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} />
                                </Form.Group>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" rows="6" cols="54"  value={message} onChange={(e)=>setMessage(e.target.value)}/>

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