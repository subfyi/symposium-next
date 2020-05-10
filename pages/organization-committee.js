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
        <Layout pageTitle="ORGANIZATION COMMITTEE | ISESER2020">
            <NavOne/>
            <PageHeader title="ORGANIZATION COMMITTEE"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">ORGANIZATION COMMITTEE
                                    </h2>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__meta">SYMPOSIUM COORDINATOR</p>
                                    <p className="section__desc">
                                        <table className="tg">
                                            <tbody>
                                            <tr>
                                                <td className="tg-0lax">Şükrü Dursun, Engineering and Natural Sciences Faculty, Konya
                                                    Technical University, Konya,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Nilgün Yenil Harmancı, Sciences and Arts Faculty, Celal Bayar University,
                                                    Manisa, Turkey
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__meta">ORGANIZATION COMMITTEE</p>
                                    <p className="section__desc">
                                        <table className="tg">
                                            <tbody>
                                            <tr>
                                                <td className="tg-0lax"> Arzu Ege, Celal Bayar University, Sciences and Arts Faculty,
                                                    Manisa,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Bahriye Gülgün, Agriculture Faculty, Ege University, İzmir,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Bircan Dindar, Solar Energy Institute, Ege University, Izmir, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Çiğdem Çiftçi, Faculty Of Engineering and Architecture, Necmettin
                                                    Erbakan University, Konya,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Emre Dalkılıç, Engineering and Natural Sciences Faculty, Konya
                                                    Technical University, Konya,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Ertuğrul Esmeray, Karabük University, Engineering Faculty, Karabuk,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Fadim Yemiş, Sciences and Arts Faculty, Celal Bayar University, Manisa, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Fatma Kunt, Engineering and Architecture Faculty, Necmettin Erbakan
                                                    University, Konya, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Hysen Mankolli, Editor of IJEES, Health and Environment Association,
                                                    Illinois, USA
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Israfil Şabikoğlu, Sciences and Arts Faculty, Celal Bayar University, Manisa,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Lyudmyla Symochko, Faculty of Biology, Uzhhorod National University, Uzhhorod,
                                                    Ukraine
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="tg-0lax">Muhammed Kamil Öden, Vocational School, Selcuk University, Konya,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Şerife Yurdagül Kumcu, Engineering and Architecture Faculty,
                                                    Necmettin Erbakan University, Konya,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Tanju Kahraman, Celal Bayar University, Sciences and Arts Faculty,
                                                    Manisa,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Tülin Aydemir, Celal Bayar University, Sciences and Arts Faculty,
                                                    Manisa,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Yasin Akın Ayturan, Engineering Faculty, KTO Karatay University,
                                                    Konya, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Yüksel Abalı, Celal Bayar University, Sciences and Arts Faculty,
                                                    Manisa,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Zeynep Cansu Ayturan, Engineering and Natural Sciences Faculty,
                                                    Konya Technical University, Konya,
                                                    Turkey
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
