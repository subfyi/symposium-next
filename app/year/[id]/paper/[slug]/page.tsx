import api from "@/api";
import PaperPageClient from "@/app/year/[id]/paper/[slug]/client";

export async function generateMetadata(
    {params, searchParams}:
        {
            params: { id: string, slug: string }; searchParams?:
                { [key: string]: string | string[] | undefined };
        }
) {

    const datas = await api('/api/submission/' + params.slug)
    return {
        title: datas.en_title + " | ISESER" + params.id,
    };
}

export default async function Page(
    {params, searchParams}:
        {
            params: { id: string, slug: string }; searchParams?:
                { [key: string]: string | string[] | undefined };
        }
) {

    var [datas] = await Promise.all([api('/api/submission/' + params?.slug)])


    return <PaperPageClient datas={datas} year={params?.id}/>;
}
