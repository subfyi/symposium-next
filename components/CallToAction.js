import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className='mixer-area mixer-area3'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='section-heading mixer-heading'>
              <Link href='/documents-all' className='theme-btn'>Documents All</Link>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='section-heading mixer-heading'>
              <Link href='/symposium-announced' className='theme-btn'>2023 Announcement</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CallToAction
