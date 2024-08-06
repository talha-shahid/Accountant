// import CounterUp from "@/components/elements/CounterUp"
// import SocialToggle from "@/components/elements/SocialToggle"
// import Layout from "@/components/layout/Layout"
// import BrandSlider from "@/components/slider/BrandSlider"
// import TestimonialSlider1 from "@/components/slider/TestimonialSlider1"
// import Link from "next/link"

// export default function About() {
//     return (
//         <>
//             <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="About Us">
//                 <div>
//                 <section className="about-area-seven pt-120 pb-120">
//                     <div className="container">
//                         <div className="row align-items-center justify-content-center">
//                             <div className="col-lg-6 col-md-9 order-0 order-lg-2">
//                                 <div className="about-img-seven-wrap">
//                                     <img src="/assets/img/images/inner_about_img01.jpg" alt="" data-aos="fade-right" data-aos-delay={0} />
//                                     <img src="/assets/img/images/inner_about_img02.jpg" alt="" data-aos="fade-up" data-aos-delay={300} />
//                                     <img src="/assets/img/images/inner_about_shape01.png" alt="" className="shape" data-aos="zoom-in" data-aos-delay={500} />
//                                     <div className="experience-wrap" data-aos="fade-left" data-aos-delay={0}>
//                                         <h2 className="title">25</h2>
//                                         <p>Years Of Experience</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div className="about-content-seven">
//                                     <div className="section-title mb-30">
//                                         <span className="sub-title">Get To know US</span>
//                                         <h2 className="title">Innovative Business Solutions for Financial Success</h2>
//                                     </div>
//                                     <p>At our core, we're more than just number crunchers. We're financial architects, building robust fiscal foundations for businesses of all sizes. Our team combines cutting-edge accounting practices with decades of experience to craft tailored financial solutions that propel your business forward.</p>
//                                     <div className="success-wrap-two">
//                                         <ul className="list-wrap">
//                                             <li>
//                                                 <div className="icon">
//                                                     <i className="flaticon-investment" />
//                                                 </div>
//                                                 <div className="content">
//                                                     <h2 className="count"><CounterUp count={152} />K</h2>
//                                                     <p>Total revenue</p>
//                                                 </div>
//                                             </li>
//                                             <li>
//                                                 <div className="icon">
//                                                     <i className="flaticon-business-presentation" />
//                                                 </div>
//                                                 <div className="content">
//                                                     <h2 className="count"><CounterUp count={95} />%</h2>
//                                                     <p>Increase in sales</p>
//                                                 </div>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <p className="info-two">We believe in demystifying finance, transforming complex data into clear, actionable insights. Our commitment goes beyond balance sheets – we're dedicated to fostering long-term partnerships, ensuring your financial success becomes our shared victory.</p>
//                                     <Link href="/contact" className="btn btn-three">Contact With Us</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                     {/* about-area-end */}
//                     {/* features-area */}
//                     {/* <section className="features-area-five features-bg" data-background="/assets/img/bg/features_bg.jpg">
//                         <div className="container">
//                             <div className="row justify-content-center">
//                                 <div className="col-xl-5 col-lg-6">
//                                     <div className="section-title text-center mb-50">
//                                         <span className="sub-title">Core Features</span>
//                                         <h2 className="title">Amazing Features For Business Solutions</h2>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row justify-content-center">
//                                 <div className="col-lg-4 col-md-6">
//                                     <div className="features-item">
//                                         <div className="features-content">
//                                             <div className="content-top">
//                                                 <div className="icon">
//                                                     <i className="flaticon-puzzle-piece" />
//                                                 </div>
//                                                 <h2 className="title">Quality Services</h2>
//                                             </div>
//                                             <p>eiusmod temporincididunt ut labore magna aliqua Quisery.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6">
//                                     <div className="features-item">
//                                         <div className="features-content">
//                                             <div className="content-top">
//                                                 <div className="icon">
//                                                     <i className="flaticon-inspiration" />
//                                                 </div>
//                                                 <h2 className="title">Innovation Ideas</h2>
//                                             </div>
//                                             <p>eiusmod temporincididunt ut labore magna aliqua Quisery.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6">
//                                     <div className="features-item">
//                                         <div className="features-content">
//                                             <div className="content-top">
//                                                 <div className="icon">
//                                                     <i className="flaticon-profit" />
//                                                 </div>
//                                                 <h2 className="title">Business Growth</h2>
//                                             </div>
//                                             <p>eiusmod temporincididunt ut labore magna aliqua Quisery.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="features-shape-wrap">
//                             <img src="/assets/img/images/features_shape01.png" alt="" />
//                             <img src="/assets/img/images/features_shape02.png" alt="" />
//                         </div>
//                     </section> */}
//                     {/* features-area-end */}
//                     {/* team-area */}
//                     <section className="team-area-three">
//                         <div className="container">
//                             <div className="row justify-content-center">
//                                 <div className="col-lg-6">
//                                     <div className="section-title-two text-center mb-50">
//                                         <span className="sub-title">Expert People</span>
//                                         <h2 className="title">Dedicated Team Members</h2>
//                                         <p>Meet the number-crunching wizards who turn financial puzzles into picture-perfect solutions, ensuring your business always adds up to success.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row justify-content-center">
//                                 <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
//                                     <div className="team-item-three">
//                                         <div className="team-thumb-three">
//                                             <img src="/assets/img/team/h3_team_img01.png" alt="" />
//                                             <SocialToggle />
//                                         </div>
//                                         <div className="team-content-three">
//                                             <h4 className="title"><Link href="/team-details">Brooklyn Simmons</Link></h4>
//                                             <span>Finance Advisor</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
//                                     <div className="team-item-three">
//                                         <div className="team-thumb-three">
//                                             <img src="/assets/img/team/h3_team_img02.png" alt="" />
//                                             <SocialToggle />
//                                         </div>
//                                         <div className="team-content-three">
//                                             <h4 className="title"><Link href="/team-details">Jenny Wilson</Link></h4>
//                                             <span>Finance Advisor</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
//                                     <div className="team-item-three">
//                                         <div className="team-thumb-three">
//                                             <img src="/assets/img/team/h3_team_img03.png" alt="" />
//                                             <SocialToggle />
//                                         </div>
//                                         <div className="team-content-three">
//                                             <h4 className="title"><Link href="/team-details">Ronald Richards</Link></h4>
//                                             <span>Finance Advisor</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
//                                     <div className="team-item-three">
//                                         <div className="team-thumb-three">
//                                             <img src="/assets/img/team/h3_team_img04.png" alt="" />
//                                             <SocialToggle />
//                                         </div>
//                                         <div className="team-content-three">
//                                             <h4 className="title"><Link href="/team-details">Marvin McKinney</Link></h4>
//                                             <span>Finance Advisor</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                     {/* team-area-end */}
//                     {/* testimonial-area */}
//                     <section className="testimonial-area testimonial-bg" data-background="/assets/img/bg/testimonial_bg.jpg">
//                         <div className="container">
//                             <div className="row align-items-center justify-content-center">
//                                 <div className="col-lg-5 col-md-8">
//                                     <div className="testimonial-img">
//                                         <img src="/assets/img/images/testimonial_img.jpg" alt="" />
//                                         <div className="review-wrap">
//                                             <img src="/assets/img/icons/rating.svg" alt="" />
//                                             <div className="content">
//                                                 <h2 className="title">15k</h2>
//                                                 <p>Positive <br /> Review</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-7">
//                                     <div className="testimonial-item-wrap">
//                                         <TestimonialSlider1 />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                     {/* testimonial-area-end */}
//                     {/* brand-area */}
//                     <div className="brand-area-six pt-80 pb-80">
//                         <div className="container">
//                             <BrandSlider />
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//         </>
//     )
// }
import CounterUp from "@/components/elements/CounterUp";
import SocialToggle from "@/components/elements/SocialToggle";
import Layout from "@/components/layout/Layout";
import BrandSlider from "@/components/slider/BrandSlider";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="About Us">
        <div>
          <section className="about-area-seven pt-120 pb-120">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                  <div className="about-img-seven-wrap">
                    {/* <img
                      src="/assets/img/images/inner_about_img01.jpg"
                      alt=""
                      data-aos="fade-right"
                      data-aos-delay={0}
                    /> */}


                    <img
                    style={{height: '350px', objectFit: 'cover'}}
                      src="/assets/img/new-images/business-2023-11-27-05-22-01-utc.jpg"
                      alt=""
                      data-aos="fade-right"
                      data-aos-delay={0}
                    />

