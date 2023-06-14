import React from 'react';
import Link from 'next/link';

const PageHeaderEvent = (props) => {
    return (
        <section className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-content">
                            <ul className="breadcrumb__list">
                                <li className="active__list-item"><Link href="/">home</Link></li>
                                <li className="active__list-item"><Link href={ props.titlehref }>{ props.title }</Link></li>
                                <li><Link href={ "/year/" + props.titlehref2 }>{ props.title2 }</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeaderEvent;
