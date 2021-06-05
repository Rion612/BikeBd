import React, { useEffect } from 'react';
import './style.css'
import { Col, Table, Row, Button, Form } from 'react-bootstrap'
import Input from '../../Component/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getAllhelmet } from '../../Actions';
import { BiEdit, BiDetail } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Helmet = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllhelmet());

    }, []);
    const helmet = useSelector(state=>state.helmets);
    return (
        <div className="helmet">
            <div className="title"><h3>Helmets</h3></div>
            <div className="chelmet">
                    <div className="coll1">
                        <h4 className="text-center">List of helmets</h4>
                        <hr />
                        <Table responsive="md">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Helmet Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {helmet.helmets.slice(0,5).map((item, index) => {
                                    return (
                                        <tr key={index} className="roww">
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <button className="btn btn-info" title="Edit" ><BiEdit /> Edit</button>
                                                <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete"><RiDeleteBin5Line />Delete</button>
                                            </td>


                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                    <div className="coll2">
                        <h4 className="text-center">Create helmet</h4>
                        <hr />
                        <Input
                            label="Helmet name:"
                            type="text"
                        />
                        <Input
                            label="Helmet price:"
                            type="text"
                        />
                        <Input
                            label="Distributor name:"
                            type="text"
                        />
                        <Input
                            label="Helmet Image :"
                            type="file"
                        />
                        <Button variant="primary" type="submit" size="lg" block>
                            Submit
                        </Button>


                    </div>

            </div>

        </div>
    );
};

export default Helmet;