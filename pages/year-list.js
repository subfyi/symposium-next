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
        <Layout pageTitle="INVITATION | ISESER2020">
            <NavOne/>
            <PageHeader title="INVITATION"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">2019 SYMPOSIUM PROCEEDING BOOK
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__desc">
                                        <table className="tg">
                                            <thead>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Title of Abstract
                                            </th>
                                            <th>
                                                Publication Year:
                                            </th>
                                            <th>
                                                Authors
                                            </th>
                                            <th>
                                                Paper
                                            </th>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    A new form of network coded cooperative transmission for multiple access channels
                                                </td>
                                                <td>
                                                    Zhiguo Ding ; Kin K. Leung ; Dennis L. Goeckel ; Don Towsley
                                                </td>
                                                <td>
                                                    2008, Page(s): 1 - 6
                                                </td>
                                                <td>
                                                    Abstract - Fullpaper
                                                    (131 Kb)
                                                </td>
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
