import React from 'react';
import { Col, Row, Table, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Layout from '../../component/Layout/Layout';
import './Style.css'
import Omege from '../../Images/omega.jpg'
import Moto from '../../Images/moto.PNG'
import NRMoto from '../../Images/NRmotors.jpg'
import { useHistory } from 'react-router-dom';


const Showroom = () => {
    const history = useHistory();
    const showroom = useSelector(state => state.showroom);
    const brand = useSelector(state => state.brand);
    const clickShowroomButton = (item) =>{
        history.push(`/brand/showrooms/${item.slug}`)
    }
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="title"><h2>Motorcycle Showrooms In Bangladesh</h2></div>
                    <p className="paragraph">
                        Welcome to our “Motorcycle Showrooms Bangladesh” overview page. This page will try to provide all the available bike showroom locations of different motorcycle brands, which are seen in Bangladesh. You will going to find the names of all authorized showrooms of available brands in our country, alongside their brands and location. </p>
                    <Row>
                        <Col md={8}>
                            <div className="shadowDiv">
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>Brand</th>
                                            <th>Brand Image</th>
                                            <th>Showroom Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            brand.brands.map((item, index) => {
                                                return (

                                                    <tr key={index}>
                                                        <td className="tableCol1">
                                                            {item.name}
                                                        </td>
                                                        <td>
                                                            <img src={item.brandImage} alt="Brand" height="120px" width="120px" /></td>
                                                        <td className="tableCol3">
                                                            <button className="btn btn-danger btn-lg" onClick={()=>clickShowroomButton(item)}>
                                                                View Address
                                                            </button>
                                                        </td>
                                                    </tr>

                                                )
                                            })

                                        }
                                    </tbody>
                                </Table>

                            </div>

                        </Col>
                        <Col md={4}>
                            <div className="shadowDiv">
                                <h4 style={{ textAlign: "center" }}>Popular Showrooms</h4><hr />
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Omege} />
                                    <Card.Body>
                                        <Card.Title>Omega motors Ltd.</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Address & Contact</Card.Subtitle>
                                        <Card.Text>
                                            122, Shahid Syed Nazrul islam sharani,
                                            Bangshal, Dhaka
                                            Mobile : 01612662288
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', marginTop: "10px" }}>
                                    <Card.Img variant="top" src={Moto} />
                                    <Card.Body>
                                        <Card.Title>Moto Solution</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Address & Contact</Card.Subtitle>
                                        <Card.Text>
                                            167/21 Matikata
                                            Dhaka
                                            Bangladesh
                                            Mobile: 01933334443
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', marginTop: "10px" }}>
                                    <Card.Img variant="top" src={NRMoto} />
                                    <Card.Body>
                                        <Card.Title>New Rajshahi Motors</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Address & Contact</Card.Subtitle>
                                        <Card.Text>
                                            Banewasr Bazaar
                                            Rajshahi
                                            Bangladesh
                                            Mobile: 01707925447
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Layout>

        </div>
    );
};

export default Showroom;