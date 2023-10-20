import api from '@/api'
import YearPageClient from '@/app/year/[id]/client'

export function generateMetadata(
  { params, searchParams }:
    {
      params: { id: string }; searchParams?:
        { [key: string]: string | string[] | undefined };
    }
) {

  return {
    title: 'ISESER' + params.id + ' ABSTRACTS ONLINE VIEW'

  }
}

export default async function Page(
  { params, searchParams }:
    {
      params: { id: string }; searchParams?:
        { [key: string]: string | string[] | undefined };
    }
) {

  var [orals, posters] = await Promise.all([
    api('/api/submission?e15=&page=1&itemPerPage=-1&sort=id&desc=false&orals=1&year=' + params?.id),
    api('/api/submission?e15=&page=1&itemPerPage=-1&sort=id&desc=false&posters=1&year=' + params?.id)
  ])

  return <YearPageClient orals={orals} posters={posters} year={params?.id} />
}
