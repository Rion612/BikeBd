import React from 'react';
import Layout from "../../component/Layout/Layout";
import BreadcumCom from '../../component/BreadcumCom/BreadcumCom';
import { useSelector } from 'react-redux';
import SearchDiv from '../../component/SearchDiv/SearchDiv';
import SideBarBrand from '../../component/SideBarBrand/sideBarBrand';
import FeatureBike from '../../component/FeatureBike/FeatureBike';
import { Table } from "react-bootstrap"
import RateStar from '../../component/Rating star/RateStar';
import { Link } from 'react-router-dom';
const CompareResult = (props) => {
    const bikes = useSelector(state => state.bikes.bikes);
    const brand = useSelector(state => state.brand.brands);
    const query = new URLSearchParams(props.location.search);
    const bike1 = query.get('bike1');
    const motorbike1 = bikes.find(x => x.slug === bike1);
    const bike2 = query.get('bike2');
    const motorbike2 = bikes.find(x => x.slug === bike2);
    const b1 = brand?.find(x => x._id === motorbike1?.brand);
    const b2 = brand?.find(x => x._id === motorbike2?.brand);
    return (
        <Layout>
            <div className="container">
                <div style={{ display: 'flex', minHeight: '100vh' }}>
                    <div style={{ width: "70%" }} className='p-2'>
                        <BreadcumCom fTab="Comparison" sTab="Result" route="/comparison" />
                        <div className='title'><h4>{motorbike1?.name} vs {motorbike2?.name} features comparison</h4></div>

                        <div className='comapareTable' style={{fontSize:'15px'}}>
                            <Table striped bordered hover size='sm'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>{motorbike1?.name}</th>
                                        <th>{motorbike2?.name}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Image</td>
                                        <td className='text-center'>
                                            <img alt='Motorbike Image' src={motorbike1?.bikeImage} heigh="300px" width="300px" />
                                        </td>
                                        <td className='text-center'>
                                            <img alt='Motorbike Image' src={motorbike2?.bikeImage} heigh="300px" width="300px" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Rating</td>
                                        <td className='text-center'>
                                            <RateStar rating={4} size={25} />
                                        </td>
                                        <td className='text-center'>
                                            <RateStar rating={5} size={25} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td className='text-center'>{b1?.name}</td>
                                        <td className='text-center'>{b2?.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td className='text-center'>{motorbike1?.engine_type}</td>
                                        <td className='text-center'>{motorbike2?.engine_type}</td>
                                    </tr>
                                    <tr>
                                        <td>Displacement(CC)</td>
                                        <td className='text-center'>{motorbike1?.displacement} cc</td>
                                        <td className='text-center'>{motorbike2?.displacement} cc</td>
                                    </tr>
                                    <tr>
                                        <td>Mileage</td>
                                        <td className='text-center'>{motorbike1?.mileage} km/L</td>
                                        <td className='text-center'>{motorbike2?.mileage} km/L</td>
                                    </tr>
                                    <tr>
                                        <td>Max power</td>
                                        <td className='text-center'>{motorbike1?.max_power} km/L</td>
                                        <td className='text-center'>{motorbike2?.max_power} km/L</td>
                                    </tr>
                                    <tr>
                                        <td>Max torque</td>
                                        <td className='text-center'>{motorbike1?.max_torque}</td>
                                        <td className='text-center'>{motorbike2?.max_torque}</td>
                                    </tr>
                                    <tr>
                                        <td>Gears</td>
                                        <td className='text-center'>{motorbike1?.gears}</td>
                                        <td className='text-center'>{motorbike2?.gears}</td>
                                    </tr>
                                    <tr>
                                        <td>Clutch</td>
                                        <td className='text-center'>{motorbike1?.clutch}</td>
                                        <td className='text-center'>{motorbike2?.clutch}</td>
                                    </tr>
                                    <tr>
                                        <td>Engin cooling type</td>
                                        <td className='text-center'>{motorbike1?.engine_cooling}</td>
                                        <td className='text-center'>{motorbike2?.engine_cooling}</td>
                                    </tr>
                                    <tr>
                                        <td>Weight</td>
                                        <td className='text-center'>{motorbike1?.weight} kg</td>
                                        <td className='text-center'>{motorbike2?.weight} kg</td>
                                    </tr>
                                    <tr>
                                        <td>Chassis</td>
                                        <td className='text-center'>{motorbike1?.chassis}</td>
                                        <td className='text-center'>{motorbike2?.chassis}</td>
                                    </tr>
                                    <tr>
                                        <td>Top speed</td>
                                        <td className='text-center'>{motorbike1?.topspped} Kmpl (Approx)</td>
                                        <td className='text-center'>{motorbike2?.topspped} Kmpl (Approx)</td>
                                    </tr>
                                    <tr>
                                        <td>Brake(F/R)</td>
                                        <td className='text-center'>
                                            {motorbike1?.front_brake}<br />
                                            {motorbike1?.rear_brake}
                                        </td>
                                        <td className='text-center'>
                                        {motorbike2?.front_brake}<br />
                                            {motorbike2?.rear_brake}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Suspension(F/R)</td>
                                        <td className='text-center'>
                                            {motorbike1?.front_suspension}<br />
                                            {motorbike1?.rear_suspension}
                                        </td>
                                        <td className='text-center'>
                                        {motorbike2?.front_suspension}<br />
                                            {motorbike2?.rear_suspension}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td className='text-center'>TK. {motorbike1?.price}</td>
                                        <td className='text-center'>TK. {motorbike2?.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Full features</td>
                                        <td className='text-center'>
                                            <Link>Click here</Link>
                                        </td>
                                        <td className='text-center'>
                                            <Link>Click here</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
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
    );
};

export default CompareResult;