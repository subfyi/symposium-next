import api from '@/api'
import YearPageClient from '@/app/year/[id]/client'
import { randomTimeString } from '@/components/randomTimeString'

export async function generateMetadata(
  { params, searchParams }:
    {
      params: Promise<{ id: string }> | { id: string }; searchParams?:
        { [key: string]: string | string[] | undefined };
    }
) {
  return Promise.resolve(params).then((resolvedParams) => {
    const year = `${resolvedParams?.id || ''}`.toUpperCase()

    return {
      title: 'ISESER' + year + ' ABSTRACTS ONLINE VERSION',
      description: 'ISESER' + year + ' Abstracts Online Version - International Symposium for Environmental Science and Engineering Research',
      openGraph: {
        title: 'ISESER' + year + ' ABSTRACTS ONLINE VERSION',
        description: 'ISESER' + year + ' Abstracts Online Version - International Symposium for Environmental Science and Engineering Research'
      }
    }
  })
}


export default async function Page(
  { params, searchParams }:
    {
      params: Promise<{ id: string }> | { id: string }; searchParams?:
        { [key: string]: string | string[] | undefined };
    }
) {
  const resolvedParams = await Promise.resolve(params)
  const year = resolvedParams?.id

  var [orals, posters] = await Promise.all([
    api('/api/submission?e' + randomTimeString + '=&page=1&itemPerPage=-1&sort=id&desc=false&orals=1&year=' + year),
    api('/api/submission?e' + randomTimeString + '=&page=1&itemPerPage=-1&sort=id&desc=false&posters=1&year=' + year)
  ])

  return <YearPageClient orals={orals} posters={posters} year={year} />
}
