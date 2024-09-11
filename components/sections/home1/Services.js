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
            <section className="services-area-two services-bg-two" data-background="/assets/img/bg/services_bg02.jpg" style={{paddingTop: '40px', paddingBottom: '40px'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="section-title-two mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title">What We Do For You</span>
                                <h2 className="title tg-element-title">We Offer a Range of Tax Services</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <div className="view-all-btn text-end mb-30">
                                <Link href="/services" className="btn">See All Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/* 1st Service */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                <div className="services-thumb-two">
                                    <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-images/money-2023-11-27-05-30-13-utc.jpg" alt="" />
                                    <div className="item-shape">
                                        <img  style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-images/money-2023-11-27-05-30-13-utc.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <i className="fas fa-user" />
                                    </div>
                                    <h2 className="title"><Link href="/services/indiviual-tax-filing">Individual Tax Filing</Link></h2>
                                    <p style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>Personalized tax solutions for individuals.</p>
                                </div>
                            </div>
                        </div>
                        {/* 2nd Service */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                <div className="services-thumb-two">
                                    <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-images/services/marriage.jpg" alt="" />
                                    <div className="item-shape">
                                        <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-images/services/marriage.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <i className="fas fa-users" />
                                    </div>
                                    <h2 className="title"><Link href="/services/married-filing-jointly">Married Filing Jointly</Link></h2>
                                    <p style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>Optimized tax filing for married couples.</p>
                                </div>
                            </div>
                        </div>
                        {/* 3rd Service */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                <div className="services-thumb-two">
                                    <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-images/services/personal-organizer-management-schedule-planning-2023-11-27-05-02-49-utc.jpg" alt="" />
                                    <div className="item-shape">
                                        <img style={{height: "500px", objectFit: 'cover'}} src="/assets/img/new-images/services/personal-organizer-management-schedule-planning-2023-11-27-05-02-49-utc.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <i className="fas fa-briefcase" />
                                    </div>
                                    <h2 className="title"><Link href="/services/business-schedules">Business Schedules</Link></h2>
                                    <p style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>Comprehensive business tax scheduling.</p>
                                </div>
                            </div>
                        </div>
                        {/* 4th Service */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
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
                        </div>
                        {/* 5th Service */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
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
                        </div>
                        {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(6)} onMouseLeave={() => handleToggle(6)}>
                                <div className="services-thumb-two">
                                    <img src="/assets/img/services/h2_services_img06.jpg" alt="" />
                                    <div className="item-shape">
                                        <img src="/assets/img/services/services_item_shape.png" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <i className="fas fa-plus-circle" />
                                    </div>
                                    <h2 className="title"><Link href="/services-details">Additional Services</Link></h2>
                                    <p style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>Supplementary tax support services.</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="services-item-two" onMouseEnter={() => handleToggle(7)} onMouseLeave={() => handleToggle(7)}>
                                <div className="services-thumb-two">
                                    <img src="/assets/img/services/h2_services_img07.jpg" alt="" />
                                    <div className="item-shape">
                                        <img src="/assets/img/services/services_item_shape.png" alt="" />
                                    </div>
                                </div>
                                <div className="services-content-two">
                                    <div className="icon">
                                        <i className="fas fa-ellipsis-h" />
                                    </div>
                                    <h2 className="title"><Link href="/services-details">Other Services</Link></h2>
                                    <p style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>Customized tax solutions for unique needs.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}