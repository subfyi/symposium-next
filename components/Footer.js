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

                    <div className="footer-top">
                        <div className="container">
                            <div className="row footer-widget-wrap">
                                <div className="col footer-item footer-item1  col-md-4">
                                    <aside><a href="/"><img className="td-retina-data td-retina-version"
                                                            src="https://iseser.com/doc/logo/v_5_telif-300x300.png"
                                                           alt="iseser"
                                                            title="iseser" width="" /></a>
                                    </aside>
                                </div>
                                <div className="col footer-item footer-item2">
                                    <h3 className="widget__title"> ABOUT US</h3>
                                    <ul className="foot__links">
                                        <li>International Symposium for Environmental Science and Engineering Research (ISESER2020)</li>
                                        <li>ISESER2020 which will be held on 4-5 July 2020 in, Manisa.</li>
                                        <li>Contact us: <a href="mailto:iseser@iseser.com">iseser@iseser.com</a></li>
                                        <li>Şükrü Dursun (whatsapp) <a href="tel:+905365954591">: +905365954591</a></li>
                                        <li>Nilgün Yenil Harmancı (whatsapp) <a href="tel:+905333449728">: +905333449728</a></li>
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
                                        <p>© Copyright 2020 by <a target="_blank" href="https://sub.fyi/">Sub.fyi</a></p>
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