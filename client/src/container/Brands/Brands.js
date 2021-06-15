import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../component/Layout/Layout';
import './brands.css'
import { Row, Col ,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Brands = () => {
    const brand = useSelector(state => state.brand);
    return (
        <div>
            <Layout>
                <div className="container">
                   <div className="title"><h2>Motorcycle Brands In Bangladesh</h2></div> 
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
                                     <Link to={'/brands/'+item.slug}>
                                    <Card className="cardDiv">
                                        <Card.Img variant="top" src={item.brandImage} style={{height:'100px'}} />
                                        <hr/>
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
            </Layout>
        </div>
    );
};

export default Brands;