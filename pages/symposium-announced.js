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
        <Layout pageTitle="Announcement | ISESER2020">
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
                           <h3>2020 Symposium date was updated as 4-5 July 2020 and the last abstract submission date was delayed to 20 June 2020.
                           </h3>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading"><p className="section__meta">About Online Presentation</p>

                                    <div className="section__desc">
                                        <div className="form-group">
                                            <p>
                                                Because of the effects of COVİD-19 Pandemic, it may not be possible to make the symposium with normal
                                                procedure. Therefore, as an organizing committee we offer an asynchronous online presentation chance
                                                to our participants.
                                                The steps of online presentation are explained here:

                                            </p>

                                            <ol>
                                                <li> All participants must be affiliated to our user area and have their own account.
                                                </li>
                                                <li> The corresponding authors (presenters) will prepare their presentation in mp4 video format with
                                                    their own live images and voices. Any program creating mp4 format videos available in your
                                                    computer or phones may be used for the preparation of your videos. The presentation language must
                                                    be in English.
                                                </li>
                                                <li> The prepared presentations will be uploaded to the system.  Please check your presentation before sending.
                                                </li>
                                                <li> The last date for sending a presentation video is 25 June 2020.
                                                </li>
                                                <li> After this step, the sent presentations will be uploaded to the user area system under the
                                                    presentations tab.
                                                </li>
                                                <li> All uploaded presentations will stay open in online during the symposium and any participant
                                                    (author or not) will watch the video and make comment under the video.
                                                </li>
                                                <li> The presenters have to check the comments under their video during the symposium duration in
                                                    order to give an answer to comments.

                                                </li>
                                            </ol>


                                        </div>
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
