import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './helmetBrand.css';
import { BiEdit, BiDetail } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Table, Modal,Button} from 'react-bootstrap'
import Input from '../../Component/Input/Input';
import { createHelmetBrand, deleteHelmetBrand, editHelmetBrand } from '../../Actions';

const HelmetBrand = () => {
    const dispatch = useDispatch();
    const hbrands = useSelector(state => state.helmetBrands);
    const [brandDetails, setbrandDetails] = useState({});
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [hbrandImage, sethbrandImage] = useState("");
    const [show, setShow] = useState(false);
    const [view, setView] = useState(false);
    const [watch, setWatch] = useState(false);
    const [display, setDisplay] = useState(false);
    const handleClose = () => {
        const form = new FormData();
        form.append("name", name);
        form.append("description", description);
        form.append("hbrandImage", hbrandImage);

        dispatch(createHelmetBrand(form));
        setname("");
        setdescription("");

        setDisplay(false);
    }
    const handleDisplay = () => {
        setDisplay(true);
    }
    const manageCLose = () => {
        setView(false);
    }
    const manageView = (item) => {
        setbrandDetails(item);
        setView(true);
    }
    const controlClose = () => {
        dispatch(deleteHelmetBrand(brandDetails));
        setWatch(false);
    }
    const controlShow = (item) => {
        setbrandDetails(item);
        setWatch(true);
    }
    const directClose = () => {
        setname("");
        setdescription("");
        sethbrandImage("");
        setShow(false);
    }
    const saveChanges = ()=>{
        const form = new FormData();
        form.append("_id", brandDetails._id);
        if (name) {
            form.append("name", name);

        }
        if (description) {
            form.append("description", description);
        }
        if (hbrandImage) {
            form.append("hbrandImage", hbrandImage);
        }
        dispatch(editHelmetBrand(form));
        setname("");
        setdescription("");
        setShow(false);
    }
    const directShow = (item) => {
        setbrandDetails(item);
        setname(item.name);
        setdescription(item.description);
        sethbrandImage(item.hbrandImage);
        setShow(true);
    }
    return (
        <div className="helmetBrand">
            <div className="title"><h3>Helmet Brands</h3></div>
            <div className="bb"><button className="btn btn-outline-primary" onClick={handleDisplay}>Create brand</button></div>
            <div className="content">
                <div>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Helmet Brand Name</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hbrands.helmetBrands.map((item, index) => {
                                return (
                                    <tr key={index} className="roww">
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{(item.createdAt).split('T')[0]}</td>
                                        <td>{(item.updatedAt).split('T')[0]}</td>
                                        <td>
                                            <button className="btn btn-info" title="Edit" onClick={()=>directShow(item)}><BiEdit /> Edit</button>
                                            <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete" onClick={()=>controlShow(item)}><RiDeleteBin5Line />Delete</button>
                                            <button className="btn btn-success" style={{ marginLeft: "10px" }} title="Details" onClick={()=>manageView(item)}><BiDetail />View details</button>
                                        </td>


                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
                {/*  Modal for edit  */}
                <Modal show={show} onHide={directClose} animation={false}>
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
                            <textarea className="form-control"
                                value={description} rows="6" cols="54"
                                 onChange={(e) => setdescription(e.target.value)} />

                        </div>

                        <Input
                            label="Brand Image :"
                            type="file"
                            name="hbrandImage"
                            onChange={(e) => sethbrandImage(e.target.files[0])}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={directClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={saveChanges}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/*  Modal for details  */}
                <Modal show={view} onHide={manageCLose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Brand Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ fontWeight: 'bold' }}>Name :</div>
                        <div>{brandDetails.name}</div>
                        <hr />
                        <div style={{ fontWeight: 'bold' }}>Description :</div>
                        <div className="text-justify">{brandDetails.description}</div>
                        <hr />
                        <div style={{ fontWeight: 'bold' }}>Image :</div>
                        <div className="text-center">
                            <img
                                src={brandDetails.hbrandImage}
                                height="100"
                                width="100"
                                alt="Brand"
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={manageCLose}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>

                {/*  Modal for delete  */}
                <Modal show={watch} onHide={() => setWatch(false)} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you want to delete this item ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => setWatch(false)}>
                            No
                        </Button>
                        <Button variant="danger" onClick={controlClose}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/*  Modal for create  */}
                <Modal show={display} onHide={() => setDisplay(false)} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create brand</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            label="Helmet Brand name :"
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}

                        />
                        <div className="form-group">
                            <label>Description:</label>
                            <textarea className="form-control" value={description} rows="6" cols="54" onChange={(e) => setdescription(e.target.value)} />

                        </div>

                        <Input
                            label="Helmet Brand Image :"
                            type="file"
                            name="hbrandImage"
                            onChange={(e) => sethbrandImage(e.target.files[0])}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setDisplay(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


        </div>
    );
};

export default HelmetBrand;