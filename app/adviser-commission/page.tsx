import { PageHeader } from '@/layout/Breadcrumb'
import Announcement from '@/components/Announcement'

const metaTitle = 'Advisory Board'
export const metadata = {
  title: metaTitle + ' | ISESER2023',
  description: metaTitle + ' | ISESER2023',
  openGraph: {
    title: metaTitle + ' | ISESER2023',
    description: metaTitle + ' | ISESER2023'
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
              <h2 className='section__title'>Advisory Board
              </h2>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='section-heading'>

              <p className='section__desc'>
                <table className='tg'>
                  <tbody>
                  <tr>
                    <td><b>Aelita MANI</b>, "Luarasi" University, Albania
                    </td>
                  </tr>
                  <tr>
                    <td><b>Blerina Vrenozi</b>, Natural Science Faculty, Tirana University, Albania
                    </td>
                  </tr>
                  <tr>
                    <td><b>Fatma Didem Tunçez</b>, Economics and Administrative Sciences Faculty,
                      KTO Karatay University, Konya, Türkiye
                    </td>
                  </tr>
                  <tr>
                    <td><b>Eralda NOÇKA (SHORE)</b>, Agricultural University of Tirana, Albania
                    </td>
                  </tr>

                  <tr>
                    <td><b>Hüseyin Deveci</b> Vice Rector Konya Technical University, Konya, Türkiye</td>
                  </tr>
                  <tr>
                    <td><b>
                      Mirela Alushllari</b>, Institute of Applied Nuclear Physics, University of Tirana, Tirana, Albania
                    </td>
                  </tr>
                  <tr>
                    <td><b>
                      Mohamed Shahrir Mohamed Zahari</b>, University Malaysia Terengganu, Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td><b>
                      Noor Zaitun Zakaria</b>, University Malaysia Terengganu, Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td><b>
                      Noorlin Mohamed</b>, University Malaysia Terengganu, Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td><b>
                      Nurul Adyani Ghazali</b>, University Malaysia Terengganu, Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td><b>
                      Prithwiraj Jha</b>, Raiganj Surendranath College, University of Gour
                      Banga, India
                    </td>
                  </tr>
                  <tr>
                    <td><b>
                      Razifah Mohd Razali</b>, University Malaysia Terengganu, Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td><b>Sevda Ocak</b>, Engineering Faculty, Giresun University, Giresun, Türkiye
                    </td>
                  </tr>
                  <tr>
                    <td><b>Sezen Küçükçongar</b>, Engineering and Natural Sciences Faculty, Konya
                      Technical University, Konya, Türkiye
                    </td>
                  </tr>
                  <tr>
                    <td><b>
                      Wan Nurdiyana Wan Mansur</b>, University Malaysia Terengganu, Malaysia
                    </td>
                  </tr>
                  <tr>
                    <td><b>
                      Zehra Gök</b>, Vocational School, Selçuk University, Konya, Türkiye
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
