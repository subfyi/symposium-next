import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import Footer from '../components/Footer'
import SliderOne from '../components/SliderOne'
import ServiceArea from '../components/ServiceArea'
import Announcement from '../components/Announcement'

function HomePage() {
  return (
    <Layout pageTitle='ISESER2023 - International Symposium for Environmental Science and Engineering Research'>
      <NavOne />
      <SliderOne />
      <section className={'service-area text-center'}>
        <ServiceArea />
      </section>
      <Announcement />
      <Footer />
    </Layout>
  )
}

export default HomePage
