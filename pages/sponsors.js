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
        <Layout pageTitle="SPONSORS | ISESER2020">
            <NavOne/>
            <PageHeader title="SPONSORS"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">SPONSORS
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
                                            <li>International Journal of Ecosystems and Ecology Science, <a target="_blank" href="http://ijees.net">ijees.net</a></li>
                                            <li>Journal of International Environmental Application &amp; Science (JIEAS), <a target="_blank" href="http://www.jieas.com">jieas.com</a>
                                            </li>
                                            <li>International Journal of Environmental Pollution and Environmental Modelling (IJEPEM), <a target="_blank" href="https://ijepem.com">ijepem.com</a>
                                            </li>

                                            <li>Journal of Landscape Ecology, <a target="_blank" href="http://www.journaloflandscapeecology.cz/index.php?page=home">journaloflandscapeecology.cz</a>
                                            </li>
                                            <li>International Journal of Environment and Health
                                                , <a target="_blank" href="https://www.inderscience.com/jhome.php?jcode=ijenvh">inderscience.com</a>
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
