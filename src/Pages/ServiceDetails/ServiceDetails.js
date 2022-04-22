import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    //je id er info ta ascha oita ai khne details pawar jonno
    const {serviceId} = useParams()

    const [service, setServices] = useState({});

    useEffect(()=> {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setServices(data);
        })
    }, [])

    return (
        <div>
            <h2>Welcome to Service Details {service.name}</h2>
            <Link to='/checkout'>
                <button className='btn btn-outline-dark m-2'>Place Order</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;