import React from 'react'
import Link from 'next/link'

export default function Announcement() {
  return (
    <section className='mixer-area mixer-area3'>
      <div className='container'>
        <div className='row align-middle align-content-center text-center'>
          <div className='col-lg-6'>
            <div className='section-heading mixer-heading'>
              <Link href='/symposium-announced' className='theme-btn'>2023 Announcement</Link>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='section-heading mixer-heading'>
              <Link href='/documents-all' className='theme-btn'>Documents All</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

