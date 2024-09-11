import Link from "next/link";
import { useRouter } from "next/router";
import MobileMenu from "../MobileMenu";
import OffcanvusMenu from "../OffcanvusMenu";
import SearchPopup from "../SearchPopup";

export default function Header1({
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
      <header
        id="sticky-header"
        className={`transparent-header header-style-two ${
          scroll ? "sticky-menu" : ""
        }`}
      >
        <div className="container custom-container">
          <div className="heder-top-wrap">
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
                      <Link href="mailto:info@1050web.com">
                        info@1050web.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header-top-right">
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li> */}
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                  <div className="header-top-btn">
                    <Link href="/contact">
                      <i className="flaticon-briefcase" />
                      Free Consulting
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-area">
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
                          style={{ transform: "scale(2)" , marginLeft: "40px"}}
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
                            <li className={router.pathname === "/services" ? "active" : ""}>
                              <Link href="/services/indiviual-tax-filing">Individual Tax Filing</Link>
                            </li>
                            <li className={router.pathname === "/married-filing-jointly" ? "active" : ""}>
                              <Link href="/services/married-filing-jointly">Married Filing Jointly</Link>
                            </li>
                            <li className={router.pathname === "/business-schedules" ? "active" : ""}>
                              <Link href="/services/business-schedules">Business Schedules</Link>
                            </li>
                            <li className={router.pathname === "/corporate-tax-filing" ? "active" : ""}>
                              <Link href="/services/corporate-tax-filing">Corporate Tax Filing</Link>
                            </li>
                            <li className={router.pathname === "/partnership" ? "active" : ""}>
                              <Link href="/services/partnership">Partnership Filing (Form 1065)</Link>
                            </li>
                            {/* <li className={router.pathname === "/services-6" ? "active" : ""}>
                              <Link href="/services-6">Additional Services</Link>
                            </li>
                            <li className={router.pathname === "/services" ? "active" : ""}>
                              <Link href="/services">Other Services</Link>
                            </li> */}
                          </ul>
                        </li>
                        <li className={router.pathname === "/contact" ? "active" : ""}>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-contact-two">
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <span>Hot Line Numbers</span>
                            <Link href="tel:(312) 622-0870">
                            (312) 622-0870
                            </Link>
                            <Link href="tel:(516)-386-0221">
                            (516) 386-0221
                            </Link>
                          </div>
                        </li>
                        <li
                          className="offcanvas-menu"
                          onClick={handleOffcanvus}
                        >
                          <Link href="#" className="menu-tigger">
                            <span />
                            <span />
                            <span />
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo ">
                      <Link href="/" className="pl-20">
                        <img src="/assets/img/logo/logo.png" alt="Logo"  style={{ transform: "scale(1.5)" }} />
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
                        {/* <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li> */}
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li> */}
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
        <OffcanvusMenu
          isOffcanvus={isOffcanvus}
          handleOffcanvus={handleOffcanvus}
        />
      </header>
    </>
  );
}
