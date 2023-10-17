import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

export default function Documents() {
  return (
    <Layout pageTitle='Documents | ISESER2023'>
      <NavOne />
      <PageHeader title='Documents' />
      <section className='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <div className='section-heading'>
                  <h2 className='section__title'>Documents for 2023
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div>
                <div className='section-heading'>

                  <p className='section__desc'>
                    <ul className='icon'>
                      <li className='star'><a href='https://portal.iseser.com/'><i className='fa fa-external-link'></i> REGISTRATION</a></li>
                      <li className='star'><a href='https://api.iseser.com/doc/2023/ISESER2023_BANNER.pdf?e10' target='_blank'><i className='fa  fa-file-pdf-o'></i> BANNER</a></li>
                      <li className='star'><a href='https://api.iseser.com/doc/2023/ISESER2023-FINAL-PROGRAM.pdf?e10' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> FINAL PROGRAM</a></li>
                      <li className='star'><a href='https://api.iseser.com/doc/2023/webinar_link.pdf?e10' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> WEBINAR LINK</a></li>
                      <li className='star'><a href='../year/2023'><i className='fa fa-file-code-o'></i> WEB VERSION (ONLINE VIEW)</a></li>
                      {/*
                        <li className="star"><a href="https://api.iseser.com/doc/2023/ISESER2023-ABSTRACT-BOOK.pdf?e10" target="_blank" rel="noopener noreferrer"><i className="fa  fa-file-pdf-o"></i> ABSTRACT BOOK </a></li>
                        <li className="star"><a href="https://api.iseser.com/doc/2023/ISESER2023-PROCEEDING-BOOK.pdf?e10" target="_blank" rel="noopener noreferrer"><i className="fa  fa-file-pdf-o"></i> PROCEEDING BOOK</a></li>
                       */}
                    </ul>
                    <hr />

                    <li className='star'><a href='https://api.iseser.com/doc/2023/webinar_guide.pdf' target='_blank'><i className='fa  fa-file-pdf-o'></i> WEBINAR GUIDE (PDF)</a></li>
                    <li className='star'><a href='https://api.iseser.com/doc/2023/webinar_guide_tr.pdf' target='_blank'><i className='fa  fa-file-pdf-o'></i> WEBINAR GUIDE (TR - PDF)</a></li>
                    <li className='star'><a href='https://api.iseser.com/doc/2023/webinar_guide.mp4' target='_blank'><i className='fa  fa-file-video-o'></i> WEBINAR GUIDE (TR - VIDEO)</a></li>

                    <hr />
                    <ul>
                      <li className='star'><a href='https://api.iseser.com/doc/2023/ISESER2023_Abstract_Template.docx' target='_blank'><i
                        className='fa fa-file-word-o'></i> Abstract Template</a>
                      </li>
                      <li className='star'><a href='https://api.iseser.com/doc/2023/ISESER2023_Full_Paper_Template.docx' target='_blank'><i
                        className='fa fa-file-word-o'></i> Full Paper Template</a>
                      </li>
                      <li className='star'><a href='https://api.iseser.com/doc/2023/ISESER2023_POSTER-PREPARATION.pptm' target='_blank'><i
                        className='fa fa-file-powerpoint-o'></i> Poster
                        Template</a></li>
                      <li><span className='important-notice'>“THE POSTER NEED TO BE 70X90 CM TO BE SEEN IN THE TEMPLATE.”</span>
                      </li>
                      <li><span className='important-notice'>“MAXIMUM PAGE NUMBER WHICH WILL BE USED IN ABSTRACT TEXTS SHOULD NOT BE EXCEEDED 1.”</span>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Announcement />
      <Footer />
    </Layout>
  )
}

