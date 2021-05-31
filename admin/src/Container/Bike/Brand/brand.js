import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand, deleteBrand, editBrand, getBrands } from '../../../Actions/brand.actions';
import Table from 'react-bootstrap/Table';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { BiEdit, BiDetail } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Input from '../../../Component/Input/Input';

import './style.css'
const Brand = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [name, setname] = useState("");
    const [brandImage, setbrandImage] = useState("");
    const [description, setdescription] = useState("");

    const [details, setdetails] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setdetails(item);
        setShow(true);
    }
    const [view, setView] = useState(false);
    const manageClose = () => {
        dispatch(deleteBrand(details));
        setView(false)
    };
    const manageShow = (item) => {
        setdetails(item);
        setView(true)
    };
    const [watch, setWatch] = useState(false);

    const controlClose = () => {
        const form = new FormData();
        form.append("name", name);
        form.append("description",description);
        form.append("brandImage", brandImage);

        dispatch(createBrand(form));
        setname("");
        setdescription("");

        setWatch(false)
    };
    const controlShow = () => {
        setWatch(true)
    };

    const [display, setDisplay] = useState(false);
    const directClose = () => {
        const form = new FormData();
        form.append("_id", details._id);
        if (name) {
            form.append("name", name);

        }
        if (description) {
            form.append("description", description);
        }
        if (brandImage) {
            form.append("brandImage", brandImage);
        }
        dispatch(editBrand(form));
        setname("");
        setdescription("");
        setDisplay(false);
    };
    const directShow = (item) => {
        setname(item.name);
        setdescription(item.description);
        setdetails(item);
        setDisplay(true);
    }

    useEffect(() => {
        dispatch(getBrands());
    }, []);

    const brand = useSelector(state => state.brand);
    return (
        <div className="brand">
            <div className="title"><h3>Bike brands</h3></div>
            <div className="b"><button className="btn btn-outline-primary" onClick={controlShow} >Create brand</button></div>
            <div className="content">
                <div>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Brand Name</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brand.brands.map((item, index) => {
                                return (
                                    <tr key={index} className="roww">
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{(item.createdAt).split('T')[0]}</td>
                                        <td>{(item.updatedAt).split('T')[0]}</td>
                                        <td className="bb">
                                            <button className="btn btn-info" title="Edit" onClick={() => directShow(item)}><BiEdit /> Edit</button>
                                            <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete" onClick={() => manageShow(item)}><RiDeleteBin5Line />Delete</button>
                                            <button className="btn btn-success" style={{ marginLeft: "10px" }} title="Details" onClick={() => handleShow(item)}><BiDetail />View details</button>
                                        </td>


                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
                {/*  Modal for details  */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Brand Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ fontWeight: 'bold' }}>Name :</div>
                        <div>{details.name}</div>
                        <hr />
                        <div style={{ fontWeight: 'bold' }}>Description :</div>
                        <div className="text-justify">{details.description}</div>
                        <hr />
                        <div style={{ fontWeight: 'bold' }}>Image :</div>
                        <div className="text-center">
                            <img
                                src={details.brandImage}
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
                {/*  Modal for delete  */}
                <Modal show={view} onHide={() => setView(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you want to delete this item ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => setView(false)}>
                            No
                        </Button>
                        <Button variant="danger" onClick={manageClose}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/*  Modal for edit  */}
                <Modal show={display} onHide={directClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit brand</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            label="Brand name :"
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}

                        />
                        <div className="form-group">
                        <label>Description:</label>
                        <textarea className="form-control" value={description} rows="6" cols="54" onChange={(e) => setdescription(e.target.value)}/>

                        </div>
                        
                        <Input
                            label="Brand Image :"
                            type="file"
                            name="brandImage"
                            onChange={(e) => setbrandImage(e.target.files[0])}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setDisplay(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={directClose}>
                            Apply
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/*  Modal for create  */}
                <Modal show={watch} onHide={controlClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create brand</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            label="Brand name :"
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}

                        />
                        <div className="form-group">
                        <label>Description:</label>
                        <textarea className="form-control" value={description} rows="6" cols="54" onChange={(e) => setdescription(e.target.value)}/>

                        </div>
                        
                        <Input
                            label="Brand Image :"
                            type="file"
                            name="brandImage"
                            onChange={(e) => setbrandImage(e.target.files[0])}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setWatch(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={controlClose}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );
};

export default Brand;