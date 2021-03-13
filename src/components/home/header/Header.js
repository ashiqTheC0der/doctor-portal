import React from 'react';
import BusinessInfo from '../businessInfo/BusinessInfo';
import HeaderMain from '../headerMain/HeaderMain';
import Navber from '../../shared/navber/Navber';

import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navber></Navber>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;