import { getServerSideSitemap } from 'next-sitemap'
import api from '../../../../../api'
import { notFound } from 'next/navigation'

const endpoint = 'https://iseser.com'
const apipoint = 'https://api.iseser.com/'

export async function GET(request, { params }) {

  const { year, page } = params

  if (year === 'document' && +page === 1) {
    return getServerSideSitemap([
      { loc: apipoint + 'doc/2023/ISESER2023_BANNER.pdf' },
      { loc: apipoint + 'doc/2023/ISESER2023-FINAL-PROGRAM.pdf' },
      { loc: apipoint + 'doc/2021/ISESER2021_BANNER.pdf' },
      { loc: apipoint + 'doc/2021/ISESER2021_BROCHURE.pdf' },
      { loc: apipoint + 'doc/2021/ISESER2021-FINAL-PROGRAM.pdf' },
      { loc: apipoint + 'doc/2021/ISESER2021-ABSTRACT-BOOK.pdf' },
      { loc: apipoint + 'doc/2021/ISESER2021-PROCEEDING-BOOK.pdf' },
      { loc: apipoint + 'doc/2020/ISESER2020_BANNER.pdf' },
      { loc: apipoint + 'doc/2020/ISESER2020_BROCHURE.pdf' },
      { loc: apipoint + 'doc/2020/ISESER2020-FINAL-PROGRAM.pdf' },
      { loc: apipoint + 'doc/2020/ISESER2020-ABSTRACT-BOOK.pdf' },
      { loc: apipoint + 'doc/2020/ISESER2020-PROCEEDING-BOOK.pdf' },
      { loc: apipoint + 'doc/2019/ISESER2019_BANNER.pdf' },
      { loc: apipoint + 'doc/2019/ISESER2019-BROCHURE.pdf' },
      { loc: apipoint + 'doc/2019/ISESER2019-FINAL-PROGRAM.pdf' },
      { loc: apipoint + 'doc/2019/ISESER2019-ABSTRACT-BOOK.pdf' },
      { loc: apipoint + 'doc/2019/ISESER2019-PROCEEDING-BOOK.pdf' },
      { loc: apipoint + 'doc/2018/ISESER2018-banner.png' },
      { loc: apipoint + 'doc/2018/ISESER2018_Brochure.pdf' },
      { loc: apipoint + 'doc/2018/ISESER2018-FINAL-PROGRAM.pdf' },
      { loc: apipoint + 'doc/2018/ISESER2018-ABSTRACT-BOOK.pdf' },
      { loc: apipoint + 'doc/2017/2nd-UCMOS.jpg' },
      { loc: apipoint + 'doc/2017/Duyuru-Konya1-5.pdf' },
      { loc: apipoint + 'doc/2017/UCMOS_KONGRE_PROGRAMI.pdf' },
      { loc: apipoint + 'doc/2017/ISESER2017-PROCEEDING-BOOK.pdf' },
      { loc: apipoint + 'doc/2016/afis4.jpg' },
      { loc: apipoint + 'doc/2016/Duyuru-Konya.pdf' },
      { loc: apipoint + 'doc/2016/ISESER2016-PROCEEDING-BOOK.pdf' },
      { loc: apipoint + 'doc/2016/UCMOS_KONGRE_PROGRAMI.pdf' },
    ])
  }

  if (year === 'global' && +page === 1) {
    return getServerSideSitemap([
      { loc: endpoint + '/' },
      { loc: endpoint + '/adviser-commission/' },
      { loc: endpoint + '/conference-fee/' },
      { loc: endpoint + '/contact/' },
      { loc: endpoint + '/documents/' },
      { loc: endpoint + '/documents-all/' },
      { loc: endpoint + '/honorary-committee' },
      { loc: endpoint + '/science-commission' },
      { loc: endpoint + '/sponsors' },
      { loc: endpoint + '/threads' },
      { loc: endpoint + '/symposium-announced' },
    ])
  }

  const data = await api(`/api/submission?e17=&page=1&itemPerPage=-1&sort=id&desc=false&orals=1&year=${year}`)
  const data2 = await api(`/api/submission?e17=&page=1&itemPerPage=-1&sort=id&desc=false&posters=1&year=${year}`)

  if (data.data.length === 0 && data2.data.length === 0)
    notFound()

  return getServerSideSitemap([
      { loc: `${endpoint}/year/${year}/` },
      ...data.data.map(a => ({ loc: `${endpoint}/year/${year}/paper/${a.id}/` })),
      ...data2.data.map(a => ({ loc: `${endpoint}/year/${year}/paper/${a.id}/` }))
    ]
  )
}