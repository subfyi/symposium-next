import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
    const {articles, volume, issue, article, pageTitle} = props;

    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>


                {articles && <>
                    <link rel="schema.DC" href="http://purl.org/dc/elements/1.1/"/>

                    <meta name="DC.Contributor.Sponsor" xml:lang="en" content=""/>
                    <meta name="DC.Creator.PersonalName" content="Karen Meijer-Kline"/>
                    <meta name="DC.Creator.PersonalName" content="Kate Shuttleworth"/>
                    <meta name="DC.Date.available" scheme="ISO8601" content="2019-03-13"/>
                    <meta name="DC.Date.created" scheme="ISO8601" content="2019-08-22"/>
                    <meta name="DC.Date.dateSubmitted" scheme="ISO8601" content="2019-06-26"/>
                    <meta name="DC.Date.modified" scheme="ISO8601" content="2019-06-26"/>
                    <meta name="DC.Description" xml:lang="en"
                          content="  How can OJS and OMP be used in classes to engage students in discussions around social justice in scholarly publishing? This presentation will discuss examples of course journals and book projects at Simon Fraser University (SFU) and Kwantlen Polytechnic University (KPU) which attempt to involve students in anti-colonial, anti-racist, and anti-oppressive forms of scholarship. These projects aim to be inclusive in a variety of ways: in terms of accessibility, language, content formats, and sustainability strategies. The presenters discuss the ways that OJS and OMP can be used in the classroom to develop students’ awareness of, and ability to address, social justice concerns in traditional publishing. Finally, they will explore how lessons learned from these case studies can be implemented in other courses.  "/>
                    <meta name="DC.Format" scheme="IMT" content="application/pdf"/>
                    <meta name="DC.Identifier" content="693"/>
                    <meta name="DC.Identifier.URI" content="https://conference.pkp.sfu.ca/index.php/pkp2019/pkp2019/paper/view/693"/>
                    <meta name="DC.Language" scheme="ISO639-1" content="en"/>
                    <meta name="DC.Rights"
                          content="Authors who submit to this conference agree to the following terms:   a)  Authors retain copyright over their work, while allowing the conference to place this unpublished work under a  Creative Commons Attribution License , which allows others to freely access, use, and share the work, with an acknowledgement of the work&#039;s authorship and its initial presentation at this conference.   b)  Authors are able to waive the terms of the CC license and enter into separate, additional contractual arrangements for the non-exclusive distribution and subsequent publication of this work (e.g., publish a revised version in a journal, post it to an institutional repository or publish it in a book), with an acknowledgement of its initial presentation at this conference.   c)  In addition, authors are encouraged to post and share their work online (e.g., in institutional repositories or on their website) at any point before and after the conference."/>
                    <meta name="DC.Source" content="PKP Scholarly Publishing Conference 2019"/>
                    <meta name="DC.Source.URI" content="https://conference.pkp.sfu.ca/index.php/pkp2019/pkp2019/index"/>
                    <meta name="DC.Title" content="Course Journals Supporting Social Justice: Developing Equitable Scholarly Communications Through In-Class Publishing Projects"/>
                    <meta name="DC.Type" content="Text.Proceedings"/>
                    <meta name="DC.Type.paperType" content="Community"/>
                    <meta name="gs_meta_revision" content="1.1"/>
                    <meta name="citation_conference_title" content="PKP Scholarly Publishing Conference 2019"/>
                    <meta name="citation_author" content="Karen Meijer-Kline"/>
                    <meta name="citation_author_institution" content=" Kwantlen Polytechnic University "/>
                    <meta name="citation_author" content="Kate Shuttleworth"/>
                    <meta name="citation_author_institution" content=" Simon Fraser University "/>
                    <meta name="citation_title" content="Course Journals Supporting Social Justice: Developing Equitable Scholarly Communications Through In-Class Publishing Projects"/>
                    <meta name="citation_date" content="2019/08/22"/>
                    <meta name="citation_abstract_html_url" content="https://conference.pkp.sfu.ca/index.php/pkp2019/pkp2019/paper/view/693"/>
                    <meta name="citation_pdf_url" content="https://conference.pkp.sfu.ca/index.php/pkp2019/pkp2019/paper/download/693/441"/>

                    <link
                        rel="alternate"
                        hrefLang="tr"
                        href={"/volume/" + article.volume + "/issue/" + article.issue + "/article/" + article.order_num}
                        id="link-alternate-tr"
                    />
                    <link
                        rel="alternate"
                        hrefLang="en"
                        href={"/volume/" + article.volume + "/issue/" + article.issue + "/article/" + article.order_num}
                        id="link-alternate-en"
                    />
                    <base href="/"/>
                    <meta name="generator" content="ucbad.com"/>
                    <link rel="schema.DC" href="http://purl.org/dc/elements/1.1/"/>
                    <meta content="2018-01-02" property="article:modified_time"/>
                    <meta content="article" property="og:type"/>
                    <meta
                        content={articles.tr_title}
                        property="og:title"
                    />
                    {articles.files.map((file, index) =>
                        <meta content={file.file} property="og:url"/>
                    )}

                    <meta name="DC.Title" content={articles.tr_title}/>
                    <meta name="DC.Description" content={articles.tr_abstract}/>
                    <meta name="DC.Source" content="Ulusal Çevre Bilimleri Araştırma Dergisi"/>
                    <meta name="DC.Source.Issue" content={issue}/>
                    <meta name="DC.Source.URI" content="https://ucbad.com/"/>
                    <meta name="DC.Source.Volume" content={volume}/>
                    <meta name="DC.Type" content="Text.Serial.Journal"/>
                    <meta name="DC.Type.articleType" content="Makaleler"/>

                    {articles.authors.map((authorin, index) =>
                        <meta name="DC.Creator.PersonalName"
                              content={authorin.author.first_name + " " + (authorin.author.middle_name && (authorin.author.middle_name + " ")) + authorin.author.last_name}/>
                    )}

                    <meta name="DC.Identifier" content={446066}/>
                    <meta name="DC.Identifier.pageNumber" content={articles.first_page + "-" + articles.last_page}/>
                    <meta
                        name="DC.Identifier.URI"
                        content={"https://ucbad.com/volume/" + article.volume + "/issue/" + article.issue + "/article/" + article.order_num}
                    />
                    <meta name="DC.Language" content='tr scheme="ISO639-1"'/>
                    <meta
                        name="citation_journal_title"
                        content="Ulusal Çevre Bilimleri Araştırma Dergisi"
                    />

                    {articles.authors.map((authorin, index) =>
                        <meta name="citation_author"
                              content={authorin.author.first_name + " " + (authorin.author.middle_name && (authorin.author.middle_name + " ")) + authorin.author.last_name}/>
                    )}
                    <meta name="citation_title" content={articles.tr_title}/>
                    <meta name="citation_publication_date" content={moment(articles.pubdate).format("DD-MM-YYYY")}/>
                    <meta name="citation_volume" content={volume}/>
                    <meta name="citation_issue" content={issue}/>
                    <meta name="citation_firstpage" content={articles.first_page}/>
                    <meta name="citation_lastpage" content={articles.last_page}/>
                    <meta
                        name="citation_abstract_html_url"
                        content={"/volume/" + article.volume + "/issue/" + article.issue + "/article/" + article.order_num}
                    />
                    <meta name="citation_language" content="tr"/>
                    <meta
                        name="citation_keywords"
                        content={(articles.keywords).filter(a => a.keyword.type == "tr").map(a => <>{a.keyword.value}, </>)}
                    />

                    {articles.files.map((file, index) =>
                        <meta name="citation_pdf_url" content={file.file} />
                    )}

                    <meta
                        id="meta_stats_updated_at"
                        name="stats_updated_at"
                        content="2021-08-05T08:23:07Z"
                    />

                </>}


                <link rel="icon" href="/images/favicon.png"/>
                <link rel="stylesheet" href="/plugins/bootstrap/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/font-awesome.css"/>
                <link rel="stylesheet" href="/css/animate.min.css"/>
                <link rel="stylesheet" href="/css/fontello.css"/>
                <link rel="stylesheet" href="/plugins/accordion.css"/>
                <link rel="stylesheet" href="/plugins/glightbox.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="/css/responsive.css"/>

            </Head>

            {props.children}


            <script src="/plugins/accordion.min.js"></script>
            <script src="/plugins/glightbox.min.js"></script>

        </div>
    )
}
export default Layout;
