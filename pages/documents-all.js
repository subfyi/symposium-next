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
        <Layout pageTitle="Old Symposium | ISESER2020">
            <NavOne/>
            <PageHeader title="Old Symposium"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Old Symposium
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__meta">2019 SYMPOSIUM</p>
                                    <p className="section__desc">
                                        <ul className="icon">
                                            <li className="star"><a href="https://iseser.com/doc/2019/ISESER2019_BANNER.pdf" target="_blank"
                                                                    rel="noopener noreferrer">BANNER (pdf)</a></li>
                                            <li className="star"><a href="https://iseser.com/doc/2019/ISESER2019_BROCHURE.pdf" target="_blank"
                                                                    rel="noopener noreferrer">BROCHURE (pdf)</a></li>
                                            <li className="star"><a href="https://iseser.com/doc/2019/ISESER2019-FINAL-PROGRAM.pdf?e10"
                                                                    target="_blank" rel="noopener noreferrer">SYMPOSIUM FINAL PROGRAM </a></li>
                                            <li className="star"><a href="https://iseser.com/doc/2019/ISESER2019-ABSTRACT-BOOK.pdf?e10"
                                                                    target="_blank" rel="noopener noreferrer">SYMPOSIUM ABSTRACT BOOK </a></li>
                                            <li className="star"><a href="https://iseser.com/doc/2019/ISESER2019-PROCEEDING-BOOK.pdf?e10"
                                                                    target="_blank" rel="noopener noreferrer">SYMPOSIUM PROCEEDING BOOK </a></li>
                                            <li className="star"><a href="https://photos.app.goo.gl/H5feZQmP2oVDWyHSA"
                                                                    target="_blank" rel="noopener noreferrer">Conference Photos      </a></li>


                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__meta">2018 SYMPOSIUM</p>
                                    <p className="section__desc">
                                        <ul className="icon">
                                            <li className="star"><a href="../../doc/2018/ISESER2018-banner.png" target="_blank" rel="noopener">BANNER
                                                (png)</a></li>
                                            <li className="star"><a href="../../doc/2018/ISESER2018_FULL_PAPER_WRITING_RULES.docx" target="_blank"
                                                                    rel="noopener">FULL
                                                TEXT PREPARATION (docx)</a></li>
                                            <li className="star"><a href="../../doc/2018/ISESER2018_Brochure.pdf" target="_blank" rel="noopener">BROCHURE
                                                (pdf)</a>
                                            </li>
                                            <li className="star"><a href="../../doc/2018/ISESER2018-FINAL-PROGRAM.pdf" target="_blank" rel="noopener">SYMPOSIUM
                                                PROGRAM (pdf)</a></li>
                                            <li className="star"><a href="../../doc/2018/ISESER2018-ABSTRACT-BOOK.pdf" target="_blank" rel="noopener">ABSTRACT
                                                BOOK
                                                (pdf)</a></li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__meta">2017 SYMPOSIUM</p>
                                    <p className="section__desc">
                                        <ul className="icon">
                                            <li className="star"><a href="../../doc/2017/Duyuru-Konya1-5.pdf" target="_blank" rel="noopener">ANNOUNCEMENT
                                                (pdf)</a>
                                            </li>
                                            <li className="star"><a href="../../doc/2017/2nd-UCMOS.jpg" target="_blank" rel="noopener">BANNER
                                                (jpg)</a></li>
                                            <li className="star"><a href="../../doc/2017/UCMOS_2017_TAM_MET%c4%b0N_YAZIM_KURALLARI-2.docx"
                                                                    target="_blank" rel="noopener">FULL TEXT PREPARATION (docx)</a></li>
                                            <li className="star"><a href="../../doc/2017/UCMOS_KONGRE_PROGRAMI.docx" target="_blank" rel="noopener">CONGRESS
                                                PROGRAM
                                                (docx)</a></li>
                                            <li className="star"><a href="../../doc/2017/UCMOS_Ozet_Formati.docx" target="_blank" rel="noopener">SUMMARY
                                                FORMAT
                                                (docx)</a></li>
                                            <li className="star"><a href="../../doc/2017/UCMOS_Poster_Formati.pptx" target="_blank" rel="noopener">POSTER
                                                FORMAT
                                                (pptx)</a></li>
                                            <li className="star"><a href="../../doc/2017/ucmos_kayit__ve_bildiri_yukleme_rehberi.pdf" target="_blank"
                                                                    rel="noopener">REGISTRATION
                                                AND PUBLISHING GUIDE (pdf)</a></li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__meta">2016 SYMPOSIUM</p>
                                    <p className="section__desc">
                                        <ul className="icon">
                                            <li className="star"><a href="../../doc/2016/Duyuru-Konya.pdf" target="_blank" rel="noopener">ANNOUNCEMENT
                                                (pdf)</a>
                                            </li>
                                            <li className="star"><a href="../../doc/2016/afis4.jpg" target="_blank" rel="noopener">BANNER (jpg)</a>
                                            </li>
                                            <li className="star"><a href="../../doc/2016/TamMetin-FORMAT.docx" target="_blank" rel="noopener">FULL
                                                TEXT
                                                PREPARATION
                                                (docx)</a></li>
                                            <li className="star"><a href="../../doc/2016/Kayit-Formu.docx" target="_blank" rel="noopener">PARTICIPATION
                                                DOCUMENT
                                                (docx)</a></li>
                                            <li className="star"><a href="../../doc/2016/poster-programi-son.docx" target="_blank" rel="noopener">POSTER
                                                PROGRAM
                                                (docx)</a></li>
                                            <li className="star"><a href="../../doc/2016/sozlu-sunum-programi-son.doc" target="_blank" rel="noopener">ORAL
                                                PRESENTATION PROGRAM (docx)</a></li>
                                            <li className="star"><a href="../../doc/2016/sempozyum-kitabi-1.pdf" target="_blank" rel="noopener">SYMPOSIUM
                                                BOOK
                                                (pdf)</a></li>
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
