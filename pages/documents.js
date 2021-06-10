import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Documents | ISESER2021">
            <NavOne/>
            <PageHeader title="Documents"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Documents for 2021
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__desc">
                                        <ul className="icon">
                                            <li className="star"><a href="https://portal.iseser.com/"><i className="fa fa-external-link"></i> REGISTRATION</a></li>
                                            <li className="star"><a href="../doc/2021/ISESER2021_BANNER.pdf?v1" target="_blank"><i className="fa  fa-file-pdf-o"></i> BANNER</a></li>
                                            <li className="star"><a href="../doc/2021/ISESER2021_BROCHURE.pdf?v1" target="_blank"><i className="fa  fa-file-pdf-o"></i> BROCHURE</a></li>
                                            <li className="star"><a href="../doc/2021/ISESER2021-FINAL-PROGRAM.pdf?e4" target="_blank" rel="noopener noreferrer"><i className="fa  fa-file-pdf-o"></i> FINAL PROGRAM </a></li>
                                            <li className="star"><a href="../year/2021"><i className="fa fa-file-code-o"></i> WEB VERSION (ONLINE VIEW)</a></li>

                                            {/*
                                              <li className="star"><a href="../doc/2021/ISESER2021-ABSTRACT-BOOK.pdf?e2" target="_blank" rel="noopener noreferrer"><i className="fa  fa-file-pdf-o"></i> ABSTRACT BOOK </a></li>
                                              <li className="star"><a href="../doc/2021/ISESER2021-PROCEEDING-BOOK.pdf?e2" target="_blank" rel="noopener noreferrer"><i className="fa  fa-file-pdf-o"></i> PROCEEDING BOOK</a></li>
                                              <li className="star"><a href="../year/2021"><i className="fa fa-file-code-o"></i> WEB VERSION (ONLINE VIEW)</a></li>
                                            */}
                                        </ul>
                                        <hr/>
                                        <ul>
                                            <li className="star"><a href="../doc/2021/ISESER2021_Abstract_Template.docx" target="_blank"><i className="fa fa-file-word-o"></i> Abstract Template</a>
                                            </li>
                                            <li className="star"><a href="../doc/2021/ISESER2021_Full_Paper_Template.docx" target="_blank"><i className="fa fa-file-word-o"></i> Full Paper Template</a>
                                            </li>
                                            <li className="star"><a href="../doc/2021/ISESER2021_POSTER-PREPARATION.pptm" target="_blank"><i className="fa fa-file-powerpoint-o"></i> Poster
                                                Template</a></li>
                                            <li><span className="important-notice">“THE POSTER NEED TO BE 70X90 CM TO BE SEEN IN THE TEMPLATE.”</span>
                                            </li>
                                            <li><span className="important-notice">“MAXIMUM PAGE NUMBER WHICH WILL BE USED IN ABSTRACT TEXTS SHOULD NOT BE EXCEEDED 1.”</span>
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
