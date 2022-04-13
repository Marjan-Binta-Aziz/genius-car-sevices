import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center'>
            <Container>
                <h6>Copyright &copy; {year}</h6>
            </Container>
        </div>
    );
};

export default Footer;