import React from 'react';

const CallToAction = () => {
    return (
        <section className="mixer-area mixer-area3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-heading mixer-heading">
                            <a href="/documents" className="theme-btn">Documents</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="section-heading mixer-heading">
                            <a target="_blank" href="/doc/2021/ISESER2021_BANNER.pdf?v2" className="theme-btn">Click for 2021 Banner</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <a target="_blank" href="/doc/2021/ISESER2021-FINAL-PROGRAM.pdf?e1" className="theme-btn">Final program was announced </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
