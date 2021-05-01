import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Sponsors | ISESER2021">
            <NavOne/>
            <PageHeader title="Sponsors"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Sponsors
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__meta">JOURNAL SPONSORS (EN)
                                    </p>
                                    <p className="section__desc">
                                        <ul>

                                            <li>Journal of International Environmental Application &amp; Science (JIEAS), <a target="_blank" href="http://www.jieas.com">jieas.com</a>
                                            </li>
                                            <li>International Journal of Environmental Pollution and Environmental Modelling (IJEPEM), <a target="_blank" href="https://ijepem.com">ijepem.com</a>
                                            </li>
                                            <li>Gnosi: An Interdisciplinary Journal of Human Theory and Praxis, <a target="_blank" href="https://gnosijournal.com">gnosijournal.com</a>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <p className="section__meta">JOURNAL SPONSORS (TR)
                                    </p>
                                    <p className="section__desc">
                                        <ul>
                                            <li>Ulusal Çevre Bilimleri Araştırma Dergisi (UCBAD), <a target="_blank" href="https://ucbad.com">ucbad.com</a></li>
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
