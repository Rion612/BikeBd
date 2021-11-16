import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col,Table} from 'react-bootstrap';
import { BiEdit, BiDetail } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import './style.css'

const Bike = () => {
    const [data,setData]=useState([]);
    return (
        <div className="bike">
            <div className="title"><h3>List of bikes</h3></div>
            <div className="container" style={{ marginTop: '50px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to={'/create/bikes'} className="btn btn-outline-primary">Create bike</Link>
                </div>
                <div style={{marginTop:'30px'}}>
                    <div>

                        <Table responsive="md">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Brand</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => {
                                    return (
                                        <tr key={index} className="roww">
                                            <td>{index + 1}</td>
                                            <td>{item.title}</td>
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

export default Bike;