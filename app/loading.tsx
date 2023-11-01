import React from 'react'
import { PageHeader } from '@/layout/Breadcrumb'

export default function Loading() {
  return <>
    <PageHeader title={'Loading'} />
    <div className='container my-5'>
      <div className='row service-wrap my-5'>
        <div className='col my-5'>
          <p className='my-5'>
            Loading...
          </p>
        </div>
      </div>
    </div>
  </>
}

