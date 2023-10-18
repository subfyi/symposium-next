
import { PageHeader } from '@/layout/Breadcrumb'
import Announcement from "@/components/Announcement";

const metaTitle = 'Topics'
export const metadata = {
    title: metaTitle + ' | ISESER2023',
    openGraph: {
        title: metaTitle + ' | ISESER2023'
    }
}
export default function Page() {
    return <>
        <PageHeader title='Topics'/>
        <section className='about-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='section-heading'>
                            <h2 className='section__title'>Topics
                            </h2>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='section-heading'>
                            <div className='section__desc'>
                                <p>The contents of articles and posters may include, but are not limited to, the
                                    following topics.</p>

                                {topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}

                                <p>and suitable topics are also included regarding the efficient environmental management and use of air, water and land resources...</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Announcement/>
    </>;
}

const topics = [
    'Air Pollution',
    'Air Quality',
    'Analysis of toxic materials',
    'Art Design',
    'Artificial Intelligence',
    'Biomass, Agricultural Residues',
    'Biotechnology',
    'Climate Change',
    'Drinking Water Treatment',
    'Earthquake Environmental Effects',
    'Ecology',
    'Energy Management',
    'Environmental Applications',
    'Environmental Chemistry',
    'Environmental Education',
    'Environmental Ethics',
    'Environmental Economics',
    'Environmental Engineering',
    'Environmental Health',
    'Environmental Landscape',
    'Environmental Management',
    'Environmental Microbiology',
    'Environmental Modeling',
    'Environmental Modeling and Software',
    'Environmental Pollution',
    'Environmental Protection Topics included experimental, analytical, industrial studies',
    'Fuzzy Logic',
    'Fuzzy Logic in Environmental Sciences',
    'Gas Removal and Disposal',
    'Geographical Information',
    'Hazardous Emissions, Incineration',
    'Heavy Metal Pollution',
    'Hydrological Recycling',
    'Microbiology',
    'Municipal and Industrial Solid Wastes and Waste Disposal, Management',
    'Natural Source and Sustainability',
    'Noise Pollution and Control',
    'Pasture and Environment',
    'Pesticide Analysis',
    'Renewable Energy',
    'Renewable Energy Sources',
    'Soil Pollution',
    'Solid Waste Management',
    'Sustainability',
    'Surface and Groundwater',
    'Waste Recovery and Recycle',
    'Waste Water Pollution',
    'Waste Water Treatment',
    'Water Pollution'
]