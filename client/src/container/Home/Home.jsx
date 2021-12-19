import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../Actions/category.actions';
import CarouselNew from '../../component/Carousel/CarouselNew';
import CarouselSlider from '../../component/Carousel/CarouselSlider';
import Layout from '../../component/Layout/Layout';
import { budgetData, ccData } from '../CommonFiles/Data';
import './Home.css';

function Home(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory())
    }, [])
    const brand = useSelector(state => state.brand);
    const category = useSelector(state => state.category);
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
                                onClick={() => toggleTab(1)}>Brand</div>
                            <div
                                className={toggleState == 2 ? "active-chooseBike-tab" : "chooseBike-tab"}
                                onClick={() => toggleTab(2)}>Budget</div>
                            <div
                                className={toggleState == 3 ? "active-chooseBike-tab" : "chooseBike-tab"}
                                onClick={() => toggleTab(3)}>CC</div>
                            <div
                                className={toggleState == 4 ? "active-chooseBike-tab" : "chooseBike-tab"}
                                onClick={() => toggleTab(4)}>Style</div>
                        </div>
                        <div style={{ height: "220px" }}>
                            <CarouselNew show={4}>
                                {
                                    toggleState == 1 ?
                                        brand.brands.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div style={{ padding: "60px" }}>
                                                        <img src={item.brandImage} alt="brand_image" title={item.name} height="70px" width="150px" />
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        toggleState == 2 ?
                                            budgetData.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <div style={{ padding: "50px" }}>
                                                            <div style={{ display: "flex", justifyContent: 'center' }}>
                                                                <img src={item.image} alt="budget_image" title={"Tk " + item.minRange + " -TK " + item.maxRange} height="100px" width="150px" />
                                                            </div>
                                                            <p style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '0px' }}>Between</p>
                                                            <p style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '0px' }}>Tk {item.minRange} - TK {item.maxRange}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :
                                            toggleState == 3 ?
                                                ccData.map((item, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div style={{ padding: "60px" }}>
                                                                <div style={{ display: "flex", justifyContent: 'center' }}>
                                                                    <img src={item.image} alt="budget_image" title={item.value + "cc"} height="100px" width="150px" />
                                                                </div>
                                                                <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{item.value + "cc"}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                :
                                                category.categories.map((item, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div style={{ padding: "50px" }}>
                                                                <div style={{ display: "flex", justifyContent: 'center' }}>
                                                                    <img src={item.categoryImage} alt="budget_image" title={item.categoryImage} height="100px" width="150px" />
                                                                </div>
                                                                <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{item.name}</p>
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