import api from '@/api'
import YearPageClient from '@/app/year/[id]/client'
import { randomTimeString } from '@/components/randomTimeString'

export function generateMetadata(
  { params, searchParams }:
    {
      params: { id: string }; searchParams?:
        { [key: string]: string | string[] | undefined };
    }
) {

  return {
    title: 'ISESER' + params.id.toUpperCase() + ' ABSTRACTS ONLINE VERSION',
    description: 'ISESER' + params.id.toUpperCase() + ' Abstracts Online Version - International Symposium for Environmental Science and Engineering Research',
    openGraph: {
      title: 'ISESER' + params.id.toUpperCase() + ' ABSTRACTS ONLINE VERSION',
      description: 'ISESER' + params.id.toUpperCase() + ' Abstracts Online Version - International Symposium for Environmental Science and Engineering Research'
    }
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
    api('/api/submission?e' + randomTimeString + '=&page=1&itemPerPage=-1&sort=id&desc=false&orals=1&year=' + params?.id),
    api('/api/submission?e' + randomTimeString + '=&page=1&itemPerPage=-1&sort=id&desc=false&posters=1&year=' + params?.id)
  ])

  return <YearPageClient orals={orals} posters={posters} year={params?.id} />
}
