import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../component/Layout/Layout';
import './brands.css'
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import FeatureBike from '../../component/FeatureBike/FeatureBike';

const Brands = () => {
    const brand = useSelector(state => state.brand);
    const array = [1, 2, 3, 4, 5];
    return (
        <div>
            <Layout>
                <div className="container">
                    <div style={{ display: 'flex', minHeight: '100vh' }}>
                        <div style={{ width: "70%"}} className='p-2'>
                            <div className='breadcumb'>
                                <Link to={'/'} style={{ textDecoration: "none" }}>
                                    Home
                                </Link>
                                <AiOutlineDoubleRight style={{ margin: "0 10px" }} />
                                {'Brands'}
                            </div>
                            <div className='title'><h4>Motorcycle Brands in Bangladesh</h4></div>
                            <p className="paragraph">
                                In this page we put all Motorcycle Brands in Bangladesh Price, Image,
                                Specification & Showroom details. Not only the Motorcycle, you will get scooter
                                & electric bikes (E-Bikes) details also. Some are available in Bangladesh &
                                some are not. On the Basis of Popularity & search of people of Bangladeshi Bike
                                lovers we put all the highest searched motorcycle brands in Bangladesh here.
                                We also mention the bike brand & bike models available or not available
                                in Bangladesh. Hope it will help the Bike Lovers to.</p>
                            <Row>
                                {brand.brands.map((item, index) => {
                                    return (
                                        <Col md={4} className="column" key={index} >
                                            <Link to={'/brands/' + item.slug}>
                                                <Card className="cardDiv">
                                                    <Card.Img variant="top" src={item.brandImage} style={{ height: '100px' }} />
                                                    <hr />
                                                    <Card.Body>
                                                        <Card.Title className="text-center">{item.name}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                    )
                                })}

                            </Row>
                        </div>
                        <div style={{ display: "flex", flexDirection: 'column', width: '30%' }} className='p-2'>
                            <FeatureBike/>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Brands;