{/* 
                    <img
                      src="/assets/img/images/inner_about_img02.jpg"
                      alt=""
                      data-aos="fade-up"
                      data-aos-delay={300}
                    /> */}

                    
                    <img
                    style={{height: '200px', objectFit: 'cover'}}
                      src="/assets/img/new-images/close-up-shot-of-cash-and-wedding-rings-on-wooden-2023-11-27-05-05-58-utc.jpg"
                      alt=""
                      data-aos="fade-up"
                      data-aos-delay={300}
                    />


                    <img
                      src="/assets/img/images/inner_about_shape01.png"
                      alt=""
                      className="shape"
                      data-aos="zoom-in"
                      data-aos-delay={500}
                    />
                    <div
                      className="experience-wrap"
                      data-aos="fade-left"
                      data-aos-delay={0}
                    >
                      <h2 className="title">25</h2>
                      <p>Years Of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content-seven">
                    <div className="section-title mb-30">
                      <span className="sub-title">Who We Are</span>
                      <h2 className="title">Perfect Choice Tax Services</h2>
                    </div>
                    <p>
                      We are a team of experienced tax professionals committed
                      to assisting individuals and businesses in New York with
                      their tax needs. With a deep understanding of tax laws and
                      a passion for helping our clients optimize their financial
                      positions, we strive to be the trusted partner throughout
                      your tax journey.
                    </p>
                    <div className="success-wrap-two">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-investment" />
                          </div>
                          <div className="content">
                            <h2 className="count">
                              <CounterUp count={10000} />+
                            </h2>
                            <p>Satisfied Clients</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-business-presentation" />
                          </div>
                          <div className="content">
                            <h2 className="count">
                              <CounterUp count={25} />
                            </h2>
                            <p>Years of Experience</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <Link href="/contact" className="btn btn-three">
                      Contact With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="features-area-five features-bg"
            data-background="/assets/img/bg/features_bg.jpg"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center mb-50">
                    <span className="sub-title">Our Mission</span>
                    <h2 className="title">
                      Simplifying Taxes, Maximizing Returns
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="features-item text-center">
                    <div className="features-content">
                      <p>
                        At Perfect Choice Tax Services, our mission is to
                        simplify the tax process and help our clients optimize
                        their tax positions through tailored solutions. We are
                        dedicated to providing exceptional service and
                        personalized guidance to ensure that our clients make
                        informed decisions with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-area-five pt-120 pb-90">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center mb-50">
                    <span className="sub-title">What We Do</span>
                    <h2 className="title">Comprehensive Tax Services</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-10">
                  <div className="services-item">
                    <div className="services-content">
                      <div className="content-top">
                        <div className="icon p-3">
                          <i className="flaticon-briefcase" />
                        </div>
                        <h2 className="title">Tax Preparation</h2>
                      </div>
                      <p>
                        Accurate and timely preparation of individual and
                        business tax returns.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-10">
                  <div className="services-item">
                    <div className="services-content">
                      <div className="content-top">
                        <div className="icon  p-3">
                          <i className="flaticon-taxes" />
                        </div>
                        <h2 className="title">Tax Planning</h2>
                      </div>
                      <p>
                        Strategic planning to minimize tax liabilities and
                        maximize deductions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-10">
                  <div className="services-item">
                    <div className="services-content">
                      <div className="content-top">
                        <div className="icon  p-3">
                          <i className="flaticon-money" />
                        </div>
                        <h2 className="title">IRS Representation</h2>
                      </div>
                      <p>
                        Expert representation in IRS audits and resolution of
                        tax issues.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-10">
                  <div className="services-item">
                    <div className="services-content">
                      <div className="content-top">
                        <div className="icon  p-3">
                          <i className="flaticon-investment" />
                        </div>
                        <h2 className="title">Business Advisory</h2>
                      </div>
                      <p>
                        Comprehensive tax advice for businesses to support
                        growth and compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
  className="choose-area-two pb-120"
  style={{ backgroundColor: "#f5f5f5", color: "#333" }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-7">
        <div className="section-title text-center mb-50">
          <span className="sub-title" style={{ color: "#007bff" }}>
            Why Choose Us
          </span>
          <h2 className="title" style={{ color: "#333" }}>
            Your Trusted Tax Partner
          </h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10" style={{ marginBottom: "20px" }}>
        <div
          className="choose-item-two"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <div className="choose-icon-two">
            <i
              className="flaticon-briefcase"
              style={{ color: "#007bff", fontSize: "40px" }}
            ></i>
          </div>
          <div className="choose-content-two">
            <h4 className="title" style={{ color: "#333" }}>
              Expertise and Experience
            </h4>
            <p style={{ color: "#666" }}>
              Our team has extensive experience in tax law and a deep
              understanding of the New York tax landscape.
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10" style={{ marginBottom: "20px" }}>
        <div
          className="choose-item-two"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <div className="choose-icon-two">
            <i
              className="flaticon-user"
              style={{
                color: "#007bff",
                fontSize: "30px",
                transform: "scaleX(0.8)",
              }}
            ></i>
          </div>
          <div className="choose-content-two">
            <h4 className="title" style={{ color: "#333" }}>
              Personalized Approach
            </h4>
            <p style={{ color: "#666" }}>
              We take the time to understand your unique tax situation
              and provide tailored solutions that align with your
              financial goals.
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10" style={{ marginBottom: "20px" }}>
        <div
          className="choose-item-two"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <div className="choose-icon-two">
            <i
              className="flaticon-trophy"
              style={{ color: "#007bff", fontSize: "40px" }}
            ></i>
          </div>
          <div className="choose-content-two">
            <h4 className="title" style={{ color: "#333" }}>
              Year-Round Support
            </h4>
            <p style={{ color: "#666" }}>
              We offer continuous support and guidance to help you
              navigate tax-related challenges throughout the year.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


          <section className="about-area pt-120 pb-120">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                  <div className="about-img-seven-wrap">
                    <img
                      src="/assets/img/images/inner_about_img03.jpg"
                      alt=""
                      data-aos="fade-right"
                      data-aos-delay={0}
                    />
                    <img
                      src="/assets/img/images/inner_about_img04.jpg"
                      alt=""
                      data-aos="fade-up"
                      data-aos-delay={300}
                    />
                    <img
                      src="/assets/img/images/inner_about_shape01.png"
                      alt=""
                      className="shape"
                      data-aos="zoom-in"
                      data-aos-delay={500}
                    />
                    {/* <div
                      className="experience-wrap"
                      data-aos="fade-left"
                      data-aos-delay={0}
                    >
                      <h2 className="title">25</h2>
                      <p>Years Of Experience</p>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content-five">
                    <div className="section-title mb-30">
                      <span className="sub-title">Our Values</span>
                      <h2 className="title">Guided by Our Core Principles</h2>
                    </div>
                    <ul className="about-list">
                      <li>
                        <i className="fas fa-check"></i> Integrity: We uphold
                        the highest ethical standards in all our dealings.
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Expertise: We
                        continuously update our knowledge to provide expert tax
                        advice.
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Client-Centric: Our
                        clients' best interests are at the heart of everything
                        we do.
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Innovation: We leverage
                        technology to enhance our services and client
                        experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section
            className="testimonial-area testimonial-bg"
            style={{
              backgroundImage: "url('/assets/img/bg/testimonial_bg.jpg')",
            }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-5 col-md-8">
                  <div className="testimonial-img">
                    <img src="/assets/img/images/testimonial_img.jpg" alt="" />
                    <div className="review-wrap">
                      <img src="/assets/img/icons/rating.svg" alt="" />
                      <div className="content">
                        <h2 className="title">15k</h2>
                        <p>
                          Positive <br /> Review
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="testimonial-item-wrap">
                    <TestimonialSlider1 />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="brand-area-six pt-80 pb-80">
            <div className="container">
              <BrandSlider />
            </div>
          </div> */}
        </div>
      </Layout>
    </>
  );
};

export default About;
