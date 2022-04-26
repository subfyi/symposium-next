import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Symposium Fee | ISESER2022">
            <NavOne/>
            <PageHeader title="Honorary Committee"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Symposium Fee
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <div className="section__desc">
                                        <table className="table  table-striped tb-full">
                                            <tbody>
                                            <tr>
                                                <td><strong><em>Payment Types</em></strong>
                                                </td>
                                                <td><strong>1. Paper</strong>
                                                </td>
                                                <td><strong>Extra</strong>
                                                </td>
                                                <td><strong>Guest</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Video Presentation</strong></td>
                                                <td>50 €</td>
                                                <td>20 €</td>
                                                <td>Free</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Poster Presentation</strong></td>
                                                <td>50 €</td>
                                                <td>20 €</td>
                                                <td>Free</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <div className="section__desc">
                                        <hr/>

                                        <p>Please wait for payment details. (<span><strong>There is no fee refund.</strong></span>)</p>
                                        {/*
                                        <p>Please send the required fee to IBAN address given below and please write the "iseser2020" in the
                                            description field.
                                            (<span ><strong>There is no fee refund.</strong></span>)</p>
                                        <p>
                                            <strong>Account Type (Only):</strong> TRY // The bank make exchange from the daily exchange rate.<br/>
                                            <strong>Account Holder:</strong> Cbü Strateji Geliş.dai Bşk<br/>
                                            <strong>Account IBAN:</strong> TR950001000188401982925416<br/>
                                            <strong>Bank Name:</strong> Ziraat Bank<br/>
                                            <strong>Bank Swift Code(BIC):</strong> TCZBTR2A<br/>
                                            <strong>Description field (required):</strong> iseser 2020<br/>

                                        </p>
                                        <hr/>
                                        <p>
                                            <strong>Account Type:</strong> EUR <br/>
                                            <strong>Account Holder:</strong> Cbü Strateji Geliş.dai Bşk<br/>
                                            <strong>Account IBAN:</strong> TR680001000188401982925417<br/>
                                            <strong>Bank Name:</strong> Ziraat Bank<br/>
                                            <strong>Bank Swift Code(BIC):</strong> TCZBTR2A<br/>
                                            <strong>Description field (required):</strong> iseser 2020<br/>
                                        </p>
                                        */}
                                        <hr/>
                                    </div>
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
