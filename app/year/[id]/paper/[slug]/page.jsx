import { randomTimeString } from '../../../../../components/randomTimeString'
import PaperPageClient from './client'
import api from '../../../../../api'

export async function generateMetadata({ params }) {
  const year = params?.id

  const datas = await api('/api/submission/' + params.slug)
  const authorsList = datas.authors.map(author => `${author.first_name} ${author.last_name}`)

  return {
    title: datas.en_title.toUpperCase() + ' | ISESER' + year,
    description: datas.en_title.toUpperCase() + ' - Abstract of an article titled',
    other: {
      citation_title: datas.en_title.toUpperCase(),
      citation_author: authorsList,
      citation_publication_date: year,
      citation_firstpage: datas.page_start,
      citation_lastpage: datas.page_end,
      citation_pdf_url: 'https://api.iseser.com/doc/' + year + '/book/' + (datas.parampre && (datas.parampre.id === 97 ? 'O' : datas.parampre.id === 463 ? 'O' : 'P')) + datas.pap_num + '.pdf'
    },
    openGraph: {
      title: datas.en_title.toUpperCase() + ' | ISESER' + year,
      description: datas.en_title.toUpperCase() + ' - Abstract of an article titled',
      type: 'article',
      publishedTime: year,
      authors: authorsList
    }
  }
}

export default async function Page({ params }) {

  var [datas] = await Promise.all([api('/api/submission/' + params?.slug + '?e' + randomTimeString)])

  return <PaperPageClient datas={datas} year={params?.id} />
}
