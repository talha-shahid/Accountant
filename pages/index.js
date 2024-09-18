import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
// import Banner from "@/components/sections/home1/Banner"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home1/Blog"
import Brand from "@/components/sections/home1/Brand"
import Choose from "@/components/sections/home1/Choose"
import Cta from "@/components/sections/home1/Cta"
import Features from "@/components/sections/home1/Features"
import Overview from "@/components/sections/home1/Overview"
import Pricing from "@/components/sections/home1/Pricing"
import Project from "@/components/sections/home1/Project"
import Request from "@/components/sections/home1/Request"
import Services from "@/components/sections/home1/Services"
import Team from "@/components/sections/home1/Team"
import Testimonial from "@/components/sections/home1/Testimonial"

export default function Home1() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Features />


                <Services />

                <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px', paddingBottom: '40px' }}>
                    <div className="col-lg-8 ">
                        <div className="about-content-three">
                            <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                                <h2 className="title tg-element-title">Helpful Links</h2>
                            </div>
                            <div className="about-list-two">
                                <ul className="list-wrap">


                                <li>
                                        <i className="fas fa-arrow-right" />
                                        Calculate your Tax -&nbsp;<a href="https://apps.irs.gov/app/tax-withholding-estimator">Tax Calculator</a>
                                    </li>

                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        Appointment with U.S.C.I.S. –&nbsp;<a href="https://my.uscis.gov/en/appointment/v2">make an appointment.</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        Check your case&nbsp;<a href="https://egov.uscis.gov/casestatus/landing.do">online with U.S.C.I.S.</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        <div>What to do if your case is<a href="https://egov.uscis.gov/e-request/displayONPTForm.do?entryPoint=init&sroPageType=onpt">&nbsp;outside normal processing time</a>, there is a<a href="https://egov.uscis.gov/e-request/displayTypoForm.do?entryPoint=init&sroPageType=typoError">&nbsp;typographical error</a>, you&nbsp;<a href="https://egov.uscis.gov/e-request/displayNDNForm.do?entryPoint=init&sroPageType=ndn">failed to get a notice from U.S.C.I.S.</a>, you&nbsp;<a href="https://egov.uscis.gov/e-request/displayNDDForm.do?entryPoint=init&sroPageType=ndd">did not get a document from U.S.C.I.S.</a>, or you<a href="https://egov.uscis.gov/e-request/displayNDCForm.do?entryPoint=init&sroPageType=ndc">&nbsp;did not receive your card</a>.</div>
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        <div>
                                        How to<a href="https://egov.uscis.gov/coa/displayCOAInitForm.do">&nbsp;do a change of address</a>&nbsp;with U.S.C.I.S.
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        <div>
                                        How to&nbsp;<a href="https://my.uscis.gov/findadoctor">find a doctor for your immigration medical</a>.</div>
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        <div>
                                        How to&nbsp;<a href="https://locator.ice.gov/odls/#/index">locate a friend or relative who has been picked up by ICE</a>.
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        <div>
                                        How to&nbsp;<a href="https://www.uscis.gov/feecalculator">calculate your filing fees</a>.</div>
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        <div>
                                        EB-5 Immigrant Investor Regional Centers –&nbsp;<a href="https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-fifth-preference-eb-5/eb-5-immigrant-investor-regional-centers/approved-eb-5-immigrant-investor-regional-centers">Check list of registered EB-5 regional Centers with U.S.C.I.S.</a></div>
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        <div>
                                        STEM Designated Degree Programs –&nbsp;<a href="https://www.ice.gov/doclib/sevis/pdf/stemList2024.pdf">For STEM List for F-1 Students eligible for 24 months OPT Extension.</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fas fa-arrow-right" />
                                        <div>
                                        ICE Portal –&nbsp;<a href="https://portal.ice.gov/home">This site is for noncitizens placed in removal proceedings</a> and contains essential information to complete immigration tasks.
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>


                <About />
                {/* <Brand /> */}

                {/* <Overview /> */}
                {/* <Cta /> */}
                {/* <Choose /> */}
                {/* <Project /> */}
                {/* <Team /> */}
                {/* <Testimonial /> */}
                {/* <Pricing /> */}
                {/* <Blog /> */}
                <Request />
            </Layout>
        </>
    )
}