import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../component/Layout/Layout';
import './news.css'

const News = () => {

    return (
        <div>
            <Layout>
               <Container>
                   <Row>
                       <Col md={8}>
                       <div><h2>News, Offers and Travel Story:</h2></div>
               <p className="paragraph">
               To find out all the authentic news about motorcycle industrial activities and motorcycle 
               pricerelated news Motorcycle valley brings in “News Page “section for the users. Here you 
               will find out all the latest price updates of various brands existing in our local market,
                as well as, you will find out the new brands arrival, existing brands and products related 
                any kind of news provided by the importer and distributers</p>
                       </Col>
                       <Col>
                       </Col>
                   </Row>
               
               </Container>
            </Layout>
        </div>
    );
};

export default News;