import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, Spinner, Col, Table } from 'react-bootstrap';
import './newStyle.css'
import { BiEdit, BiDetail } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { getAllNews } from '../../Actions';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../helpers/axios';

const News = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [newsImage, setNewsImage] = useState("");
    const [category,setCategory] = useState("");
    const [show, setShow] = useState(false);
    const [createModalShow, setCreateModalShow] = useState(false);
    const [details, setdetails] = useState({});
    const [state, setState] = useState(false);

    const handleClose = () => setShow(false);
    useEffect(() => {
        dispatch(getAllNews())
    }, [state])
    const news = useSelector(state => state.news);
    const handleShow = (item) => {
        setdetails(item);
        setShow(true);
    }

    const [view, setView] = useState(false);
    const manageClose = async () => {
        const delete_response = await axios.post('/delete/news', { _id: details._id });
        if (delete_response.status == 200) {
            toast.success(delete_response.data.message);
            setState(!state);
        }
        else {
            toast.error(delete_response.data.message);
        }
        setView(false)
    };
    const manageShow = (item) => {
        setdetails(item);
        setView(true)
    };

    const [display, setDisplay] = useState(false);
    const directClose = async () => {
        const form = new FormData();
        form.append("_id", details._id);
        if (title) {
            form.append("title", title);
        }
        if(category){
            form.append("category", category);
        }
        if (description) {
            form.append("description", description);
        }
        if (newsImage) {
            form.append("NewsImage", newsImage);
        }
        const edit_response = await axios.post('/update/news',form);
        if(edit_response.status === 200 ){
            toast.success(edit_response.data.message);
            setState(!state);
        }else{
            toast.error("Something is wrong!");
        }
        setTitle("");
        setCategory("");
        setDescription("");
        setNewsImage("");
        setDisplay(false);
    };
    const directShow = (item) => {
        setdetails(item);
        setTitle(item.title);
        setDescription(item.description);
        setCategory(item.category);
        setDisplay(true);
    }
    const createNewsFromModal = async() =>{   
        const form = new FormData();
        form.append("title", title);
        form.append("category", category);
        form.append("NewsImage", newsImage);
        form.append("description", description);
        const create_response = await axios.post('/create/news',form);
        if( create_response.status === 201){
            toast.success("News created successfully.");
            setState(!state);
        }
        setTitle("");
        setCategory("");
        setDescription("");
        setNewsImage("");
        setCreateModalShow(false);
    }
    const OpenModalForCreateNews = () =>{
        setCreateModalShow(true);
    }  
    return (
        <div className="news">
            <ToastContainer />
            <div className="title"><h3>News</h3></div>
            <div style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div><h2>All news, Offers and Travel story:</h2></div>
                    <div style={{ textAlign: 'right' }}>
                        <button
                            className="btn btn-outline-primary"
                            style={{ fontSize: '20px' }} onClick={OpenModalForCreateNews}>
                            Add news
                        </button>
                    </div>
                </div>
                <div className="newsContentDiv">
                    {
                        news.loading ?
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Spinner animation="border" variant="success" />
                            </div> :
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
                                        {
                                            news.news.map((item, index) => {
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
                                                            <button className="btn btn-info" title="Edit" onClick={() => directShow(item)}><BiEdit /> Edit</button>
                                                            <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete" onClick={() => manageShow(item)}><RiDeleteBin5Line />Delete</button>
                                                            <button className="btn btn-success" style={{ marginLeft: "10px" }} title="Details" onClick={() => handleShow(item)} ><BiDetail />View details</button>
                                                        </td>


                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </Table>
                            </div>
                    }
                </div>
            </div>
            {/*  Modal for details  */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>News Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ fontWeight: 'bold' }}>Title :</div>
                    <div>{details.title}</div>
                    <hr />
                    <div style={{ fontWeight: 'bold' }}>Description :</div>
                    <div className="text-justify">{details.description}</div>
                    <hr />
                    <div style={{ fontWeight: 'bold' }}>Category :</div>
                    <div className="text-justify">{details.category}</div>
                    <hr />
                    <div style={{ fontWeight: 'bold' }}>Image :</div>
                    <div className="text-center">
                        <img
                            src={details.NewsImage}
                            height="200"
                            width="200"
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
                        <Modal.Title>Create News</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>News title:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Category</label>
                        <select className="form-control" value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <option>Choose category</option>
                            <option value="news">News</option>
                            <option value="offer">Offer</option>
                            <option value="travel_story">Travel story</option>
                        </select>
                        <div className="form-group">
                            <label>Description:</label>
                            <textarea className="form-control" value={description} rows="6" cols="54" onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <label>News Image :</label>
                        <input
                            type="file"
                            name="NewsImage"
                            onChange={(e) => setNewsImage(e.target.files[0])}
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
            <Modal show={createModalShow} onHide={() => setCreateModalShow(false)} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit News</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>News title:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Category</label>
                        <select className="form-control" value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <option>Choose category</option>
                            <option value="news">News</option>
                            <option value="offer">Offer</option>
                            <option value="travel_story">Travel story</option>
                        </select>
                        <div className="form-group">
                            <label>Description:</label>
                            <textarea className="form-control" value={description} rows="6" cols="54" onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <label>News Image :</label>
                        <input
                            type="file"
                            name="NewsImage"
                            onChange={(e) => setNewsImage(e.target.files[0])}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setCreateModalShow(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={createNewsFromModal}>
                            Apply
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
};

export default News;