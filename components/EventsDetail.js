import React from 'react';
import Map from "./Map";

const EventsDetail = () => {
    return (<section className="causes-detail-area news-detail-area">
                <div className="container">
                    <div className="row blog-content-wrap">
                        <div className="col-lg-12">
                            <h3 className="blog__title"><a href="#">TITLE</a>
                            </h3>
                        </div>
                        <div className="col-lg-8">
                            <div className="blog-content">
                                <div className="blog-item">
                                    <div className="blog-inner-content">
                                        <div className="inner-causes-box">

                                            <ul className="blog__list">
                                                <li><a href="#">3 Author(s):</a></li>
                                                <li className="blog__dot-active"><a href="#">asd ad</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-inner-content-2">
                                        <p className="causes__text">
                                        <strong>
                                            Abstract:
                                        </strong>   asdasdasdasddsa

                                        </p>

                                        <div className="news-tags">
                                            <div className="news-tag-item-left">
                                    <span className="news-meta-tags">
                                        <span className="news-meta-title">Keywords</span>
                                        <a href="#">pickering </a>
                                        <a href="#">surface </a>
                                        <a href="#">Dye </a>
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
                                    <h2 className="widget__title">Presentation Type: Oral</h2>
                                    <div className="author-box recent-donate-item">
                                        <a className="reply__btn theme-btn" href="#">PDF</a>
                                    </div>
                                </div>
                                <div className="side-widget">
                                    <h2 className="widget__title">Cite This (APA)
                                    </h2>
                                    <div className="side-cats">
                                       cite ver.

                                    </div>
                                </div>
                                <div className="side-widget">
                                    <h2 className="widget__title">Other Cites</h2>
                                    <div className="side-tags">
                                        <ul>
                                            <li><a href="#">BibTeX</a></li>
                                            <li><a href="#">RIS</a></li>
                                            <li><a href="#">EndNote</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default EventsDetail;
