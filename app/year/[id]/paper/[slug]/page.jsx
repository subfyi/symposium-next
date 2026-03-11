import { randomTimeString } from '../../../../../components/randomTimeString'
import PaperPageClient from './client'
import api from '../../../../../api'
import Script from 'next/script'

const months = {
  '2016': '05',
  '2017': '05',
  '2018': '05',
  '2019': '05',
  '2020': '07',
  '2021': '06',
  '2023': '10'
}

const places = {
  '2016': 'Konya, Turkiye',
  '2017': 'Konya, Turkiye',
  '2018': 'Konya, Turkiye',
  '2019': 'Konya, Turkiye',
  '2020': 'Manisa, Turkiye',
  '2021': 'Tirana, Albania',
  '2023': 'Konya, Turkiye'
}

const proceedingIsbn = {
  '2016': '978-605-83522-0-9',
  '2017': '978-605-88368-4-6',
  '2019': '978-605-184-173-1',
  '2020': '978-605-83522-2-3',
  '2021': '978-605-83522-3-0',
  '2023': '978-625-6802-87-2'
}

function getPdfUrl(datas, year) {
  if (datas.paper_page >= 0 && datas.pap_num) {
    const prefix = datas.parampre && (datas.parampre.id === 97 || datas.parampre.id === 463) ? 'O' : 'P'
    return `https://api.iseser.com/doc/${year}/book/${prefix}${datas.pap_num}.pdf`
  }

  if (datas.paper_external) {
    return datas.paper_external
  }

  return null
}

function getPublicationDate(year) {
  const month = months[year] || '01'
  return `${year}-${month}-01`
}

function getPageRange(datas) {
  if (!datas.paper_page) {
    return null
  }

  return datas.paper_page_end ? `${datas.paper_page}-${datas.paper_page_end}` : `${datas.paper_page}`
}

export async function generateMetadata({ params }) {
  const year = params?.id

  const datas = await api('/api/submission/' + params.slug)
  const authorsList = datas.authors.map(author => `${author.first_name} ${author.last_name}`)
  const canonicalUrl = `https://iseser.com/year/${year}/paper/${params.slug}/`
  const pdfUrl = getPdfUrl(datas, year)
  const publicationDate = getPublicationDate(year)

  return {
    title: datas.en_title.toUpperCase() + ' | ISESER' + year,
    description: datas.en_title.toUpperCase() + ' - Abstract of an article titled',
    alternates: {
      canonical: canonicalUrl
    },
    other: {
      citation_title: datas.en_title.toUpperCase(),
      citation_author: authorsList,
      citation_publication_date: publicationDate,
      citation_online_date: publicationDate,
      citation_conference_title: `International Symposium for Environmental Science and Engineering Research (ISESER ${year})`,
      citation_abstract_html_url: canonicalUrl,
      citation_pdf_url: pdfUrl,
      citation_firstpage: datas.paper_page || undefined,
      citation_lastpage: datas.paper_page_end || datas.paper_page || undefined,
      citation_language: 'en',
      citation_keywords: datas.pap_keyword ? datas.pap_keyword.split('|').join('; ') : undefined,
      citation_isbn: proceedingIsbn[year] || undefined
    },
    openGraph: {
      title: datas.en_title.toUpperCase() + ' | ISESER' + year,
      description: datas.en_title.toUpperCase() + ' - Abstract of an article titled',
      type: 'article',
      url: canonicalUrl,
      publishedTime: publicationDate,
      authors: authorsList
    }
  }
}

export default async function Page({ params }) {

  var [datas] = await Promise.all([api('/api/submission/' + params?.slug + '?e' + randomTimeString)])
  const year = params?.id
  const canonicalUrl = `https://iseser.com/year/${year}/paper/${params.slug}/`
  const pdfUrl = getPdfUrl(datas, year)
  const pageRange = getPageRange(datas)
  const publicationDate = getPublicationDate(year)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: datas.en_title,
    name: datas.en_title,
    description: datas.en_abstract,
    inLanguage: 'en',
    datePublished: publicationDate,
    url: canonicalUrl,
    sameAs: canonicalUrl,
    author: datas.authors.map((author) => ({
      '@type': 'Person',
      name: `${author.first_name} ${author.last_name}`,
      affiliation: author.adress ? {
        '@type': 'Organization',
        name: author.adress
      } : undefined
    })),
    isPartOf: {
      '@type': 'PublicationIssue',
      name: `International Symposium for Environmental Science and Engineering Research (ISESER ${year})`,
      isbn: proceedingIsbn[year] || undefined
    },
    pagination: pageRange || undefined,
    publisher: {
      '@type': 'Organization',
      name: 'ISESER'
    },
    contentLocation: places[year] ? {
      '@type': 'Place',
      name: places[year]
    } : undefined,
    keywords: datas.pap_keyword ? datas.pap_keyword.split('|') : undefined,
    encoding: pdfUrl ? {
      '@type': 'MediaObject',
      fileFormat: 'application/pdf',
      url: pdfUrl
    } : undefined
  }

  return <>
    <Script
      id={`scholarly-article-${params.slug}`}
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    <PaperPageClient datas={datas} year={year} />
  </>
}
