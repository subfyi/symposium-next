'use client'

import { PageHeaderEvent } from '../../../../../layout/Breadcrumb'

export default function PaperPageClient({ datas, year }) {
  return <>
    <PageHeaderEvent
      title={'All Symposium'}
      titlehref='/documents-all'
      title2={'Symposium ' + year}
      titlehref2={year}
    />
    <section className='causes-detail-area news-detail-area'>
      <div className='container'>
        <div className='row blog-content-wrap'>
          <div className='col-lg-12'>
            <h1 className='blog__title text-uppercase '>{datas.en_title}</h1>
          </div>
          <div className='col-lg-12'>
            <h3>
              <hr />
            </h3>
          </div>
          <div className='col-lg-7'>
            <div className='blog-content'>
              <div className='blog-item'>
                <div className='blog-inner-content'>
                  <div className='inner-causes-box'>
                    <span className=''><a href='#'>Author(s):{' '}</a></span>
                    {datas.authors.map((author, index) => (
                      <span key={index} className='text-capitalize'>
                                  {author.first_name} {author.last_name}<sup>{index + 1}</sup>
                        {index < datas.authors.length - 1 && (
                          <span>,{' '}</span>)}</span>
                    ))}
                    <br />
                    <ul className='small'>
                      {datas.authors.map((author, index) =>
                        <li><sup>{index + 1}.</sup> {author.adress}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className='blog-inner-content-2'>
                  <p className='causes__text'>
                    <strong>Abstract:</strong> {datas.en_abstract}
                  </p>
                  <div className='news-tags m-0 pt-2 pr-3'>
                    <div className='news-tag-item-left'>
                                    <span className='news-meta-tags'>
                                        <span className='news-meta-title'>Keyword(s):</span>
                                      {(datas.pap_keyword || '').split('|').map(a => <a className={'mb-1'}>{a}</a>)}
                                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-5'>
            <div className='sidebar-shared'>
              {datas.paper_page &&
                <>
                  {datas.paper_page >= 0 ? <div className='side-widget'>
                    <h4 className='widget__title'>Proceeding Book</h4>
                    <div className='author-box recent-donate-item'>
                      <a className='reply__btn btn btn-dark w-100'
                         target='_blank'
                         href={'https://api.iseser.com/doc/' + year + '/ISESER' + year + '-PROCEEDING-BOOK.pdf#page=' + (+(datas.paper_page || '').split('-')[0] + splitPpage[year])}>
                        <i className='fa  fa-file-pdf-o'></i> Proceeding Book Page</a>
                    </div>

                    {datas.pap_num && <>
                      <div className='mb-2'>
                        <a className='reply__btn btn btn-danger w-100'
                           target='_blank'
                           href={'https://api.iseser.com/doc/' + year + '/book/' + (datas.parampre && datas.parampre.id === 97 ? 'O' : 'P') + datas.pap_num + '.pdf'}>
                          <i className='fa  fa-file-pdf-o'></i> Proceeding Part</a>
                      </div>
                      <div className='author-box recent-donate-item ps-0 ms-0 d-flex justify-content-between'>
                        <a className='reply__btn btn btn-warning w-100 '
                           target='_blank'
                           href={'https://api.iseser.com/doc/' + year + '/book/COVER_AND_CONTENTS.pdf'}>
                          <i className='fa  fa-file-pdf-o'></i> Cover & Content</a>
                        <a className='reply__btn btn btn-info w-100 ms-2'
                           target='_blank'
                           href={'https://api.iseser.com/doc/' + year + '/ISESER' + year + '-FINAL-PROGRAM.pdf'}>
                          <i className='fa  fa-file-pdf-o'></i> Final Program</a>
                      </div>
                    </>
                    }

                    <div>
                      <b>Page: </b>
                      <span>{datas.paper_page}{datas.paper_page_end && '-' + datas.paper_page_end}</span>
                    </div>

                    {splitPISBN[year] && <div><b>ISBN: </b>
                      <span>{splitPISBN[year]}</span></div>}

                  </div> : <div className='side-widget'>
                    <h4 className='widget__title'>Published Paper</h4>
                    <div className='author-box recent-donate-item'>
                      <a className='reply__btn theme-btn'
                         target='_blank'
                         href={datas.paper_external}>
                        Published Full Paper: PDF</a>
                    </div>
                  </div>}
                </>
              }

              {(year === '2018' && datas.paper_abst_page) && <div className='side-widget'>
                <h5 className='widget__title'>Abstract:</h5>

                {datas.paper_abst_page &&
                  <div className='author-box recent-donate-item'>
                    <a className='reply__btn btn btn-dark w-100'
                       target='_blank'
                       href={'https://api.iseser.com/doc/' + year + '/ISESER' + year + '-ABSTRACT-BOOK.pdf#page=' + (+(datas.paper_abst_page || '').split('-')[0] + splitApage[year])}>
                      <i className='fa  fa-file-pdf-o'></i> Abstract Book</a>
                  </div>
                }
                {datas.pap_num && <>
                  <div className='mb-2'>
                    <a className='reply__btn btn btn-danger w-100'
                       target='_blank'
                       href={'https://api.iseser.com/doc/' + year + '/book/' + (datas.parampre && datas.parampre.id === 97 ? 'O' : 'P') + datas.pap_num + '.pdf'}>
                      <i className='fa  fa-file-pdf-o'></i> Abstract Part</a>
                  </div>
                  <div className='author-box recent-donate-item ps-0 ms-0 d-flex justify-content-between'>
                    <a className='reply__btn btn btn-warning w-100 '
                       target='_blank'
                       href={'https://api.iseser.com/doc/' + year + '/book/COVER_AND_CONTENTS.pdf'}>
                      <i className='fa  fa-file-pdf-o'></i> Cover & Content</a>
                    <a className='reply__btn btn btn-info w-100 ms-2'
                       target='_blank'
                       href={'https://api.iseser.com/doc/' + year + '/ISESER' + year + '-FINAL-PROGRAM.pdf'}>
                      <i className='fa  fa-file-pdf-o'></i> Final Program</a>
                  </div>
                </>
                }

                {datas.paper_abst_page && <div><b>Page: </b>
                  <span>{datas.paper_abst_page}</span></div>}

                {splitAISBN[year] && <div><b>ISBN: </b>
                  <span>{splitAISBN[year]}</span></div>}

              </div>}


              <div className='side-widget'>
                <h4 className='widget__title'>Presentation: </h4>

                {datas.topic && <div>
                  <b>Topic: </b>
                  <span>{datas.topic.value}</span>
                </div>}

                {datas.parampre && <div>
                  <b>Type: </b>
                  <span>{datas.parampre.value}</span>
                </div>}

              </div>

              <div className='side-widget'>
                <h4 className='widget__title'>Symposium </h4>
                <div>
                  <b>Year: </b>
                  <span>{year}</span>
                </div>

                <div>
                  <b>Month: </b>
                  <span>{smonths[year]}</span>
                </div>

                <div>
                  <b>Venue: </b>
                  <span>{splitPlace[year]}</span>
                </div>
              </div>
            </div>


          </div>

          {(year === '2018' && datas.paper_abst_page) && datas.pap_num &&
            <div className='col-lg-12 mt-2'>
              <div className='sidebar-shared'>
                <div className='side-widget'>
                  <h4 className='widget__title'>Cite This Paper (Format: APA)
                  </h4>
                  <div className='side-cats'>
                    {datas.authors
                      .map(a => a.last_name + ', ' + a.first_name.split(' ').map(a => a[0]).join('. ') + '.')
                      .join(' & ')
                    }. ({year}, {smonths[year]}). {datas.en_title}. International Symposium for Environmental Science and Engineering Research (ISESER{year}),
                    pp. {datas.pap_num}, {splitPlace[year]}.
                  </div>
                </div>
              </div>
            </div>
          }

          {datas.paper_page &&
            <div className='col-lg-12 mt-2'>
              <div className='sidebar-shared'>
                <div className='side-widget'>
                  <h4 className='widget__title'>Cite This Paper (Format: APA)
                  </h4>
                  <div className='side-cats'>
                    {datas.authors
                      .map(a => a.last_name + ', ' + a.first_name.split(' ').map(a => a[0]).join('. ') + '.')
                      .join(' & ')
                    }. ({year}, {smonths[year]}). {datas.en_title}. International Symposium for Environmental Science and Engineering Research (ISESER{year}),
                    pp. {datas.paper_page}{datas.paper_page_end && '-' + datas.paper_page_end}, {splitPlace[year]}.
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  </>
}


export const sMonthDig = {
  '2016': '5',
  '2017': '5',
  '2018': '5',
  '2019': '5',
  '2020': '7',
  '2021': '6',
  '2023': '10'
}

export const smonths = {
  '2016': 'May',
  '2017': 'May',
  '2018': 'May',
  '2019': 'May',
  '2020': 'July',
  '2021': 'June',
  '2023': 'October'
}
export const splitApage = {
  '2016': 'NULL',
  '2017': 'NULL',
  '2018': 12,
  '2019': 15,
  '2020': 10,
  '2021': 9,
  '2023': 'NULL'
}
export const splitAISBN = {
  '2016': 'NULL',
  '2017': 'NULL',
  '2018': '978-605-83522-1-6',
  '2019': 'NULL',
  '2020': '978-605-69996-1-1',
  '2021': '',
  '2023': 'NULL'
}
export const splitPpage = {
  '2016': 9,
  '2017': 9,
  '2018': 'NULL',
  '2019': 21,
  '2020': 10,
  '2021': 9,
  '2023': 'NULL'
}
export const splitPISBN = {
  '2016': '978-605-83522-0-9',
  '2017': '978-605-88368-4-6',
  '2018': 'NULL',
  '2019': '978-605-184-173-1',
  '2020': '978-605-83522-2-3',
  '2021': '978-605-83522-3-0',
  '2023': 'NULL'
}
export const splitPlace = {
  '2016': 'Konya, Türkiye',
  '2017': 'Konya, Türkiye',
  '2018': 'Konya, Türkiye',
  '2019': 'Konya, Türkiye',
  '2020': 'Manisa, Türkiye',
  '2021': 'Tirana, Albania',
  '2023': 'Konya, Türkiye'
}
