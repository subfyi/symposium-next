'use client'

import Announcement from '@/components/Announcement'
import { PageHeaderEvent } from '@/layout/Breadcrumb'
import Link from 'next/link'

export default function YearPageClient({ orals, posters, year }) {
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
                    {orals.data.map((datas, i) => <>
                      <tr key={datas.id}>
                        <td><b>O{i + 1}</b></td>
                        <td><Link className={'text-uppercase'} href={'/year/' + year + '/paper/' + (datas.id)}> {datas.en_title.toUpperCase()}</Link></td>
                      </tr>
                      <tr>
                        <td colSpan={2} className={'text-capitalize'}>
                          {datas.authors.map((author, index) => (
                            <span key={index} className='text-capitalize'>
                                  {author.first_name} {author.last_name}<sup>{index + 1}</sup>
                              {index < datas.authors.length - 1 && (
                                <span>,{' '}</span>)}</span>
                          ))}
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
                  {posters.data.map((datas, i) => <>
                    <tr key={datas.id}>
                      <td><b>P{i + 1}</b></td>
                      <td><Link className={'text-uppercase'} href={'/year/' + year + '/paper/' + (datas.id)}> {datas.en_title}</Link></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        {datas.authors.map((author, index) => (
                          <span key={index} className='text-capitalize'>
                                  {author.first_name} {author.last_name}<sup>{index + 1}</sup>
                            {index < datas.authors.length - 1 && (
                              <span>,{' '}</span>)}</span>
                        ))}
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