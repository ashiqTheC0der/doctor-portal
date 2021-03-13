import React from 'react';
import InfoCard from '../infoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'


// create custom apis
const infoData = [
    {
        title: 'Opening Hours',
        description: 'Lorem ipsum, dolor sit amet consectetur',
        icon: faClock,
        background: 'primary',
        key :  '1250114545'
    },
    {
        title: 'Visit our locations',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarker,
        background: 'dark',
        key :  '1250114546'
    },
    {
        title: 'Contact us now',
        description: '+000 123 456789',
        icon: faPhone,
        background: 'primary',
        key :  '1250114549'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    // send to infoCard components
                    infoData.map(info => <InfoCard info={info} key={BusinessInfo.key} ></InfoCard>)
                }
            </div>

        </section>
    );
};

export default BusinessInfo;