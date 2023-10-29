import { PageHeader } from '@/layout/Breadcrumb'
import Link from 'next/link'
import Announcement from '@/components/Announcement'
import Enlightenment from '@/components/Enlightenment'
import { randomTimeString } from '@/components/randomTimeString'

const metaTitle = 'ISESER Documents Archives'
export const metadata = {
  title: metaTitle,
  openGraph: {
    title: metaTitle
  }
}

export function Document2023() {
  return <>
    <ul className='icon dashed'>
      <li><a href={'https://api.iseser.com/doc/2023/ISESER2023_BANNER.pdf?e' + randomTimeString} target='_blank'><i className='fa-regular fa-file-pdf'></i> BANNER</a></li>
      <li><a href={'https://api.iseser.com/doc/2023/ISESER2023-FINAL-PROGRAM.pdf?e' + randomTimeString} target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> FINAL PROGRAM</a></li>
      <li><Link href='../year/2023'><i className='fa-regular fa-file-code'></i> ABSTRACTS ONLINE VIEW</Link></li>
    </ul>
    <ul>
      <li><a href='https://photos.app.goo.gl/ftS6XjNtDY91a1rT7' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-image' aria-hidden='true'></i> PHOTOS </a></li>
      <li><a href='https://www.youtube.com/playlist?list=PLcT5bWlEGP-2fKrCEWPUJ4vDa7Rd0e4n1' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-video' aria-hidden='true'></i> VIDEOS </a></li>
    </ul>
  </>
}

function Document2021() {
  return <>
    <ul className='icon dashed'>
      <li><a href='https://api.iseser.com/doc/2021/ISESER2021_BANNER.pdf' target='_blank'><i className='fa-regular fa-file-pdf'></i> BANNER</a></li>
      <li><a href='https://api.iseser.com/doc/2021/ISESER2021_BROCHURE.pdf' target='_blank'><i className='fa-regular fa-file-pdf'></i> BROCHURE</a></li>
      <li><a href='https://api.iseser.com/doc/2021/ISESER2021-FINAL-PROGRAM.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> FINAL PROGRAM </a></li>
      <li><Link href='../year/2021'><i className='fa-regular fa-file-code'></i> ABSTRACTS ONLINE VIEW</Link></li>
      <li><a href='https://api.iseser.com/doc/2021/ISESER2021-PROCEEDING-BOOK.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> PROCEEDING BOOK</a></li>
    </ul>
    <ul>
      <li><a href='https://photos.app.goo.gl/TzfgvEuH1uUVtzLQ8' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-image' aria-hidden='true'></i> PHOTOS </a></li>
      <li><a href='https://www.youtube.com/playlist?list=PLcT5bWlEGP-2aj8W_R1lqzQYYDZW3W8Bs' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-video' aria-hidden='true'></i> VIDEOS </a></li>
    </ul>
  </>
}

function Document2020() {
  return <>
    <ul className='icon dashed'>
      <li><a href='https://api.iseser.com/doc/2020/ISESER2020_BANNER.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> BANNER</a></li>
      <li><a href='https://api.iseser.com/doc/2020/ISESER2020_BROCHURE.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> BROCHURE</a></li>
      <li><a href='https://api.iseser.com/doc/2020/ISESER2020-FINAL-PROGRAM.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> FINAL PROGRAM </a></li>
      <li><Link href='../year/2020'><i className='fa-regular fa-file-code'></i> ABSTRACTS ONLINE VIEW</Link></li>
      <li><a href='https://api.iseser.com/doc/2020/ISESER2020-PROCEEDING-BOOK.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> PROCEEDING BOOK</a></li>
    </ul>
    <ul>
      <li><a href='https://photos.app.goo.gl/Mt7cq676fq97wAvt7' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-image' aria-hidden='true'></i> PHOTOS </a></li>
      <li><a href='https://www.youtube.com/playlist?list=PLcT5bWlEGP-1MCb7MnCW_ppwGCLF_cz3w' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-video' aria-hidden='true'></i> VIDEOS </a></li>
    </ul>
  </>
}

function Document2019() {
  return <>
    <ul className='icon dashed'>
      <li><a href='https://api.iseser.com/doc/2019/ISESER2019_BANNER.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> BANNER</a></li>
      <li><a href='https://api.iseser.com/doc/2019/ISESER2019_BROCHURE.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> BROCHURE</a></li>
      <li><a href='https://api.iseser.com/doc/2019/ISESER2019-FINAL-PROGRAM.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> FINAL PROGRAM </a></li>
      <li><Link href='../year/2019'><i className='fa-regular fa-file-code'></i> ABSTRACTS ONLINE VIEW</Link></li>
      <li><a href='https://api.iseser.com/doc/2019/ISESER2019-PROCEEDING-BOOK.pdf' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-pdf'></i> PROCEEDING BOOK</a></li>
    </ul>
    <ul>
      <li><a href='https://photos.app.goo.gl/H5feZQmP2oVDWyHSA' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-image' aria-hidden='true'></i> PHOTOS </a></li>
    </ul>
  </>
}

