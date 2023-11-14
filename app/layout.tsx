import '../assets/style.scss'
import Layout from '@/layout/Layout'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext']
})

export const metadata = {
  title: 'ISESER2023 - International Symposium for Environmental Science and Engineering Research',
  description: 'The purpose of the symposium is to give information about the environmental sciences and engineering to participants. In this symposium all participants will take advantage about environmental topics with the help of foreign participants and several poster and oral presentations.',
  robots: {
    index: true,
    follow: true,
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
      <link rel='icon' href='/favicon.ico' />
    </head>
    <body className={poppins.className}>
    <Layout>
      {children}
    </Layout>
    </body>
    </html>
  )
}
