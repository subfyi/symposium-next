import { randomTimeString } from '../../../../../components/randomTimeString'
import PaperPageClient from './client'
import api from '../../../../../api'

export async function generateMetadata({ params }) {
  const year = params?.id;

  const datas = await api('/api/submission/' + params.slug)
  const authorsList = datas.authors.map(author => `${author.first_name} ${author.last_name}`)

  return {
    title: datas.en_title.toUpperCase() + ' | ISESER' + year,
    description: datas.en_title.toUpperCase() + ' - Abstract of an article titled',
    openGraph: {
      title: datas.en_title.toUpperCase() + ' | ISESER' + year,
      description: datas.en_title.toUpperCase() + ' - Abstract of an article titled',
      type: 'article',
      publishedTime: year,
      authors: authorsList,
    }
  }
}

export default async function Page({ params }) {

  var [datas] = await Promise.all([api('/api/submission/' + params?.slug + '?e' + randomTimeString)])

  return <PaperPageClient datas={datas} year={params?.id} />
}
