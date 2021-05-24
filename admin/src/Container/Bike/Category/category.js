import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, deleteCategory, getCategory } from '../../../Actions';
import Table from 'react-bootstrap/Table';
import { Modal, Button } from 'react-bootstrap'
import './style.css'
import Input from '../../../Component/Input/Input';
import { IconContext } from 'react-icons'

const Ctaegory = () => {
    const [view, setView] = useState(false);
    const [categoryDetails, setcategoryDetails] = useState({});

    const manageClose = () => {
        dispatch(deleteCategory(categoryDetails));
        setView(false)
    };
    const manageShow = (item) => {
        setcategoryDetails(item);
        setView(true)
    };
    const [name, setName] = useState("");
    const [categoryImage, setcategoryImage] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => {
        const form = new FormData();
        form.append("name", name);
        form.append("categoryImage", categoryImage);

        dispatch(createCategory(form));
        setName("");
        setcategoryImage("");
        setShow(false)
    };
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory());

    }, []);
    const bikeCategories = useSelector(state => state.category.categories);
    return (
        <div className="category">
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="title"><h3>Categories of bike</h3></div>
                <div className="b"><button className="btn btn-outline-primary" onClick={handleShow}>Create category</button></div>
                <div className="content">
                    <div>
                        <Table responsive="md">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Category Name</th>
                                    <th>Category Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bikeCategories.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <img src={item.categoryImage
                                                } alt="" width="100" height="100" />
                                            </td>
                                            <td className="bb">
                                                <button className="btn btn-info"><BiEdit /></button>
                                                <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={()=>{manageShow(item)}}><RiDeleteBin5Line /></button>
                                            </td>


                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>

                </div>
                {/*  Modal for create  */}
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            label="Category name :"
                            type="text"
                            placeholder="Enter category name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                        <Input
                            label="Category Image :"
                            type="file"
                            name="categoryImage"
                            onChange={(e) => setcategoryImage(e.target.files[0])}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setShow(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/*  Modal for delete  */}               
                <Modal show={view} onHide={manageClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you want to delete this item ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={()=>setView(false)}>
                            No
                        </Button>
                        <Button variant="danger" onClick={manageClose}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </IconContext.Provider>
        </div>

    );
};

export default Ctaegory;