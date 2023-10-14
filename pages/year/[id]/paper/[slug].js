import React from 'react'
import SimpleReactValidator from 'simple-react-validator'
import api from '../../../../api'
import Layout from '../../../../components/Layout'
import NavOne from '../../../../components/NavOne'
import PageHeaderEvent from '../../../../components/PageHeaderEvent'
import Footer from '../../../../components/Footer'

export default class YearList extends React.Component {
  state = {}

  constructor(props) {
    super(props)

    this.validator = new SimpleReactValidator()
  }

  static async getInitialProps({ query }) {
    var datas = await api('/api/submission/' + query.slug)
    return {
      datas,
      paper: query.slug,
      year: query.id
    }
  }


  render() {
    const { datas, year } = this.props

    return (
      <Layout pageTitle={datas.en_title}>
        <NavOne />
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
              <div className='col-lg-8'>
                <div className='blog-content'>
                  <div className='blog-item'>
                    <div className='blog-inner-content'>
                      <div className='inner-causes-box'>
                        <span className=''><a href='#'>Author(s):{' '}</a></span>
                        {datas.authors.map((author, index) => (
                          <span key={index} className='text-capitalize'>
                                  {author.first_name} {author.last_name}
                            {index < datas.authors.length - 1 && (
                              <span><sup>{index + 1}</sup>,{' '}</span>)}</span>
                        ))}
                        <br />
                        <ul className='small'>
                          {datas.authors.map((author, index) =>
                            <li><sup>{index + 1}.</sup> {author.adress} ,
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
              <div className='col-lg-4'>
                <div className='sidebar-shared'>
                  {datas.paper_page &&
                    <>
                      {datas.paper_page >= 0 ? <div className='side-widget'>
                        <h4 className='widget__title'>Published Paper</h4>
                        <div className='author-box recent-donate-item'>
                          <a className='reply__btn btn btn-dark'
                             target='_blank'
                             href={'https://iseser.com/doc/' + year + '/ISESER' + year + '-PROCEEDING-BOOK.pdf#page=' + (+(datas.paper_page || '').split('-')[0] + splitPpage[year])}>
                            <i className='fa  fa-file-pdf-o'></i> Proceeding Book Page</a>
                        </div>
                        <div><b>Page: </b>
                          <span>{datas.paper_page}{datas.paper_page_end && '-' + datas.paper_page_end}</span></div>

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

                  {datas.paper_abst_page && <div className='side-widget'>
                    <h5 className='widget__title'>Abstract Book:
                    </h5>
                    {datas.paper_abst_page &&
                      <div className='author-box recent-donate-item'>
                        <a className='reply__btn btn btn-dark'
                           target='_blank'
                           href={'https://iseser.com/doc/' + year + '/ISESER' + year + '-ABSTRACT-BOOK.pdf#page=' + (+(datas.paper_abst_page || '').split('-')[0] + splitApage[year])}>
                          <i className='fa  fa-file-pdf-o'></i> Abstract Book Page</a>
                      </div>
                    }
                    {datas.paper_abst_page && <div><b>Page: </b>
                      <span>{datas.paper_abst_page}</span></div>}
                    {splitAISBN[year] && <div><b>ISBN: </b>
                      <span>{splitAISBN[year]}</span></div>}
                  </div>}


                  <div className='side-widget'>
                    <h4 className='widget__title'>Presentation Topic</h4>
                    <div className='author-box recent-donate-item'>
                      {(datas.topic && datas.topic.value)}
                    </div>
                  </div>
                  <div className='side-widget'>
                    <h4 className='widget__title'>Presentation Type</h4>
                    <div className='author-box recent-donate-item'>
                      {(datas.parampre && datas.parampre.value)}
                    </div>
                  </div>

                  <div className='side-widget'>
                    <h4 className='widget__title'>Symposium Venue</h4>
                    <div className='author-box recent-donate-item'>
                      {splitPlace[year]}
                    </div>
                  </div>
                </div>


              </div>
              {datas.paper_page &&
                <div className='col-lg-12'>
                  <hr />
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
        <Footer />
      </Layout>)
  }
}

var smonths = {
  '2016': 'May',
  '2017': 'May',
  '2018': 'May',
  '2019': 'May',
  '2020': 'July',
  '2021': 'June',
  '2023': 'October'
}

var splitApage = {
  '2016': 'NULL',
  '2017': 'NULL',
  '2018': 11,
  '2019': 15,
  '2020': 10,
  '2021': 9,
  '2023': 'NULL'
}

var splitAISBN = {
  '2016': 'NULL',
  '2017': 'NULL',
  '2018': '978-605-83522-1-6',
  '2019': 'NULL',
  '2020': '978-605-69996-1-1',
  '2021': '',
  '2023': 'NULL'
}

var splitPpage = {
  '2016': 9,
  '2017': 9,
  '2018': 'NULL',
  '2019': 15,
  '2020': 10,
  '2021': 9,
  '2023': 'NULL'
}
var splitPISBN = {
  '2016': '978-605-83522-0-9',
  '2017': '978-605-88368-4-6',
  '2018': 'NULL',
  '2019': '978-605-184-173-1',
  '2020': '978-605-83522-2-3',
  '2021': '978-605-83522-3-0',
  '2023': 'NULL'
}

var splitPlace = {
  '2016': 'Konya, Türkiye',
  '2017': 'Konya, Türkiye',
  '2018': 'Konya, Türkiye',
  '2019': 'Konya, Türkiye',
  '2020': 'Manisa, Türkiye',
  '2021': 'Tirana, Albania',
  '2023': 'Konya, Türkiye'
}
