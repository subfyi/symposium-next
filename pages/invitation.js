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
                                    <h2 className="section__title">INVITATION
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__desc">


                                            <p >As an organizing commitee, we are honored to invite you
                                                to
                                                attend the International Symposium for Environmental Science and Engineering
                                                Research
                                                2020 which will be held on 4-5 July 2020 in, Manisa.
                                                This event will be a useful for
                                                researchers, engineers, students, academics and anyone interested in environmental
                                                engineering and science. Through the conference, it will be possible to establish
                                                new
                                                partnerships, to share knowledge and experiences.</p>
                                            <p>The purpose of the symposium is to give information
                                                about
                                                the environmental sciences and engineering to participants. In this symposium all
                                                participants will take advantage about environmental topics with the help of foreign
                                                participants and several poster and oral presentations. Also, this symposium aims to
                                                provide connections for students and to provide opportunities for experts to share
                                                and
                                                discuss their experiences.</p>
                                            <p>Received papers will be accepted after peer review and all accepted
                                                articles will be
                                                printed in the proceeding book.</p>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__meta">Invited Speaker
                                    </p>
                                    <p className="section__desc">
                                        <table className="tg">
                                            <tbody>
                                            <tr>
                                                <td className="tg-0lax">Cezar Kongoli, National Oceanic and Atmospheric Administration, University of
                                                    Maryland, USA
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Hysen Mankolli, Editor of IJEES, Health and Environment Association, Illinois,
                                                    USA
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Lyudmyla Symochko, Uzhhorod National University, Ukraine</td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Massimo Zucchettı, Dipartimento Di Energetica, Torino Polytechnic University,
                                                    Italy
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Mohamed Abdelmalek Khemgani, Department of Agricultural Sciences, Kasdi Merbah
                                                    University,
                                                    Algeria
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Marcelo Enrique Conti, Rome sapienza University, Italy
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Petr Madera, Mendel University, Czech Republic
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Shahabuddin Memon, Sindh University, National Centre of Excellence,
                                                    Analytical Chemistry Director, Jamshoro, Pakistan
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Suzana (Kuci) Golemi, University of Shkodra “Luigj Gurakuqi”, Albania</td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Zoran Sapurik, American University, Macedonia</td>
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
