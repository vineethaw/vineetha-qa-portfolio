'use client'
import { motion } from 'framer-motion'
import { Briefcase, Layers, Wrench, Mail } from 'lucide-react'

export default function Home() {
  const skills = ['Playwright','Selenium','WebDriverIO','API Automation','CI/CD','OTT Testing','Agile','QA Leadership','Azure DevOps','Jenkins']
  const projects = [
    ['Playwright Framework','Enterprise-grade Playwright framework with CI/CD integration'],
    ['OTT Automation','Smart TV, Firestick, Apple TV automation'],
    ['API Automation Platform','ReadyAPI & Postman enterprise automation']
  ]

  return (
    <main className='max-w-7xl mx-auto px-6 py-12'>
      {/* Sticky Header */}
      <header className='sticky top-0 bg-white/80 backdrop-blur z-50 py-4 mb-16 flex justify-between'>
        <div className='font-bold text-lg'>Vineetha Wilson</div>
        <nav className='space-x-6 text-slate-600'>
          <a href='#experience'>Experience</a>
          <a href='#projects'>Projects</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className='mb-28'>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className='text-5xl font-bold mb-6'>
          Senior QA Automation Engineer & QA Team Lead
        </motion.h1>
        <p className='text-xl text-slate-600 max-w-3xl mb-6'>
          Driving quality through scalable automation, CI/CD quality gates, and strong QA leadership. 6+ years across Web, Mobile, API & OTT. Relocating to Dubai, UAE.
        </p>
        <div className='flex gap-4'>
          <a href='#contact' className='bg-gradient-to-r from-brand to-accent text-white px-6 py-3 rounded-lg shadow'>Contact Me</a>
          <a href='/VINEETHA_WILSON_CV.pdf' className='border px-6 py-3 rounded-lg'>Download Resume</a>
        </div>
      </section>

      {/* Timeline Experience */}
      <section id='experience' className='mb-28'>
        <h2 className='text-3xl font-semibold mb-10 flex items-center gap-2'><Briefcase/> Experience</h2>
        <div className='relative border-l pl-8 space-y-10'>
          <div>
            <span className='absolute -left-2 w-4 h-4 bg-accent rounded-full'></span>
            <h3 className='font-semibold'>Team Lead – Senior QA Automation Engineer</h3>
            <p className='text-slate-600'>Tata Elxsi – Zoox | Apr 2025 – Present</p>
            <p className='text-slate-600 mt-2'>Leading team, architecting Playwright framework, owning release quality.</p>
          </div>
          <div>
            <span className='absolute -left-2 w-4 h-4 bg-accent rounded-full'></span>
            <h3 className='font-semibold'>Senior QA Automation Engineer</h3>
            <p className='text-slate-600'>Tata Elxsi – Symplr | 2022 – 2025</p>
            <p className='text-slate-600 mt-2'>Web & mobile automation, CI/CD integration, Azure DevOps.</p>
          </div>
          <div>
            <span className='absolute -left-2 w-4 h-4 bg-accent rounded-full'></span>
            <h3 className='font-semibold'>Senior QA Automation Engineer</h3>
            <p className='text-slate-600'>Tata Elxsi – SonyLiv | 2021 – 2022</p>
            <p className='text-slate-600 mt-2'>OTT automation for Smart TV, Firestick, Android & iOS.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id='projects' className='mb-28'>
        <h2 className='text-3xl font-semibold mb-10 flex items-center gap-2'><Layers/> Featured Projects</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {projects.map(p => (
            <div key={p[0]} className='border rounded-xl p-6 hover:shadow-xl transition'>
              <h3 className='font-semibold mb-2'>{p[0]}</h3>
              <p className='text-slate-600'>{p[1]}</p>
              <span className='inline-block mt-3 text-xs bg-slate-100 px-3 py-1 rounded-full'>Automation</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id='skills' className='mb-28'>
        <h2 className='text-3xl font-semibold mb-10 flex items-center gap-2'><Wrench/> Skills</h2>
        <div className='flex flex-wrap gap-3'>
          {skills.map(s => (
            <span key={s} className='bg-slate-100 px-4 py-2 rounded-full text-sm'>{s}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id='contact' className='mb-12'>
        <h2 className='text-3xl font-semibold mb-6 flex items-center gap-2'><Mail/> Contact</h2>
        <div className='border rounded-xl p-6 bg-gradient-to-r from-slate-50 to-white'>
          <p>📞 UAE: +971 50 191 8369</p>
          <p>✉️ wilson.vineetha9@gmail.com</p>
          <p>🔗 linkedin.com/in/wilson-vineetha</p>
        </div>
      </section>
    </main>
  )
}
