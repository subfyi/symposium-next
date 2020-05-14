import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MixerAreaTwo from "../components/MixerAreaTwo";


const ContactPage = () => {
    return (
        <Layout pageTitle="Contact | ISESER2020">
            <NavOne />
            <PageHeader title="Contact" />
            <Contact />

            <MixerAreaTwo/>
            <Footer />
        </Layout>
    );
};

export default ContactPage;
