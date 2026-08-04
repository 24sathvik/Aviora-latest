import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Aviora Aviation Academy',
  description: 'Terms and Conditions governing enrollment, flight training, ground school, simulator sessions, fees, and code of conduct at Aviora Aviation Academy.',
  alternates: {
    canonical: 'https://avioraaviation.in/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span>Legal</span>
          </div>
          <h1 className={styles.heroTitle}>Terms &amp; Conditions</h1>
          <p className={styles.heroSub}>Last updated: August 2026 · Aviora Aviation Academy</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <p className={styles.para}>
              These Terms and Conditions constitute a legally binding agreement between you (&quot;Student&quot;, &quot;Cadet&quot;, &quot;Applicant&quot;, or &quot;User&quot;) and Aviora Aviation Academy, operated by Onestop Aviation Pvt Ltd (&quot;Aviora&quot;, &quot;the Academy&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
            </p>
            <p className={styles.para}>
              By visiting <Link href="/" className={styles.emailLink}>avioraaviation.in</Link>, submitting an application through our <Link href="/admissions" className={styles.emailLink}>Admissions Desk</Link>, or registering for any of our <Link href="/programs" className={styles.emailLink}>training programs</Link>, you acknowledge that you have read, understood, and agreed to adhere strictly to all terms, policies, and regulations detailed herein.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Scope of Aviation Training Programs</h2>
            <p className={styles.para}>Aviora Aviation Academy provides structured, industry-aligned aviation education across specialized pathways:</p>
            <ul className={styles.list}>
              <li><strong><Link href="/programs/pilot-training" className={styles.emailLink}>Commercial Pilot Licence (CPL) Ground School</Link>:</strong> Comprehensive ground theory curriculum covering all four DGCA written papers (Air Navigation, Aviation Meteorology, Air Regulations, Technical General/Specific) and Radio Telephony Restricted (Aeronautical) [RTR(A)].</li>
              <li><strong><Link href="/programs/global-training" className={styles.emailLink}>Global Flight Training Pathway (USA)</Link>:</strong> International flight training conducted at FAA Part 141 approved flight training academies in California/Arizona, logging FAA PPL, Instrument Rating, Multi-Engine, and Commercial Pilot hours for seamless DGCA licence conversion.</li>
              <li><strong><Link href="/programs/type-rating" className={styles.emailLink}>Type Rating Certification</Link>:</strong> Level D Full Flight Simulator (FFS) type rating training for Airbus A320, Boeing B737, and ATR 72-600 commercial aircraft families.</li>
              <li><strong><Link href="/programs/cabin-crew" className={styles.emailLink}>Cabin Crew & Hospitality Diploma</Link>:</strong> Practical airline grooming, mock cabin drills, safety and emergency procedures (SEP), in-flight service management, and interview preparation.</li>
              <li><strong><Link href="/facilities" className={styles.emailLink}>Simulator Training Sessions</Link>:</strong> Pre-flight and instrument rehearsal on our DGCA-recognized Level D equivalent Fixed Base Simulator (FBS).</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Eligibility & Admission Prerequisites</h2>
            <p className={styles.para}>Enrollment in any training program is conditional upon fulfilling statutory regulatory requirements:</p>
            <ul className={styles.list}>
              <li><strong>Age Requirement:</strong> Minimum 17 years of age at the time of commencement for pilot ground school, and minimum 18 years to hold a valid Commercial Pilot Licence or Cabin Crew appointment.</li>
              <li><strong>Educational Qualification:</strong> Successful completion of 10+2 with Physics and Mathematics (or equivalent recognized board certificate) for pilot programs. Cabin Crew applicants must have completed 10+2 in any stream.</li>
              <li><strong>Medical Standards:</strong> Pilots must obtain a valid DGCA Class 2 Medical Certificate followed by Class 1 clearance from an authorized Indian Air Force (IAF) or civil AME centre. International cadets must also clear FAA Class 1 medical standards.</li>
              <li><strong>English Language Proficiency:</strong> Ability to read, write, and converse fluently in English (ICAO Level 4 minimum standard).</li>
            </ul>
            <p className={styles.para}>Aviora reserves the right to decline or revoke admission if documentation submitted is found to be counterfeit, falsified, or inaccurate.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Fees, Payment Schedule & Refund Policy</h2>
            <h3 className={styles.subTitle}>4.1 Fee Structure & Installments</h3>
            <p className={styles.para}>
              All course tuition fees, simulator slot fees, and training materials are outlined in the official Student Offer Letter issued by the Admissions Office. Fees must be remitted strictly according to the agreed milestone schedule.
            </p>
            <h3 className={styles.subTitle}>4.2 Refund Regulations</h3>
            <ul className={styles.list}>
              <li><strong>Seat Confirmation Deposit:</strong> The initial seat registration fee is non-refundable as it reserves batch seats, instructional materials, and simulator allocation slots.</li>
              <li><strong>Tuition Fees Post-Commencement:</strong> Tuition fees paid for an active batch or training module are non-refundable once classes or simulator sessions have commenced.</li>
              <li><strong>Medical Ineligibility:</strong> In the unforeseen event that a cadet is deemed permanently unfit by DGCA / IAF Central Medical Establishment (CME) post-enrollment, unutilized tuition fees may be refunded pro-rata after deducting administrative and processing expenses.</li>
              <li><strong>Third-Party Costs:</strong> Fees paid directly to third parties (DGCA exam fees, FAA testing centres, TSA security clearances, SEVIS visa processing, airline medical boards) are governed by the respective authorities and are entirely non-refundable by Aviora.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Student Conduct & Aviation Discipline</h2>
            <p className={styles.para}>Aviation demands the highest standards of discipline, situational awareness, and professional integrity. Enrolled cadets must:</p>
            <ul className={styles.list}>
              <li>Maintain a minimum attendance of 85% in all ground school classes, mentor briefings, and simulator sessions.</li>
              <li>Adhere strictly to Aviora&apos;s uniform and professional grooming standards at all times within academy premises and partner hangars.</li>
              <li>Comply uncompromisingly with all DGCA, FAA, and ICAO air safety regulations, aerodrome rules, and flight manual procedures.</li>
              <li>Refrain from any form of harassment, ragging, dishonesty, or substance abuse. Aviora enforces a zero-tolerance policy; violations result in immediate expulsion without refund.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Mentorship & Placement Support</h2>
            <p className={styles.para}>
              Aviora provides dedicated career guidance, mock airline technical interviews, simulator assessments, and airline referral assistance through our experienced <Link href="/mentors" className={styles.emailLink}>Airline Pilot Faculty</Link>.
            </p>
            <p className={styles.para}>
              While Aviora maintains an outstanding track record of cadet success across leading domestic and international airlines, statutory regulations prohibit guaranteeing employment. Final selection and employment offers rest entirely with recruiting airlines based on individual candidate merit, DGCA exam performance, airline entrance tests, and simulator assessments.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Intellectual Property Rights</h2>
            <p className={styles.para}>
              All course syllabi, navigation charts, meteorology worksheets, question banks, simulator scenarios, video debriefs, and digital assets provided by Aviora Aviation Academy are proprietary intellectual property. Unauthorized reproduction, digital distribution, or commercial sharing of academy study materials is strictly prohibited and subject to legal action under the Indian Copyright Act.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Governing Law & Dispute Resolution</h2>
            <p className={styles.para}>
              These Terms and Conditions shall be governed by and interpreted under the laws of the Republic of India. Any dispute, claim, or controversy arising out of or relating to academy enrollment shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Contact & Support</h2>
            <p className={styles.para}>For clarifications, admissions enquiries, or official correspondence regarding these Terms:</p>
            <div className={styles.contactBlock}>
              <p><strong>Aviora Aviation Academy</strong> (Onestop Aviation Pvt Ltd)</p>
              <p>Block No 5, 8-5-255/66, Inner Ring Road, Defence Colony</p>
              <p>Hyderabad, Telangana — 500079, India</p>
              <p>Email: <a href="mailto:admissions@avioraacademy.com" className={styles.emailLink}>admissions@avioraacademy.com</a> · <a href="mailto:fly@avioraacademy.com" className={styles.emailLink}>fly@avioraacademy.com</a></p>
              <p>Phone: <a href="tel:+916309342416" className={styles.emailLink}>+91 6309342416</a> · WhatsApp: <a href="https://wa.me/917039339716" target="_blank" rel="noopener noreferrer" className={styles.emailLink}>+91 7039339716</a></p>
            </div>
          </section>

          <div className={styles.backBar}>
            <Link href="/privacy-policy" className={styles.backLink}>← Privacy Policy</Link>
            <Link href="/" className={styles.backLink}>Back to Home →</Link>
          </div>

        </div>
      </div>
    </main>
  );
}
