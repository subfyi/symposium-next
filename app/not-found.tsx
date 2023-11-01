import React from 'react'
import { PageHeader } from '@/layout/Breadcrumb'

export default function NotFoundPage() {
  return <>
    <PageHeader title={'404'} />
    <div className='container my-5'>
      <div className='row service-wrap my-5'>
        <div className='col my-5'>
          <p className='my-5'>
            Sorry, an error has occured, Requested page not found!
          </p>
        </div>
      </div>
    </div>

  </>
}

