import React, { useState } from "react";
import { Carousel } from "react-bootstrap";


const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/ProgrammingHero1/genius-car-service-module-60/main/src/images/banner/banner1.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/banner/banner2.jpg?raw=true" alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/banner/banner3.jpg?raw=true"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Banner;
