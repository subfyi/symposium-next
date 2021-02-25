import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MixerAreaTwo from "../components/MixerAreaTwo";
import ContactForm from "../components/ContactForm";

export default class extends React.Component {

    render() {

        return (
            <Layout pageTitle="Contact | ISESER2021">
                <NavOne/>
                <PageHeader title="Contact"/>
                <Contact/>
                <ContactForm/>

                <MixerAreaTwo/>

                <Footer/>
            </Layout>
        );
    }
};

