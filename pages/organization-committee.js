import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Organization Committee | ISESER2021">
            <NavOne/>
            <PageHeader title="Organization Committee"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Organization Committee
                                    </h2>
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
                                                <td className="tg-0lax">
                                                    Şükrü Dursun, Engineering and Natural Sciences Faculty, Konya Technical University, Konya, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">
                                                    Laura Shumka, Department of Art Design, Albanian University, Tirana, Albania
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
                                                <td className="tg-0lax">
                                                    Çiğdem Çiftçi, Faculty of Engineering and Architecture, Necmettin Erbakan University, Konya
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="tg-0pky">
                                                    Kimete Tataveshi, Albanian University, Tirana, Albania
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">
                                                    Nilgün Yenil Harmancı, Celal Bayar University, Manisa, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Emre Dalkılıç, Engineering and Natural Sciences Faculty, Konya
                                                    Technical University, Konya, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Ertuğrul Esmeray, Karabük University, Engineering Faculty, Karabuk, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Kübra Yazıcı, Bozok University, Landscape Architecture Department, Yozgat, Turkey
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
                                                <td className="tg-0lax">Yasin Akın Ayturan, Engineering Faculty, KTO Karatay University,
                                                    Konya, Turkey
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
