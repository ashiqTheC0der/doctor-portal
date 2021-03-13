import React from 'react';
import Header from '../header/Header';
import Services from '../services/Services';
import Exceptional from '../exceptional/Exceptional';
import Testimonial from '../testimonial/Testimonial';
import Blog from '../blog/Blog';
import OurDoctor from '../ourDoctor/OurDoctor';
import Contact from '../contact/Contact';
import Footer from '../../shared/footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <OurDoctor></OurDoctor>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;