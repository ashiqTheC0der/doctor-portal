import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div style={{ textAlign: 'center' }} className="col-md-4 my-5">
            <img src={service.img} alt="service-image" />
            <h5>{service.title}</h5>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceDetail;