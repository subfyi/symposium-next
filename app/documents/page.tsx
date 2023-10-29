import { PageHeader } from '@/layout/Breadcrumb'
import Announcement from '@/components/Announcement'
import Enlightenment from '@/components/Enlightenment'
import { DocumentWithYear } from '@/app/documents-all/page'

const metaTitle = 'Documents'
export const metadata = {
  title: metaTitle + ' | ISESER2023',
  description: metaTitle + '  - International Symposium for Environmental Science and Engineering Research 2023',
  openGraph: {
    title: metaTitle + ' | ISESER2023',
    description: metaTitle + '  - International Symposium for Environmental Science and Engineering Research 2023',
  }
}
export default function Page() {
  return <>
    <PageHeader title={metaTitle} />
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
                </ul>
                <DocumentWithYear year={2023} />
                <ul>
                  <li><a href='https://photos.app.goo.gl/ftS6XjNtDY91a1rT7' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-image' aria-hidden='true'></i> PHOTOS </a></li>
                  <li><a href='https://www.youtube.com/playlist?list=PLcT5bWlEGP-2fKrCEWPUJ4vDa7Rd0e4n1' target='_blank' rel='noopener noreferrer'><i className='fa-regular fa-file-video' aria-hidden='true'></i> VIDEOS </a></li>
                </ul>
                <hr />
                <ul>
                  <li><a href='https://api.iseser.com/doc/2023/ISESER2023_Abstract_Template.docx' target='_blank'><i className='fa-regular fa-file-word'></i> Abstract Template</a>
                  </li>
                  <li><a href='https://api.iseser.com/doc/2023/ISESER2023_Full_Paper_Template.docx' target='_blank'><i className='fa-regular fa-file-word'></i> Full Paper Template</a>
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
