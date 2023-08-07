import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import MixerAreaTwo from '../components/MixerAreaTwo'

export default function ContactPage() {

  return (
    <Layout pageTitle='Contact | ISESER2023'>
      <NavOne />
      <PageHeader title='Contact' />
      <Contact />

      <MixerAreaTwo />

      <Footer />
    </Layout>
  )
};

