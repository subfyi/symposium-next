import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import MixerAreaTwo from '../components/MixerAreaTwo'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <Layout pageTitle='INVITATION | ISESER2023'>
      <NavOne />
      <PageHeader title='INVITATION' />
      <section className='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <h2 className='section__title'>INVITATION
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>

                  <p className='section__desc'>


                    <p>As an organizing commitee, we are honored to invite you to attend the International Symposium for
                      Environmental Science and Engineering Research 2023 which will be held on 18-21 October, Konya.
                      This event will be a useful for
                      researchers, engineers, students, academics and anyone interested in environmental
                      engineering and science. Through the conference, it will be possible to establish
                      new
                      partnerships, to share knowledge and experiences.</p>
                    <p>The purpose of the symposium is to give information
                      about
                      the environmental sciences and engineering to participants. In this symposium all
                      participants will take advantage about environmental topics with the help of foreign
                      participants and several poster and oral presentations. Also, this symposium aims to
                      provide connections for students and to provide opportunities for experts to share
                      and
                      discuss their experiences.</p>
                    <p>Received papers will be accepted after peer review and all accepted
                      articles will be
                      printed in the proceeding book.</p>

                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>

                  <p className='section__meta'>Invited Speaker
                  </p>
                  <p className='section__desc'>
                    <table className='tg'>
                      <tbody>
                      <tr>
                        <td className='tg-0lax'>
                          <b>Cezar Kongoli</b>, National Oceanic & Atmospheric Administration, Maryland University, USA
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0lax'>
                          <b>Hysen Mankolli</b>, Editor of IJEES, Health and Environment Association, Illinois, USA
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0lax'>
                          <b>Lyudmyla Symochko</b>, Uzhhorod National University, Ukraine
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0lax'>
                          <b>Massimo Zucchettı</b>, Dipartimento Di Energetica, Torino Polytechnic University, Italy
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0lax'>
                          <b>Mohd Zamri Bin Ibrahim</b>, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0lax'>
                          <b>Noor Zaitun Zakaria</b>, University Malaysia Terengganu, Malaysia
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0lax'>
                          <b>Shahabuddin Memon</b>, Sindh University, National Centre of Excellence, Jamshoro, Pakistan
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0lax'>
                          <b>Suzana (Kuci) Golemi</b>, University of Shkodra “Luigj Gurakuqi”, Albania
                        </td>
                      </tr>
                      <tr>
                        <td className='tg-0lax'>
                          <b>Zoran Sapuric</b>, American University, Macedonia
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
      <MixerAreaTwo />
      <Footer />
    </Layout>
  )
}

export default AboutPage
