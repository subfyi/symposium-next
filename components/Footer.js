import React, {Component} from 'react';

class Footer extends Component {
    constructor(){
        super()
        this.state = {
          scrollBtn: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <section className="footer-area">
                    <div>
                        iseser
                        ABOUT US
                        International Symposium for Environmental Science and Engineering Research (ISESER2020)
                        ISESER2020 which will be held on 4-5 July 2020 in, Manisa.
                        Contact us: iseser@iseser.com
                        Şükrü Dursun (office): +903322238630
                        Nilgün Yenil Harmancı (office): +902362013159
                    </div>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row footer-widget-wrap">
                                <div className="col footer-item footer-item1">
                                    <h3 className="widget__title">about</h3>
                                    <ul className="foot__links">
                                        <li><a href="#">causes</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">New Campaign</a></li>
                                        <li><a href="#">Site Map</a></li>
                                        <li><a href="#">Events</a></li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item2">
                                    <h3 className="widget__title">explore</h3>
                                    <ul className="foot__links">
                                        <li><a href="#">Press Release</a></li>
                                        <li><a href="#">contact</a></li>
                                        <li><a href="#">Blog Posts</a></li>
                                        <li><a href="#">Social Connect</a></li>
                                        <li><a href="#">Help Topics</a></li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item3">
                                    <h3 className="widget__title">links</h3>
                                    <ul className="foot__links">
                                        <li><a href="#">Podcasts</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Videos</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item3">
                                    <h3 className="widget__title">blog</h3>
                                    <ul className="foot__links">
                                        <li><a href="#">Care for All People</a></li>
                                        <li><a href="#">Build school for kids</a></li>
                                        <li><a href="#">Being Volunteer</a></li>
                                        <li><a href="#">Raise fund to help</a></li>
                                    </ul>
                                </div>
                                <div className="col footer-item footer-item4">
                                    <h3 className="widget__title">contact</h3>
                                    <ul className="contact__info">
                                        <li>660 Broklyn Street, 88 New York</li>
                                        <li><a href="mailto:needhelp@oxpitan.com">needhelp@oxpitan.com</a></li>
                                        <li><a href="tel:6668880000">666 888 0000</a></li>
                                    </ul>
                                    <div className="footer__social">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-desc">
                                        <p>© Copyright 2020 by <a href="#">Layerdrops.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div onClick={this.scrollTop} id="back-to-top" className={this.state.scrollBtn ? 'back-btn-shown' : ''}>
                    <i className="fa fa-angle-up" title="Go top"></i>
                </div>

            </div>
        );
    }
}

export default Footer;