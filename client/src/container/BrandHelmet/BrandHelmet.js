import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../component/Layout/Layout';
import axios from '../../helpers/axios';
import { Row, Col, Card,Table } from 'react-bootstrap';
import './brandHelmet.css'

const BrandHelmet = (props) => {
    const [error, setError] = useState("");

    const brands = useSelector(state => state.helmetBrands.helmetBrands);
    const brand = brands.find(x => x.slug === props.match.params.slug);
    const helmet = useSelector(state=>state.helmets.helmets);
    const helmets = helmet.filter(x=>x.brand === brand?._id);
    console.log(helmet)
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="title"><h2>{brand?.name} Helmet In Bangladesh</h2></div>

                    <p className="paragraph">{brand?.description}</p>

                    <div className="title"><h2>{brand?.name} Helmet Price In Bangladesh</h2></div>
                    <Row>
                        {helmets.map((item, index) => {
                            return (
                                <Col md={4} key={index} >
                                    <div className="brandNameDiv">{(item.name).toUpperCase()}</div>
                                    <Card className="carddd">
                                        <Card.Img variant="top" src={item.helmetImage} style={{ height: '300px' }} />
                                    </Card>

                                    <Table bordered className="tableDiv">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{item.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Distributor</td>
                                                <td>{item.distributor}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>{item.price} BDT</td>
                                            </tr>
                                        </tbody>
                                    </Table>


                                </Col>
                            )
                        })}
                    </Row>

                </div>

            </Layout>

        </div>
    );
};

export default BrandHelmet;