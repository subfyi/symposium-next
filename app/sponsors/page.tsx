import { PageHeader } from '@/layout/Breadcrumb'
import Announcement from '@/components/Announcement'

import Image from 'next/image'

import mehmetefendi from '@/assets/sponsor/mehmetefendi.svg'
import mizan from '@/assets/sponsor/mizan.svg'
import umt from '@/assets/sponsor/umt.svg'
import burotime from '@/assets/sponsor/burotime.svg'
import dergah from '@/assets/sponsor/dergah.svg'
import neupress from '@/assets/sponsor/neupress.png'
import americanlife from '@/assets/sponsor/americanlife.png'
import erbakan from '@/assets/sponsor/erbakan.png'
import ktun from '@/assets/sponsor/ktun.png'
import ijepem from '@/assets/sponsor/ijepem.png'
import jieas from '@/assets/sponsor/jieas.png'
import ucbad from '@/assets/sponsor/ucbad.png'
import meram from '@/assets/sponsor/meram.png'
import umd from '@/assets/sponsor/umd.png'
import uniba from '@/assets/sponsor/uniba.png'

const metaTitle = 'Sponsors'
export const metadata = {
  title: metaTitle + ' | ISESER2023',
  description: metaTitle + '  - International Symposium for Environmental Science and Engineering Research 2023',
  openGraph: {
    title: metaTitle + ' | ISESER2023',
    description: metaTitle + '  - International Symposium for Environmental Science and Engineering Research 2023',
  }
}
export default function Page() {
  return <>
    <PageHeader title={metaTitle} />
    <section className='about-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <h2 className='section__title'>Sponsors
                </h2>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <div className='section__meta'>Supporter
                </div>
                <div className='section__desc'>
                  <ul>
                    <li>
                      <a target='_blank' href='https://www.meram.bel.tr/'>
                        <Image className='mr-3 mt-3' src={meram} alt={'meram'} width='140' height='100' />
                      </a>
                      Meram Municipality, <a target='_blank' href='https://www.meram.bel.tr/'>meram.bel.tr</a>
                    </li>
                    <li>
                      <a target='_blank' href='https://www.mehmetefendi.com/eng'>
                        <Image className='mr-3 mt-3' src={mehmetefendi} alt={'mehmetefendi'} width='100' height='100' />
                      </a>
                      Kurukahveci Mehmet Efendi, <a target='_blank' href='https://www.mehmetefendi.com/eng'>mehmetefendi.com</a>
                    </li>
                    <li>
                      <a target='_blank' href='https://neupress.org/'>
                        <Image className='mr-3 mt-3' src={neupress} alt={'neupress'} width='150' height='100' />
                      </a>
                      Neu Press, <a target='_blank' href='https://neupress.org/'>neupress.org</a>
                    </li>
                    <li>
                      <a target='_blank' href='https://www.mizansekerleme.com/'>
                        <Image className='mr-3 mt-3' src={mizan} alt={'mizan'} width='100' height='100' />
                      </a>
                      Mizan Şekerleme, <a target='_blank' href='https://www.mizansekerleme.com/'>mizansekerleme.com</a>
                    </li>
                    <li>
                      <a target='_blank' href='https://www.americanlife.com.tr/konya'>
                        <Image className='mr-3  mt-3' src={americanlife} alt={'americanlife'} width='100' height='120' />
                      </a>
                      AmericanLIFE Konya, <a target='_blank' href='https://www.americanlife.com.tr/konya'>americanlife.com.tr</a>
                    </li>
                    <li>
                      <a target='_blank' href='https://www.burotime.com/en/'>
                        <Image className='mr-3 mt-3' src={burotime} alt={'burotime'} width='100' height='100' />
                      </a>
                      Bürotime, <a target='_blank' href='https://www.burotime.com/en/'>burotime.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <div className='section__meta'>ACCOMMODATION SUPPORT
                </div>
                <div className='section__desc'>
                  <ul>
                    <li>
                      <a target='_blank' href='https://www.dergahotel.com/index.html'>
                        <Image className='mr-3 mt-3' src={dergah} alt={'dergah'} width='100' height='100' />
                      </a>
                      Dergâh Hotel, <a target='_blank' href='https://www.dergahotel.com/index.html'>dergahotel.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <p className='section__meta'>Collaborative Institutions
                </p>
                <div className='section__desc'>
                  <ul>
                    <li>
                      <a target='_blank' href='https://www.erbakan.edu.tr/en/'>
                        <Image className='mr-3 mt-3' src={erbakan} alt={'erbakan'} width='100' height='100' />
                      </a>
                      Necmettin Erbakan University, <a target='_blank' href='https://www.erbakan.edu.tr/en/'>erbakan.edu.tr</a>
                    </li>
                    <li>
                      <a target='_blank' href='https://www.ktun.edu.tr/en/Universite/AnaSayfa'>
                        <Image className='mr-3 mt-3' src={ktun} alt={'ktun'} width='100' height='100' />
                      </a>
                      Konya Technical University, <a target='_blank' href='https://www.ktun.edu.tr/en/Universite/AnaSayfa'>ktun.edu.tr</a>
                    </li>
                    <li>
                      <a target='_blank' href='https://umd.edu/'>
                        <Image className='mr-3 mt-3' src={umd} alt={'umd'} width='100' height='100' />
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
                        <Image className='mr-3 mt-3' src={uniba} alt={'uniba'} width='320' height='100' />
                      </a>
                      University Barleti, <a target='_blank' href='https://umb.edu.al/en/'>umb.edu.al</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <div className='section__meta'>JOURNAL SPONSORS (EN)</div>
                <div className='section__desc'>
                  <ul>
                    <li>
                      <a target='_blank' href='https://dergipark.org.tr/en/pub/ijepem'>
                        <Image className='mr-3 mt-3' src={ijepem} alt={'ijepem'} width='100' height='100' />
                      </a>
                      International Journal of Environmental Pollution and Environmental Modelling (IJEPEM), <a target='_blank' href='https://dergipark.org.tr/en/pub/ijepem'>ijepem.com</a>
                    </li>
                    <li>
                      <a target='_blank' href='https://dergipark.org.tr/en/pub/jieas'>
                        <Image className='mr-3 mt-3' src={jieas} alt={'jieas'} width='100' height='100' />
                      </a>
                      Journal of International Environmental Application &amp; Science (JIEAS), <a target='_blank' href='https://dergipark.org.tr/en/pub/jieas'>jieas.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <div className='section__meta'>JOURNAL SPONSORS (TR)
                </div>
                <div className='section__desc'>
                  <ul>
                    <li>
                      <a target='_blank' href='https://dergipark.org.tr/tr/pub/ucbad'>
                        <Image className='mr-3 mt-3' src={ucbad} alt={'ucbad'} width='100' height='100' />
                      </a>
                      Ulusal Çevre Bilimleri Araştırma Dergisi (UCBAD), <a target='_blank' href='https://dergipark.org.tr/tr/pub/ucbad'>ucbad.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Announcement />
  </>
}
