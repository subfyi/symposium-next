'use client';

import { PageHeader } from '@/layout/Breadcrumb'
import Announcement from "@/components/Announcement";
import Layout from "@/layout/Layout";

export default function Page() {
    return <>
        <PageHeader title='Important Dates'/>
        <section className='about-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div>
                            <div className='section-heading'>
                                <h2 className='section__title'>Important Dates</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div>
                            <div className='section-heading'>
                                <p className='section__desc'>
                                    <ul>
                                        <li>Registration and Abstract Submission Date: 1 October 2023</li>
                                        <li>Full Text Deadline: 30 October 2023</li>
                                        <li>Symposium Date: 19-21 October 2023</li>

                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Announcement/>
    </>;
}
