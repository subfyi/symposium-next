import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutArea from "../components/AboutArea";
import MixerAreaTwo from "../components/MixerAreaTwo";
import CallToAction from "../components/CallToAction";
import TeamArea from "../components/TeamArea";
import FaqArea from "../components/FaqArea";
import ServiceArea from "../components/ServiceArea";
import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="ORGANIZATION COMMITTEE | ISESER2020">
            <NavOne/>
            <PageHeader title="ORGANIZATION COMMITTEE"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">ORGANIZATION COMMITTEE
                                    </h2>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__meta">SYMPOSIUM COORDINATOR</p>
                                    <p className="section__desc">
                                        <table className="tg">

                                        </table>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <MixerAreaTwo/>
            <Footer/>
        </Layout>
    );
};

export default AboutPage;
