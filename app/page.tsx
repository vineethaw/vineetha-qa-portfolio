'use client'
import { motion } from 'framer-motion'

export default function Home() {
  const projects = [
    { title: 'Playwright Automation Framework', desc: 'Enterprise Playwright framework with CI/CD integration.', tech: 'Playwright, TypeScript, Jenkins' },
    { title: 'OTT Automation Suite', desc: 'Automation for Smart TV, Firestick, Android TV, Apple TV.', tech: 'Falcon Eye, Selenium' },
    { title: 'API Automation Platform', desc: 'Scalable API automation for enterprise systems.', tech: 'ReadyAPI, Postman' },
    { title: 'WebDriverIO E2E Suite', desc: 'End-to-end web & mobile automation.', tech: 'WebDriverIO, TypeScript' },
  ]

  return (
    <div className="text-white min-h-screen">
      <section className="h-screen flex items-center px-10 bg-gradient-to-b from-black to-gray-900">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-red-600">
            <img src="/profile.jpg" alt="Vineetha Wilson" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-6xl font-bold">Vineetha Wilson</h1>
            <p className="text-xl text-gray-300 mt-2">Senior QA Automation Engineer | QA Team Lead | SDET</p>
            <p className="text-gray-400 mt-4 max-w-2xl">
              6+ years of experience in Playwright, Selenium, WebDriverIO, API Automation, CI/CD, and OTT testing. Actively seeking Senior / Lead QA Automation roles in Dubai, UAE.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#contact" className="bg-white text-black px-6 py-2 rounded font-semibold">Hire Me</a>
              <a href="/VINEETHA_WILSON_CV.pdf" className="bg-gray-700 px-6 py-2 rounded">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {projects.map(p => (
            <div key={p.title} className="bg-gray-900 p-5 rounded-lg hover:scale-105 transition">
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{p.desc}</p>
              <p className="text-red-500 text-xs">{p.tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-10 py-20 bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p>📞 UAE: +971 50 191 8369</p>
        <p>📞 India: +91 85004 87440</p>
        <p>✉️ wilson.vineetha9@gmail.com</p>
        <p>🔗 LinkedIn: linkedin.com/in/wilson-vineetha</p>
      </section>
    </div>
  )
}
