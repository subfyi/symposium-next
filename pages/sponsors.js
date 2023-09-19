import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Image from 'next/image'

import mehmetefendi from '../assets/sponsor/mehmetefendi.svg'
import mizan from '../assets/sponsor/mizan.svg'
import umt from '../assets/sponsor/umt.svg'
import burotime from '../assets/sponsor/burotime.svg'
import dergah from '../assets/sponsor/dergah.svg'

export default function Sponsors() {
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
                        <a target='_blank' href='https://www.mehmetefendi.com/eng'>
                          <Image className='mr-3' src={mehmetefendi} alt={'mehmetefendi'} width='100' height='100' />
                        </a>
                        Kurukahveci Mehmet Efendi, <a target='_blank' href='https://www.mehmetefendi.com/eng'>mehmetefendi.com</a>
                      </li>
                      <li>
                        <a target='_blank' href='https://www.mizansekerleme.com/'>
                          <Image className='mr-3' src={mizan} alt={'mizan'} width='100' height='100' />
                        </a>
                        Mizan Şekerleme, <a target='_blank' href='https://www.mizansekerleme.com/'>mizansekerleme.com</a>
                      </li>
                      <li>
                        <a target='_blank' href='https://www.americanlife.com.tr/konya'>
                          <img className='mr-3 mt-3' src={'https://api.iseser.com/doc/sponsor/americanlife.png'} alt={'americanlife'} width='100' height='120' />
                        </a>
                        AmericanLIFE Konya, <a target='_blank' href='https://www.americanlife.com.tr/konya'>americanlife.com.tr</a>
                      </li>
                      <li>
                        <a target='_blank' href='https://www.burotime.com/en/'>
                          <Image className='mr-3' src={burotime} alt={'burotime'} width='100' height='100' />
                        </a>
                        Bürotime, <a target='_blank' href='https://www.burotime.com/en/'>burotime.com</a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='about-heading'>
                <div className='section-heading'>
                  <p className='section__meta'>ACCOMMODATION SUPPORT
                  </p>
                  <p className='section__desc'>
                    <ul>
                      <li>
                        <a target='_blank' href='https://www.dergahotel.com/index.html'>
                          <Image className='mr-3' src={dergah} alt={'dergah'} width='100' height='100' />
                        </a>
                        Dergâh Hotel, <a target='_blank' href='https://www.dergahotel.com/index.html'>dergahotel.com</a>
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
                      <li>
                        <a target='_blank' href='https://www.erbakan.edu.tr/en/'>
                          <img className='mr-3 mt-3' src={'https://api.iseser.com/doc/sponsor/erbakan.png'} alt={'erbakan'} width='100' height='100' />
                        </a>
                        Necmettin Erbakan University, <a target='_blank' href='https://www.erbakan.edu.tr/en/'>erbakan.edu.tr</a>
                      </li>
                      <li>
                        <a target='_blank' href='https://www.ktun.edu.tr/en/Universite/AnaSayfa'>
                          <img className='mr-3 mt-3' src={'https://api.iseser.com/doc/sponsor/ktun.png?v2'} alt={'ktun'} width='100' height='100' />
                        </a>
                        Konya Technical University, <a target='_blank' href='https://www.ktun.edu.tr/en/Universite/AnaSayfa'>ktun.edu.tr</a>
                      </li>
                      <li>
                        <a target='_blank' href='https://umd.edu/'>
                          <img className='mr-3 mt-3' src={'https://api.iseser.com/doc/sponsor/umd.png'} alt={'umd'} width='100' height='100' />
                        </a>
                        Maryland University, <a target='_blank' href='https://umd.edu/'>umd.edu</a>
                      </li>
                      <li>
                        <a target='_blank' href='https://www.umt.edu.my/'>
                          <Image className='mr-3 mt-3' src={umt} alt={'umt'} width='100' height='100' />
                        </a>
                        UMT (Universiti Malaysia Terengganu), <a target='_blank' href='https://www.umt.edu.my/'>umt.edu.my</a>
                      </li>
                      <li>
                        <a target='_blank' href='https://umb.edu.al/en/'>
                          <img className='mr-3 mt-3' src={'https://api.iseser.com/doc/sponsor/uniba.png'} alt={'umb'} width='320' height='100' />
                        </a>
                        University Barleti, <a target='_blank' href='https://umb.edu.al/en/'>umb.edu.al</a>
                      </li>
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
                        <a target='_blank' href='https://dergipark.org.tr/en/pub/ijepem'>
                          <img className='mr-3 mt-3' src={'https://api.iseser.com/doc/sponsor/ijepem.png?v1'} alt={'ijepem'} width='100' height='100' />
                        </a>
                        International Journal of Environmental Pollution and Environmental Modelling (IJEPEM), <a target='_blank' href='https://dergipark.org.tr/en/pub/ijepem'>ijepem.com</a>
                      </li>
                      <li>
                        <a target='_blank' href='https://dergipark.org.tr/en/pub/jieas'>
                          <img className='mr-3 mt-3' src={'https://api.iseser.com/doc/sponsor/jieas.png'} alt={'jieas'} width='100' height='100' />
                        </a>
                        Journal of International Environmental Application &amp; Science (JIEAS), <a target='_blank' href='https://dergipark.org.tr/en/pub/jieas'>jieas.com</a>
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
                      <li>
                        <a target='_blank' href='https://dergipark.org.tr/tr/pub/ucbad'>
                          <img className='mr-3 mt-3' src={'https://api.iseser.com/doc/sponsor/ucbad.png'} alt={'ucbad'} width='100' height='100' />
                        </a>
                        Ulusal Çevre Bilimleri Araştırma Dergisi (UCBAD), <a target='_blank' href='https://dergipark.org.tr/tr/pub/ucbad'>ucbad.com</a>
                      </li>
                    </ul>
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
