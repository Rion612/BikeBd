import React, { useState, useEffect } from 'react';
import BreadcumCom from '../../component/BreadcumCom/BreadcumCom';
import FeatureBike from '../../component/FeatureBike/FeatureBike';
import Layout from '../../component/Layout/Layout';
import SearchDiv from '../../component/SearchDiv/SearchDiv';
import SideBarBrand from '../../component/SideBarBrand/sideBarBrand';
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap"
import './Comparison.css';
import { useHistory } from 'react-router-dom';

const Comparison = () => {
    const history = useHistory();
    const bikes = useSelector(state => state.bikes.bikes);
    const [compareButton, setCompareButton] = useState(false);
    const [sameBike, setSameBike] = useState(false);
    const [compareBikeOne, setCompareBikeOne] = useState("");
    const [compareBikeTwo, setCompareBikeTwo] = useState("");
    const [optionStateOne, setOptionStateOne] = useState("1");
    const [optionStateTwo, setOptionStateTwo] = useState("1");
    const [compareImageLeft, setCompareImageLeft] = useState(process.env.PUBLIC_URL + '/compare_demo_left.PNG');
    const [compareImageRight, setCompareImageRight] = useState(process.env.PUBLIC_URL + '/compare_demo_right.PNG');
    useEffect(() => {
        if (optionStateOne !== "1" && optionStateTwo !== "1") {
            if (optionStateOne === optionStateTwo) {
                setCompareButton(false);
                setSameBike(true);
            } else {
                setSameBike(false);
                setCompareButton(true);
            }
        }
        else {
            setCompareButton(false)
        }
    }, [compareImageRight, compareImageLeft])
    const leftSelectOption = (event) => {
        setOptionStateOne(event.target.value);
        if (event.target.value === "1") {
            setCompareImageLeft(process.env.PUBLIC_URL + '/compare_demo_left.PNG');
        } else {
            const b = bikes.find(x => x._id === event.target.value);
            setCompareImageLeft(b.bikeImage)
            setCompareBikeOne(b.slug);
        }
    }
    const RightSelectOption = (event) => {
        setOptionStateTwo(event.target.value);
        if (event.target.value === "1") {
            setCompareImageRight(process.env.PUBLIC_URL + '/compare_demo_left.PNG');
        } else {
            const b = bikes.find(x => x._id === event.target.value);
            setCompareImageRight(b.bikeImage);
            setCompareBikeTwo(b.slug);
        }
    }
    const performCompare = () => {
        history.push(`/comparison/result?bike1=${compareBikeOne}&bike2=${compareBikeTwo}`);
    }
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
                                <img src={compareImageLeft} height="250" width='250' alt="Comaper left Image" />
                                <p className='p-3'>Vs</p>
                                <img src={compareImageRight} height="250px" width='250px' alt="Comaper left Image" />
                            </div>
                            <div className={compareButton ? 'compare_btn_show' : 'compare_btn_hide'}>
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'blue',
                                        borderRadius: '5px',
                                        color: '#fff',
                                        padding: '10px 20px'
                                    }}
                                    onClick={performCompare}
                                >Compare</button>
                            </div>
                            <div className={sameBike ? 'same_bike_message_show' : 'same_bike_message_hide'}>
                                <p className='text-danger'>Cannot Compare With Same Motorcycle</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <label>Select motorcycles:</label>
                                    <select className='form-control' value={optionStateOne} onChange={leftSelectOption}>
                                        <option value="1">Select bike</option>
                                        {
                                            bikes.map((item, index) => {
                                                return (
                                                    <option key={index} value={item._id}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label>Compare with:</label>
                                    <select className='form-control' value={optionStateTwo} onChange={RightSelectOption}>
                                        <option value={"1"}>Select bike</option>
                                        {
                                            bikes.map((item, index) => {
                                                return (
                                                    <option key={index} value={item._id}>{item.name}</option>
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