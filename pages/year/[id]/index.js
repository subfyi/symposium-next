import React from 'react';
import Layout from "../../../components/Layout";
import NavOne from "../../../components/NavOne";
import PageHeader from "../../../components/PageHeader";
import MixerAreaTwo from "../../../components/MixerAreaTwo";
import Footer from "../../../components/Footer";
import SimpleReactValidator from 'simple-react-validator'
import api from '../../../api'

export default class YearList extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({query}) {
        var datas = await api("/api/submission?page=1&itemPerPage=25&query=&sort=id&desc=true&year=" + query.id);
        return {
            datas,
            year: query.id
        };
    }

    render() {
        const {datas, year} = this.props;

        return (
            <Layout pageTitle="INVITATION | ISESER2020">
                <NavOne/>
                <PageHeader title="INVITATION"/>
                <section className="about-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-heading">
                                    <div className="section-heading">
                                        <h2 className="section__title">{year} SYMPOSIUM ABSTRACT BOOK (WEB)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="about-heading">
                                    <div className="section-heading">

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="about-heading">
                                    <div className="section-heading">

                                        <p className="section__desc">
                                            <table className="tg">
                                                <thead>
                                                <th>
                                                    #
                                                </th>
                                                <th>
                                                    Title of Abstract
                                                </th>
                                                </thead>
                                                <tbody>
                                                {datas.data.map((row, i) => <>
                                                    <tr key={row.id} className={this.props.trstyle && this.props.trstyle(row)}>
                                                        <td>{i + 1}</td>
                                                        <td><a href={"/year/" + year + "/paper/" + (row.id)}> {row.pap_title}</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2">{row.authors.map((author, index) => <>
                                                            {author.name} {author.surname},{" "}
                                                        </>)}</td>
                                                    </tr>
                                                </>)}

                                                </tbody>
                                            </table>
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
                <MixerAreaTwo/>
                <Footer/>
            </Layout>);
    }
}