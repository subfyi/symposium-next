import React from 'react';

const Contact = () => {
    return (
        <section className="contact-area">
            <div className="container">
                <div className="row"><div className="col-lg-12">
                    <div className="about-heading">
                        <div className="section-heading">
                            <h2 className="section__title">CONTACT</h2>
                        </div>
                    </div>
                </div>
                    <div className="col-lg-8">
                        <div className="section-heading">

                            <p className="section__meta">Conference Venue</p>
                            <p className="section__desc">

                                    <p>ISESER2021 which will be held on 11-13 June 2021 in,{" "}<a href="https://g.page/Albunianuniversity?share" target="_blank">
                                            <b>Albanian University Department of Art Design</b></a>, Tirana, ALBANIA. </p>
                                    <ul>
                                        <li>
                                            <strong>Registration</strong>: 1st May, between 09:00-12:00
                                        </li>
                                        <li>
                                            <strong>Opening Ceremony</strong>: 11th June
                                        </li>
                                        <li>
                                            <strong>Video and Poster Presentations will be available </strong>: 11-13 June 2021
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>Adress:</strong> Albanian University Department of Art Design, Tirana, ALBANIA.
                                    </p>

                                    <p>If you have any question please send an e-mail to{" "}<a
                                        href="mailto:iseser@iseser.com"><span>iseser@iseser.com</span></a>.
                                    </p>
                                    <p>You can contact us by phone number for emergencies. </p>
                                    <ul>
                                        <li>Şükrü Dursun (whatsapp): <a href="tel:+905365954591">+905365954591</a></li>
                                    </ul>
                                    <p>For technical issues. </p>
                                    <ul>
                                        <li>Yasin Akın Ayturan (whatsapp): <a href="tel:+905365954591">+905548675660</a></li>
                                    </ul>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9947188283218!2d19.8176709!3d41.330728199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310f48498ca9%3A0x57b003ffd455d39b!2sAlbanian%20University!5e0!3m2!1str!2str!4v1614280987943!5m2!1str!2str"
                            className="map" allowFullScreen>
                        </iframe>
                    </div>
                    <style jsx>{`
           .map {
           border:0;
                width: 100%;
                height: 100%
           } 
        `}</style>
                </div>

            </div>
        </section>
    );
};
export default Contact;
