import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Bike = () => {
    return (
        <div className="bike">
            <div className="title"><h3>List of bikes</h3></div>
            <div className="container" style={{marginTop:'50px'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to={'/create/bikes'} className="btn btn-outline-primary">Create bike</Link>
                </div>

            </div>

        </div>
    );
};

export default Bike;