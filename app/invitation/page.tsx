import { PageHeader } from '@/layout/Breadcrumb'
import ServiceArea from '@/components/ServiceArea'
import Announcement from '@/components/Announcement'

const metaTitle = 'Invitation'
export const metadata = {
  title: metaTitle + ' | ISESER2023',
  description:  metaTitle + ' | ISESER2023',
  openGraph: {
    title: metaTitle + ' | ISESER2023',
    description:  metaTitle + ' | ISESER2023',
  }
}
export default function Page() {
  return <>
    <PageHeader title={metaTitle} />
    <section className='about-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-heading'>
              <h2 className='section__title'>INVITATION
              </h2>
            </div>
          </div>
          <section className={' text-justify'}>
            <ServiceArea none />
          </section>
          <div className='col-lg-12'>
            <div className='section-heading'>

              <p className='section__meta'>Invited Speaker
              </p>
              <p className='section__desc'>
                <table className='tg'>
                  <tbody>
                  <tr>
                    <td>
                      <b>Cezar Kongoli</b>, National Oceanic & Atmospheric Administration, Maryland University, USA
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Hysen Mankolli</b>, Editor of IJEES, Health and Environment Association, Illinois, USA
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Lyudmyla Symochko</b>, Uzhhorod National University, Ukraine
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Massimo Zucchettı</b>, Dipartimento Di Energetica, Torino Polytechnic University, Italy
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Mohd Zamri Bin Ibrahim</b>, University Malaysia Terengganu, Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Noor Zaitun Zakaria</b>, University Malaysia Terengganu, Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Shahabuddin Memon</b>, Sindh University, National Centre of Excellence, Jamshoro, Pakistan
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Suzana (Kuci) Golemi</b>, University of Shkodra “Luigj Gurakuqi”, Albania
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Ülkü Alver Şahin</b>, Istanbul University - Cerrahpaşa, Environmental Engineering Department, Türkiye
                    </td>
                  </tr>
                  <tr>
                    <td>
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
  </>
}
