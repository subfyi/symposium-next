'use client';


import PageHeaderEvent from "@/components/PageHeaderEvent";
import Announcement from "@/components/Announcement";

export default function YearPageClient({orals, posters, year}: any,) {
    return <>
        <PageHeaderEvent
            title={'All Symposium'}
            titlehref='/documents-all'
            title2={'Symposium ' + year}
            titlehref2={year}
        />
        <section className='about-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div>
                            <div className='section-heading'>
                                <h2 className='section__title'>ISESER{year} SYMPOSIUM WEB VERSION (ONLINE VIEW)
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div>
                            <div className='section-heading'>
                                <h3> Oral Presentations</h3>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div>
                            <div className='section-heading'>
                                <div className='section__desc'>
                                    <table className='tg'>
                                        <thead>
                                        <tr>
                                            <th className='text-center'>

                                                #
                                            </th>
                                            <th className='text-center'>
                                                Title of Abstract
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {orals.data.map((row, i) => <>
                                            <tr key={row.id}>
                                                <td><b>O{i + 1}</b></td>
                                                <td><a className={'text-uppercase'} href={'/year/' + year + '/paper/' + (row.id)}> {row.en_title}</a></td>
                                            </tr>
                                            <tr>
                                                <td colSpan='2' className={'text-capitalize'}>
                                                    {row.authors.map((author, index) => (
                                                        <span key={index} className='text-capitalize'>
                                  {author.first_name} {author.last_name}
                                                            {index < row.authors.length - 1 && (
                                                                <span><sup>{index + 1}</sup>,{' '}</span>)}</span>
                                                    ))}
                                                </td>
                                            </tr>
                                        </>)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div>
                            <div className='section-heading'>
                                <p><br/></p>
                                <h3> Poster Presentations</h3>
                                <hr/>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div>
                            <div className='section-heading'>
                                <table className=' tg section__desc'>
                                    <thead>
                                    <tr>
                                        <th className='text-center'>
                                            #
                                        </th>
                                        <th className='text-center'>
                                            Title of Abstract
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {posters.data.map((row, i) => <>
                                        <tr key={row.id}>
                                            <td><b>P{i + 1}</b></td>
                                            <td><a className={'text-uppercase'} href={'/year/' + year + '/paper/' + (row.id)}> {row.en_title}</a></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'>
                                                {row.authors.map((author, index) => (
                                                    <span key={index} className='text-capitalize'>
                                  {author.first_name} {author.last_name}
                                                        {index < row.authors.length - 1 && (
                                                            <span><sup>{index + 1}</sup>,{' '}</span>)}</span>
                                                ))}
                                            </td>
                                        </tr>
                                    </>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Announcement/>
    </>;
}
