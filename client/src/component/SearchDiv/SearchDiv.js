import React from 'react';
import { useSelector } from 'react-redux';

const SearchDiv = () => {
    const brands = useSelector(state => state.brand.brands);
    return (
        <div>
            <div>
                <p className='fTitle'>Filter</p>
            </div>
            <div style={{ display: 'flex', padding: '10px' }}>
                <div style={{ width: '30%' }} className='form-control'>
                    Brand
                </div>
                <div style={{ width: '70%' }}>
                    <select className='form-control'>
                        {
                            brands.map((item, index) => {
                                return (
                                    <option>{item.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '10px' }}>
                <div style={{ width: '30%' }} className='form-control'>
                    CC
                </div>
                <div style={{ width: '70%' }}>
                    <select className='form-control'>
                        {
                            brands.map((item, index) => {
                                return (
                                    <option>{item.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '10px' }}>
                <div style={{ width: '30%' }} className='form-control'>
                    Mileage
                </div>
                <div style={{ width: '70%' }}>
                    <select className='form-control'>
                        {
                            brands.map((item, index) => {
                                return (
                                    <option>{item.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '10px' }}>
                <div style={{ width: '30%' }} className='form-control'>
                    Price
                </div>
                <div style={{ width: '70%' }}>
                    <select className='form-control'>
                        {
                            brands.map((item, index) => {
                                return (
                                    <option>{item.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div style={{ textAlign: 'center', padding: '0 10px' }}>
                <button
                    style={{
                        border: 'none',
                        color: 'white',
                        backgroundColor: 'blue',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        padding: '10px 20px',
                        width: '100%'
                    }}>Search</button>
            </div>
        </div>
    );
};

export default SearchDiv;