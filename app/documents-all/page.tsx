
import { PageHeader } from '@/layout/Breadcrumb'
import Link from "next/link";
import Announcement from "@/components/Announcement";

const metaTitle = 'All ISESER Documents'
export const metadata = {
    title: metaTitle + ' | ISESER2023',
    openGraph: {
        title: metaTitle + ' | ISESER2023'
    }
}
export default function Page() {
    return <>
        <PageHeader title='All ISESER Documents'/>
        <section className='about-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div>
                            <div className='section-heading'>
                                <h2 className='section__title'>All ISESER Documents
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                        <div>
                            <div className='section-heading'>

                                <p className='section__meta'><Link href='#'>2023 SYMPOSIUM</Link></p>
                                <div className='section__desc'>
                                    <ul className='icon'>
                                        <li className='star'><a href='https://api.iseser.com/doc/2023/ISESER2023_BANNER.pdf?e14' target='_blank'><i className='fa  fa-file-pdf-o'></i> BANNER</a></li>
                                        <li className='star'><a href='https://api.iseser.com/doc/2023/ISESER2023-FINAL-PROGRAM.pdf?e14' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> FINAL PROGRAM</a></li>
                                        <li className='star'><a href='https://api.iseser.com/doc/2023/webinar_link.pdf?e14' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> WEBINAR LINK</a></li>
                                        <li className='star'><a href='../year/2023'><i className='fa fa-file-code-o'></i> ABSTRACTS ONLINE VIEW</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                        <div>
                            <div className='section-heading'>

                                <p className='section__meta'><Link href='/year/2021'>2021 SYMPOSIUM</Link></p>
                                <div className='section__desc'>
                                    <ul className='icon'>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2021/ISESER2021_BANNER.pdf?e14' target='_blank'><i className='fa  fa-file-pdf-o'></i> BANNER</a></li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2021/ISESER2021_BROCHURE.pdf?e14' target='_blank'><i className='fa  fa-file-pdf-o'></i> BROCHURE</a></li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2021/ISESER2021-FINAL-PROGRAM.pdf?e14' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> FINAL PROGRAM </a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2021/ISESER2021-ABSTRACT-BOOK.pdf?e14' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> ABSTRACT BOOK </a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2021/ISESER2021-PROCEEDING-BOOK.pdf?e14' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> PROCEEDING BOOK
                                            </a>
                                        </li>
                                        <li className='star'>
                                            <a href='../year/2021'><i className='fa fa-file-code-o'></i> ABSTRACTS ONLINE VIEW</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                        <div>
                            <div className='section-heading'>

                                <p className='section__meta'><Link href='/year/2020'>2020 SYMPOSIUM</Link></p>
                                <div className='section__desc'>
                                    <ul className='icon'>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2020/ISESER2020_BANNER.pdf' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> BANNER</a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2020/ISESER2020_BROCHURE.pdf' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> BROCHURE</a></li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2020/ISESER2020-FINAL-PROGRAM.pdf?e14' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> FINAL PROGRAM </a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2020/ISESER2020-ABSTRACT-BOOK.pdf?e14' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> ABSTRACT BOOK </a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2020/ISESER2020-PROCEEDING-BOOK.pdf?e14' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> PROCEEDING BOOK
                                            </a></li>
                                        <li className='star'>
                                            <a href='../year/2020'><i className='fa fa-file-code-o'></i> ABSTRACTS ONLINE VIEW</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                        <div>
                            <div className='section-heading'>

                                <p className='section__meta'>2019 SYMPOSIUM</p>
                                <div className='section__desc'>
                                    <ul className='icon'>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2019/ISESER2019_BANNER.pdf' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> BANNER</a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2019/ISESER2019_BROCHURE.pdf' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> BROCHURE</a></li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2019/ISESER2019-FINAL-PROGRAM.pdf?e140' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> FINAL PROGRAM </a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2019/ISESER2019-ABSTRACT-BOOK.pdf?e140' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> ABSTRACT BOOK </a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2019/ISESER2019-PROCEEDING-BOOK.pdf?e140' target='_blank' rel='noopener noreferrer'><i className='fa  fa-file-pdf-o'></i> PROCEEDING BOOK
                                            </a></li>
                                        <li className='star'>
                                            <a href='https://photos.app.goo.gl/H5feZQmP2oVDWyHSA' target='_blank' rel='noopener noreferrer'><i className='fa fa-external-link' aria-hidden='true'></i> PHOTOS </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                        <div>
                            <div className='section-heading'>

                                <p className='section__meta'>2018 SYMPOSIUM</p>
                                <div className='section__desc'>
                                    <ul className='icon'>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2018/ISESER2018-banner.png' target='_blank'><i className='fa fa-file-image-o' aria-hidden='true'></i> BANNER</a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2018/ISESER2018_Brochure.pdf' target='_blank'><i className='fa  fa-file-pdf-o'></i> BROCHURE</a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2018/ISESER2018-FINAL-PROGRAM.pdf' target='_blank'><i className='fa  fa-file-pdf-o'></i> FINAL PROGRAM</a>
                                        </li>
                                        <li className='star'>
                                            <a href='https://api.iseser.com/doc/2018/ISESER2018-ABSTRACT-BOOK.pdf' target='_blank'><i className='fa  fa-file-pdf-o'></i> ABSTRACT BOOK</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mt-3'>
                        <div>
                            <div className='section-heading'>

                                <p className='section__meta'>2017 SYMPOSIUM</p>
                                <div className='section__desc'>
                                    <ul className='icon'>
                                        <li className='star'><a href='https://api.iseser.com/doc/2017/2nd-UCMOS.jpg' target='_blank'><i className='fa fa-file-image-o' aria-hidden='true'></i> BANNER</a></li>
                                        <li className='star'><a href='https://api.iseser.com/doc/2017/Duyuru-Konya1-5.pdf' target='_blank'><i className='fa  fa-file-pdf-o'></i> ANNOUNCEMENT</a></li>
                                        <li className='star'><a href='https://api.iseser.com/doc/2017/UCMOS_KONGRE_PROGRAMI.pdf' target='_blank'><i className='fa fa-file-pdf-o' aria-hidden='true'></i> FINAL
                                            PROGRAM</a></li>
                                        <li className='star'><a href='https://api.iseser.com/doc/2017/ISESER2017-PROCEEDING-BOOK.pdf' target='_blank'><i className='fa  fa-file-pdf-o'></i> PROCEEDING BOOK</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mt-3'>
                        <div>
                            <div className='section-heading'>
                                <p className='section__meta'>2016 SYMPOSIUM</p>
                                <div className='section__desc'>
                                    <ul className='icon'>
                                        <li className='star'><a href='https://api.iseser.com/doc/2016/afis4.jpg' target='_blank'><i className='fa fa-file-image-o' aria-hidden='true'></i> BANNER </a></li>
                                        <li className='star'><a href='https://api.iseser.com/doc/2016/Duyuru-Konya.pdf' target='_blank'><i className='fa  fa-file-pdf-o'></i> ANNOUNCEMENT</a></li>
                                        <li className='star'><a href='https://api.iseser.com/doc/2016/poster-programi-son.pdf' target='_blank'><i className='fa fa-file-pdf-o' aria-hidden='true'></i> POSTER
                                            PRESENTATION PROGRAM</a></li>
                                        <li className='star'><a href='https://api.iseser.com/doc/2016/sozlu-sunum-programi-son.pdf' target='_blank'><i className='fa fa-file-pdf-o' aria-hidden='true'></i> ORAL
                                            PRESENTATION PROGRAM </a></li>
                                        <li className='star'><a href='https://api.iseser.com/doc/2016/ISESER2016-PROCEEDING-BOOK.pdf' target='_blank'><i className='fa fa-file-pdf-o'></i> PROCEEDING BOOK</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Announcement/>
    </>;
}