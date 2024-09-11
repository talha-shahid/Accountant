// import Layout from "@/components/layout/Layout";

// export default function Contact() {
//   return (
//     <>
//       <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Contact Us">
//         <div>
//           <section className="inner-contact-area pt-120 pb-120">
//             <div className="container">
//               <div className="row align-items-center">
//                 <div className="col-lg-6">
//                   <div className="inner-contact-img">
//                     <img src="/assets/img/images/contact_img.jpg" alt="" />
//                   </div>
//                 </div>
//                 <div className="col-lg-6">
//                   <div className="inner-contact-info">
//                     <h2 className="title">Our Office Address</h2>
//                     <div className="contact-info-item">
//                       <h5 className="title-two">USA Office</h5>
//                       <ul className="list-wrap">
//                         <li>2380 Hempstead Tpke East Meadow, NY 11554, USA</li>
//                         <li>+1 (312) 622-0870</li>
//                         <li>info@perfectchoice.us</li>
//                       </ul>
//                     </div>

//                     {/* <div className="contact-info-item">
//                                             <h5 className="title-two">Australia Office</h5>
//                                             <ul className="list-wrap">
//                                                 <li>100 Wilshire Blvd, Suite 700 Santa <br /> Monica, CA 90401, USA</li>
//                                                 <li>+1 (310) 620-8565</li>
//                                                 <li>info@gmail.com</li>
//                                             </ul>
//                                         </div> */}
//                   </div>
//                 </div>
//                 <div className="mt-60">
//                   <div className="services-widget">
//                     <h4 className="sw-title">Get a Free Quote</h4>
//                     <div className="services-widget-form">
//                       <form action="#">
//                         <div className="form-grp">
//                           <input type="text" placeholder="Your Name" />
//                         </div>
//                         <div className="form-grp">
//                           <input type="email" placeholder="E-mail Address" />
//                         </div>
//                         <div className="form-grp">
//                           <textarea
//                             name="message"
//                             placeholder="Type Your Message"
//                           />
//                         </div>
//                         <button type="submit" className="submit-btn">
//                           Send Message
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           {/* <div className="contact-map">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d755.9229446080377!2d-73.5479148!3d40.7248012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27e04d4499145%3A0x5f136c9ab00bf18e!2sMajale%20Reflexology!5e0!3m2!1sen!2s!4v1719907389622!5m2!1sen!2s"
//               allowfullscreen=""
//               loading="lazy"
//             />
//           </div> */}
//         </div>
//       </Layout>
//     </>
//   );
// }





import { useState } from 'react';
import Layout from "@/components/layout/Layout";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/submit-form', { // Make sure this matches your backend port
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus('Message sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus(`Error: ${data.error}`);
    }
  };

  return (
    <>
      <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Contact Us">
        <div>
          <section className="inner-contact-area pt-120 pb-120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="inner-contact-img">
                    <img src="/assets/img/new-images/overhead-workspace-view-of-male-hands-and-working-2023-11-27-05-24-16-utc.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inner-contact-info">
                    <h2 className="title">Our Office Address</h2>
                    <div className="contact-info-item">
                      <h5 className="title-two">USA Office</h5>
                      <ul className="list-wrap">
                        <li>2380 Hempstead Tpke East Meadow, NY 11554, USA</li>
                        {/* <li>+1 (312) 622-0870</li> */}
                        <li>info@1050web.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-60">
                  <div className="services-widget">
                    <h4 className="sw-title">Get a Free Quote</h4>
                    <div className="services-widget-form">
                      <form onSubmit={handleSubmit}>
                        <div className="form-grp">
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            type="email"
                            placeholder="E-mail Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-grp">
                          <textarea
                            name="message"
                            placeholder="Type Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                        <button type="submit" className="submit-btn">
                          Send Message
                        </button>
                      </form>
                      {status && <p>{status}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d755.9229446080377!2d-73.5479148!3d40.7248012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27e04d4499145%3A0x5f136c9ab00bf18e!2sMajale%20Reflexology!5e0!3m2!1sen!2s!4v1719907389622!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
            />
          </div> */}
        </div>
      </Layout>
    </>
  );
}
