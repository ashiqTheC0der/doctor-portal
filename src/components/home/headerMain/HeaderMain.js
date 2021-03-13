import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi quis sit nihil cum eos autem tempora voluptatem saepe, quisquam harum excepturi dolorem accusamus fuga, natus repellat, corporis fugiat odio ratione deserunt officia unde ipsam. Iure ducimus sunt culpa nisi, distinctio reiciendis quo. Quaerat molestias accusamus, exercitationem repellat molestiae aut.</p>
                <Link to="Appointment" ><button className="btn-primary getAPP">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6 rightChair">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main >
    );
};

export default HeaderMain;