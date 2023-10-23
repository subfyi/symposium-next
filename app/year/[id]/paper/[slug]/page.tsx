import api from '@/api'
import PaperPageClient from '@/app/year/[id]/paper/[slug]/client'

export async function generateMetadata(
  { params, searchParams }:
    {
      params: { id: string, slug: string }; searchParams?:
        { [key: string]: string | string[] | undefined };
    }
) {

  const datas = await api('/api/submission/' + params.slug)
  return {
    title: datas.en_title + ' | ISESER' + params.id,
    openGraph: {
      title: datas.en_title + ' | ISESER' + params.id
    }
  }
}

const randomTimeString = `${Date.now()}_${Math.random().toString(36).substring(2)}`

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
