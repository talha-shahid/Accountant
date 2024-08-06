import React from 'react';
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Privacy Policy">
      <section className="privacy-policy-area pt-120 pb-120" style={{ backgroundColor: "#f5f5f5", color: "#333" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-50">
                <h2 className="title">Privacy Policy</h2>
                <p>Last Updated: {lastUpdated}</p>
              </div>
              <div className="privacy-content">
                <p>
                  Perfect Choice Tax Services ("Perfect Choice", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this Privacy Policy carefully.
                </p>
                <h3>1. Information We Collect</h3>
                <p>We may collect information about you in a variety of ways. The information we may collect on the website includes:</p>
                <h4>Personal Data</h4>
                <p>
                  While using our services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to:
                </p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Home address</li>
                  <li>Social Security Number</li>
                  <li>Financial information</li>
                </ul>
                <h4>Usage Data</h4>
                <p>
                  We may also collect information on how our website is accessed and used. This Usage Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                </p>
                <h3>2. How We Use Your Information</h3>
                <p>We use the information we collect in various ways, including to:</p>
                <ul>
                  <li>Provide, operate, and maintain our website and services</li>
                  <li>Improve, personalize, and expand our website and services</li>
                  <li>Understand and analyze how you use our website and services</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                  <li>Process your transactions and manage your orders</li>
                  <li>Find and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <h3>3. Sharing Your Information</h3>
                <p>We may share your information in the following situations:</p>
                <ul>
                  <li>With service providers: We may share your information with third-party service providers to perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                  <li>For business transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                  <li>With affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                  <li>With business partners: We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                  <li>With your consent: We may disclose your personal information for any other purpose with your consent.</li>
                  <li>To comply with laws: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                </ul>
                <h3>4. Security of Your Information</h3>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
                <h3>5. Your Data Protection Rights</h3>
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul>
                  <li>The right to access: You have the right to request copies of your personal data.</li>
                  <li>The right to rectification: You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                  <li>The right to erasure: You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li>The right to restrict processing: You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                  <li>The right to object to processing: You have the right to object to our processing of your personal data, under certain conditions.</li>
                  <li>The right to data portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
                <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our provided contact information.</p>
                <h3>6. Third-Party Websites</h3>
                <p>
                  Our website may contain links to third-party websites. We do not control, and are not responsible for, the content or privacy practices of these websites. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
                <h3>7. Changes to This Privacy Policy</h3>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
