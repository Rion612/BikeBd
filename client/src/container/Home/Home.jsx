import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CarouselNew from '../../component/Carousel/CarouselNew';
import CarouselSlider from '../../component/Carousel/CarouselSlider';
import Layout from '../../component/Layout/Layout';
import './Home.css';

function Home(props) {
    const brand = useSelector(state => state.brand);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <Layout>
            <div className="Home">
                <CarouselSlider />
                <div className="container">
                    <div><h3 style={{ color: 'black', textAlign: 'center' }}>Choose bikes by </h3></div>
                    <div className="chooseContentDiv">
                        <div className="chooseBike">
                            <div
                                className={toggleState == 1 ? "active-chooseBike-tab" : "chooseBike-tab"}
                                onClick={()=>toggleTab(1)}>Brand</div>
                            <div
                                className={toggleState == 2 ? "active-chooseBike-tab" : "chooseBike-tab"}
                                onClick={()=>toggleTab(2)}>Budget</div>
                            <div
                                className={toggleState == 3 ? "active-chooseBike-tab" : "chooseBike-tab"}
                                onClick={()=>toggleTab(3)}>CC</div>
                            <div
                                className={toggleState == 4 ? "active-chooseBike-tab" : "chooseBike-tab"}
                                onClick={()=>toggleTab(4)}>Style</div>
                        </div>
                        <div>
                            <CarouselNew show={4}>
                                {
                                    brand.brands.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div style={{ padding: "60px" }}>
                                                    <img src={item.brandImage} alt="placeholder" style={{ width: '100%' }} height="120px" width="80px" />
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </CarouselNew>
                        </div>
                    </div>



                </div>
            </div>
        </Layout>
    );
}

export default Home;