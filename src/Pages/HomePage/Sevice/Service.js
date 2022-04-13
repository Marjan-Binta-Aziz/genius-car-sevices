import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {id, name, price, img, description} = service;

    const navigate = useNavigate();

    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div id='services' className='service'>
            <img className='w-100 mb-3 p-2 rounded-3 ' src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: $ {price}</h4>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-dark'>Book Now</button>
        </div>
    );
};

export default Service;