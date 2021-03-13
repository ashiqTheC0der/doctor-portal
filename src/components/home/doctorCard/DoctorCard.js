import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const DoctorCard = ({ doctorDetail }) => {
    return (
        <div className="col-md-4">
            <div className="text-center">
                <img className="img-fluid" src={doctorDetail.image} alt="" />
                <h5>{doctorDetail.name}</h5>
                <div className="content d-flex justify-content-center">
                    <FontAwesomeIcon icon={doctorDetail.icon}></FontAwesomeIcon>
                    <p>{doctorDetail.phone}</p>
                </div>
            </div>
            {/* <div className="card shadow-sm">
                <img src="" alt="" />
                <div className="card-body">
                    <p className="card-text text-center">{doctorDetail.name}</p>
                </div>
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3" src={testi.img} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{testi.name}</h6>
                        <p className="m-0">{testi.address}</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default DoctorCard;