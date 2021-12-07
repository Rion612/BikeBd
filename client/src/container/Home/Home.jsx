import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselNew from '../../component/Carousel/CarouselNew';
import CarouselSlider from '../../component/Carousel/CarouselSlider';
import Layout from '../../component/Layout/Layout';
import MultipleItems from '../../component/MultipleItem_Slider/MultipleItems';
import './Home.css';

function Home(props) {
    return (
        <Layout>
            <div className="Home">
                <CarouselSlider />
                <div className="container">
                    <h3
                        style={{ color: 'black', textAlign: 'center' }}
                    >Choose bikes by
                    </h3>

                    <CarouselNew  show={4}>
                    <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                    </CarouselNew>
                </div>
            </div>
        </Layout>
    );
}

export default Home;