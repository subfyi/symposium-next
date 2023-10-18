"use client";

import React, { useState, useEffect } from 'react';

export default function Footer() {
    const [scrollBtn, setScrollBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrollBtn(true);
            } else if (window.scrollY < 100) {
                setScrollBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    return (
      <div>
          <section className="footer-area">
              <div className="footer-top">
                  <div className="container">
                      <div className="row footer-widget-wrap">
                          <div className="col footer-item footer-item1 col-md-4">
                              <aside>
                                  <a href="/">
                                      <img
                                        className="td-retina-data td-retina-version"
                                        src="https://iseser.com/doc/logo/v_5_telif-300x300.png"
                                        alt="iseser"
                                        title="iseser"
                                        width=""
                                      />
                                  </a>
                              </aside>
                          </div>
                          <div className="col footer-item footer-item2">
                              <h3 className="widget__title"> ABOUT US</h3>
                              <ul className="foot__links">
                                  <li>International Symposium for Environmental Science and Engineering Research (ISESER2023)</li>
                                  <li>ISESER2023 which will be held on 18-21 October 2023.</li>
                                  <li>Contact us: <a href="mailto:iseser@iseser.com">iseser@iseser.com</a></li>
                                  <li>Şükrü Dursun (whatsapp) <a href="tel:+905365954591">: +905365954591</a></li>
                                  <li>Fatma Kunt (whatsapp) <a href="tel:+905412481558">: +905412481558</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-copyright">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="copyright-desc">
                                  <p>© Copyright 2023 by <a target="_blank" href="https://sub.fyi/">Sub.fyi</a></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <div onClick={scrollTop} id="back-to-top" className={scrollBtn ? 'back-btn-shown' : ''}>
              <i className="fa fa-arrow-up" title="Go top"></i>
          </div>
      </div>
    );
}

