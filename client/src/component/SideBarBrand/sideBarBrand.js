import React from 'react';
import { useSelector } from 'react-redux';

const SideBarBrand = () => {
    const brand =  useSelector(state => state.brand)
    return (
        <div className='featuredBike'>
            <div>
                <p className="fTitle">Bikes Brand</p>
            </div>
            <div className='SideBar_brand'>
                {
                    brand.brands.slice(0, 5).map((item, index) => {
                        return (
                            <div className='SideBar_brand_innerDiv'>
                                <img src={item.brandImage} height="100%" width="100%" />
                            </div>
                        )
                    })
                }
            </div>
            <div style={{ textAlign: "center", padding: '10px' }}>
                <button
                    style={
                        {
                            border: '1px solid black',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            padding: '10px 20px',
                            backgroundColor:"#fff"
                        }
                    }
                >View more brands</button>
            </div>
        </div>
    );
};

export default SideBarBrand;