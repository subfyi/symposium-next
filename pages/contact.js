import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Link from 'next/link'
import {Alert, Button, Col, Container, CustomInput, FormGroup, Input, Label, Row} from 'reactstrap'
import SimpleReactValidator from 'simple-react-validator'
import api from '../api'
import Validator from '../components/Common/Validator'
import ContactForm from "../components/ContactForm";

export default class extends React.Component {

    render() {

        return (
            <Layout pageTitle="Contact | ISESER2020">
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

