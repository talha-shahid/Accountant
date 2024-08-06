import Link from "next/link";

export default function OffcanvusMenu({ isOffcanvus, handleOffcanvus }) {
  return (
    <>
      <div className={`extra-info ${isOffcanvus ? "active" : ""}`}>
        <div className="close-icon menu-close" onClick={handleOffcanvus}>
          <button>
            <i className="far fa-window-close" />
          </button>
        </div>
        <div className="logo-side mb-30">
          <Link href="/">
            <img
              src="/assets/img/logo/logo.png"
              alt="Logo"
              style={{ transform: "scale(1.5)", marginLeft: "20px" }}
            />
          </Link>
        </div>
        <div className="side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Office Address</h4>
            <p>2380 Hempstead Tpke East Meadow, NY 11554, USA</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Phone Number</h4>
            <p>+1 (312) 622-0870</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Email Address</h4>
            <p>info@perfectchoice.us</p>
          </div>
        </div>
        <ul className="side-instagram list-wrap">
          <li>
            <Link href="#">
              <img src="/assets/img/images/sb_insta01.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="/assets/img/images/sb_insta02.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="/assets/img/images/sb_insta03.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="/assets/img/images/sb_insta04.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="/assets/img/images/sb_insta05.jpg" alt="" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src="/assets/img/images/sb_insta06.jpg" alt="" />
            </Link>
          </li>
        </ul>
        <div className="social-icon-right mt-30">
          <Link href="#">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link href="#">
            <i className="fab fa-twitter" />
          </Link>
          <Link href="#">
            <i className="fab fa-google-plus-g" />
          </Link>
          <Link href="#">
            <i className="fab fa-instagram" />
          </Link>
        </div>
      </div>
      <div
        className={`offcanvas-overly ${isOffcanvus ? "active" : ""}`}
        onClick={handleOffcanvus}
      />
    </>
  );
}
