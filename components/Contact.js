import React from 'react';

const Contact = () => {
    return (
        <section className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
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
                                    ISESER2021 which will be held on 18-21 October 2021 in,
                                    {" "}<a href="https://goo.gl/maps/iUzRUwxDfU3bUDzV8" target="_blank">
                                    <b>Department of Energy Polytechnic University of Tirana</b></a>, Konya, Turkey

                                <ul>
                                    <li>
                                        <strong>Registration</strong>: 11th July, Friday between 09:00-12:00
                                    </li>
                                    <li>
                                        <strong>Opening Ceremony</strong>: 11th June
                                    </li>
                                    <li>
                                        <strong>Presentation and Poster Presentations will be available</strong>: 18-21 October 2021
                                    </li>
                                </ul>
                                <p>
                                    <strong>Adress:</strong> Altin Dorri, Department of Energy Polytechnic University of Tirana, Sheshi “Nene Tereza”, Nr. 4, Tirana, Albania.
                                </p>

                                <p>If you have any question please send an e-mail to{" "}<a
                                    href="mailto:iseser@iseser.com"><span>iseser@iseser.com</span></a>; <a
                                    href="mailto:sdursun@ktun.edu.tr"><span>sdursun@ktun.edu.tr</span></a>; <a
                                    href="mailto:adorri@fim.edu.al"><span>adorri@fim.edu.al</span></a>

                                </p>
                                <p>You can contact us by phone number for emergencies. </p>
                                <ul>
                                    <li>Şükrü Dursun (whatsapp): <a href="tel:+905365954591">+905365954591</a></li>
                                    <li>Şükrü Dursun (Office): <a href="tel:+905365954591">+903322051559</a></li>
                                    <li>Altin Dorri (whatsapp): <a href="tel:+905365954591">+355695866003</a></li>
                                    <li>Noor Zaitun Yahaya (WhatsApp): <a href="tel:+60179884115">+60179884115</a></li>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6367185254503!2d19.819361415423543!3d41.31676597927071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135030e2870cc581%3A0x6c539e3ffce9fa68!2sTiran%20Politeknik%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1616084725643!5m2!1str!2str"
                            className="map" allowFullScreen>
                        </iframe>
                    </div>
                    <style jsx>{`
                      .map {
                        border: 0;
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
