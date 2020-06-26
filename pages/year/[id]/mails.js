import React from 'react';
import Layout from "../../../components/Layout";
import NavOne from "../../../components/NavOne";
import PageHeader from "../../../components/PageHeader";
import MixerAreaTwo from "../../../components/MixerAreaTwo";
import Footer from "../../../components/Footer";
import SimpleReactValidator from 'simple-react-validator'
import api from '../../../api'
import PageHeaderEvent from "../../../components/PageHeaderEvent";

export default class YearList extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({query}) {
        var posters = await api("/api/submission?page=1&itemPerPage=-1&query=&sort=id&desc=false&posters=1&year=" + query.id);
        var orals = await api("/api/submission?page=1&itemPerPage=-1&query=&sort=id&desc=false&year=" + query.id);
        return {
            posters,
            orals,
            year: query.id
        };
    }

    render() {
        const {orals, posters, year} = this.props;

        return (
            <Layout pageTitle={year + "SYMPOSIUM ABSTRACTS (ONLINE)"}>
                <NavOne/>
                <PageHeaderEvent
                    title={"All Symposium"}
                    titlehref="/documents-all"
                    title2={"Symposium " + year}
                    titlehref2={year}
                />
                <section className="about-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-heading">
                                    <div className="section-heading">
                                        <h2 className="section__title">{year} SYMPOSIUM PRELIMINARY ABSTRACTS (ONLINE)
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="about-heading">
                                    <div className="section-heading">
                                        <h3> Oral Presentations</h3>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="about-heading">
                                    <div className="section-heading">

                                        <p className="section__desc">
                                            <table className="tg">
                                                <thead>
                                                <th className="text-center">
                                                    #
                                                </th>
                                                <th className="text-center">
                                                    Title of Abstract
                                                </th>
                                                </thead>
                                                <tbody>
                                                {orals.data.map((row, i) => i == 0 ? null : <>
                                                    <tr key={row.id} className={this.props.trstyle && this.props.trstyle(row)}>

                                                        <td colSpan="2">
                                                            {row.authors
                                                                .map(a => a.p_mail)
                                                                .join(", ")
                                                            }</td>
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