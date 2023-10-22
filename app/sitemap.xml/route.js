import {  getServerSideSitemapIndex } from 'next-sitemap'

export const years = ['2023','2021','2020','2019'];
const endpoint = "https://iseser.com/";

export async function GET(request) {

    var year = years.map(a => `${endpoint}sitemap/${a}/1/sitemap.xml`);

    return getServerSideSitemapIndex([
        `${endpoint}sitemap/global/1/sitemap.xml`,
        `${endpoint}sitemap/document/1/sitemap.xml`,
        ...year
    ]);
}
