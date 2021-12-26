import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../component/Layout/Layout';
import './brands.css'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import FeatureBike from '../../component/FeatureBike/FeatureBike';
import SearchDiv from '../../component/SearchDiv/SearchDiv';
import SideBarBrand from '../../component/SideBarBrand/sideBarBrand';
import BreadcumCom from '../../component/BreadcumCom/BreadcumCom';

const Brands = () => {
    const brand = useSelector(state => state.brand);
    return (
        <div>
            <Layout>
                <div className="container">
                    <div style={{ display: 'flex', minHeight: '100vh' }}>
                        <div style={{ width: "70%" }} className='p-2'>
                            <BreadcumCom fTab="Home" sTab="Brands" route="/"/>
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
                            <FeatureBike />
                            <br />
                            <SearchDiv />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Brands;