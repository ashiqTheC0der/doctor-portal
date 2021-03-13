import React from 'react';
import doctor from '../../../images/doctor.png';
import DoctorCard from '../doctorCard/DoctorCard'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const doctorDetails = [
    {
        image: doctor,
        name: 'Dr. Caudi',
        phone: '+61 452 200 126',
        icon: faPhone,
    },
    {
        image: doctor,
        name: 'Dr. Caudi',
        phone: '+61 452 200 126',
        icon: faPhone,
    },
    {
        image: doctor,
        name: 'Dr. Caudi',
        phone: '+61 452 200 126',
        icon: faPhone,
    }
]

const OurDoctor = () => {
    return (
        <section className="testimonial my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase text-center">Our Doctor</h5>
                </div>
                <div className="card-deck mt-5">
                    {
                        doctorDetails.map(doctorDetail => <DoctorCard doctorDetail={doctorDetail}></DoctorCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurDoctor;