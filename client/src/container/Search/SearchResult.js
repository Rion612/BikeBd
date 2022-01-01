import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BreadcumCom from '../../component/BreadcumCom/BreadcumCom';
import FeatureBike from '../../component/FeatureBike/FeatureBike';
import Layout from '../../component/Layout/Layout';
import SearchDiv from '../../component/SearchDiv/SearchDiv';
import SideBarBrand from '../../component/SideBarBrand/sideBarBrand';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi'
import RateStar from '../../component/Rating star/RateStar';
import AccordionCom from '../../component/AccordionCom/AccordionCom';
import axios from '../../helpers/axios';

const SearchResult = (props) => {
    const brands = useSelector(state => state.brand.brands);
    const query = new URLSearchParams(props.location.search);
    const mileage = query.get('mileage');
    const cc = query.get('cc');
    const price = query.get('price');
    const brand = query.get('brand');
    const [data, setData] = useState([]);
    useEffect(async()=>{
        const res = await axios.get(`/bikes/search?price=${price}&cc=${cc}&mileage=${mileage}&brand=${brand}`);
        if(res.status == 200){
            setData(res.data.data);
        }
    },[data]);
    const bikes = useSelector(state => state.bikes.bikes);
    const ratings = useSelector(state=>state.ratings.ratings);
    const findOutRating = (bike)=>{
        const r = ratings.filter(x=>x.bike === bike._id);
        let ratingValue = 0;
        for(let i=0 ;i< r.length;i++){
            ratingValue = r[i].rating;
        }
        return Math.round(ratingValue/r.length)
    }
    return (
        <div>
            <Layout>
                <div className="container">
                    <div style={{ display: 'flex', minHeight: '100vh' }}>
                        <div style={{ width: "70%" }} className='p-2'>
                            <BreadcumCom fTab="Home" sTab="Filter" route="/" />
                            <div className='title'><h4>Filter result</h4></div>
                            {/* <p className="paragraph">
                                {brand?.description}
                            </p> */}
                            <div>
                                {
                                    data.length ?
                                        <Row>
                                            {data.map((item, index) => {
                                                const rating = findOutRating(item);
                                                return (
                                                    <Col md={4} className="column" key={index} style={{height:'250px'}}>
                                                        <Link to={`/bikes/details/` + item.slug}>
                                                            <Card>
                                                                <Card.Img variant="top" src={item.bikeImage} style={{ height: '150px', width: '100%' }} />
                                                                <hr />
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <div style={{ display: 'flex' }}>
                                                                            <div><BiMoney color='green' size={20} /></div>
                                                                            <div>
                                                                                <p style={{ fontSize: '18px', color: 'black', paddingLeft: '5px', margin: "0" }}>
                                                                                    TK. {item?.price}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div style={{ display: 'flex' }}>
                                                                            <div><FaFire color='red' size={20} /></div>
                                                                            <div>
                                                                                <p style={{ fontSize: '18px', color: 'black', paddingLeft: '5px', margin: "0" }}>
                                                                                    {item.name}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <RateStar rating={rating} size={20}/>
                                                                        </div>
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </Card>
                                                        </Link>
                                                    </Col>
                                                )
                                            })}

                                        </Row>
                                        :
                                        <div style={{ marginTop: '50px', textAlign: 'center' }}>
                                            <p style={{ fontSize: '18px', color: 'red' }}>No motorbikes found.</p>
                                        </div>
                                }
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: 'column', width: '30%' }} className='p-2'>
                            <SideBarBrand />
                            <br />
                            <SearchDiv />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default SearchResult;