import React from 'react';
import Layout from "../../../../components/Layout";
import NavOne from "../../../../components/NavOne";
import PageHeaderEvent from "../../../../components/PageHeaderEvent";
import Footer from "../../../../components/Footer";
import SimpleReactValidator from 'simple-react-validator'
import api from '../../../../api'

export default class YearList extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({query}) {
        var datas = await api("/api/submission/" + query.slug);
        return {
            datas,
            paper: query.slug,
            year: "2020"
        };
    }


    render() {
        const {datas, year, paper} = this.props;

        return (
            <Layout pageTitle={datas.pap_title}>
                <NavOne/>
                <PageHeaderEvent title={"Symposium " + year}
                                 titlehref={year}/>
                <section className="causes-detail-area news-detail-area">
                    <div className="container">
                        <div className="row blog-content-wrap">
                            <div className="col-lg-12">
                                <h3 className="blog__title"><a href={paper}>{datas.pap_title}</a>
                                </h3>
                            </div>
                            <div className="col-lg-12">
                                <h3>
                                    <hr/>
                                </h3>
                            </div>
                            <div className="col-lg-8">
                                <div className="blog-content">
                                    <div className="blog-item">
                                        <div className="blog-inner-content">
                                            <div className="inner-causes-box">

                                                <ul className="blog__list">
                                                    <li><a href="#">Author(s):</a></li>
                                                    {datas.authors.map((author, index) =>
                                                        <li>{index + 1}. {author.name} {author.surname}{" "}
                                                            {!!author.correspond && <span>(Correspond)</span>}
                                                            {!!author.presenter && <span>(Presenter)</span>},
                                                        </li>
                                                    )}

                                                </ul>
                                                <br/>
                                                <ul className="small">
                                                    {datas.authors.map((author, index) =>
                                                        <li>{index + 1}. {author.adress} ,
                                                        </li>
                                                    )}

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog-inner-content-2">
                                            <p className="causes__text">
                                                <strong>
                                                    Abstract:
                                                </strong> {datas.pap_abstract}

                                            </p>

                                            <div className="news-tags">
                                                <div className="news-tag-item-left">
                                    <span className="news-meta-tags">
                                        <span className="news-meta-title">Keywords:</span>
                                        <a href="#">{(datas.pap_keyword || "").split('|').toString()} </a>
                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar-shared">
                                    <div className="side-widget">
                                        <h4 className="widget__title">Presentation Topic</h4>
                                        <div className="author-box recent-donate-item">
                                            {(datas.topic && datas.topic.value)}
                                        </div>
                                    </div>
                                    <div className="side-widget">
                                        <h4 className="widget__title">Presentation Type</h4>
                                        <div className="author-box recent-donate-item">
                                            {(datas.parampre && datas.parampre.value)}
                                        </div>
                                    </div>

                                    {datas.paper_page &&
                                    <>
                                        {datas.paper_page >= 0 ? <div className="side-widget">
                                            <h4 className="widget__title">Published Paper</h4>
                                            <div className="author-box recent-donate-item">
                                                <a className="reply__btn theme-btn"
                                                   target="_blank"
                                                   href={"https://iseser.com/doc/2019/ISESER2019-PROCEEDING-BOOK.pdf#page=" + (+(datas.paper_page || "").split('-')[0] + splitpage[year])}>
                                                    Full Paper: PDF</a>
                                            </div>
                                        </div> : <div className="side-widget">
                                            <h4 className="widget__title">Published Paper</h4>
                                            <div className="author-box recent-donate-item">
                                                <a className="reply__btn theme-btn"
                                                   target="_blank"
                                                   href={datas.paper_page}>
                                                    Full Paper: PDF</a>
                                            </div>
                                        </div>}
                                    </>
                                    }
                                    {datas.paper_abst_page &&
                                    <div className="side-widget">
                                        <h4 className="widget__title">Published Abstract</h4>
                                        <div className="author-box recent-donate-item">
                                            <a className="reply__btn theme-btn"
                                               target="_blank"
                                               href={"https://iseser.com/doc/2019/ISESER2019-PROCEEDING-BOOK.pdf#page=" + (+(datas.paper_abst_page || "").split('-')[0] + splitpage[year])}>
                                                Full Paper: PDF</a>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>

                            {datas.paper_page &&
                            <div className="col-lg-12">
                                <hr/>
                                <div className="sidebar-shared">
                                    <div className="side-widget">
                                        <h4 className="widget__title">Cite This Paper (Format: APA)
                                        </h4>
                                        <div className="side-cats">
                                            {datas.authors
                                                .map(a => a.surname + ", " + a.name.split(' ').map(a => a[0]).join('. ') + ".")
                                                .join(" & ")
                                            }. ({year}, {smonths[year]}). {datas.pap_title}. International Symposium for Environmental Science and Engineering Research (ISESER{year}),
                                            pp. {datas.paper_page}, Turkey.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </section>
                <Footer/>
            </Layout>);
    }
}
var smonths = {'2019': 'May', '2020': 'July'};
var splitpage = {'2019': 15, '2020': 10};