import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Aviora Aviation Academy',
  description: 'Privacy Policy of Aviora Aviation Academy (Onestop Aviation Pvt Ltd). Learn how we collect, protect, and handle your personal, academic, and training information.',
  alternates: {
    canonical: 'https://avioraaviation.in/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span>Legal</span>
          </div>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSub}>Last updated: August 2026 · Aviora Aviation Academy</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.para}>
              Aviora Aviation Academy, operated under Onestop Aviation Pvt Ltd (&quot;Aviora&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), is committed to safeguarding the privacy and confidentiality of your personal, academic, and aviation training information. This Privacy Policy details our policies and practices regarding the collection, storage, processing, transfer, and protection of data when you visit <Link href="/" className={styles.emailLink}>avioraaviation.in</Link>, enquire about our <Link href="/programs" className={styles.emailLink}>aviation training programs</Link>, or enroll in our academy.
            </p>
            <p className={styles.para}>
              By accessing our website, submitting an enquiry via our <Link href="/contact" className={styles.emailLink}>Contact page</Link>, or applying through our <Link href="/admissions" className={styles.emailLink}>Admissions portal</Link>, you consent to the collection and handling of your data as outlined in this policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            <p className={styles.para}>To evaluate applications, deliver structured aviation training, and comply with regulatory bodies (such as DGCA India and FAA USA), we collect the following categories of information:</p>
            <ul className={styles.list}>
              <li><strong>Personal Identity Data:</strong> Full legal name, date of birth, gender, nationality, passport details, and government-issued identification (Aadhaar / PAN).</li>
              <li><strong>Contact Information:</strong> Email address, mobile/WhatsApp telephone numbers, permanent residential address, and emergency contact details.</li>
              <li><strong>Academic & Qualification Records:</strong> 10th and 10+2 marks cards, certificates (Physics, Mathematics, and English stream verifications), and higher education degrees.</li>
              <li><strong>Medical & Fitness Records:</strong> DGCA Class 1 and Class 2 medical assessment certificates, FAA medical clearances (for US flight training), and vision/audiometry reports where required for flight safety.</li>
              <li><strong>Financial & Transaction Data:</strong> Transaction references, fee receipts, and bank transfer confirmations. We do not store full credit/debit card details on our servers; transactions are processed through encrypted, compliant third-party payment gateways.</li>
              <li><strong>Technical & Website Usage Data:</strong> IP address, device type, browser specifications, page interaction metrics, and analytical tracking data to optimize website performance.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. How We Use Your Data</h2>
            <p className={styles.para}>We utilize the collected information strictly for educational, operational, and regulatory purposes, including:</p>
            <ul className={styles.list}>
              <li>Processing student applications and determining eligibility for <Link href="/programs/pilot-training" className={styles.emailLink}>Commercial Pilot Licence (CPL)</Link>, <Link href="/programs/cabin-crew" className={styles.emailLink}>Cabin Crew</Link>, <Link href="/programs/global-training" className={styles.emailLink}>Global Training</Link>, and <Link href="/programs/type-rating" className={styles.emailLink}>Type Rating</Link> courses.</li>
              <li>Coordinating with DGCA-approved medical examiners (AMEs) for Class 1 and Class 2 medical scheduling.</li>
              <li>Assisting cadets with SEVIS I-20 documentation, US M-1 visa appointment processing, and flight school slot bookings with our FAA Part 141 flight training partners in the USA.</li>
              <li>Managing classroom batch schedules, simulator slots on our <Link href="/facilities" className={styles.emailLink}>FBS Level D flight simulator</Link>, and progress reviews with our <Link href="/mentors" className={styles.emailLink}>airline pilot mentors</Link>.</li>
              <li>Issuing official training transcripts, flight hour log verifications, and course completion certificates.</li>
              <li>Delivering important administrative announcements, fee reminders, and regulatory compliance circulars.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Data Sharing & Third-Party Disclosures</h2>
            <p className={styles.para}>We do not sell, monetize, or rent student personal data to any third-party marketing companies. Data is disclosed only to authorized entities under strict confidentiality agreements:</p>
            <ul className={styles.list}>
              <li><strong>Aviation Regulatory Authorities:</strong> Directorate General of Civil Aviation (DGCA India), Federal Aviation Administration (FAA USA), and Ministry of Civil Aviation when required for licence issuance, examination registration, and security clearances.</li>
              <li><strong>International Flight Training Partners:</strong> FAA-certified flight schools and Approved Training Organizations (ATOs) in the USA for cadets enrolled in our <Link href="/programs/global-training" className={styles.emailLink}>Global Training Pathway</Link>.</li>
              <li><strong>Airline Placement Partners:</strong> Pre-screened cadet profiles and achievement records are shared with airline recruitment teams (e.g., IndiGo, Air India, Akasa Air) solely with the candidate&apos;s explicit consent.</li>
              <li><strong>Legal & Statutory Compliance:</strong> Where required by applicable Indian law, court order, or governmental inquiry.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Data Security & Storage</h2>
            <p className={styles.para}>
              Aviora Aviation Academy employs multi-layered technical, physical, and administrative security protocols to safeguard all student records against unauthorized access, loss, or alteration. These measures include 256-bit SSL encryption across all digital touchpoints, role-based access restrictions for academy personnel, and secure cloud storage complying with international data protection standards.
            </p>
            <p className={styles.para}>
              Academic and flight training log records are retained for a minimum period of 7 years in accordance with aviation regulatory mandates, after which records are archived or securely disposed of.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Cookies and Analytics</h2>
            <p className={styles.para}>
              Our website uses cookies and web analytics tools (such as Google Analytics 4) to monitor user experience, understand visitor navigation flow, and improve our resource guides and course materials. You can configure your browser to decline cookies, though certain interactive features of the website may experience diminished performance.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Your Rights</h2>
            <p className={styles.para}>Under applicable Indian data protection laws and guidelines, you are entitled to:</p>
            <ul className={styles.list}>
              <li>Request a review of the personal and educational information we hold on your file.</li>
              <li>Request correction or rectification of incomplete or outdated data.</li>
              <li>Request erasure of non-mandatory marketing data (subject to aviation compliance retention rules).</li>
              <li>Opt out of non-essential email notifications or career newsletters at any time.</li>
            </ul>
            <p className={styles.para}>
              To exercise any of these rights, email our compliance desk at <a href="mailto:admissions@avioraacademy.com" className={styles.emailLink}>admissions@avioraacademy.com</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Contact Us</h2>
            <p className={styles.para}>If you have questions regarding this Privacy Policy or data processing practices, please contact our administrative headquarters:</p>
            <div className={styles.contactBlock}>
              <p><strong>Aviora Aviation Academy</strong> (Onestop Aviation Pvt Ltd)</p>
              <p>Block No 5, 8-5-255/66, Inner Ring Road, Defence Colony</p>
              <p>Hyderabad, Telangana — 500079, India</p>
              <p>Email: <a href="mailto:admissions@avioraacademy.com" className={styles.emailLink}>admissions@avioraacademy.com</a> · <a href="mailto:fly@avioraacademy.com" className={styles.emailLink}>fly@avioraacademy.com</a></p>
              <p>Phone: <a href="tel:+916309342416" className={styles.emailLink}>+91 6309342416</a> · WhatsApp: <a href="https://wa.me/917039339716" target="_blank" rel="noopener noreferrer" className={styles.emailLink}>+91 7039339716</a></p>
            </div>
          </section>

          <div className={styles.backBar}>
            <Link href="/" className={styles.backLink}>← Back to Home</Link>
            <Link href="/terms-and-conditions" className={styles.backLink}>Terms &amp; Conditions →</Link>
          </div>

        </div>
      </div>
    </main>
  );
}
