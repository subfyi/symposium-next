import PageHeader from '@/components/PageHeader'
import Announcement from '@/components/Announcement'

const metaTitle = 'Honorary Committee'
export const metadata = {
  title: metaTitle + ' | ISESER2023',
  openGraph: {
    title: metaTitle + ' | ISESER2023'
  }
}
export default function Page() {
  return <>
    <PageHeader title='Honorary Committee' />
    <section className='about-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <h2 className='section__title'>Honorary Committee</h2>
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div>
              <div className='section-heading'>
                <table className='tg'>
                  <tbody>
                  <tr>
                    <td><b>Prof. Dr. Cem Zorlu</b>, Rector of the Necmettin Erbakan University, Konya, Türkiye</td>
                  </tr>
                  <tr>
                    <td><b>Prof. Dr. Hüseyin Deveci</b> Vice Rector Konya Technical University, Konya, Türkiye</td>
                  </tr>
                  <tr>
                    <td><b>Prof. Dr. Semih Ekercin</b>, Dean of Engineering Faculty, Necmettin Erbakan University, Konya, Türkiye
                    </td>
                  </tr>
                  <tr>
                    <td><b>Prof. Ts. Dr. Che Mohd Ruzaidi Bin Ghazali</b>, Dean Faculty of Ocean Engineering
                      Technology, University Malaysia Terengganu, Terengganu, MALAYSIA
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Announcement />
  </>
}
