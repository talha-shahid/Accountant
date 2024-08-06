import React from 'react';
import Layout from "@/components/layout/Layout";

const TermsConditions = () => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="Terms and Conditions">
      <section className="terms-conditions-area pt-120 pb-120" style={{ backgroundColor: "#f5f5f5", color: "#333" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-50">
                <h2 className="title">Terms and Conditions</h2>
                <p>Last Updated: {lastUpdated}</p>
              </div>
              <div className="terms-content">
                <p>
                  Welcome to Perfect Choice Tax Services ("Perfect Choice", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website and services, you agree to comply with and be bound by these Terms. Please read them carefully.
                </p>
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and any other applicable laws and regulations. If you do not agree to these Terms, please do not use our website or services.
                </p>
                <h3>2. Services</h3>
                <p>
                  Perfect Choice provides assistance with tax-related services to individuals and businesses. Our services include:
                </p>
                <ul>
                  <li>Evaluating tax options</li>
                  <li>Assisting with the application and filing process</li>
                  <li>Providing guidance on tax-related matters</li>
                </ul>
                <h3>3. Eligibility</h3>
                <p>
                  To use our services, you must be at least 18 years old and a resident of New York. By using our services, you represent and warrant that you meet these eligibility requirements.
                </p>
                <h3>4. Use of Website</h3>
                <p>
                  You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to use our website:
                </p>
                <ul>
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
                  <li>To impersonate or attempt to impersonate Perfect Choice, a Perfect Choice employee, another user, or any other person or entity.</li>
                </ul>
                <h3>5. User Accounts</h3>
                <p>
                  To access certain features of our website, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
                </p>
                <h3>6. Privacy</h3>
                <p>
                  Your use of our website and services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.
                </p>
                <h3>7. Intellectual Property</h3>
                <p>
                  The content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Perfect Choice or its licensors and is protected by intellectual property laws. You may not use, reproduce, distribute, modify, or create derivative works of any content without our prior written consent.
                </p>
                <h3>8. Disclaimer of Warranties</h3>
                <p>
                  Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Perfect Choice does not warrant that our website or services will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
                <h3>9. Limitation of Liability</h3>
                <p>
                  To the fullest extent permitted by law, Perfect Choice shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use our website or services; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from our website; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website by any third party; or (e) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via our website or services.
                </p>
                <h3>10. Indemnification</h3>
                <p>
                  You agree to indemnify, defend, and hold harmless Perfect Choice, its officers, directors, employees, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our website or services.
                </p>
                <h3>11. Governing Law</h3>
                <p>
                  These Terms and your use of our website and services shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law principles.
                </p>
                <h3>12. Changes to Terms</h3>
                <p>
                  We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website or services following the posting of revised Terms means that you accept and agree to the changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
