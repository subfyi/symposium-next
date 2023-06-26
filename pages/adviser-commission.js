import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import MixerAreaTwo from '../components/MixerAreaTwo'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <Layout pageTitle='Advisory Board | ISESER2023'>
      <NavOne />
      <PageHeader title='Advisory Board' />
      <section className='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <h2 className='section__title'>Advisory Board
                  </h2>
                  <hr />
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>

                  <p className='section__desc'>
                    <table className='tg'>
                      <tbody>

                      <tr>
                        <td className='tg-0pky'>Blerina Vrenozi, Natural Science Faculty, Tirana University, Albania
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>Fatma Didem Tunçez, Economics and Administrative Sciences Faculty,
                          KTO Karatay University, Konya, Turkey
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>
                          Mirela Alushllari, Institute of Applied Nuclear Physics, University of Tirana, Tirana, Albania
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>
                          Mohamed Shahrir Mohamed Zahari, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>
                          Noor Zaitun Zakaria, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>
                          Noorlin Mohamed, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>
                          Nurul Adyani Ghazali, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>
                          Prithwiraj Jha, Raiganj Surendranath College, University of Gour
                          Banga, India
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>
                          Razifah Mohd Razali, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>Sevda Ocak, Engineering Faculty, Giresun University, Giresun, Turkey
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>Sezen Küçükçongar, Engineering and Natural Sciences Faculty, Konya
                          Technical University, Konya, Turkey
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0pky'>
                          Wan Nurdiyana Wan Mansur, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0lax'>Zehra Gök, Vocational School, Selçuk University, Konya, Turkey</td>
                      </tr>
                      </tbody>
                    </table>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <MixerAreaTwo />
      <Footer />
    </Layout>
  )
}

export default AboutPage
