import React, { useState, useEffect } from 'react';
import BreadcumCom from '../../component/BreadcumCom/BreadcumCom';
import FeatureBike from '../../component/FeatureBike/FeatureBike';
import Layout from '../../component/Layout/Layout';
import SearchDiv from '../../component/SearchDiv/SearchDiv';
import SideBarBrand from '../../component/SideBarBrand/sideBarBrand';
import { useSelector } from "react-redux";
import './Comparison.css';

const Comparison = () => {
    const bikes = useSelector(state => state.bikes.bikes);
    const [compare, setCompare] = useState(false);
    const [compareImageLeft, setCompareImageLeft] = useState(process.env.PUBLIC_URL + '/compare_demo_left.PNG');
    const [compareImageRight, setCompareImageRight] = useState(process.env.PUBLIC_URL + '/compare_demo_right.PNG');
    useEffect(() => {
        if ((compareImageLeft !== process.env.PUBLIC_URL + '/compare_demo_left.PNG') &&
            (compareImageRight !== process.env.PUBLIC_URL + '/compare_demo_right.PNG')
        ) {
            setCompare(true);
        }else{
            setCompare(false)
        }
    }, [compareImageRight,compareImageLeft])
    return (
        <div>
            <Layout>

                <div className="container">
                    <div style={{ display: 'flex', minHeight: '100vh' }}>
                        <div style={{ width: "70%" }} className='p-2'>
                            <BreadcumCom fTab="Home" sTab="Comparison" route="/" />
                            <div className='title'><h4>Compare Motorbikes</h4></div>
                            <p className="paragraph">
                                “Bike Compare” page is created for the bikers to relate their choices in different terms and needs. Most of the riders becomes confused among several bikes. Sometimes they make wrong decisions because of less knowledge about their different choices. Solving this matter Motorcycle Valley is offering this page to overview your choice head to head and see what matches with your need. Consequently, you make a better decision for yourself. Just click on the drop down menu, select bikes and search, all the necessary information about them will be in front of you.</p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={compareImageLeft} height="300px" width='300px' alt="Comaper left Image" />
                                <p className='p-3'>Vs</p>
                                <img src={compareImageRight} height="300px" width='300px' alt="Comaper left Image" />
                            </div>
                            <div className={compare ? 'compare_btn_show' : 'compare_btn_hide'}>
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'blue',
                                        borderRadius: '5px',
                                        color: '#fff',
                                        padding: '10px 20px'
                                    }}
                                >Compare</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <label>Select motorcycles:</label>
                                    <select className='form-control' value={compareImageLeft} onChange={(e)=>setCompareImageLeft(e.target.value)}>
                                        <option value={process.env.PUBLIC_URL + '/compare_demo_left.PNG'}>Select bike</option>
                                        {
                                            bikes.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.bikeImage}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label>Compare with:</label>
                                    <select className='form-control' value={compareImageRight} onChange={(e)=>setCompareImageRight(e.target.value)}>
                                        <option value={process.env.PUBLIC_URL + '/compare_demo_right.PNG'}>Select bike</option>
                                        {
                                            bikes.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.bikeImage}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: 'column', width: '30%' }} className='p-2'>
                            <SideBarBrand />
                            <br />
                            <FeatureBike />
                            <br />
                            <SearchDiv />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Comparison;