import CounterUp from "@/components/elements/CounterUp"

export default function Overview() {
    return (
        <>
            <section className="overview-area pt-120 pb-120">
                <div className="overview-shape" data-aos="fade-left" data-aos-delay={200} data-background="/assets/img/images/overview_shape.png" />
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="overview-img-wrap">
                                <img src="/assets/img/images/overview_img01.jpg" alt="" />
                                <img src="/assets/img/images/overview_img02.jpg" alt="" data-parallax="{&quot;x&quot; : 50 }" />
                                <img src="/assets/img/images/overview_img_shape.png" alt="" />
                                <div className="icon">
                                    <i className="flaticon-report-1" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="overview-content">
                                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                                    <span className="sub-title">Company Overview</span>
                                    <h2 className="title tg-element-title">Plan your business strategy with Our Experts</h2>
                                </div>
                                <p className="info-one">At our core, we're more than just number crunchers. We're financial architects, building robust fiscal foundations for businesses of all sizes. Our team combines cutting-edge accounting practices with decades of experience to craft tailored financial solutions that propel your business forward.</p>
                                <p className="info-two">We believe in demystifying finance, transforming complex data into clear, actionable insights. Our commitment goes beyond balance sheets – we're dedicated to fostering long-term partnerships, ensuring your financial success becomes our shared victory.</p>
                                <div className="content-bottom">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-trophy" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp count={235} />+</h2>
                                                <p>Best Award</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-rating" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp count={98} />k</h2>
                                                <p>Happy Clients</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
