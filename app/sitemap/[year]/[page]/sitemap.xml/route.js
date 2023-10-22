import { getServerSideSitemap } from 'next-sitemap'
import api from '../../../../../api'
import { notFound } from 'next/navigation'

const endpoint = 'https://iseser.com/'
const apipoint = 'https://api.iseser.com/'

export async function GET(request, { params }) {

  const { year, page } = params

  if (year === 'document' && +page === 1) {
    return getServerSideSitemap([
      { url: apipoint + 'doc/2023/ISESER2023_BANNER.pdf' },
      { url: apipoint + 'doc/2023/ISESER2023-FINAL-PROGRAM.pdf' },
      { url: apipoint + 'doc/2021/ISESER2021_BANNER.pdf' },
      { url: apipoint + 'doc/2021/ISESER2021_BROCHURE.pdf' },
      { url: apipoint + 'doc/2021/ISESER2021-FINAL-PROGRAM.pdf' },
      { url: apipoint + 'doc/2021/ISESER2021-ABSTRACT-BOOK.pdf' },
      { url: apipoint + 'doc/2021/ISESER2021-PROCEEDING-BOOK.pdf' },
      { url: apipoint + 'doc/2020/ISESER2020_BANNER.pdf' },
      { url: apipoint + 'doc/2020/ISESER2020_BROCHURE.pdf' },
      { url: apipoint + 'doc/2020/ISESER2020-FINAL-PROGRAM.pdf' },
      { url: apipoint + 'doc/2020/ISESER2020-ABSTRACT-BOOK.pdf' },
      { url: apipoint + 'doc/2020/ISESER2020-PROCEEDING-BOOK.pdf' },
      { url: apipoint + 'doc/2019/ISESER2019_BANNER.pdf' },
      { url: apipoint + 'doc/2019/ISESER2019-BROCHURE.pdf' },
      { url: apipoint + 'doc/2019/ISESER2019-FINAL-PROGRAM.pdf' },
      { url: apipoint + 'doc/2019/ISESER2019-ABSTRACT-BOOK.pdf' },
      { url: apipoint + 'doc/2019/ISESER2019-PROCEEDING-BOOK.pdf' },
      { url: apipoint + 'doc/2018/ISESER2018-banner.png' },
      { url: apipoint + 'doc/2018/ISESER2018_Brochure.pdf' },
      { url: apipoint + 'doc/2018/ISESER2018-FINAL-PROGRAM.pdf' },
      { url: apipoint + 'doc/2018/ISESER2018-ABSTRACT-BOOK.pdf' },
      { url: apipoint + 'doc/2017/2nd-UCMOS.jpg' },
      { url: apipoint + 'doc/2017/Duyuru-Konya1-5.pdf' },
      { url: apipoint + 'doc/2017/UCMOS_KONGRE_PROGRAMI.pdf' },
      { url: apipoint + 'doc/2017/ISESER2017-PROCEEDING-BOOK.pdf' },
      { url: apipoint + 'doc/2016/afis4.jpg' },
      { url: apipoint + 'doc/2016/Duyuru-Konya.pdf' },
      { url: apipoint + 'doc/2016/ISESER2016-PROCEEDING-BOOK.pdf' },
      { url: apipoint + 'doc/2016/UCMOS_KONGRE_PROGRAMI.pdf' },
    ])
  }

  if (year === 'global' && +page === 1) {
    return getServerSideSitemap([
      { url: endpoint },
      { url: endpoint + 'adviser-commission/' },
      { url: endpoint + 'conference-fee/' },
      { url: endpoint + 'contact/' },
      { url: endpoint + 'documents/' },
      { url: endpoint + 'documents-all/' },
      { url: endpoint + 'honorary-committee' },
      { url: endpoint + 'science-commission' },
      { url: endpoint + 'sponsors' },
      { url: endpoint + 'threads' },
      { url: endpoint + 'symposium-announced' },
    ])
  }

  const data = await api(`/api/submission?e17=&page=1&itemPerPage=-1&sort=id&desc=false&orals=1&year=${year}`)
  const data2 = await api(`/api/submission?e17=&page=1&itemPerPage=-1&sort=id&desc=false&posters=1&year=${year}`)

  if (data.data.length === 0 && data2.data.length === 0)
    notFound()

  return getServerSideSitemap([
      { url: `${endpoint}year/${year}/` },
      ...data.data.map(a => ({ url: `${endpoint}/year/${year}/paper/${a.id}/` })),
      ...data2.data.map(a => ({ url: `${endpoint}/year/${year}/paper/${a.id}/` }))
    ]
  )
}