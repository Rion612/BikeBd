import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
const BreadcumCom = (props) => {
    return (
        <div className='breadcumb'>
            <Link to={props.route} style={{ textDecoration: "none" }}>
                {props.fTab}
            </Link>
            <AiOutlineDoubleRight style={{ margin: "0 10px" }} />
            {props.sTab}
        </div>
    );
};

export default BreadcumCom;