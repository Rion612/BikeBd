import React from 'react';
import { useSelector } from 'react-redux';
import { mileageData,ccData, budgetData  } from '../../container/CommonFiles/Data';

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
                        <option>Any Brand</option>
                        {
                            brands.map((item, index) => {
                                return (
                                    <option key={index}>{item.name}</option>
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
                        <option>Any CC</option>
                        {
                            ccData.slice(0,8).map((item, index) => {
                                return (
                                    <option key={index}>{item.value}{'cc'}</option>
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
                        <option>Any Mileage</option>
                        {
                            mileageData.map((item, index) => {
                                return (
                                    <option key={index}>{item.value}{'+'+ ' '+'KM/L'}</option>
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
                        <option>Any Price</option>
                        {
                            budgetData.map((item, index) => {
                                return (
                                    <option key={index}>{item.minRange}{'-'}{item.maxRange}</option>
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