import React, { useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../../Actions';
import Table from 'react-bootstrap/Table'
import './style.css'

const Ctaegory = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory());

    }, []);
    const bikeCategories = useSelector(state => state.category.categories);
    return (
        <div className="category">
            <div className="title"><h3>Categories of bike</h3></div>
            <div className="b"><button className="btn btn-outline-primary">Create category</button></div>
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
                                            <button className="btn btn-warning"><BiEdit/></button>
                                            <button className="btn btn-danger" style={{marginLeft:"10px"}}><RiDeleteBin5Line/></button>
                                        </td>


                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>

            </div>
            <ul>

            </ul>
        </div>
    );
};

export default Ctaegory;