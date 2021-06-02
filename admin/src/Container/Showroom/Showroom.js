import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getShowroom } from '../../Actions/showroom.actions';
import './style.css';
import { Table, Modal, Button } from 'react-bootstrap'
import Input from '../../Component/Input/Input';
import { BiEdit, BiDetail } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function Showroom() {
    const [show, setShow] = useState(false);
    const [showroomdetails, setShowroomdetails] = useState({});
    const handleClose =()=>{
        setShow(false);
    }
    const handleShow =(item)=>{
        console.log(item);
        setShowroomdetails(item);
        setShow(true);
    }
    const [searcitem, setsearcitem] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShowroom());
    }, []);
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const showroom = useSelector(state => state.showroom);
    return (
        <div className="showroom">
            <div className="title"><h3>Bike Showrooms</h3></div>
            <div className="bbb">
                <div className="searchBar">
                    <Input
                        type="text"
                        placeholder="Search by district"
                        value={searcitem}
                        onChange={(e) => setsearcitem(e.target.value)}
                    />

                </div>



                <button className="btn btn-outline-primary" >Create showroom</button>
            </div>
            <div className="content">
                <div>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Thana</th>
                                <th>District</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showroom.showrooms.filter((val) => {
                                if (searcitem == "") {
                                    return val;
                                }
                                else if (val.district.toLowerCase().includes(searcitem.toLowerCase())) {
                                    return val;
                                }
                            }).map((item, index) => {
                                return (
                                    <tr key={index} className="roww">
                                        <td>{index + 1}</td>
                                        <td>{capitalize(item.name)}</td>
                                        <td>{capitalize(item.address)}</td>
                                        <td>{capitalize(item.thana)}</td>
                                        <td>{capitalize(item.district)}</td>
                                        <td>
                                            <button className="btn btn-info" title="Edit" > <BiEdit /></button>
                                            <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete" ><RiDeleteBin5Line /></button>
                                            <button className="btn btn-success" style={{ marginLeft: "10px" }} title="Details" onClick={()=>handleShow(item)} ><BiDetail /></button>
                                        </td>


                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
            {/*  Modal for details  */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Showroom Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ fontWeight: 'bold' }}>Showroom Name :</div>
                    <div>{showroomdetails.name}</div>
                    <hr />
                    <div style={{ fontWeight: 'bold' }}>Address :</div>
                    <div>{showroomdetails.address}</div>
                    <hr />
                    <div className="row">
                    <div className="col" style={{ fontWeight: 'bold' }}>Thana :</div>
                    <div className="col" style={{ fontWeight: 'bold' }}>District:</div>
                    </div>
                    <div className="row">
                    <div className="col" >{showroomdetails.thana}</div>
                    <div className="col" >{showroomdetails.district}</div>
                    </div>
                    
                    <hr />
                    <div style={{ fontWeight: 'bold' }}>Cell No :</div>
                    <div className="text-justify">{showroomdetails.cellNo}</div>
                    <hr />
                    <div style={{ fontWeight: 'bold' }}>Brand Image :</div>
                    <div className="text-center">
                            <img
                                src={showroomdetails.brand?.brandImage}
                                height="100"
                                width="100"
                                alt="Brand"
                            />
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Showroom