import { PageHeader } from '@/layout/Breadcrumb'
import Link from 'next/link'
import Enlightenment from '@/components/Enlightenment'

const metaTitle = 'Announcement'
export const metadata = {
  title: metaTitle + ' | ISESER2023',
  openGraph: {
    title: metaTitle + ' | ISESER2023'
  }
}
export default function Page() {
  return <>
    <PageHeader title='Announcement' />
    <section className='about-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className=''>
              <div className='section-heading'>
                <h2 className='section__title'>Announcement</h2>
              </div>
            </div>
          </div>

          <div className='col-lg-12'>
            <div className=''>
              <div className='section-heading'>

                <div className='section__desc pb-1'>
                  <h1>Welcome to ISESER2023.</h1>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className='col-lg-12'>

            <div className=''>
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
            <div className=''>
              <div className='section-heading'>
                <div className='section__desc'>
                  <div className='form-group'>
                    <hr />
                    <p><Link href='/important-dates'>Important Dates</Link> were announced. </p>
                    <hr />
                    <div className={'text-success'}>
                      Webinar links for online presentations are announced in the <Link href='/documents'>documents</Link> section.
                    </div>
                    <hr />
                    <div className={'text-danger'}>
                      The presentation will primarily be delivered in English, with a targeted duration of approximately 8-10 minutes, followed by a 5-minute question and answer session.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Enlightenment />
  </>
}

