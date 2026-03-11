'use client'

import Announcement from '@/components/Announcement'
import { PageHeaderEvent } from '@/layout/Breadcrumb'
import Link from 'next/link'

export default function YearPageClient({ orals, posters, year }) {
  const oralRows = Array.isArray(orals?.data) ? orals.data : []
  const posterRows = Array.isArray(posters?.data) ? posters.data : []

  function renderAuthors(datas) {
    const authors = Array.isArray(datas?.authors) ? datas.authors : []

    if (!authors.length) {
      return <span>Author information is not available.</span>
    }

    return authors.map((author, index) => (
      <span key={index} className='text-capitalize'>
        {author.first_name} {author.last_name}<sup>{index + 1}</sup>
        {index < authors.length - 1 && (
          <span>,{' '}</span>)}
      </span>
    ))
  }

  return <>
    <PageHeaderEvent
      title={'All Symposium'}
      titlehref='/documents-all'
      title2={'Symposium ' + year}
      titlehref2={year}
    />
    <section className='about-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <h2 className='section__title'>ISESER{year} ABSTRACTS ONLINE VERSION
                </h2>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <h3> Oral Presentations</h3>
                <hr />
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <div className='section__desc'>
                  <table className='tg'>
                    <thead>
                    <tr>
                      <th className='text-center'>

                        #
                      </th>
                      <th className='text-center'>
                        Title of Abstract
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    {!oralRows.length && <tr>
                      <td colSpan={2}>No oral presentations were found for this symposium year.</td>
                    </tr>}
                    {oralRows.map((datas, i) => <>
                      <tr key={datas.id || `oral-${i}`}>
                        <td><b>O{i + 1}</b></td>
                        <td><Link className={'text-uppercase'} href={'/year/' + year + '/paper/' + (datas.id)}> {(datas.en_title || datas.title || 'Untitled Paper').toUpperCase()}</Link></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className={'text-capitalize'}>
                          {renderAuthors(datas)}
                        </td>
                      </tr>
                    </>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <p><br /></p>
                <h3> Poster Presentations</h3>
                <hr />
              </div>
            </div>
          </div>

          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <table className=' tg section__desc'>
                  <thead>
                  <tr>
                    <th className='text-center'>
                      #
                    </th>
                    <th className='text-center'>
                      Title of Abstract
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {!posterRows.length && <tr>
                    <td colSpan={2}>No poster presentations were found for this symposium year.</td>
                  </tr>}
                  {posterRows.map((datas, i) => <>
                    <tr key={datas.id || `poster-${i}`}>
                      <td><b>P{i + 1}</b></td>
                      <td><Link className={'text-uppercase'} href={'/year/' + year + '/paper/' + (datas.id)}> {(datas.en_title || datas.title || 'Untitled Paper').toUpperCase()}</Link></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        {renderAuthors(datas)}
                      </td>
                    </tr>
                  </>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Announcement />
  </>
}
