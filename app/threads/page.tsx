
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

                                <ul className="select2-results__options" role="listbox" id="select2-subject_selector-results" aria-expanded="true" aria-hidden="false"><li className="select2-results__option select2-results__option--highlighted" role="option" aria-selected="false" data-select2-id="23">Built Environment and Design &gt; Urban and Regional Planning &gt; City and Regional Planning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="24">Built Environment and Design &gt; Urban and Regional Planning &gt; Community Planning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="25">Built Environment and Design &gt; Urban and Regional Planning &gt; History and Theory of the Built Environment</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="26">Built Environment and Design &gt; Urban and Regional Planning &gt; Housing Markets, Development and Management</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="27">Built Environment and Design &gt; Urban and Regional Planning &gt; Land Use and Environmental Planning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="28">Built Environment and Design &gt; Urban and Regional Planning &gt; Participation and Governance</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="29">Built Environment and Design &gt; Urban and Regional Planning &gt; Public Participation and Community Engagement</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="30">Built Environment and Design &gt; Urban and Regional Planning &gt; Regional Analysis and Development</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="31">Built Environment and Design &gt; Urban and Regional Planning &gt; Regional Analysis and Planning in Turkiye</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="32">Built Environment and Design &gt; Urban and Regional Planning &gt; Regulatory Planning and Development Assessment</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="33">Built Environment and Design &gt; Urban and Regional Planning &gt; Strategic, Metropolitan and Regional Planning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="34">Built Environment and Design &gt; Urban and Regional Planning &gt; Transport Planning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="35">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban Aesthetics</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="36">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban Analysis and Development</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="37">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban Design</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="38">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban Field Management</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="39">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban Geography in Regional Planning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="40">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban History</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="41">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban Informatics</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="42">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban Morphology</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="43">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban Planning and Health</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="44">Built Environment and Design &gt; Urban and Regional Planning &gt; Urban and Regional Planning (Other)</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="45">Economics &gt; Microeconomics &gt; Environmental Economy</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="46">Economics &gt; Microeconomics &gt; Microeconomics (Other)</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="47">Engineering &gt; Energy Systems Engineering &gt; Biomass Energy Systems</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="48">Engineering &gt; Energy Systems Engineering &gt; Energy</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="49">Engineering &gt; Energy Systems Engineering &gt; Geothermal Energy Systems</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="50">Engineering &gt; Energy Systems Engineering &gt; Hydroelectric Energy Systems</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="51">Engineering &gt; Energy Systems Engineering &gt; Installation Technologies</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="52">Engineering &gt; Energy Systems Engineering &gt; Nuclear Energy Systems</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="53">Engineering &gt; Energy Systems Engineering &gt; Renewable Energy Resources </li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="54">Engineering &gt; Energy Systems Engineering &gt; Solar Energy Systems</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="55">Engineering &gt; Energy Systems Engineering &gt; Thermal Power Systems</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="56">Engineering &gt; Energy Systems Engineering &gt; Wind Energy Systems</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="57">Engineering &gt; Energy Systems Engineering &gt; Energy Systems Engineering (Other)</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="58">Engineering &gt; Environmental Engineering &gt; Air Pollution Modelling and Control</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="59">Engineering &gt; Environmental Engineering &gt; Air Pollution and Gas Cleaning </li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="60">Engineering &gt; Environmental Engineering &gt; Clean Production Technologies</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="61">Engineering &gt; Environmental Engineering &gt; Environmental Pollution and Prevention</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="62">Engineering &gt; Environmental Engineering &gt; Environmentally Sustainable Engineering</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="63">Engineering &gt; Environmental Engineering &gt; Global Environmental Engineering</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="64">Engineering &gt; Environmental Engineering &gt; Health and Ecological Risk Assessment</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="65">Engineering &gt; Environmental Engineering &gt; Life Cycle Assessment and Industrial Ecology</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="66">Engineering &gt; Environmental Engineering &gt; Soil Pollution and Control</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="67">Engineering &gt; Environmental Engineering &gt; Solid and Hazardous Wastes</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="68">Engineering &gt; Environmental Engineering &gt; Treatment Facility Design</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="69">Engineering &gt; Environmental Engineering &gt; Waste Management, Reduction, Reuse and Recycling</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="70">Engineering &gt; Environmental Engineering &gt; Environmental Engineering (Other)</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="71">Environmental Sciences &gt; Climate Change-Impact and Adaptation &gt; Carbon Sequestration Science</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="72">Environmental Sciences &gt; Climate Change-Impact and Adaptation &gt; Ecological Impacts of Climate Change and Ecological Adaptation</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="73">Environmental Sciences &gt; Climate Change-Impact and Adaptation &gt; Human Impacts of Climate Change and Human Adaptation</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="74">Environmental Sciences &gt; Climate Change-Impact and Adaptation &gt; Climate Change Impacts and Adaptation (Other)</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="75">Environmental Sciences &gt; Environmental Management &gt; Conservation and Biodiversity</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="76">Environmental Sciences &gt; Environmental Management &gt; Environmental Assessment and Monitoring</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="77">Environmental Sciences &gt; Environmental Management &gt; Environmental Education and Extension</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="78">Environmental Sciences &gt; Environmental Management &gt; Environmental Rehabilitation and Restoration</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="79">Environmental Sciences &gt; Environmental Management &gt; Natural Resource Management</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="80">Environmental Sciences &gt; Environmental Management &gt; Wildlife and Habitat Management</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="81">Environmental Sciences &gt; Environmental Management &gt; Environmental Management (Other)</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="82">Information and Computing Sciences &gt; Artificial Intelligence &gt; Artificial Life and Complex Adaptive Systems</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="83">Information and Computing Sciences &gt; Artificial Intelligence &gt; Artificial Reality</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="84">Information and Computing Sciences &gt; Artificial Intelligence &gt; Autonomous Agents and Multiagent Systems</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="85">Information and Computing Sciences &gt; Artificial Intelligence &gt; Evolutionary Computation</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="86">Information and Computing Sciences &gt; Artificial Intelligence &gt; Fuzzy Computation</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="87">Information and Computing Sciences &gt; Artificial Intelligence &gt; Intelligent Robotics</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="88">Information and Computing Sciences &gt; Artificial Intelligence &gt; Knowledge Representation and Reasoning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="89">Information and Computing Sciences &gt; Artificial Intelligence &gt; Modelling and Simulation</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="90">Information and Computing Sciences &gt; Artificial Intelligence &gt; Natural Language Processing</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="91">Information and Computing Sciences &gt; Artificial Intelligence &gt; Planning and Decision Making</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="92">Information and Computing Sciences &gt; Artificial Intelligence &gt; Satisfiability and Optimisation</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="93">Information and Computing Sciences &gt; Artificial Intelligence &gt; Speech Production</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="94">Information and Computing Sciences &gt; Artificial Intelligence &gt; Speech Recognition</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="95">Information and Computing Sciences &gt; Artificial Intelligence &gt; Artificial Intelligence (Other)</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="96">Information and Computing Sciences &gt; Machine Learning &gt; Adversarial Machine Learning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="97">Information and Computing Sciences &gt; Machine Learning &gt; Context Learning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="98">Information and Computing Sciences &gt; Machine Learning &gt; Deep Learning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="99">Information and Computing Sciences &gt; Machine Learning &gt; Machine Vision </li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="100">Information and Computing Sciences &gt; Machine Learning &gt; Neural Networks</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="101">Information and Computing Sciences &gt; Machine Learning &gt; Reinforcement Learning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="102">Information and Computing Sciences &gt; Machine Learning &gt; Semi- and Unsupervised Learning</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="103">Information and Computing Sciences &gt; Machine Learning &gt; Machine Learning (Other)</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="104">Law and Legal Studies &gt; Environmental and Resources Law &gt; Environmental Law</li><li className="select2-results__option" role="option" aria-selected="false" data-select2-id="105">Law and Legal Studies &gt; Environmental and Resources Law &gt; Environmental and Resources Law (Other)</li></ul>

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