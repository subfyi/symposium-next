import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Announcement from '../components/Announcement'

export default function ContactPage() {

  return (
    <Layout pageTitle='Contact | ISESER2023'>
      <NavOne />
      <PageHeader title='Contact' />
      <Contact />

      <Announcement />

      <Footer />
    </Layout>
  )
};

