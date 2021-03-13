import React from 'react';

const TestimonialCard = ({ testi }) => {
    return (
        <div className="col-md-4">
            <div className="card shadow-sm">
                <img src="" alt="" />
                <div className="card-body">
                    <p className="card-text text-center">{testi.description}</p>
                </div>
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3" src={testi.img} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{testi.name}</h6>
                        <p className="m-0">{testi.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;