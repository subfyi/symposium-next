import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Announcement | ISESER2021">
            <NavOne/>
            <PageHeader title="Announcement"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Announcement</h2>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <div className="section__desc">
                                        Welcome to ISESER 2021. All presentations can be watched online from the <b><a href="https://portal.iseser.com/"><i className="fa fa-external-link"></i> user area</a></b> after you login (If you do not have an account, please create a new account).
                                        You can make
                                        your comments under any presentation in "Questions & Answers" section by clicking "Add New" button.

                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading"><p className="section__meta">Full paper submission</p>

                                    <div className="section__desc">
                                        <div className="form-group">
                                            <p>Full paper submission is now open in <a href="//portal.iseser.com/submission/create">user
                                                area</a>. There are three choices for paper submission.

                                            </p>
                                            <ul>
                                                <li>If you want your paper will be published in proceeding book, please submit your full paper written
                                                    in english language and appropriate with template given in the documents and choose the option of
                                                    (Proceeding Book).
                                                </li>
                                                <li>If you want your English full paper to be published in a journal, please choose the option of
                                                    (EN-Only Journal).
                                                </li>
                                                <li>If you have already prepared your full paper in Turkish language, you have an option to send us
                                                    this paper to be published in Turkish Journal and please choose the option of (TR-Only Journal).
                                                </li>
                                            </ul>
                                            <p><b>It is forbidden to publish same full paper both in the proceeding book and the journal.*</b> Our
                                                Sponsor journal list in <a href="/sponsors">Sponsors</a> page. </p>
                                            <p>If you have question, send mail to&nbsp;<a
                                                href="mailto:iseser@iseser.com"><span>iseser@iseser.com</span></a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading"><p className="section__meta">And More...</p>

                                    <div className="section__desc">
                                        <div className="form-group">


                                            <p>Important Dates were announced in link below:</p>
                                            <p><a href="../important-dates">https://iseser.com/important-dates</a></p>

                                        </div>
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
