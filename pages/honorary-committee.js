import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Honorary Committee | ISESER2020">
            <NavOne/>
            <PageHeader title="Honorary Committee"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Honorary Committee
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__desc">
                                        <table className="tg">

                                            <tbody>
                                            <tr>
                                                <td>Prof. Dr. Ahmet Ataç, Manisa Celal Bayar University Rector, Manisa, Turkey</td>
                                            </tr>
                                            <tr>
                                                <td>Prof. Dr. Alush Musaj, University of Mitrovica “Isa Boletini” (UMIB), Mitrovica, Kosovo</td>
                                            </tr>
                                            <tr>
                                                <td>Prof. Dr. Babür Özçelik, Konya Technical University Rector, Konya, Turkey</td>
                                            </tr>
                                            <tr>
                                                <td>Prof. Dr. Mustafa Şahin, Selçuk University Rector, Konya, Turkey</td>
                                            </tr>
                                            </tbody>

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
