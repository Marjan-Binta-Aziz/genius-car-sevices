import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    //je id er info ta ascha oita ai khne details pawar jonno
    const {serviceId} = useParams()

    return (
        <div>
            <h2>Welcome to Service Details {serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-outline-dark m-2'>Place Order</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;