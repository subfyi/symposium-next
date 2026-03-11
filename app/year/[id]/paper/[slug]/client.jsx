'use client'

import { useState } from 'react'
import { PageHeaderEvent } from '../../../../../layout/Breadcrumb'

function getPaperUrl(year, datas) {
  return `https://iseser.com/year/${year}/paper/${datas.id}/`
}

function getPageRange(datas) {
  if (datas.paper_page) {
    return datas.paper_page_end ? `${datas.paper_page}-${datas.paper_page_end}` : `${datas.paper_page}`
  }

  if (datas.paper_abst_page) {
    return `${datas.paper_abst_page}`
  }

  return null
}

function getShortInitials(name = '') {
  return name.split(' ').filter(Boolean).map((part) => part[0]).join('. ')
}

function getAuthorApa(author) {
  return `${author.last_name}, ${getShortInitials(author.first_name)}.`
}

function getAuthorAma(author) {
  return `${author.last_name} ${author.first_name.split(' ').filter(Boolean).map((part) => part[0]).join('')}`
}

function getAuthorIeee(author) {
  return `${getShortInitials(author.first_name)} ${author.last_name}`
}

function getAuthorFull(author) {
  return `${author.first_name} ${author.last_name}`
}

function joinAuthors(authors, mapper, { two = ' & ', last = ', & ', manyFallback = ', ' } = {}) {
  const items = authors.map(mapper)

  if (items.length <= 1) {
    return items[0] || ''
  }

  if (items.length === 2) {
    return `${items[0]}${two}${items[1]}`
  }

  return `${items.slice(0, -1).join(manyFallback)}${last}${items[items.length - 1]}`
}

function joinAuthorsWithWord(authors, mapper, word) {
  const items = authors.map(mapper)

  if (items.length <= 1) {
    return items[0] || ''
  }

  if (items.length === 2) {
    return `${items[0]} ${word} ${items[1]}`
  }

  return `${items.slice(0, -1).join(', ')}, ${word} ${items[items.length - 1]}`
}

function getCitationRows(datas, year) {
  const title = datas.en_title
  const fullTitle = `International Symposium for Environmental Science and Engineering Research ${year} (ISESER${year})`
  const shortTitle = `ISESER${year}`
  const monthEn = smonths[year] || ''
  const monthTr = smonthsTr[year] || monthEn
  const pageRange = getPageRange(datas)
  const issueDate = `01 ${monthTr} ${year}`
  const url = getPaperUrl(year, datas)
  const apaAuthors = joinAuthors(datas.authors, getAuthorApa)
  const amaAuthors = joinAuthors(datas.authors, getAuthorAma, { two: ', ', last: ', ', manyFallback: ', ' })
  const chicagoAuthors = joinAuthorsWithWord(datas.authors, getAuthorFull, 'and')
  const ieeeAuthors = joinAuthorsWithWord(datas.authors, getAuthorIeee, 'and')
  const vancouverAuthors = joinAuthors(datas.authors, getAuthorFull, { two: ', ', last: ', ', manyFallback: ', ' })
  const isnadAuthors = joinAuthors(datas.authors, (author) => `${author.last_name}, ${author.first_name}`, { two: ' - ', last: ' - ', manyFallback: ' - ' })
  const mlaAuthors = datas.authors.length > 2
    ? `${getAuthorFull(datas.authors[0])}, et al.`
    : joinAuthors(datas.authors, getAuthorFull, { two: ', and ', last: ', and ', manyFallback: ', ' })

  return [
    {
      label: 'APA',
      text: `${apaAuthors} (${year}, ${monthEn}). ${title}. ${fullTitle}, pp. ${pageRange || 'n.p.'}, ${splitPlace[year]}. ${url}`
    },
    {
      label: 'AMA',
      text: `1. ${amaAuthors}. ${title}. ${shortTitle}. ${year};${pageRange ? `pp.${pageRange}` : ''} ${url}`.replace(/\s+/g, ' ').trim()
    },
    {
      label: 'Chicago',
      text: `${chicagoAuthors}. ${year}. "${title}." ${fullTitle}. ${splitPlace[year]}. ${pageRange ? `${pageRange}. ` : ''}${url}`.replace(/\s+/g, ' ').trim()
    },
    {
      label: 'EndNote',
      text: `${amaAuthors} (${issueDate}) ${title}. ${fullTitle}. ${pageRange || 'n.p.'}. ${url}`
    },
    {
      label: 'IEEE',
      text: `[1] ${ieeeAuthors}, "${title}," ${shortTitle}, ${splitPlace[year]}, ${monthEn} ${year}, pp. ${pageRange || 'n.p.'}, [Online]. Available: ${url}`
    },
    {
      label: 'ISNAD',
      text: `${isnadAuthors}. "${title}". ${fullTitle} (${issueDate}): ${pageRange || 'n.p.'}. ${url}`
    },
    {
      label: 'JAMA',
      text: `1. ${amaAuthors}. ${title}. ${shortTitle}. ${year}:${pageRange || 'n.p.'}.`
    },
    {
      label: 'MLA',
      text: `${mlaAuthors}. "${title}." ${fullTitle}, ${monthEn} ${year}, pp. ${pageRange || 'n.p.'}, ${url}.`
    },
    {
      label: 'Vancouver',
      text: `1. ${vancouverAuthors}. ${title}. ${shortTitle} [Internet]. ${issueDate};${pageRange || 'n.p.'}. Available from: ${url}`
    }
  ]
}

