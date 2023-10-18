import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({ children, className = 'breadcumb' }: {
  className?: string;
  children: React.ReactNode
}) {
  return <div className={'mb-3 ' + className}>
    <ul>
      <BreadcrumbItem title='Home' url='/' />
      {children}
    </ul>
  </div>
}

export function BreadcrumbItem({ title, url }: {
  title: string,
  url: string
}) {
  return <li>
    <Link href={url}>{title}</Link>
  </li>
}

export function PageHeader(props) {
  return (
    <section className='breadcrumb-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='breadcrumb-content'>
              <ul className='breadcrumb__list'>
                <li className='active__list-item'><Link href='/'>Home</Link></li>
                <li>{props.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PageHeaderEvent(props) {
  return (
    <section className='breadcrumb-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='breadcrumb-content'>
              <ul className='breadcrumb__list'>
                <li className='active__list-item'><Link href='/'>home</Link></li>
                <li className='active__list-item'><Link href={props.titlehref}>{props.title}</Link></li>
                <li><Link href={'/year/' + props.titlehref2}>{props.title2}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}