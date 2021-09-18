import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col,Table} from 'react-bootstrap';
import './newStyle.css'
import { BiEdit, BiDetail } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';

const News = () => {

    const news = useSelector(state => state.news.news);
    console.log(news);
    return (
        <div className="news">
            <div className="title"><h3>News</h3></div>
            <div style={{ padding: '40px' }}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div><h2>All news, Offers and Travel story:</h2></div>
                    <div style={{ textAlign: 'right' }}>
                        <button
                            className="btn btn-outline-primary"
                            style={{ fontSize: '20px' }}>
                            Add news
                        </button>
                    </div>
                </div>
                <div className="newsContentDiv">
                    <div>

                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>News Title</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map((item, index) => {
                                return (
                                    <tr key={index} className="roww">
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            <img src={item.NewsImage} alt="NewsImage"
                                            height="80px"
                                            width="80px"
                                            />
                                        </td>
                                        <td>
                                            <button className="btn btn-info" title="Edit" ><BiEdit /> Edit</button>
                                            <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete"><RiDeleteBin5Line />Delete</button>
                                            <button className="btn btn-success" style={{ marginLeft: "10px" }} title="Details" ><BiDetail />View details</button>
                                        </td>


                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default News;