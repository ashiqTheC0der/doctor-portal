import React from 'react';
import { Link } from 'react-router-dom';
const Navber = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/"><a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-dark" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/deshborad"><a className="nav-link mr-5 text-dark" href="#">Deshboard</a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <Link to="Login"><a className="nav-link mr-5 text-white" href="#">Login</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navber;