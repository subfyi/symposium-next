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
  description: 'The purpose of the symposium is to give information about the environmental sciences and engineering to participants. In this symposium all participants will take advantage about environmental topics with the help of foreign participants and several poster and oral presentations. Also, this symposium aims to provide connections for students and to provide opportunities for experts to share and discuss their experiences.',
  openGraph: {
    title: 'ISESER2023 - International Symposium for Environmental Science and Engineering Research',
    description: 'The purpose of the symposium is to give information about the environmental sciences and engineering to participants. In this symposium all participants will take advantage about environmental topics with the help of foreign participants and several poster and oral presentations. Also, this symposium aims to provide connections for students and to provide opportunities for experts to share and discuss their experiences.',
    url: 'https://iseser.com/',
    siteName: 'ISESER2023',
    locale: 'en-US',
    type: 'website'
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
      <link rel='icon' href='https://iseser.com/favicon.ico' />
    </head>
    <body className={poppins.className + ' loaded'}>
    <Layout>
      {children}
    </Layout>
    </body>
    </html>
  )
}
