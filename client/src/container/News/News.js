import { useEffect } from 'react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../component/Layout/Layout';
import './news.css'
import { getAllNews } from '../../Actions';

const News = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news);
    const [toggleState, setToggleState] = useState(1);
    const [data, setData] = useState([]);
    const toggleTab = (index) => {
        setToggleState(index);
        if (index === 1) {
            let d = news.news.filter(x => x.category === "news");
            setData(d.reverse());
        }
        else if (index === 2) {
            let d = news.news.filter(x => x.category === "offer");
            setData(d.reverse());
        }
        else if (index === 3) {
            let d = news.news.filter(x => x.category === "travel_story");
            setData(d.reverse());
        }
    };
    return (
        <div>
            <Layout>
                <Container className="content">

                    <div>
                        <div><h2 className="title" style={{ color: 'white', textAlign: 'center' }}>
                            News, Offers and Travel Story:</h2></div>
                        <p className="para">To find out all the authentic news about motorcycle industrial activities and motorcycle pricerelated news BikePedia brings in “News Page “section for the users. Here you will find out all the latest price updates of various brands existing in our local market, as well as, you will find out the new brands arrival, existing brands and products related any kind of news provided by the importer and distributers.</p>
                    </div>

                    <Row className="tabStyle">
                        <Col className={toggleState === 1 ? "tab active-tabs" : "tab"} onClick={() => toggleTab(1)}>News</Col>
                        <Col className={toggleState === 2 ? "tab active-tabs" : "tab"} onClick={() => toggleTab(2)}>Offers</Col>
                        <Col className={toggleState === 3 ? "tab active-tabs" : "tab"} onClick={() => toggleTab(3)}>Travel Story</Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                toggleState === 1 ?
                                    news.news.filter(x => x.category === "news").map((item, index) => {
                                        return (
                                            <Row id="tabDiv" key={index}>
                                                <Col md={4}><img src={item?.NewsImage} width="300px" height="200px" /></Col>
                                                <Col md={8}>
                                                    <Row>
                                                        <Col><h6>{item?.title}</h6></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col style={{ display: 'flex' }}>
                                                            <div className="block">
                                                            </div>
                                                            <div>
                                                                {(item?.createdAt).split('T')[0]}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col style={{ fontSize: '16px' }}>
                                                            {(item?.description).slice(0, 250)}{'.......'}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col style={{ marginTop: '10px' }}>
                                                            <button className="btn btn-danger">Read more</button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        )
                                    })
                                    :
                                    data.map((item, index) => {
                                        return (
                                            <Row id="tabDiv" key={index} >
                                                <Col md={4}><img src={item?.NewsImage} width="300px" height="200px" /></Col>
                                                <Col md={8} style={{ width: '100%' }}>
                                                    <Row>
                                                        <Col><h6>{item?.title}</h6></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col style={{ display: 'flex' }}>
                                                            <div className="block">
                                                            </div>
                                                            <div>
                                                                {(item?.createdAt).split('T')[0]}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col style={{ fontSize: '16px' }}>
                                                            {(item?.description).slice(0, 250)}{'........'}
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col style={{ marginTop: '10px' }}>
                                                            <button className="btn btn-danger">Read more</button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        )
                                    })

                            }
                        </Col>
                    </Row>

                </Container>
            </Layout>
        </div>
    );
};

export default News;