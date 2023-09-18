import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Alert } from 'reactstrap'

export default function SymposiumAnnounced() {
  return (
    <Layout pageTitle='Announcement | ISESER2023'>
      <NavOne />
      <PageHeader title='Announcement' />
      <section className='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <h2 className='section__title'>Announcement</h2>
                </div>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>

                  <div className='section__desc'>
                    Welcome to ISESER2023.
                  </div>
                </div>
              </div>
            </div>


            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'><p className='section__meta'>Full paper submission</p>

                  <div className='section__desc'>
                    <div className='form-group'>
                      <p>Full paper submission is now open in <a href='//portal.iseser.com/submission/create'>user area</a>.{' '} There are three choices for paper submission.

                      </p>
                      <ul>
                        <li>If you want your paper will be published in proceeding book, please submit your full paper written
                          in english language and appropriate with template given in the documents and choose the option of
                          (Proceeding Book).
                        </li>
                        <li>If you want your English full paper to be published in a journal, please choose the option of
                          (EN-Only Journal).
                        </li>
                      </ul>
                      <hr />
                      <p>* <b>It is forbidden to publish same full paper both in the proceeding book and the journal.</b> Our
                        Sponsor journal list in <Link href='/sponsors'>Sponsors</Link> page. </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <div className='section__desc'>
                    <div className='form-group'>
                      <hr />
                      <p>Important Dates were announced in link: <Link href='/important-dates'>https://iseser.com/important-dates</Link></p>
                      <hr />
                      <p>
                        <Alert color={'info'}>
                          The presentation will primarily be delivered in English, with a targeted duration of approximately 10-15 minutes, followed by a 5-minute question and answer session.
                        </Alert>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}