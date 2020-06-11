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

                                    <p>ISESER2020 which will be held on 4-5 July 2020 in, <a href="https://goo.gl/maps/n7i6pPyJEsJsyphd9"
                                                                                             target="_blank"> <b>Suleyman Demirel
                                        Cultural Center, Uncubozköy Campus</b></a>, Manisa. </p>
                                    <ul>
                                        <li>
                                            <strong>Registration</strong>: 4th July, Saturday between 09:00-12:00
                                        </li>
                                        <li>
                                            <strong>Opening Ceremony</strong>: 4th May, Saturday
                                        </li>
                                        <li>
                                            <strong>Video and Poster Presentations will be available </strong>: 4-5 July 2020
                                        </li>
                                    </ul>


                                    <p>
                                        <strong>Adress:</strong> Suleyman Demirel Cultural Center:
                                        Uncubozköy, 5526. Sk. 8 B, 45030 Manisa City Center/Manisa.
                                    </p>

                                    <p>If you have any question please send an e-mail to&nbsp;<a
                                        href="mailto:iseser@iseser.com"><span>iseser@iseser.com</span></a>.
                                    </p>
                                    <p>You can contact us by phone number for emergencies. </p>
                                    <ul>
                                        <li>Şükrü Dursun (office) <a href="tel:+903322238630">: +903322238630</a></li>
                                        <li>Nilgün Yenil Harmancı (office) <a href="tel:+902362013159">: +902362013159</a></li>
                                        <li>Şükrü Dursun (whatsapp) <a href="tel:+905365954591">: +905365954591</a></li>
                                        <li>Nilgün Yenil Harmancı (whatsapp) <a href="tel:+905333449728">: +905333449728</a></li>
                                    </ul>
                                    <p>For technical issues. </p>
                                    <ul>
                                        <li><a href="tel:+905365954591">Yasin Akın Ayturan (whatsapp)</a>: +905548675660</li>
                                    </ul>

                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.6863909310614!2d27.378159015341968!3d38.61008787961599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b99cdc6eb147a3%3A0x798a617a9e68f51!2sManisa%20Celal%20Bayar%20%C3%9Cniversitesi%20S%C3%BCleyman%20Demirel%20K%C3%BClt%C3%BCr%20Merkezi!5e0!3m2!1sen!2str!4v1574170108828!5m2!1sen!2str"
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
