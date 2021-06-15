import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../component/Layout/Layout';

import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './helmet.css'

const Helmet = () => {
    const brands = useSelector(state=>state.helmetBrands);
    return (
        <div>
            <Layout>
            <div className="container">
                    <div className="title"><h2>Helmet Brand In BD</h2></div>
                    <p className="paragraph">
                    Helmet is one of the must have safety gears for all the bikers.
                     But, it is also one of the most neglected things, as people are
                      often careless to use good quality helmets. In this page, we will
                       list out all DOT and ECE approved helmets in Bangladesh along 
                       with their price!So, Let’s Dive Down to have a glimpse of All Helmet
                        Price IN BD, and All Motorcycle Helmet Price In Bangladesh!</p>
                    <Row>
                        {brands.helmetBrands.map((item, index) => {
                            return (
                                <Col md={4} className="column" key={index} >
                                    <Link to={'/helmets/brand/' + item.slug}>
                                        <Card className="cardd">
                                            <Card.Img variant="top" src={item.hbrandImage} style={{ height: '200px' }} />
                                        </Card>
                                    
                                    <div className="brandNameDiv">{(item.name).toUpperCase()}</div>
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

export default Helmet;