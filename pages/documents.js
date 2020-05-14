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
        <Layout pageTitle="DOCUMENTS | ISESER2020">
            <NavOne/>
            <PageHeader title="DOCUMENTS"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">DOCUMENTS
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__desc">
                                        <ul className="icon">
                                            <li className="star"><a href="https://portal.iseser.com/"><i className="fa fa-external-link"
                                                                                                         aria-hidden="true"></i> REGISTRATION</a></li>
                                            <li className="star"><a href="https://iseser.com/doc/2020/ISESER2020_BANNER.pdf" target="_blank"
                                                                    rel="noopener noreferrer"><i className="fa  fa-file-pdf-o"></i> BANNER</a></li>
                                            <li className="star"><a href="https://iseser.com/doc/2020/ISESER2020_BROCHURE.pdf" target="_blank"
                                                                    rel="noopener noreferrer"><i className="fa  fa-file-pdf-o"></i> BROCHURE</a></li>
                                            <li className="star"><a href="https://iseser.com/doc/2020/ISESER2020_Abstract_Template.docx"
                                                                    target="_blank" rel="noopener noreferrer"><i className="fa fa-file-word-o" aria-hidden="true"></i> Abstract Template
                                                </a></li>
                                            <li className="star"><a href="https://iseser.com/doc/2020/ISESER2020_Full_Paper_Template.docx"
                                                                    target="_blank" rel="noopener noreferrer"><i className="fa fa-file-word-o" aria-hidden="true"></i> Full Paper Template
                                                </a></li>
                                            <li className="star"><a href="../doc/2020/ISESER2020_POSTER-PREPARATION.pptm" target="_blank"
                                                                    rel="noopener noreferrer"><i className="fa fa-file-powerpoint-o" aria-hidden="true"></i> Poster Template</a>
                                            </li>


                                        </ul>

                                        <ul>
                                            <li><span className="important-notice">“THE POSTER NEED TO BE 70X90 CM TO BE SEEN IN THE TEMPLATE.”</span>
                                            </li>
                                            <li><span className="important-notice" >“MAXIMUM PAGE NUMBER WHICH WILL BE USED IN ABSTRACT TEXTS SHOULD NOT BE EXCEEDED 1.”</span>
                                            </li>
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
