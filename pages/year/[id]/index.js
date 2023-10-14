import React from 'react'
import Layout from '../../../components/Layout'
import NavOne from '../../../components/NavOne'
import Announcement from '../../../components/Announcement'
import Footer from '../../../components/Footer'
import SimpleReactValidator from 'simple-react-validator'
import api from '../../../api'
import PageHeaderEvent from '../../../components/PageHeaderEvent'

export default class YearList extends React.Component {
  state = {}

  constructor(props) {
    super(props)

    this.validator = new SimpleReactValidator()
  }

  static async getInitialProps({ query }) {
    var posters = await api('/api/submission?page=1&itemPerPage=-1&query=&sort=id&desc=false&posters=1&year=' + query.id)
    var orals = await api('/api/submission?page=1&itemPerPage=-1&query=&sort=id&desc=false&orals=1&year=' + query.id)
    return {
      posters,
      orals,
      year: query.id
    }
  }

  render() {
    const { orals, posters, year } = this.props

    return (
      <Layout pageTitle={'ISESER' + year + ' SYMPOSIUM ABSTRACTS (ONLINE)'}>
        <NavOne />
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
                <div className='about-heading'>
                  <div className='section-heading'>
                    <h2 className='section__title'>ISESER{year} SYMPOSIUM WEB VERSION (ONLINE VIEW)
                    </h2>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='about-heading'>
                  <div className='section-heading'>
                    <h3> Oral Presentations</h3>
                    <hr />
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='about-heading'>
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
                        {orals.data.map((row, i) => <>
                          <tr key={row.id} className={this.props.trstyle && this.props.trstyle(row)}>
                            <td><b>O{i + 1}</b></td>
                            <td><a className={'text-uppercase'} href={'/year/' + year + '/paper/' + (row.id)}> {row.en_title}</a></td>
                          </tr>
                          <tr>
                            <td colSpan='2' className={'text-capitalize'}>
                              {row.authors.map((author, index) => (
                                <span key={index} className='text-capitalize'>
                                  {author.first_name} {author.last_name}
                                  {index < row.authors.length - 1 && (
                                    <span><sup>{index + 1}</sup>,{' '}</span>)}</span>
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
                <div className='about-heading'>
                  <div className='section-heading'>
                    <p><br /></p>
                    <h3> Poster Presentations</h3>
                    <hr />
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='about-heading'>
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
                      {posters.data.map((row, i) => <>
                        <tr key={row.id} className={this.props.trstyle && this.props.trstyle(row)}>
                          <td><b>P{i + 1}</b></td>
                          <td><a className={'text-uppercase'} href={'/year/' + year + '/paper/' + (row.id)}> {row.en_title}</a></td>
                        </tr>
                        <tr>
                          <td colSpan='2'>
                            {row.authors.map((author, index) => (
                              <span key={index} className='text-capitalize'>
                                  {author.first_name} {author.last_name}
                                {index < row.authors.length - 1 && (
                                  <span><sup>{index + 1}</sup>,{' '}</span>)}</span>
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
        <Footer />
      </Layout>)
  }
}
