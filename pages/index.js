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
                           Welcome to ISESER 2020. All presentations can be watched online from the <b><a href="https://portal.iseser.com/"><i className="fa fa-external-link"></i> user area</a></b> after you login (If you do not have an account, please create a new account).
                                You can make
                                your comments under any presentation in "Questions & Answers" section by clicking "Add New" button.

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
