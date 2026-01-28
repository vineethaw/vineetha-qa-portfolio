'use client'
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    { title: "Playwright Automation Framework", desc: "Enterprise-grade Playwright framework with CI/CD integration for Web apps.", tech: "Playwright, TypeScript, Jenkins" },
    { title: "OTT Automation Suite", desc: "Cross-device automation for Smart TV, Firestick, Android TV, Apple TV.", tech: "Falcon Eye, Selenium, OTT" },
    { title: "API Automation Platform", desc: "Scalable API automation using ReadyAPI and Postman collections.", tech: "ReadyAPI, Postman, CI" },
    { title: "WebDriverIO E2E Suite", desc: "End-to-end automation for enterprise web & mobile apps.", tech: "WebDriverIO, TypeScript" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="h-screen flex items-center px-10">
        <div className="flex gap-10 items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-red-600">
            <img src="/profile.jpg" alt="Vineetha Wilson" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-6xl font-bold">Vineetha Wilson</h1>
            <p className="text-gray-300 text-xl">Senior QA Automation Engineer | QA Team Lead</p>
          </div>
        </div>
      </section>

      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {projects.map(p => (
            <div key={p.title} className="bg-gray-900 p-5 rounded-lg">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
              <p className="text-red-500 text-xs">{p.tech}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