export default function PaperPageClient({ datas, year }) {
  const [copiedLabel, setCopiedLabel] = useState(null)
  const citationRows = getCitationRows(datas, year)

  async function handleCopy(label, text) {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedLabel(label)
      window.setTimeout(() => setCopiedLabel((current) => current === label ? null : current), 1500)
    } catch (error) {
      setCopiedLabel(null)
    }
  }

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
                           href={'https://api.iseser.com/doc/' + year + '/book/' + (datas.parampre && (datas.parampre.id === 97 ? 'O' :  datas.parampre.id === 463 ? 'O' : 'P')) + datas.pap_num + '.pdf'}>
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

          {(datas.paper_page || datas.paper_abst_page || datas.paper_external) &&
            <div className='col-lg-12 mt-2'>
              <div className='sidebar-shared'>
                <div className='side-widget'>
                  <h4 className='widget__title'>Cite This Paper</h4>
                  <div className='table-responsive'>
                    <table className='table table-striped mb-0'>
                      <tbody>
                      {citationRows.map((row) => (
                        <tr key={row.label}>
                          <td style={{ width: '110px', fontWeight: 700 }}>{row.label}</td>
                          <td className='side-cats'>{row.text}</td>
                          <td style={{ width: '70px' }}>
                            <button
                              type='button'
                              className='btn btn-sm btn-light'
                              aria-label={`${row.label} citation copy`}
                              title='Copy'
                              onClick={() => handleCopy(row.label, row.text)}
                            >
                              <i className={`fa ${copiedLabel === row.label ? 'fa-check' : 'fa-copy'}`}></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
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
export const smonthsTr = {
  '2016': 'Mayis',
  '2017': 'Mayis',
  '2018': 'Mayis',
  '2019': 'Mayis',
  '2020': 'Temmuz',
  '2021': 'Haziran',
  '2023': 'Ekim'
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
  '2021': 'NULL',
  '2023': 'NULL'
}
export const splitPpage = {
  '2016': 9,
  '2017': 9,
  '2018': 'NULL',
  '2019': 14,
  '2020': 10,
  '2021': 9,
  '2023': 12
}
export const splitPISBN = {
  '2016': '978-605-83522-0-9',
  '2017': '978-605-88368-4-6',
  '2018': 'NULL',
  '2019': '978-605-184-173-1',
  '2020': '978-605-83522-2-3',
  '2021': '978-605-83522-3-0',
  '2023': '978-625-6802-87-2'
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
