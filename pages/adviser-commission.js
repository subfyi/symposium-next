import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import MixerAreaTwo from "../components/MixerAreaTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Advisory Board | ISESER2021">
            <NavOne/>
            <PageHeader title="Advisory Board"/>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <h2 className="section__title">Advisory Board
                                    </h2>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="about-heading">
                                <div className="section-heading">

                                    <p className="section__desc">
                                        <table className="tg">
                                            <tbody>
                                            <tr>
                                                <td className="tg-0pky">Ali Rıza Kul, Science Faculty, Van Yüzüncü Yıl University, Aksaray,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Ayşe Erkuş, Engineering and Architecture Faculty, Van Yüzüncü Yıl
                                                    University, Aksaray, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Blerina Vrenozi, Natural Science Faculty, Tirana University, Albania
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Deniz Demir Atlı, Sciences and Arts Faculty, Celal Bayar University, Manisa,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Eda Güneş, Tourism Faculty, Necmettin Erbakan University, Konya,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Fatma Didem Tunçez, Economics and Administrative Sciences Faculty,
                                                    KTO Karatay University, Konya, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Feray Koçan, Sciences and Arts Faculty, Celal Bayar University, Manisa,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Flora Merko, Business Faculty, Aleksander Moisiu Durres University,
                                                    Albania
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Gülden Gök, Engineering Faculty, Aksaray University, Aksaray, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Gülnihal Kara, Engineering and Natural Sciences Faculty, Konya
                                                    Technical University, Konya, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Hasan Koçyiğit, Engineering Faculty, Aksaray University, Aksaray,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">İsmail Şimşek, Engineering Faculty, Aksaray University, Aksaray,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Kübra Yazıcı, Agriculture Faculty, Gaziosmanpaşa University, Tokat,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Laura Shumka, Architecture Faculty, Albanian University, Tirana</td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Merve Soğancıoğlu, Engineering and Natural Sciences Faculty, Konya
                                                    Technical University, Konya, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Özlem Güllü, Engineering Faculty, Aksaray University, Aksaray,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Prithwiraj Jha, Raiganj Surendranath College, University of Gour
                                                    Banga, India
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Selim Doğan, Engineering and Natural Sciences Faculty, Konya
                                                    Technical University, Konya, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Sermin Çam Kaynar, Sciences and Arts Faculty, Celal Bayar University, Manisa,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Sevda Ocak, Engineering Faculty, Giresun University, Giresun, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Sezen Küçükçongar, Engineering and Natural Sciences Faculty, Konya
                                                    Technical University, Konya, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0pky">Umit Kaynar, Engineering and Architecture Faculty, Bakirçay University, İzmir,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Yağmur Uysal, Engineering &amp; Architecture Faculty, Mersin University,
                                                    Mersin, Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Yasemin Tuncer, Sciences and Arts Faculty, Celal Bayar University, Manisa,
                                                    Turkey
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Zehra Gök, Vocational School, Selçuk University, Konya, Turkey</td>
                                            </tr>
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
        </Layout>
    );
};

export default AboutPage;
