import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import BreadcumCom from '../../component/BreadcumCom/BreadcumCom';
import FeatureBike from '../../component/FeatureBike/FeatureBike';
import Layout from '../../component/Layout/Layout';
import SearchDiv from '../../component/SearchDiv/SearchDiv';
import SideBarBrand from '../../component/SideBarBrand/sideBarBrand';
import { MdSubtitles, MdCategory } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs"


const SpecificNews = (props) => {
    const news = useSelector(state => state.news.news);
    const newsInfo = news.find(x => x._id === props.match.params.id);
    function capitalize(string) {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    }
    return (
        <div>
            <Layout>
                <div style={{ display: 'flex', minHeight: '100vh', padding: '40px' }}>
                    <div style={{ width: "70%" }} className='p-2'>
                        <BreadcumCom fTab="Home" sTab={'News'} route="/" />
                        <div className='title'><h4>{newsInfo?.title}</h4></div>
                        <div style={{ padding: '50px' }}>
                            <img src={newsInfo?.NewsImage} alt={newsInfo?.titile} style={{ width: '100%', height: '400px' }} />
                            <br />
                            <div style={{ marginTop: '20px' }}>
                                <div style={{display:'flex'}}>
                                    <div><MdSubtitles color='green' size={35}/></div>
                                    <div><p style={{fontSize:'18px',paddingTop:'2px',paddingLeft:'5px',textDecoration:'underline'}}>{newsInfo?.title}</p></div>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div><MdCategory color='orange' size={35}/></div>
                                    <div><p style={{fontSize:'18px',paddingTop:'2px',paddingLeft:'5px'}}>{capitalize(newsInfo?.category)}</p></div>
                                </div>
                                <div style={{display:'flex'}}>
                                    <div><BsCalendarDateFill color='rgb(236, 18, 18)' size={32}/></div>
                                    <div><p style={{fontSize:'18px',paddingTop:'2px',paddingLeft:'5px'}}>{(newsInfo?.createdAt)?.split('T')[0]}</p></div>
                                </div>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <p style={{fontSize:'18px'}} className='text-justify'>{newsInfo?.description}</p>
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
            </Layout>
        </div>
    );
};

export default SpecificNews;