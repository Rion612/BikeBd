import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Bike = () => {
    return (
        <div className="bike">
            <div className="title"><h3>List of bikes</h3></div>
            <div className="container">
                <Link to={ '/create/bikes' }>Create bike</Link>
            </div>

        </div>
    );
};

export default Bike;