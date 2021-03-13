import React, { useState } from 'react';
import Footer from '../../shared/footer/Footer';
import Navber from '../../shared/navber/Navber';
import AppointmentHeader from '../AppointmentHeader.js/AppointmentHeader';
import './Appointment.css'
import '../../shared/navber/Navber.css'
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const Appointment = () => {


    const [selectedDate, setSeletedDate] = useState(new Date())

    const HandleDateChange = date => {
        setSeletedDate(date);
    }
    
    return (
        <div>
            <Navber className="AppointmentNav"></Navber>

            <AppointmentHeader HandleDateChange={HandleDateChange}></AppointmentHeader>

            <BookingAppointment date={selectedDate}></BookingAppointment>

            <Footer></Footer>
        </div>
    );
};

export default Appointment;