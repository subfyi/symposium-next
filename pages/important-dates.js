import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Important Dates | ISESER2021">
            <NavOne/>
            <PageHeader title="Important Dates"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Important Dates</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <p className="section__desc">
                                        <ul>
                                            <li>Registration and Abstract Submission Date: 1 May 2021</li>
                                            <li>Full Text Deadline: 20 May 2021</li>
                                            <li>Symposium Date: 11-13 June 2021</li>

                                        </ul>
                                    </p>
                                    <hr/>
                                    <p className="section__desc">
                                        <ul>
                                            <li>Presentation and Poster Presentations will be available: 11-13 June 2021</li>
                                        </ul>
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
