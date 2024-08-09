import Link from "next/link";

export default function Banner() {
    return (
        <>
            <section className="banner-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9 order-0 order-lg-2">
                            <div className="banner-img-three" data-aos="fade-left" data-aos-delay={300}>
                                <img src="/assets/img/banner/h3_banner_img01.jpg" alt="" className="main-img" />
                                <img src="/assets/img/banner/h3_banner_img02.jpg" alt="" className="img-two" data-parallax="{&quot;y&quot; : 100 }" />
                                <img src="/assets/img/banner/h3_banner_img03.jpg" alt="" className="img-three" data-parallax="{&quot;x&quot; : -100 }" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-content-three">
                                <h2 className="title" data-aos="fade-right" data-aos-delay={0}>Navigating Your Financial Future</h2>
                                {/* <p data-aos="fade-right" data-aos-delay={300}>Agilos helps you to convert your data into a strategic asset and get top-notch business insights.</p>
                                <form action="#" className="banner-form" data-aos="fade-right" data-aos-delay={600}>
                                    <input type="text" placeholder="E-mail Address" />
                                    <button type="submit"><i className="flaticon-right-arrow" /></button>
                                </form> */}
                                                            <p data-aos="fade-up" data-aos-delay={500}>We transform complex financial data into clear, actionable strategies to drive your business success.</p>
                                <div className="banner-btn">
                                    <Link href="/services" className="btn" data-aos="fade-right" data-aos-delay={700}>Our Services</Link>
                                    {/* <VideoPopup style={1} /> */}
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap-three">
                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" />
                    <img src="/assets/img/banner/h3_banner_shape02.png" alt="" />
                </div>
            </section>
        </>
    )
}
