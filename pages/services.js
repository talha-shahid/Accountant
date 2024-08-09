import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Our Services">
        <section
          className="services-area-five inner-services-bg"
          style={{
            backgroundImage: "url('/assets/img/bg/inner_services_bg.jpg')",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="section-title-two text-center mb-50">
                  <h2 className="title">
                    Spotlight some most important features We have
                  </h2>
                  <p>Borem ipsum dolor sit amet consectetur adipiscing elita</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-content">
                    <div className="content-top">
                      <div className="icon p-3">
                        <i className="flaticon-briefcase" />
                      </div>
                      <h2 className="title">Individual Tax Filing</h2>
                    </div>
                    <div className="services-thumb">
                      <img
                        src="/assets/img/new-images/money-2023-11-27-05-30-13-utc.jpg"
                        alt=""
                      />
                      <Link
                        href="/services/indiviual-tax-filing"
                        className="btn transparent-btn"
                      >
                        Service Detail
                      </Link>
                    </div>
                    <ul className="list-wrap">
                      <li>Accurate tax preparation and filing</li>
                      <li>Maximize deductions and credits</li>
                      <li>Ensure compliance with tax laws</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Married Filling Jointly*/}
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-content">
                    <div className="content-top">
                      <div className="icon p-3">
                        <i className="flaticon-taxes" />
                      </div>
                      <h2 className="title">Married Filing Jointly</h2>
                    </div>
                    <div className="services-thumb">
                      <img
                        src="/assets/img/new-images/services/love-portrait-and-family-at-park-with-happy-smil-2023-11-27-05-17-50-utc.jpg"
                        alt=""
                      />
                      <Link
                        href="/services/married-filing-jointly"
                        className="btn transparent-btn"
                      >
                        Our Services
                      </Link>
                    </div>
                    <ul className="list-wrap">
                      <li>Joint tax return preparation</li>
                      <li>Identify optimal filing strategies</li>
                      <li>Maximize joint tax benefits</li>
                    </ul>
                  </div>
                </div>
              </div>


              {/* Business Schedule */}
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-content">
                    <div className="content-top">
                      <div className="icon p-3">
                        <i className="flaticon-money" />
                      </div>
                      <h2 className="title">Business Schedules</h2>
                    </div>
                    <div className="services-thumb">
                      <img
                        src="/assets/img/new-images/services/personal-organizer-management-schedule-planning-2023-11-27-05-02-49-utc.jpg"
                        alt=""
                      />
                      <Link
                        href="/services/business-schedules"
                        className="btn transparent-btn"
                      >
                        Service Detail
                      </Link>
                    </div>
                    <ul className="list-wrap">
                      <li>Preparation of business tax schedules</li>
                      <li>Ensure compliance with business tax regulations</li>
                      <li>Optimize business tax deductions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Corporate Tax Filing */}
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-content">
                    <div className="content-top">
                      <div className="icon p-3">
                        <i className="flaticon-investment" />
                      </div>
                      <h2 className="title">Corporate Tax Filing</h2>
                    </div>
                    <div className="services-thumb">
                      <img
                        src="/assets/img/new-images/services/two-intercultural-female-agents-comparing-informat-2023-11-27-05-14-37-utc.jpg"
                        alt=""
                      />
                      <Link
                        href="/services/corporate-tax-filing"
                        className="btn transparent-btn"
                      >
                        Service Detail
                      </Link>
                    </div>
                    <ul className="list-wrap">
                      <li>Comprehensive corporate tax return preparation</li>
                      <li>Minimize corporate tax liabilities</li>
                      <li>Ensure compliance with corporate tax laws</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Partnership Filing */}
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-content">
                    <div className="content-top">
                      <div className="icon p-3">
                        <i className="flaticon-data-management" />
                      </div>
                      <h2 className="title">Partnership Filing (Form 1065)</h2>
                    </div>
                    <div className="services-thumb">
                      <img
                        src="/assets/img/new-images/services/business-recruiters-shakes-hands-with-candidate-du-2023-11-27-05-24-40-utc.jpg"
                        alt=""
                      />
                      <Link
                        href="/services/partnership"
                        className="btn transparent-btn"
                      >
                       Service Detail
                      </Link>
                    </div>
                    <ul className="list-wrap">
                      <li>Preparation and filing of Form 1065</li>
                      <li>Allocate income and deductions among partners</li>
                      <li>
                        Ensure compliance with partnership tax regulations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              {/* <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-content">
                    <div className="content-top">
                      <div className="icon p-3">
                        <i className="flaticon-calculator" />
                      </div>
                      <h2 className="title">Additional Services</h2>
                    </div>
                    <div className="services-thumb">
                      <img
                        src="/assets/img/services/services_img06.jpg"
                        alt=""
                      />
                      <Link
                        href="/services-details"
                        className="btn transparent-btn"
                      >
                        Our Services
                      </Link>
                    </div>
                    <ul className="list-wrap">
                      <li>ITIN application assistance</li>
                      <li>Audit support and representation</li>
                      <li>Financial planning and consulting</li>
                    </ul>
                  </div>
                </div>
              </div> */}

              {/* Other Services */}
              {/* <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-content">
                    <div className="content-top">
                      <div className="icon p-3">
                        <i className="flaticon-support" />
                      </div>
                      <h2 className="title">Other Services</h2>
                    </div>
                    <div className="services-thumb">
                      <img
                        src="/assets/img/services/h4_services_img06.jpg"
                        alt=""
                      />
                      <Link
                        href="/services-details"
                        className="btn transparent-btn"
                      >
                        Our Services
                      </Link>
                    </div>
                    <ul className="list-wrap">
                      <li>Bookkeeping and accounting</li>
                      <li>Payroll services</li>
                      <li>Business advisory services</li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
