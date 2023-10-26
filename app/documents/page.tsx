import { PageHeader } from '@/layout/Breadcrumb'
import Announcement from '@/components/Announcement'
import Enlightenment from '@/components/Enlightenment'
import { randomTimeString } from '@/components/randomTimeString'
import Link from 'next/link'

const metaTitle = 'Documents'
export const metadata = {
  title: metaTitle + ' | ISESER2023',
  openGraph: {
    title: metaTitle + ' | ISESER2023'
  }
}
export default function Page() {
  return <>
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

                <ul className='icon'>
                  <li><a href='https://portal.iseser.com/'><i className='fa fa-external-link'></i> REGISTRATION</a></li>
                  <li><a href={'https://api.iseser.com/doc/2023/ISESER2023_BANNER.pdf?e' + randomTimeString} target='_blank'><i className='fa-regular fa-file-pdf'></i> BANNER</a></li>
                  <li><a href={'https://api.iseser.com/doc/2023/ISESER2023-FINAL-PROGRAM.pdf?e' + randomTimeString} target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> FINAL PROGRAM</a></li>
                  <li><Link href='../year/2023'><i className='fa-regular fa-file-code'></i> ABSTRACTS ONLINE VIEW</Link></li>
                  {/*
                        <li className="star"><a href={'https://api.iseser.com/doc/2023/ISESER2023-PROCEEDING-BOOK.pdf?e' + randomTimeString} target="_blank" rel="noopener noreferrer"><i className="fa  fa-file-pdf-o"></i> PROCEEDING BOOK</a></li>
                  */}
                </ul>
                <hr />

                <ul>
                  <li><a href='https://api.iseser.com/doc/2023/ISESER2023_Abstract_Template.docx' target='_blank'><i className='fa-regular fa-file-word'></i> Abstract Template</a>
                  </li>
                  <li><a href='https://api.iseser.com/doc/2023/ISESER2023_Full_Paper_Template.docx' target='_blank'><i class='fa-regular fa-file-word'></i> Full Paper Template</a>
                  </li>
                  <li><a href='https://api.iseser.com/doc/2023/ISESER2023_POSTER-PREPARATION.pptm' target='_blank'><i className='fa-regular fa-file-powerpoint'></i> Poster Template</a></li>
                  <li><br /></li>
                  <li><span className='important-notice'>“THE POSTER NEED TO BE 70X90 CM TO BE SEEN IN THE TEMPLATE.”</span></li>
                  <li><span className='important-notice'>“MAXIMUM PAGE NUMBER WHICH WILL BE USED IN ABSTRACT TEXTS SHOULD NOT BE EXCEEDED 1.”</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Enlightenment />
    <Announcement />
  </>
}
