import React from 'react';
import Slider from "react-slick";

const MultipleItems = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <div style={{padding:'20px'}}>
            <Slider {...settings}>
                <div>
                    <h1>1</h1>
                </div>
                <div>
                <h1>2</h1>
                </div>
                <div>
                <h1>3</h1>
                </div>
                <div>
                    <h1>4</h1>
                </div>
                <div>
                <h1>5</h1>
                </div>
                <div>
                <h1>6</h1>
                </div>
                <div>
                <h1>7</h1>
                </div>
                <div>
                <h1>8</h1>
                </div>
                <div>
                <h1>9</h1>
                </div>
            </Slider>
        </div>
    );
};

export default MultipleItems;