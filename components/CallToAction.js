import React from 'react';

const CallToAction = () => {
    return (
        <section className="mixer-area mixer-area3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-heading mixer-heading">
                            <a href="/documents-all" className="theme-btn">Documents</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="section-heading mixer-heading">
                            <a target="_blank" href="/doc/2021/ISESER2021-ABSTRACT-BOOK.pdf?e2" className="theme-btn">Abstract Book of ISESER 2021 was published. </a>
                            {/*
                                <a target="_blank" href="/doc/2021/ISESER2021-FINAL-PROGRAM.pdf?e4" className="theme-btn">Final program was announced </a>
                            */}
                        </div>
                    </div>


                    <div className="col-lg-4 mt-3">
                        <div className="section-heading mixer-heading">
                            <a href="/symposium-announced" className="theme-btn">Announcement</a>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <div className="section-heading mixer-heading">
                            <a target="_blank" href="/doc/2021/ISESER2021-PROCEEDING-BOOK.pdf?e3" className="theme-btn">PROCEEDING BOOK of ISESER 2021 was published. </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
