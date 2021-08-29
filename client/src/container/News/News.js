import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../component/Layout/Layout';
import './news.css'

const News = () => {
    const myFunction = (a) =>{
        if(document.getElementById('tabDiv')){
            document.getElementById('tabDiv').innerHTML = a;

        }
       
    }

    return (
        <div>
            <Layout>
                <Container>

                    <diV>
                        <div><h2 className="title" style={{color:'white', textAlign:'center'}}>
                            News, Offers and Travel Story:</h2></div>
                        <p className="para">To find out all the authentic news about motorcycle industrial activities and motorcycle pricerelated news BikePedia brings in “News Page “section for the users. Here you will find out all the latest price updates of various brands existing in our local market, as well as, you will find out the new brands arrival, existing brands and products related any kind of news provided by the importer and distributers.</p>
                    </diV>

                    <Row className="tabStyle">
                        <Col className="tab" onClick={myFunction("news")}>News</Col>
                        <Col className="tab">Offers</Col>
                        <Col className="tab">Travel Story</Col>
                    </Row>
                    <Row>
                        <Col id="tabDiv">
                        </Col>
                    </Row>

                </Container>
            </Layout>
        </div>
    );
};

export default News;