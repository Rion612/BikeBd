import React from 'react';
import Layout from '../../component/Layout/Layout';
import {Col,Row} from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="title p-2"><h2>Contact Us</h2></div>
                    <Row>
                        <Col>A</Col>
                        <Col>B</Col>
                    </Row>
                </div>
            </Layout>
        </div>
    );
};

export default Contact;