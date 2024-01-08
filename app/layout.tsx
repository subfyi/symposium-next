import '../assets/style.scss'
import Layout from '@/layout/Layout'
import React from 'react'
import { Poppins } from 'next/font/google'

import Favicon from '@/assets/favi/favicon.ico'
import FaviconSVG from '@/assets/favi/favicon.svg'
import Favicon192x192 from '@/assets/favi/android-icon-192x192.png'
import Favicon32x32 from '@/assets/favi/favicon-32x32.png'
import Favicon96x96 from '@/assets/favi/favicon-96x96.png'
import Favicon16x16 from '@/assets/favi/favicon-16x16.png'
import AppleIcon57x57 from '@/assets/favi/apple-icon-57x57.png'
import AppleIcon60x60 from '@/assets/favi/apple-icon-60x60.png'
import AppleIcon72x72 from '@/assets/favi/apple-icon-72x72.png'
import AppleIcon76x76 from '@/assets/favi/apple-icon-76x76.png'
import AppleIcon114x114 from '@/assets/favi/apple-icon-114x114.png'
import AppleIcon120x120 from '@/assets/favi/apple-icon-120x120.png'
import AppleIcon144x144 from '@/assets/favi/apple-icon-144x144.png'
import AppleIcon152x152 from '@/assets/favi/apple-icon-152x152.png'
import AppleIcon180x180 from '@/assets/favi/apple-icon-180x180.png'
import MsIcon144x144 from '@/assets/favi/ms-icon-144x144.png'

import Script from 'next/script'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext']
})

export const metadata = {
  title: 'ISESER2023 - International Symposium for Environmental Science and Engineering Research',
  description: 'The purpose of the symposium is to give information about the environmental sciences and engineering to participants. In this symposium all participants will take advantage about environmental topics with the help of foreign participants and several poster and oral presentations.',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'ISESER2023 - International Symposium for Environmental Science and Engineering Research',
    description: 'The purpose of the symposium is to give information about the environmental sciences and engineering to participants. In this symposium all participants will take advantage about environmental topics with the help of foreign participants and several poster and oral presentations.',
    url: 'https://iseser.com/',
    siteName: 'ISESER2023',
    locale: 'en-US',
    type: 'website'
  },
  verification: {
    yandex: 'f53bd192ca8c76d5'
  }
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />


      <link rel='icon' href={Favicon.src} />
      <link rel='icon' href={FaviconSVG.src} type='image/svg+xml' />

      <link rel='icon' type='image/png' sizes='192x192' href={Favicon192x192.src} />
      <link rel='icon' type='image/png' sizes='32x32' href={Favicon32x32.src} />
      <link rel='icon' type='image/png' sizes='96x96' href={Favicon96x96.src} />
      <link rel='icon' type='image/png' sizes='16x16' href={Favicon16x16.src} />

      <link rel='apple-touch-icon' sizes='57x57' href={AppleIcon57x57.src} />
      <link rel='apple-touch-icon' sizes='60x60' href={AppleIcon60x60.src} />
      <link rel='apple-touch-icon' sizes='72x72' href={AppleIcon72x72.src} />
      <link rel='apple-touch-icon' sizes='76x76' href={AppleIcon76x76.src} />
      <link rel='apple-touch-icon' sizes='114x114' href={AppleIcon114x114.src} />
      <link rel='apple-touch-icon' sizes='120x120' href={AppleIcon120x120.src} />
      <link rel='apple-touch-icon' sizes='144x144' href={AppleIcon144x144.src} />
      <link rel='apple-touch-icon' sizes='152x152' href={AppleIcon152x152.src} />
      <link rel='apple-touch-icon' sizes='180x180' href={AppleIcon180x180.src} />

      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content={MsIcon144x144.src} />
      <meta name='theme-color' content='#ffffff' />

      {process.env.NODE_ENV === 'production' && <>
        <link rel='preconnect' href='https://www.googletagmanager.com' />
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-QE48W95TB6' />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-QE48W95TB6');
        `}
        </Script>

      </>}
    </head>
    <body className={poppins.className}>
    <Layout>
      {children}
    </Layout>
    </body>
    </html>
  )
}
