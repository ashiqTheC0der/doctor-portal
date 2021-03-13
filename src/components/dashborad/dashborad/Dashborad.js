import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Appointmentbydate from '../appointmentbydate/Appointmentbydate';
import Sidebar from '../sidebar/Sidebar';

const containerStyle = {
    height: '100vh'
}

const Dashborad = () => {
    const [selectedDate, setSeletedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const HandleDateChange = date => {
        setSeletedDate(date);
    }
    useEffect( () => {
        fetch('http://localhost:5000/ApointmentsByDate', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data)
        )
    }, [selectedDate])
    return (
        <div>
            <section style={containerStyle} className="container-fluid row">
                <div className="sideBar col-md-2 text-center">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                <Calendar onChange={HandleDateChange} value={new Date()} />
                </div>
                <div className="appointmentByDate col-md-5">
                    <Appointmentbydate appointments={appointments}></Appointmentbydate>
                </div>
            </section>
        </div>
    );
};

export default Dashborad;