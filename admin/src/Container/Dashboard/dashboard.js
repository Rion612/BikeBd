import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMotorcycle } from 'react-icons/fa';
import { GiFullMotorcycleHelmet, GiCrestedHelmet } from 'react-icons/gi';
import { SiYamahamotorcorporation } from 'react-icons/si'
import { getAllBikes, getAllhelmet, getBrands, getHelmetBrand } from '../../Actions';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import './dash.css'

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBrands());
    }, []);
    useEffect(() => {
        dispatch(getHelmetBrand());
    }, []);
    useEffect(() => {
        dispatch(getAllBikes());
    }, []);
    useEffect(() => {
        dispatch(getAllhelmet());
    }, [])

    const totalbikes = useSelector(state => state.bikes.bikes);
    const brands = useSelector(state => state.brand.brands);
    const helmetBrands = useSelector(state => state.helmetBrands.helmetBrands);
    const helmets = useSelector(state => state.helmets.helmets);
    const data = [
        {
            "name": "MotorBikes",
            "hb": totalbikes.length
        },
        {
            "name": "Brands",
            "hb": brands.length
        },
        {
            "name": "Helmets",
            "hb": helmets.length
        },
        {
            "name": "HelmetBrands",
            "hb": helmetBrands.length
        }
    ]

    return (
        <div className="dashboard">
            <div className="title"><h3>Admin Dashboard</h3></div>
            <div style={{ minHeight: '100vh' }}>
                <div className="container flex-container" style={{ textAlign: 'center' }}>
                    <div className="box1 p-5">
                        <p>
                            <FaMotorcycle size={40} />
                        </p>
                        <p>Total motorbikes</p>
                        <h3>{totalbikes.length}</h3>
                    </div>
                    <div className="box2 p-5">
                        <p><GiFullMotorcycleHelmet size={40} /></p>
                        <p>Total Helmets</p>
                        <h3>{helmets.length}</h3>
                    </div>
                    <div className="box3 p-5">
                        <p><SiYamahamotorcorporation size={40} /></p>
                        <p>Total Bike brand</p>
                        <h3>{brands.length}</h3>
                    </div>
                    <div className="box4 p-5">
                        <p><GiCrestedHelmet size={40} /></p>
                        <p>Total Helmet brand</p>
                        <h3>{helmetBrands.length}</h3>
                    </div>
                </div>
                <div className="container" style={{
                    marginTop: "30px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <BarChart width={1000} height={500} data={data}>
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="hb" fill="#2596be" />
                    </BarChart>
                </div>
                <div style={{ marginBottom: '100px' }}></div>

            </div>
        </div>



    );
};

export default Dashboard;