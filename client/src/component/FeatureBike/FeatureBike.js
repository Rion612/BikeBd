import React from 'react'
const FeatureBike = () => {   
    const array = [1, 2, 3, 4, 5];
    return (
        <div className='featuredBike'>
            <div>
                <p className="fTitle">Featured Bikes</p>
            </div>
            {
                array.map((item, index) => {
                    return (
                        <div style={{ display: 'flex', marginTop: '5px' }} className='p-2'>
                            <div style={{ width: '30%' }}><img src={process.env.PUBLIC_URL + '/cc.jpg'} height="100px" width="100px" /></div>
                            <div style={{ width: '70%', padding: '15px 10px' }}>
                                <p style={{ margin: 0, fontSize: '16px' }}>Honda CB150R Exmotion</p>
                                <p style={{ margin: 0, fontSize: '16px' }}>TK. 4,50,000</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default FeatureBike;