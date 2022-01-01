import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { mileageData,ccData, budgetData  } from '../../container/CommonFiles/Data';

const SearchDiv = () => {
    const history = useHistory();
    const brands = useSelector(state => state.brand.brands);
    const [mileage, setMileage] = useState("");
    const [cc, setCC] = useState("");
    const [price, setPrice] = useState("");
    const [brandID, setBrandId] = useState("");
    const searchButtonClicked = () =>{
        history.push(`/search/filter?price=${price}&cc=${cc}&mileage=${mileage}&brand=${brandID}`);
        setMileage("");
        setPrice("");
        setCC("");
        setBrandId('');
    }
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
                    <select className='form-control'value={brandID} onChange={(e)=>setBrandId(e.target.value)}>
                        <option>Any Brand</option>
                        {
                            brands.map((item, index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
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
                    <select className='form-control' value={cc} onChange={(e)=>setCC(e.target.value)}>
                        <option>Any CC</option>
                        {
                            ccData.slice(0,8).map((item, index) => {
                                return (
                                    <option key={index} value={item.value}>{item.value}{'cc'}</option>
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
                    <select className='form-control' value={mileage} onChange={(e)=>setMileage(e.target.value)}>
                        <option>Any Mileage</option>
                        {
                            mileageData.map((item, index) => {
                                return (
                                    <option key={index} value={item.value}>{item.value}{'+'+ ' '+'KM/L'}</option>
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
                    <select className='form-control' value={price} onChange={(e)=>setPrice(e.target.value)}>
                        <option>Any Price</option>
                        {
                            budgetData.map((item, index) => {
                                return (
                                    <option key={index} value={item.minRange+'-'+item.maxRange}>{item.minRange}{'-'}{item.maxRange}</option>
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
                    }} onClick={searchButtonClicked}>Search</button>
            </div>
        </div>
    );
};

export default SearchDiv;