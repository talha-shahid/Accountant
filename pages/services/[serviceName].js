import Accordion from "@/components/elements/Accordion";
import VideoPopup from "@/components/elements/PopupVideo";
import Layout from "@/components/layout/Layout";
import BrandSlider from "@/components/slider/BrandSlider";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export default function ServiceDetails() {


    const [data, setData] = useState(null);
    const [serviceDetails, setServiceDetails] = useState(null);

    const router = useRouter();

  
    const { serviceName } = router.query;
    console.log(serviceName)

    useEffect(() => {
      // Fetch the JSON data
      fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);


    useEffect(() => {
      if (data && serviceName) {
        const serviceData = data.find(service => service.slug === serviceName);
        setServiceDetails(serviceData);
      }
    }, [data, serviceName]);




    console.log(serviceDetails)
  


  return (
    <>
      <Layout headerStyle={6} footerStyle={1} breadcrumbTitle={serviceDetails?.name}>
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img
                        src={`${serviceDetails?.img}`}
                        alt="Individual Tax Filing"
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">
                      {serviceDetails?.name}
                      </h2>
                      {serviceDetails?.["subtitle"] && <h3>{serviceDetails?.["subtitle"]}</h3>}
                      <p>
                       {serviceDetails?.["description"] &&serviceDetails?.["description"]}
                      </p>


                      {serviceDetails?.["subtitle-two"] && <h3>{serviceDetails?.["subtitle-two"]}</h3>}
                      <p>
                       {serviceDetails?.["description-two"] &&serviceDetails?.["description-two"]}
                      </p>


                      {serviceDetails?.["subtitle-three"] && <h3>{serviceDetails?.["subtitle-three"]}</h3>}
                      <p>
                       {serviceDetails?.["description-three"] &&serviceDetails?.["description-three"]}
                      </p>

                      {serviceDetails?.["subtitle-four"] && <h3>{serviceDetails?.["subtitle-four"]}</h3>}
                      <p>
                       {serviceDetails?.["description-four"] &&serviceDetails?.["description-four"]}
                      </p>

                      {serviceDetails?.["subtitle-five"] && <h3>{serviceDetails?.["subtitle-five"]}</h3>}
                      <p>
                       {serviceDetails?.["description-five"] &&serviceDetails?.["description-five"]}
                      </p>

                      {serviceDetails?.["subtitle-six"] && <h3>{serviceDetails?.["subtitle-six"]}</h3>}
                      <p>
                       {serviceDetails?.["description-six"] &&serviceDetails?.["description-six"]}
                      </p>


                      {serviceDetails?.["subtitle-seven"] && <h3>{serviceDetails?.["subtitle-seven"]}</h3>}
                      <p>
                       {serviceDetails?.["description-seven"] &&serviceDetails?.["description-seven"]}
                      </p>

                      {/* <div className="sd-inner-wrap">
                        <div className="row align-items-center">
                          <div className="col-56">
                            <div className="content">
                              <h3 className="title-two">
                                Why Choose Our Individual Tax Filing Service?
                              </h3>
                              <p>
                                Our comprehensive approach ensures that every aspect of your financial situation is considered, resulting in optimized tax returns and peace of mind.
                              </p>
                              <ul className="list-wrap">
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Maximized Deductions and Credits
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Personalized Tax Strategies
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Year-Round Tax Support
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Audit Assistance
                                </li>
                              </ul>
                            </div>
                          </div>

                        </div>
                      </div> */}
                      {/* <p>
                        Our individual tax filing service goes beyond simple tax preparation. We offer strategic tax planning advice to help you make informed financial decisions throughout the year, potentially reducing your tax liability for future years.
                      </p> */}
                      {/* <div className="company-benefit-wrap">
                        <h2 className="title-two">Key Benefits of Our Service</h2>
                        <p>
                          When you choose Perfect Choice Tax Services for your individual tax filing needs, you're not just getting a tax preparer – you're gaining a financial ally dedicated to your fiscal well-being.
                        </p>
                        <div className="accordion-wrap-three">
                          <Accordion />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-29">
                  <aside className="services-sidebar">
                    <div className="services-cat-list mb-30">
                      <ul className="list-wrap">
                        <li >
                          <Link href="/services/indiviual-tax-filing">
                            Individual Tax Filing{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/married-filing-jointly">
                            Married Filing Jointly <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/business-schedules">
                            Business Schedules{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/corporate-tax-filing">
                            Corporate Tax Filing{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/partnership">
                            Partnership Filing{" "}
                            <i className="flaticon-right-arrow" />
                          </Link>
                        </li>

                      </ul>
                    </div>
                    <div className="services-widget">
                      <h4 className="sw-title">Get a Free Tax Consultation</h4>
                      <div className="services-widget-form">
                        <form action="#">
                          <div className="form-grp">
                            <input type="text" placeholder="Your Name" />
                          </div>
                          <div className="form-grp">
                            <input type="email" placeholder="E-mail Address" />
                          </div>
                          <div className="form-grp">
                            <textarea
                              name="message"
                              placeholder="Tell us about your tax situation"
                            />
                          </div>
                          <button type="submit" className="submit-btn">
                            Get Free Consultation
                          </button>
                        </form>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* <div className="brand-area-seven">
            <div className="container">
              <BrandSlider />
            </div>
          </div> */}
        </div>
      </Layout>
    </>
  );
}