import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'

export default function Services() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
        <Layout headerStyle={2} footerStyle={2}>
            <section className="services-area-two services-bg-two" data-background="/assets/img/bg/services_bg02.jpg" style={{paddingTop: '140px', paddingBottom: '40px'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="section-title-two mb-60 tg-heading-subheading animation-style3">
                                {/* <span className="sub-title">What We Do For You</span> */}
                                <h2 className="title tg-element-title">Where's My Refund?</h2>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-4">
                            <div className="view-all-btn text-end mb-30">
                                <Link href="/services" className="btn">See All Services</Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="row justify-content-center">
                        {/* 1st Service */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                <div className="services-thumb-two">
                                    <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-york.jpg" alt="" />
                                    <div className="item-shape">
                                        <img  style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-york.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    {/* <div className="icon">
                                        <i className="fas fa-user" />
                                    </div> */}
                                    <h2 className="title"><Link href="https://www8.tax.ny.gov/PRIS/prisStart">New York</Link></h2>
                                    {/* <p style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>Personalized tax solutions for individuals.</p> */}
                                </div>
                            </div>
                        </div>
                        {/* 2nd Service */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                <div className="services-thumb-two">
                                    <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/illinois.jpg" alt="" />
                                    <div className="item-shape">
                                        <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/illinois.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    {/* <div className="icon">
                                        <i className="fas fa-users" />
                                    </div> */}
                                    <h2 className="title"><Link href="https://mytax.illinois.gov/_/"> Illinois</Link></h2>
                                    {/* <p style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>Optimized tax filing for married couples.</p> */}
                                </div>
                            </div>
                        </div>
                        {/* 3rd Service */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                <div className="services-thumb-two">
                                    <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-jersey.jpg" alt="" />
                                    <div className="item-shape">
                                        <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-jersey.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    {/* <div className="icon">
                                        <i className="fas fa-briefcase" />
                                    </div> */}
                                    <h2 className="title"><Link href="https://www20.state.nj.us/TYTR_TGI_INQ/jsp/prompt.jsp">New Jersey</Link></h2>
                                    {/* <p style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>Comprehensive business tax scheduling.</p> */}
                                </div>
                            </div>
                        </div>


                                                {/* 3rd Service */}
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                <div className="services-thumb-two">
                                    <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-jersey.jpg" alt="" />
                                    <div className="item-shape">
                                        <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-jersey.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    {/* <div className="icon">
                                        <i className="fas fa-briefcase" />
                                    </div> */}
                                    <h2 className="title"><Link href="https://www.irs.gov/refunds">Federal</Link></h2>
                                    {/* <p style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>Comprehensive business tax scheduling.</p> */}
                                </div>
                            </div>
                        </div>
                        {/* 4th Service */}
                        {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                <div className="services-thumb-two">
                                    <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/services/taxes.jpg" alt="" />
                                    <div className="item-shape">
                                        <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/services/taxes.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <i className="fas fa-building" />
                                    </div>
                                    <h2 className="title"><Link href="/services/corporate-tax-filing">Corporate Tax Filing</Link></h2>
                                    <p style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>Expert corporate tax solutions.</p>
                                </div>
                            </div>
                        </div> */}
                        {/* 5th Service */}
                        {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(5)} onMouseLeave={() => handleToggle(5)}>
                                <div className="services-thumb-two">
                                    <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-images/services/form.jpg" alt="" />
                                    <div className="item-shape">
                                        <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-images/services/form.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <i className="fas fa-handshake" />
                                    </div>
                                    <h2 className="title"><Link href="/services/partnership">Partnership Filing (Form 1065)</Link></h2>
                                    <p style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>Specialized partnership tax filing.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </Layout>
        </>
    )
}