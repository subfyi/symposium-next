import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import EventsDetail from "../components/EventsDetail";

const EventsDetailPage = () => {
    return (
        <Layout pageTitle="Symposium 2019 | Events Detail">
            <NavOne />
            <PageHeader title="Symposium 2019" />
            <EventsDetail />
            <Footer />
        </Layout>
    );
};

export default EventsDetailPage;