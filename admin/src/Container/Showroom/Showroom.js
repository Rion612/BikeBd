import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createShowroom, getShowroom } from '../../Actions/showroom.actions';
import './style.css';
import { Table, Modal, Button, Spinner } from 'react-bootstrap'
import Input from '../../Component/Input/Input';
import { BiEdit, BiDetail } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function Showroom() {
    useEffect(() => {
        dispatch(getShowroom());
    }, []);
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [district, setdistrict] = useState("");
    const [cellNo, setcellNo] = useState("");
    const [thana, setthana] = useState("");
    const [brandId, setbrandId] = useState("");

    const [watch, setWatch] = useState("");

    const applyWatch = () => {
        setWatch(true);
    }
    const applyClose = () => {
        const data = {
            name,
            address,
            district,
            cellNo,
            thana,
            brand: brandId
        }
        console.log(data);
        dispatch(createShowroom(data));
        setname("");
        setaddress("");
        setcellNo("");
        setthana("");
        setdistrict("");
        setbrandId("");
        setWatch(false);
    }

    const [display, setDisplay] = useState(false);
    const directShow = (item) => {
        setname(item.name);
        setaddress(item.address);
        setcellNo(item.cellNo);
        setthana(item.thana);
        setdistrict(item.district);
        setbrandId(item.brand.name);
        setShowroomdetails(item);
        setDisplay(true);
    }
    const directClose = () => {
        setname("");
        setaddress("");
        setcellNo("");
        setthana("");
        setdistrict("");
        setbrandId("");
        setDisplay(false);

    }
    const [view, setView] = useState(false);
    const manageClose = () => {
        setView(false);
    }
    const manageView = (item) => {
        setShowroomdetails(item);
        setView(true);
    }
    const [show, setShow] = useState(false);
    const [showroomdetails, setShowroomdetails] = useState({});
    const handleClose = () => {
        setShow(false);
    }

    const handleShow = (item) => {
        setShowroomdetails(item);
        setShow(true);
    }
    const [searcitem, setsearcitem] = useState("");
    const dispatch = useDispatch();

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const showroom = useSelector(state => state.showroom);
    const brands = useSelector(state => state.brand.brands);
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



                <button className="btn btn-outline-primary" onClick={applyWatch}>Create showroom</button>
            </div>
            <div className="content">
                <div>
                    {showroom.loading ?
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Spinner animation="border" role="status" variant="primary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div> :
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
                                                <button className="btn btn-info" title="Edit" onClick={() => directShow(item)}> <BiEdit /></button>
                                                <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete" onClick={() => manageView(item)}><RiDeleteBin5Line /></button>
                                                <button className="btn btn-success" style={{ marginLeft: "10px" }} title="Details" onClick={() => handleShow(item)} ><BiDetail /></button>
                                            </td>


                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    }
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

            {/*  Modal for delete  */}
            <Modal show={view} onHide={() => setView(false)} animation={false}>
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
            <Modal show={display} onHide={() => setDisplay(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit showroom</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        label="Showroom name :"
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}

                    />
                    <Input
                        label="Showroom address :"
                        type="text"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}

                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Input
                            label="Thana :"
                            type="text"
                            value={thana}
                            onChange={(e) => setthana(e.target.value)}

                        />
                        <Input
                            label="District :"
                            type="text"
                            value={district}
                            onChange={(e) => setdistrict(e.target.value)}

                        />

                    </div>

                    <Input
                        label="Cell No :"
                        type="text"
                        value={cellNo}
                        onChange={(e) => setcellNo(e.target.value)}

                    />
                    <label>Brand :</label>
                    <select
                        className="form-control"
                        value={brandId}
                        onChange={(e) => setbrandId(e.target.value)}
                    >
                        <option>Select brand</option>
                        {brands.map((option, index) => (

                            <option key={index} value={option.value}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={directClose}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={directClose}>
                        Save changes
                        </Button>
                </Modal.Footer>
            </Modal>

            {/*  Modal for create  */}
            <Modal show={watch} onHide={() => setWatch(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create showroom</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        label="Showroom name :"
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}

                    />
                    <Input
                        label="Showroom address :"
                        type="text"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}

                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Input
                            label="Thana :"
                            type="text"
                            value={thana}
                            onChange={(e) => setthana(e.target.value)}

                        />
                        <Input
                            label="District :"
                            type="text"
                            value={district}
                            onChange={(e) => setdistrict(e.target.value)}

                        />

                    </div>

                    <Input
                        label="Cell No :"
                        type="text"
                        value={cellNo}
                        onChange={(e) => setcellNo(e.target.value)}

                    />
                    <label>Brand :</label>
                    <select
                        className="form-control"
                        value={brandId}
                        onChange={(e) => setbrandId(e.target.value)}
                    >
                        <option>Select brand</option>
                        {brands.map((option, index) => (

                            <option key={index} value={option._id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setWatch(false)}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={applyClose}>
                        Create
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Showroom