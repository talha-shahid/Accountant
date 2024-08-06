
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
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
            <ul className="navigation">
                <li className="active"><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li className="menu-item-has-children"><Link href="/services">Services</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/services/indiviual-tax-filing">Individual Tax Filing</Link></li>
                        <li><Link href="/services/married-filing-jointly">Married Filing Jointly</Link></li>
                        <li><Link href="/services/business-schedules">Business Schedules</Link></li>
                        <li><Link href="/services/corporate-tax-filing">Corporate Tax Filing</Link></li>
                        <li><Link href="/services/partnership">Partnership Filing (Form 1065)</Link></li>
                        {/* <li><Link href="/services-5">Additional Services</Link></li>
                        <li><Link href="/services">Other Services</Link></li> */}
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fas fa-angle-down" /></div>
                </li>
                {/* <li><Link href="/blog">Blog</Link></li> */}
                {/* <li className="menu-item-has-children"><Link href="#">Areas Served</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="#">New York</Link></li>
                        <li><Link href="#">London</Link></li>
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fas fa-angle-down" /></div>
                </li> */}
                <li><Link href="/contact">Contacts</Link></li>
            </ul>
        </>
    )
}