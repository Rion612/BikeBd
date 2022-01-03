import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import BreadcumCom from '../../component/BreadcumCom/BreadcumCom';
import FeatureBike from '../../component/FeatureBike/FeatureBike';
import Layout from '../../component/Layout/Layout';
import SearchDiv from '../../component/SearchDiv/SearchDiv';
import SideBarBrand from '../../component/SideBarBrand/sideBarBrand';


const ShowroomBrands = (props) => {
    const showrooms = useSelector(state => state.showroom.showrooms);
    const brands = useSelector(state => state.brand.brands);
    const brandInfo = brands.find(x => x.slug === props.match.params.slug);
    const brand_showroom = showrooms.filter(x => x.brand._id === brandInfo?._id);
    return (
        <div>
            <Layout>
                <div style={{ display: 'flex', minHeight: '100vh', padding: '40px' }}>
                    <div style={{ width: "70%" }} className='p-2'>
                        <BreadcumCom fTab="Home" sTab={props.match.params.slug + ' motorbikes showrooms'} route="/" />
                        <div className='title'><h4>List of {props.match.params.slug} Motorbikes Showrooms</h4></div>
                        <div>
                            {
                                brand_showroom.length ?
                                    <Table bordered style={
                                        { marginTop: '20px' }
                                    }>
                                        <thead>
                                            <tr>
                                                <th>S.L</th>
                                                <th>Showroom name</th>
                                                <th>Address</th>
                                                <th>Thana</th>
                                                <th>District</th>
                                                <th>Telephone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                brand_showroom.map((item,index)=>{
                                                    return(
                                                        <tr key={index}>
                                                            <td>{index+1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.address}</td>
                                                            <td>{item.thana}</td>
                                                            <td>{item.district}</td>
                                                            <td>{item.cellNo}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                    :
                                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                                        <p style={{ fontSize: '18px', color: 'red' }}>No showrooms found asscociated this brand.</p>
                                    </div>
                            }
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
            </Layout>
        </div>
    );
};

export default ShowroomBrands;