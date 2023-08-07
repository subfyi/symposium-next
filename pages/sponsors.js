import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import MixerAreaTwo from '../components/MixerAreaTwo'
import Footer from '../components/Footer'
import Image from 'next/image'
import mehmetefendi from '../assets/sponsor/mehmetefendi.svg'

const AboutPage = () => {
  return (
    <Layout pageTitle='Sponsors | ISESER2023'>
      <NavOne />
      <PageHeader title='Sponsors' />
      <section className='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <h2 className='section__title'>Sponsors
                  </h2>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <p className='section__meta'>Supporter
                  </p>
                  <p className='section__desc'>
                    <ul>
                      <li>
                        <Image className='mr-3' src={mehmetefendi} alt={mehmetefendi} width='100' height='100' />
                        Kurukahveci Mehmet Efendi, <a target='_blank' href='https://www.mehmetefendi.com/eng'>mehmetefendi.com</a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <p className='section__meta'>Collaborative Institutions
                  </p>
                  <p className='section__desc'>
                    <ul>
                      <li>Albania Universty, <a target='_blank' href='https://albanianuniversity.edu.al/en/home/'>albanianuniversity.edu.al</a></li>
                      <li>Konya Technical University, <a target='_blank' href='https://www.ktun.edu.tr/en/Universite/AnaSayfa'>ktun.edu.tr</a></li>
                      <li>The University of Maryland, <a target='_blank' href='https://umd.edu/'>umd.edu</a></li>
                      <li>Necmettin Erbakan University, <a target='_blank' href='https://www.erbakan.edu.tr/en/'>erbakan.edu.tr</a></li>
                      <li>Universiteti Bujqësor i Tiranës: UBT, <a target='_blank' href='https://www.ubt.edu.al/'>ubt.edu.al</a></li>
                      <li>Universiteti "Aleksandër Xhuvani" Elbasan, <a target='_blank' href='https://www.uniel.edu.al/'>uniel.edu.al</a></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <p className='section__meta'>JOURNAL SPONSORS (EN)</p>
                  <p className='section__desc'>
                    <ul>
                      <li>
                        Journal of International Environmental Application &amp; Science (JIEAS), <a target='_blank' href='https://dergipark.org.tr/en/pub/jieas'>jieas.com</a>
                      </li>
                      <li>
                        International Journal of Environmental Pollution and Environmental Modelling (IJEPEM), <a target='_blank' href='https://dergipark.org.tr/en/pub/ijepem'>ijepem.com</a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <p className='section__meta'>JOURNAL SPONSORS (TR)
                  </p>
                  <p className='section__desc'>
                    <ul>
                      <li>Ulusal Çevre Bilimleri Araştırma Dergisi (UCBAD), <a target='_blank' href='https://dergipark.org.tr/tr/pub/ucbad'>ucbad.com</a></li>
                    </ul>
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
