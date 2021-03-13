import React from 'react';
import './Siderber.css';

const Sidebar = () => {
    return (
        <div className="col-md-2 sidenav">
            <a href="#">Deshboard</a>
            <a href="#services">Appointment</a>
            <a href="#clients">Patients</a>
            <a href="#contact">Prescription</a>
            <a href="#contact">Setting</a>
            <a href="#contact">Logout</a>
        </div>
    );
};

export default Sidebar;