import Link from "next/link";
import { useRouter } from "next/router";
import MobileMenu from "../MobileMenu";
import SearchPopup from "../SearchPopup";

export default function Header6({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffcanvus,
  handleOffcanvus,
}) {
  const router = useRouter();

  return (
    <>
      <div id="header-fixed-height" className={scroll ? "active-height" : ""} />
      <header className="header-style-six">
        <div className="heder-top-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location" />
                      2380 Hempstead Tpke East Meadow, NY 11554, USA
                    </li>
                    <li>
                      <i className="flaticon-mail" />
                      <Link href="mailto:info@perfectchoice.us">
                        info@perfectchoice.us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header-top-right">
                  <div className="header-contact">
                    <Link href="tel:+1 (312) 622-0870">
                      <i className="flaticon-phone-call" />
                      +1 (312) 622-0870
                    </Link>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-header"
          className={`menu-area ${scroll ? "sticky-menu" : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo.png"
                          alt="Logo"
                          style={{ transform: "scale(2)", marginLeft: "45px" }}
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className={router.pathname === "/" ? "active" : ""}>
                          <Link href="/">Home</Link>
                        </li>
                        <li className={router.pathname === "/about" ? "active" : ""}>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li className={`menu-item-has-children ${router.pathname.startsWith("/services") ? "active" : ""}`}>
                          <Link href="/services">Services</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/services/indiviual-tax-filing">
                                Individual Tax Filing
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/married-filing-jointly">
                                Married Filing Jointly
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/business-schedules">Business Schedules</Link>
                            </li>
                            <li>
                              <Link href="/services/corporate-tax-filing">
                                Corporate Tax Filing
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/partnership">
                                Partnership Filing (Form 1065)
                              </Link>
                            </li>
                            {/* <li>
                              <Link href="/services-5">
                                Additional Services
                              </Link>
                            </li>
                            <li>
                              <Link href="/services">Other Services</Link>
                            </li> */}
                          </ul>
                        </li>
                        <li className={router.pathname === "/contact" ? "active" : ""}>
                          <Link href="/contact">Contacts</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-search" onClick={handleSearch}>
                          <Link href="#">
                            <i className="flaticon-search" />
                          </Link>
                        </li>
                        <li className="header-btn">
                          <Link href="/contact" className="btn btn-two">
                            Get a Quote
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/" className="pl-20">
                        <img src="/assets/img/logo/logo.png" alt="Logo" style={{ transform: "scale(1.5)" }} />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
        <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
      </header>
    </>
  );
}
