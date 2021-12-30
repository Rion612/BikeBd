import React from 'react';
import { useSelector } from 'react-redux';
import BreadcumCom from '../../component/BreadcumCom/BreadcumCom';
import Layout from '../../component/Layout/Layout';
import RateStar from '../../component/Rating star/RateStar';
import './bikeDetails.css';
import { RiMotorbikeFill } from 'react-icons/ri';
import { MdCategory } from "react-icons/md"
const BikeDetails = (props) => {
    const brands = useSelector(state => state.brand.brands);
    const categories = useSelector(state=>state.category.categories);
    const bikes = useSelector(state => state.bikes.bikes);
    const bikeInfo = bikes.find(x => x.slug === props.match.params.slug);
    const categoryInfo = categories.find(x=>x._id === bikeInfo?.category)
    
    return (
        <Layout>
            <div className='container'>
                <BreadcumCom fTab="Home" sTab={props.match.params.slug} route="/" />
                <div className="bdContent">
                    <div className="bikeImageDiv">
                        <img
                            src={bikeInfo?.bikeImage}
                            alt="Bike Image"
                            width="350px"
                            height="350px"
                            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)" }}
                        />
                    </div>
                    <div className="bikeInfo">
                        <div style={{ display: "flex" }}>
                            <RiMotorbikeFill size={30} color={"#19626a"} />
                            <p>{bikeInfo?.name}</p>
                            <div style={{ paddingLeft: "20px" }}>
                                <RateStar size="30" rating={4} />
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "10px" }}>
                            <MdCategory size={25} color={"#19626a"} />
                            <p style={{ fontSize: "20px" }}>Category- {categoryInfo?.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BikeDetails;