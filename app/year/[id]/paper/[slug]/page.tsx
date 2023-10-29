import api from '@/api'
import PaperPageClient from '@/app/year/[id]/paper/[slug]/client'
import { randomTimeString } from '@/components/randomTimeString'

export async function generateMetadata(
  { params, searchParams }:
    {
      params: { id: string, slug: string }; searchParams?:
        { [key: string]: string | string[] | undefined };
    }
) {

  const datas = await api('/api/submission/' + params.slug)
  return {
    title: datas.en_title.toUpperCase() + ' | ISESER' + params.id,
    description: 'It is a digital representation of the article ' + datas.en_title.toUpperCase(),
    openGraph: {
      title: datas.en_title.toUpperCase() + ' | ISESER' + params.id,
      description: 'It is a digital representation of the article ' + datas.en_title.toUpperCase(),
    }
  }
}

export default async function Page(
  { params, searchParams }:
    {
      params: { id: string, slug: string }; searchParams?:
        { [key: string]: string | string[] | undefined };
    }
) {

  var [datas] = await Promise.all([api('/api/submission/' + params?.slug + '?e' + randomTimeString)])

  return <PaperPageClient datas={datas} year={params?.id} />
}
