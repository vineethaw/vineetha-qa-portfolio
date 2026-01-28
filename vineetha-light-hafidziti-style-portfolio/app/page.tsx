'use client'
import { motion } from 'framer-motion'

export default function Home() {
  const projects = [
    { title: 'Playwright Automation Framework', desc: 'Enterprise Playwright framework with CI/CD integration for scalable web apps.' },
    { title: 'OTT Cross-Device Automation', desc: 'Automation for Smart TV, Firestick, Android TV, Apple TV platforms.' },
    { title: 'API Automation Platform', desc: 'Scalable API automation using ReadyAPI and Postman with CI integration.' },
    { title: 'WebDriverIO E2E Suite', desc: 'End-to-end automation for enterprise web & mobile applications.' },
  ]

  return (
    <main className='max-w-6xl mx-auto px-6 py-12'>
      {/* Hero */}
      <section className='mb-24'>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className='text-5xl font-bold mb-4'>
          Hi, I'm Vineetha Wilson 👋
        </motion.h1>
        <p className='text-xl text-slate-600 mb-4'>
          Senior QA Automation Engineer | QA Team Lead | SDET
        </p>
        <p className='max-w-3xl text-slate-600 mb-6'>
          6+ years of experience delivering high-quality automation solutions across Web, Mobile, API, and OTT platforms. Expert in Playwright, Selenium, WebDriverIO, CI/CD quality gates, and Agile QA leadership. Relocating to Dubai, UAE.
        </p>
        <div className='flex gap-4'>
          <a href='#contact' className='bg-slate-900 text-white px-6 py-3 rounded-lg'>Get in touch</a>
          <a href='/VINEETHA_WILSON_CV.pdf' className='border border-slate-300 px-6 py-3 rounded-lg'>Download Resume</a>
        </div>
      </section>

      {/* About */}
      <section className='mb-24'>
        <h2 className='text-3xl font-semibold mb-4'>About</h2>
        <p className='text-slate-600 max-w-4xl'>
          I am a Senior QA Automation Engineer and Team Lead at Tata Elxsi with strong expertise in Playwright, Selenium, WebDriverIO, and API automation. I have led QA teams, architected automation frameworks, and owned release quality across large-scale enterprise and OTT platforms. I am actively seeking Senior / Lead QA Automation roles in Dubai, UAE.
        </p>
      </section>

      {/* Experience */}
      <section className='mb-24'>
        <h2 className='text-3xl font-semibold mb-8'>Experience</h2>
        <div className='space-y-6'>
          <div className='border-l-4 border-slate-900 pl-6'>
            <h3 className='font-semibold'>Team Lead – Senior QA Automation Engineer</h3>
            <p className='text-slate-600'>Tata Elxsi – Zoox | Apr 2025 – Present</p>
            <ul className='list-disc ml-6 text-slate-600 mt-2'>
              <li>Lead a team of 5 QA engineers</li>
              <li>Architected Playwright automation framework (TypeScript)</li>
              <li>Owned release quality metrics and defect-free deliveries</li>
            </ul>
          </div>

          <div className='border-l-4 border-slate-900 pl-6'>
            <h3 className='font-semibold'>Senior QA Automation Engineer</h3>
            <p className='text-slate-600'>Tata Elxsi – Symplr | 2022 – 2025</p>
            <ul className='list-disc ml-6 text-slate-600 mt-2'>
              <li>Web & Mobile automation using WebDriverIO and ReadyAPI</li>
              <li>CI/CD pipeline integration</li>
              <li>Azure DevOps defect lifecycle management</li>
            </ul>
          </div>

          <div className='border-l-4 border-slate-900 pl-6'>
            <h3 className='font-semibold'>Senior QA Automation Engineer</h3>
            <p className='text-slate-600'>Tata Elxsi – SonyLiv | 2021 – 2022</p>
            <ul className='list-disc ml-6 text-slate-600 mt-2'>
              <li>OTT automation for Android, iOS, Smart TV, Firestick</li>
              <li>Cross-platform UI/UX and performance testing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className='mb-24'>
        <h2 className='text-3xl font-semibold mb-8'>Featured Projects</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {projects.map(p => (
            <div key={p.title} className='border rounded-xl p-6 hover:shadow-lg transition'>
              <h3 className='font-semibold mb-2'>{p.title}</h3>
              <p className='text-slate-600'>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className='mb-24'>
        <h2 className='text-3xl font-semibold mb-8'>Skills</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-700'>
          {['Playwright','Selenium (Java/Python)','WebDriverIO','Appium','ReadyAPI / Postman','Jenkins / Azure DevOps','CI/CD Pipelines','API Automation','Web, Mobile & OTT Testing','Agile / Scrum','Test Automation Architecture','Regression & E2E Automation'].map(s => (
            <div key={s} className='border rounded-lg px-4 py-2'>{s}</div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className='mb-24'>
        <h2 className='text-3xl font-semibold mb-4'>Certifications</h2>
        <ul className='list-disc ml-6 text-slate-600'>
          <li>ISTQB Foundation Level</li>
          <li>Advanced Selenium Automation Frameworks</li>
          <li>Advanced Playwright</li>
          <li>WebDriverIO End-to-End Testing</li>
          <li>Generative AI & Conversational AI</li>
          <li>Cybersecurity Testing</li>
        </ul>
      </section>

      {/* Contact */}
      <section id='contact' className='mb-12'>
        <h2 className='text-3xl font-semibold mb-4'>Contact</h2>
        <p className='text-slate-600'>📞 UAE: +971 50 191 8369</p>
        <p className='text-slate-600'>📞 India: +91 85004 87440</p>
        <p className='text-slate-600'>✉️ wilson.vineetha9@gmail.com</p>
        <p className='text-slate-600'>🔗 LinkedIn: linkedin.com/in/wilson-vineetha</p>
      </section>
    </main>
  )
}
