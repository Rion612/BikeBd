import React from 'react'

import { Carousel } from 'react-bootstrap';

const CarouselSlider = (props) => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + '/banner.jpg'}
                        alt="First slide"
                        style={{ height: '400px' }}
                    />
                    <Carousel.Caption>
                        <h1
                            style={{
                                color: 'white',
                                padding:'10px'
                            }}
                        >
                            Welcome to BikePedia
                        </h1>
                        <p>BongoPedia is one of the motorcycle oriented website in Bangladesh</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default CarouselSlider;