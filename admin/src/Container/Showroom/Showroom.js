import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getShowroom } from '../../Actions/showroom.actions';
import './style.css';
import { Table } from 'react-bootstrap'

function Showroom() {
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
            <div className="b"><button className="btn btn-outline-primary" >Create showroom</button></div>
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
                            </tr>
                        </thead>
                        <tbody>
                            {showroom.showrooms.map((item, index) => {
                                return (
                                    <tr key={index} className="roww">
                                        <td>{index + 1}</td>
                                        <td>{capitalize(item.name)}</td>
                                        <td>{capitalize(item.address)}</td>
                                        <td>{capitalize(item.thana)}</td>
                                        <td>{capitalize(item.district)}</td>
                                        <td className="bb">
                                            <button className="btn btn-info" title="Edit" > Edit</button>
                                            <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete" >Delete</button>
                                        </td>


                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
            </div>
    )
}

export default Showroom