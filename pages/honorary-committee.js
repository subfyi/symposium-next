import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Honorary Committee | ISESER2023">
            <NavOne/>
            <PageHeader title="Honorary Committee"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Honorary Committee</h2>
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
                                                <td>Prof. Dr. Kaliopi Naska, Rector of Albanian University, Tirana, Albania</td>
                                            </tr>
                                            <tr>
                                                <td>Prof. Dr. Genti GUXHO, Dean of Mechanical Engineering Faculty, Polytechnic University of Tirana, Albania</td>
                                            </tr>
                                            <tr>
                                                <td>Prof. Dr. Osman METALLA, Dean of Professional Study Faculty, University “Aleksander Moisiu” Durres, Albania</td>
                                            </tr>

                                            <tr>
                                                <td>Prof. Ts. Dr. Che Mohd Ruzaidi Bin Ghazali, Dean Faculty of Ocean Engineering Technology, University Malaysia Terengganu, Terengganu, Malaysia</td>
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
