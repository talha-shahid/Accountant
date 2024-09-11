import Link from "next/link"
import MobileMenu from "../MobileMenu"
import OffcanvusMenu from "../OffcanvusMenu"
import SearchPopup from "../SearchPopup"
import { useRouter } from "next/router";

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffcanvus, handleOffcanvus }) {

    const router = useRouter();
    return (
        <>
            <header id="sticky-header" className={`transparent-header header-style-three ${scroll ? "sticky-menu" : ""}`}>
                <div className="menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><img  style={{maxHeight: '60px'}} src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="active"><Link href="/">Home</Link>
                                                    {/* <ul className="sub-menu">
                                                        <li><Link href="/">Finance</Link></li>
                                                        <li><Link href="/index-2">Consulting</Link></li>
                                                        <li><Link href="/index-3">Insurance</Link></li>
                                                        <li><Link href="/index-4">Digital Agency</Link></li>
                                                        <li><Link href="/index-5">Business</Link></li>
                                                    </ul> */}
                                                </li>
                                                <li><Link href="/about">About Us</Link>
                                                    {/* <ul className="sub-menu">
                                                        <li><Link href="/about">About One</Link></li>
                                                        <li><Link href="/about-2">About Two</Link></li>
                                                        <li><Link href="/about-3">About Three</Link></li>
                                                        <li><Link href="/about-4">About Four</Link></li>
                                                        <li><Link href="/about-5">About Five</Link></li>
                                                    </ul> */}
                                                </li>
                                                <li className="menu-item-has-children"><Link href="/services">Services</Link>
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
                                                    </ul>
                                                </li>
                                                {/* <li className="menu-item-has-children"><Link href="#">Blog</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/blog">Our Blog</Link></li>
                                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li> */}
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action">
                                            <ul className="list-wrap">
                                                {/* <li className="header-search" onClick={handleSearch}><Link href="#"><i className="flaticon-search" /></Link></li> */}
                                                {/* <li className="offcanvas-menu offcanvas-menu-two" onClick={handleOffcanvus}>
                                                    <Link href="#" className="menu-tigger">
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </Link>
                                                </li> */}
                                                {/* <li className="header-contact-two">
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="tel:312-622-0870">312-622-0870</Link>
                                                        <Link href="tel:516-386-0221"> 516-386-0221</Link>
                                                    </div>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        {/* <div className="mobile-search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="flaticon-search" /></button>
                                            </form>
                                        </div> */}
                                        <div className="menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                {/* <li><Link href="#"><i className="fab fa-twitter" /></Link></li> */}
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                {/* <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li> */}
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
                <OffcanvusMenu isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} />
            </header>

        </>
    )
}
