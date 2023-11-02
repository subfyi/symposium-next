import { NextResponse } from 'next/server'

export function middleware(request) {

  const requestHeaders = new Headers(request.headers)

  const match = request.nextUrl.pathname.match(/^\/sitemap-(.*?)-(\d+).xml$/)

  if (match) {
    const url = request.nextUrl.clone()
    url.pathname = '/' + 'sitemap/' + match[1] + '/' + match[2] + '/sitemap.xml'
    return NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders
      }
    })
  }
}