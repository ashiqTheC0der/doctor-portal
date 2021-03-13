import React from 'react';
import winson01 from '../../../images/winson01.png'
import winson02 from '../../../images/winson01.png'
import winson03 from '../../../images/winson01.png'
import TestimonialCard from '../testimonialCard/TestimonialCard';
import './Testimonial.css'

const testimonialData = [
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.",
        name: "Winson Herry",
        address: "california",
        img: winson01
    },

    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.",
        name: "Winson Herry",
        address: "california",
        img: winson02
    },

    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.",
        name: "Winson Herry",
        address: "california",
        img: winson03
    }
]

const Testimonial = () => {
    return (
        <section className="testimonial my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map(testi => <TestimonialCard testi={testi}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;