export default function About() {
    return (
        <>
            <section className="about-area-three">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-9">
                            <div className="about-img-wrap-three">
                                <img src="/assets/img/images/aacc.jpg" alt="" data-aos="fade-down-right" data-aos-delay={0} />
                                <img src="/assets/img/images/money.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                                <div className="experience-wrap" data-aos="fade-up" data-aos-delay={300}>
                                    <h2 className="title">25 <span>Years</span></h2>
                                    <p>Of Experience in This Finance Advisory Company.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-three">
                                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                                    <span className="sub-title">Get To know US</span>
                                    <h2 className="title tg-element-title">Innovative Business Solutions for Financial Success</h2>
                                </div>
                                <p className="info-one">At our core, we're more than just number crunchers. We're financial architects, building robust fiscal foundations for businesses of all sizes. Our team combines cutting-edge accounting practices with decades of experience to craft tailored financial solutions that propel your business forward.</p>
                                <div className="about-list-two">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-arrow-right" />Comprehensive financial analysis</li>
                                        <li><i className="fas fa-arrow-right" />Strategic tax planning</li>
                                        <li><i className="fas fa-arrow-right" />Customized accounting solutions</li>
                                        <li><i className="fas fa-arrow-right" />Business growth consulting</li>
                                    </ul>
                                </div>
                                <p className="info-two">We believe in demystifying finance, transforming complex data into clear, actionable insights. Our commitment goes beyond balance sheets – we're dedicated to fostering long-term partnerships, ensuring your financial success becomes our shared victory.</p>
                                <div className="about-author-info">
                                    {/* <div className="thumb">
                                        <img src="/assets/img/images/about_author.png" alt="" />
                                    </div> */}
                                    {/* <div className="content">
                                        <h2 className="title">Raza Haider</h2>
                                        <span>CEO, Financial Architects Inc.</span>
                                    </div> */}
                                    {/* <div className="signature">
                                        <img src="/assets/img/images/signature.png" alt="" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-wrap-two">
                    <img src="/assets/img/images/h2_about_shape01.png" alt="" />
                    <img src="/assets/img/images/h2_about_shape02.png" alt="" />
                    <img src="/assets/img/images/h2_about_shape03.png" alt="" data-aos="fade-left" data-aos-delay={500} />
                </div>
            </section>
        </>
    )
}