"use client";

import SliderOne from '../components/SliderOne'
import ServiceArea from '../components/ServiceArea'
import Announcement from '../components/Announcement'

export default function HomePage() {
    return (
        <>
            <SliderOne/>
            <section className={'service-area text-center'}>
                <ServiceArea/>
            </section>
            <Announcement/>
        </>
    )
}

