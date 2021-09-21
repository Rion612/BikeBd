import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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


                </div>
            </div>
        </Layout>
    );
}

export default Home;