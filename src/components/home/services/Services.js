import React from 'react';
import ServiceDetail from '../serviceDetail/ServiceDetail';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';

const servicesData = [
    {
        img: fluoride,
        title: "Fluoride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quasi"
    },
    {
        img: cavity,
        title: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quasi"
    },
    {
        img: teath,
        title: "Teath Whitening",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quasi"
    }
];

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div style={{ textAlign: "center" }}>
                <h3 style={{ color: '#1CC7C1' }}>OUR SERVICES</h3>
                <h1>Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 my-5">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;