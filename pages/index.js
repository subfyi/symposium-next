import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import SliderOne from "../components/SliderOne";
import ServiceArea from "../components/ServiceArea";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
    return (
        <Layout pageTitle="ISESER2023 - International Symposium for Environmental Science and Engineering Research">
            <NavOne/>
            <CallToAction/>
            <SliderOne/>
            <ServiceArea/>
            <Footer/>
        </Layout>
    );
};

export default HomePage;
