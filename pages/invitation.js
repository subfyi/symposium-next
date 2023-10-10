import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import ServiceArea from '../components/ServiceArea'

export default function Invitation() {
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
            <section className={' text-justify'}>
              <ServiceArea />
            </section>
            <div className='col-lg-12'>
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
                        <b>Ülkü Alver Şahin</b>, Istanbul University - Cerrahpaşa, Environmental Engineering Department, Türkiye
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
      </section>
      <Announcement />
      <Footer />
    </Layout>
  )
}
