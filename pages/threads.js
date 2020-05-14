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
        <Layout pageTitle="Topics | ISESER2020">
            <NavOne/>
            <PageHeader title="Topics"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Topics
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <div className="section__desc">
                                        <p>The contents of articles and posters may include, but are not limited to, the
                                            following topics.</p>
                                        <ul>
                                            <li>Air Pollution</li>
                                            <li>Anaysis of toxic materials</li>
                                            <li>Artificial Intelligence</li>
                                            <li>Biotechnology</li>
                                            <li>Ecology</li>
                                            <li>Energy Management</li>
                                            <li>Environmental Applications</li>
                                            <li>Environmental Health</li>
                                            <li>Environmental Landscape</li>
                                            <li>Environmental Modeling</li>
                                            <li>Environmental chemistry</li>
                                            <li>Fuzzy Logic</li>
                                            <li>Geographical Information</li>
                                            <li>Heavy metal pollution</li>
                                            <li>Microbiology</li>
                                            <li>Natural Source and Sustainability</li>
                                            <li>Pasture and Environment</li>
                                            <li>Renewable Energy</li>
                                            <li>Surface and Groundwater</li>
                                            <li>Pestiside Analysis</li>
                                            <li>Soil Pollution</li>
                                            <li>Solid Waste Management</li>
                                            <li>Sustainability</li>
                                            <li>Water Pollution</li>
                                            <li>Waste Water Pollution</li>
                                            <li>Waste Recovery and Recycle</li>
                                        </ul>
                                        <p>Related topics</p>
                                    </div>
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
