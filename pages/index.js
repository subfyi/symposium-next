import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import SliderOne from "../components/SliderOne";
import ServiceArea from "../components/ServiceArea";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
    return (
        <Layout pageTitle="ISESER2020 - International Symposium for Environmental Science and Engineering Research">
            <NavOne/>
            <CallToAction/>
            <section className="service-area text-center">
                <div className="container">
                    <div className="row service-wrap">
                        <div className="col">
                            Deadline for Full Texts is 20 July 2020. Please upload full texts to <b><a href="https://portal.iseser.com/"><i className="fa fa-external-link"></i> user area</a></b>.
                        </div>
                    </div>
                </div>
            </section>
            <SliderOne/>
            <ServiceArea/>
            <Footer/>
        </Layout>
    );
};

export default HomePage;
