import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const FeatureBike = () => {   
    const array = [1, 2, 3, 4, 5];
    const bikes = useSelector(state => state.bikes.bikes);
    return (
        <div className='featuredBike'>
            <div>
                <p className="fTitle">Featured Bikes</p>
            </div>
            {
                bikes.slice(0,6).map((item, index) => {
                    return (
                        <Link to={`/bikes/details/` + item.slug} style={{color: 'black'}} key={index}>
                        <div style={{ display: 'flex', marginTop: '5px' }} className='p-2'>
                            <div style={{ width: '30%' }}><img src={item.bikeImage} height="100px" width="100px" /></div>
                            <div style={{ width: '70%', padding: '15px 10px' }}>
                                <p style={{ margin: 0, fontSize: '16px' }}>{item.name}</p>
                                <p style={{ margin: 0, fontSize: '16px' }}>TK. {item.price}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }

        </div>
    );
};

export default FeatureBike;