function Document2018() {
  return <>
    <ul className='icon dashed'>
      <li><a href='https://api.iseser.com/doc/2018/ISESER2018_BANNER.pdf' target='_blank'><i className='fa-regular fa-file-pdf' aria-hidden='true'></i> BANNER</a></li>
      <li><a href='https://api.iseser.com/doc/2018/ISESER2018_Brochure.pdf' target='_blank'><i className='fa-regular fa-file-pdf'></i> BROCHURE</a></li>
      <li><a href='https://api.iseser.com/doc/2018/ISESER2018-FINAL-PROGRAM.pdf' target='_blank'><i className='fa-regular fa-file-pdf'></i> FINAL PROGRAM</a></li>
      <li><Link href='../year/2018'><i className='fa-regular fa-file-code'></i> ABSTRACTS ONLINE VIEW</Link></li>
      <li><a href='https://api.iseser.com/doc/2018/ISESER2018-ABSTRACT-BOOK.pdf' target='_blank'><i className='fa-regular fa-file-pdf'></i> ABSTRACT BOOK</a></li>
    </ul>
    <ul>
      <li><a href='https://photos.app.goo.gl/ZZ49LfL7T8Y74A2TA' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-image' aria-hidden='true'></i> PHOTOS </a></li>
    </ul>
  </>
}


export default function Page() {
  return <>
    <PageHeader title='ISESER Documents Archives' />
    <section className='about-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-heading'>
              <h2 className='section__title'>ISESER Documents Archives
              </h2>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='section-heading'>
              <p className='section__meta'><Link href='/year/2023'>2023 SYMPOSIUM (ISESER)</Link></p>
              <div className='section__desc'>
                <Document2023 />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <div className='section-heading'>
                <p className='section__meta'><Link href='/year/2021'>2021 SYMPOSIUM (ISESER)</Link></p>
                <div className='section__desc'>
                  <Document2021 />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <div className='section-heading'>
                <p className='section__meta'><Link href='/year/2020'>2020 SYMPOSIUM (ISESER)</Link></p>
                <div className='section__desc'>
                  <Document2020 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='section-heading'>
              <p className='section__meta'><Link href='/year/2019'>2019 SYMPOSIUM (ISESER)</Link></p>
              <div className='section__desc'>
                <Document2019 />
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='section-heading'>
              <p className='section__meta'><Link href='/year/2018'>2018 SYMPOSIUM (ISESER)</Link></p>
              <div className='section__desc'>
                <Document2018 />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-6'>
            <div className='section-heading'>
              <p className='section__meta'>2017 SYMPOSIUM (UCMOS)</p>
              <div className='section__desc'>
                <ul className='icon'>
                  <li><a href='https://api.iseser.com/doc/2017/2nd-UCMOS.jpg' target='_blank'><i className='fa-regular fa-file-image' aria-hidden='true'></i> BANNER</a></li>
                  <li><a href='https://api.iseser.com/doc/2017/Duyuru-Konya1-5.pdf' target='_blank'><i className='fa-regular fa-file-pdf'></i> ANNOUNCEMENT</a></li>
                  <li><a href='https://api.iseser.com/doc/2017/UCMOS_KONGRE_PROGRAMI.pdf' target='_blank'><i className='fa-regular fa-file-pdf' aria-hidden='true'></i> FINAL PROGRAM</a></li>
                  <li><a href='https://api.iseser.com/doc/2017/ISESER2017-PROCEEDING-BOOK.pdf' target='_blank'><i className='fa-regular fa-file-pdf'></i> PROCEEDING BOOK</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='section-heading'>
              <p className='section__meta'>2016 SYMPOSIUM (UCMOS)</p>
              <div className='section__desc'>
                <ul className='icon'>
                  <li><a href='https://api.iseser.com/doc/2016/afis4.jpg' target='_blank'><i className='fa-regular fa-file-image' aria-hidden='true'></i> BANNER </a></li>
                  <li><a href='https://api.iseser.com/doc/2016/Duyuru-Konya.pdf' target='_blank'><i className='fa-regular fa-file-pdf'></i> ANNOUNCEMENT</a></li>
                  <li><a href='https://api.iseser.com/doc/2016/UCMOS_KONGRE_PROGRAMI.pdf' target='_blank'><i className='fa-regular fa-file-pdf' aria-hidden='true'></i> FINAL PROGRAM</a></li>
                  <li><a href='https://api.iseser.com/doc/2016/ISESER2016-PROCEEDING-BOOK.pdf' target='_blank'><i className='fa-regular fa-file-pdf'></i> PROCEEDING BOOK</a></li>
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
