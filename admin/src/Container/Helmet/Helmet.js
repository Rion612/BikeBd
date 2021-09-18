import React, { useEffect, useState } from 'react';
import './style.css'
import { Col, Table, Row, Button, Form } from 'react-bootstrap'
import Input from '../../Component/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getAllhelmet } from '../../Actions';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';

const Helmet = () => {
    const [helemetbrandId, sethelemetbrandId] = useState("");
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [distributor, setdistributor] = useState('');
    const [helmetImage, sethelmetImage] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllhelmet());

    }, []);
    const helmet = useSelector(state => state.helmets);
    const hbrands = useSelector(state=>state.helmetBrands);
    const totalHelmets = helmet.helmets;
    const [pageNumber, setpageNumber] = useState(0);
    const helmetPerPage = 5;
    const pageVisited = pageNumber * helmetPerPage;
    const pageCount = Math.ceil(totalHelmets.length / helmetPerPage);
    const displayHelmets = totalHelmets.slice(pageVisited, pageVisited + helmetPerPage).map((item, index) => {
        return (
            <tr key={index} className="roww">
                <td>{item.name}</td>
                <td>
                    <button className="btn btn-info" title="Edit" ><BiEdit /> Edit</button>
                    <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete"><RiDeleteBin5Line />Delete</button>
                </td>


            </tr>
        )
    });
    const changePage = ({selected})=>{
        setpageNumber(selected);
    }
    const submitHelmetHandler =(e)=>{
        e.preventDefault();

        const helmetObj ={
            name,
            price,
            distributor,
            helmetImage,
            brand:helemetbrandId
        }
        console.log(helmetObj);

    }

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
                                <th>Helmet Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayHelmets}
                        </tbody>
                    </Table>
                    <ReactPaginate 
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttn"}
                        previousClassName={"previousBtn"}
                        nextClassName={"nextBtn"}
                        activeClassName={"activePagination"}
                        disabledClassName={"disabledPagination"}
                     />
                </div>
                <div className="coll2">
                    <h4 className="text-center">Create helmet</h4>
                    <hr />
                    <Input
                        label="Helmet name:"
                        type="text"
                        value={name}
                        onChange={(e)=>setname(e.target.value)}
                    />
                    <Input
                        label="Helmet price:"
                        type="text"
                        value={price}
                        onChange={(e)=>setprice(e.target.value)}
                    />
                    <Input
                        label="Distributor name:"
                        type="text"
                        value={distributor}
                        onChange={(e)=>setdistributor(e.target.value)}
                    />
                    <label>Helmet Brand :</label>
                    <select
                        className="form-control"
                        value={helemetbrandId}
                        onChange={(e) => sethelemetbrandId(e.target.value)}
                    >
                        <option>Select brand</option>
                        {hbrands.helmetBrands.map((option, index) => (

                            <option key={index} value={option._id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                    <Input
                        label="Helmet Image :"
                        type="file"
                        name="helmetImage"
                        onChange={(e)=>sethelmetImage(e.target.files[0])}
                    />
                    <Button variant="primary" type="submit" size="lg" block onClick={submitHelmetHandler}>
                        Submit
                        </Button>


                </div>

            </div>

        </div>
    );
};

export default Helmet;