import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

export default function OrganizationCommittee() {
  return (
    <Layout pageTitle='Organization Committee | ISESER2023'>
      <NavOne />
      <PageHeader title='Organization Committee' />
      <section className='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <div className='section-heading'>
                  <h2 className='section__title'>Organization Committee
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div>
                <div className='section-heading'>

                  <p className='section__meta'>SYMPOSIUM COORDINATOR</p>
                  <p className='section__desc'>
                    <table className='tg'>
                      <tbody>
                      <tr>
                        <td>
                          <b>Sukru Dursun</b>, Engineering and Natural Sciences Faculty, Konya Technical University, Konya, Türkiye
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Noor Zaitun Yahaya</b>, Faculty of Ocean Engineering Technology and Informatics, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Hüseyin Toros</b>,Engineering Faculty, Istanbul Technical University, Istanbul, Türkiye
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Fatma Kunt</b>, Engineering Faculty, Necmettin Erbakan University, Konya, Türkiye
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div>
                <div className='section-heading'>
                  <p className='section__meta'>ORGANIZATION COMMITTEE</p>
                  <p className='section__desc'>
                    <table className='tg'>
                      <tbody>
                      <tr>
                        <td>
                          <b>Çiğdem Çiftçi</b>, Faculty of Engineering and Architecture, Necmettin Erbakan University, Konya, Türkiye
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Ertuğrul Esmeray</b>, Karabük University, Engineering Faculty, Karabuk, Türkiye
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Flora Merko</b>, Aleksander Moisiu Durres University, Albania
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Hysen Mankolli</b>, Editor of IJEES, Health and Environment Association, Illinois, USA
                        </td>
                      </tr>
                      <tr>
                        <td><b>Laura Shumka</b>, University Barleti, Tirana, Albania</td>
                      </tr>
                      <tr>
                        <td>
                          <b> Lyudmyla Symochko</b>, Uzhhorod National University, Uzhhorod, Ukraine
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Nurul Asyraf bt Razali</b>, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Samsuri Abdullah</b>, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Şerife Yurdagül Kumcu</b>, Necmettin Erbakan University, Konya, Türkiye
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Zeynep Cansu Ayturan</b>, Engineering and Natural Sciences Faculty, Konya Technical University, Konya, Türkiye
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Mehmet Yıldırım Gündüz</b>, Engineering Faculty, Necmettin Erbakan University, Konya, Türkiye
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Busenur Köpüklü</b>, Necmettin Erbakan University, Konya, Türkiye
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Emre Dalkılıç</b>, Engineering and Natural Sciences Faculty, Konya Technical University, Konya, Türkiye
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Yasin Akın Ayturan</b>, Engineering Faculty, KTO Karatay University, Konya, Türkiye
                        </td>
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
      <Announcement />
      <Footer />
    </Layout>
  )
}
