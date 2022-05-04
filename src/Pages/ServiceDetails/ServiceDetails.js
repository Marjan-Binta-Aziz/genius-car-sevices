import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const ServiceDetails = () => {
    //je id er info ta ascha oita ai khne details pawar jonno
    const {serviceId} = useParams();

    const [service] = useServiceDetails(serviceId);

    return (
        <div>
            <h2>Welcome to Service Details {service.name}</h2>
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-outline-dark m-2'>Place Order</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;