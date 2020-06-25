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
                                <li className="active__list-item"><Link href="/"><a>home</a></Link></li>
                                <li className="active__list-item"><Link href={ props.titlehref }><a>{ props.title }</a></Link></li>
                                <li><Link href={ "/year/" + props.titlehref2 }><a>{ props.title2 }</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeaderEvent;
