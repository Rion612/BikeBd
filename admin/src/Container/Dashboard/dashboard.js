import React from 'react';
import './dash.css'

const dashboard = () => {
    return (
        <div className="dashboard">
            <div className="title"><h3>Admin Dashboard</h3></div>
            <div className="container flex-container">
                <div className="p-5"><p className="text-center">Total Bikes</p></div>
                <div className="p-5"><p className="text-center">Total Helmets</p></div>
                <div className="p-5"><p className="text-center">Total Bike brand</p></div>
                <div className="p-5"><p className="text-center">Total Helmet brand</p></div>
            </div>

        </div>


    );
};

export default dashboard;