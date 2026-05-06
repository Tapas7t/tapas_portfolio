/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Layout,
  Linkedin,
  Mail,
  Server,
  Terminal,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 font-sans relative z-0">
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))]"></div>
      <Navbar />
      
      <main className="mx-auto w-full max-w-[1400px] px-6 pt-32 pb-24 xl:px-32 flex flex-col gap-32">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg text-slate-50 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between p-6 xl:px-32">
        <a href="#" className="font-mono text-lg font-bold tracking-tighter text-indigo-400 hover:text-indigo-300 transition-colors">
          Portfolio
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="flex min-h-[70vh] flex-col justify-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm text-indigo-400 mb-4 tracking-tight">Hi, it's me,</p>
        <h1 className="text-5xl font-black tracking-tight sm:text-7xl text-slate-50 mb-4">
          Tapas Karmakar.
        </h1>
        <h2 className="text-[28px] not-italic font-bold tracking-tight text-slate-400 mb-6 leading-tight max-w-4xl" aria-label="Turning ideas into scalable web applications while exploring the power of AI.">
          {"Turning ideas into scalable web applications while exploring the power of AI.".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01, delay: 0.6 + index * 0.03 }}
              aria-hidden="true"
            >
              {char}
            </motion.span>
          ))}
        </h2>
        <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
          I'm a BSc IT graduate from India specializing in full-stack web development and exploring
          the fascinating world of AI/ML. Constantly learning, building, and growing my technical skills.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex gap-4 font-mono text-sm"
      >
        <a
          href="#projects"
          className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white hover:bg-indigo-600 transition-colors shadow-sm shadow-indigo-500/20"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-lg border-2 border-slate-700 px-6 py-3 font-medium text-slate-300 hover:bg-slate-800 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-8 scroll-mt-32"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-bold font-mono tracking-tight text-slate-200">
          <span className="text-indigo-400 mr-2">01.</span>About Me
        </h3>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed group">
        <div className="space-y-4">
          <p>
            Hello! My name is Tapas, and I'm deeply passionate about creating digital experiences that live on the internet. 
            My journey into tech started with a curiosity about how websites work, which quickly evolved into a 
            serious pursuit of full-stack development.
          </p>
          <p>
            Having completed my BSc in Information Technology, I am now dedicating all my free time to 
            mastering modern web technologies and plunging into Artificial Intelligence and Machine Learning.
            I strongly believe in a growth mindset—consistency and compounding effort are my core philosophies.
          </p>
          <p>
            When I'm not coding, I'm usually reading tech blogs, exploring open-source projects, 
            or thinking about the next big idea to build.
          </p>
        </div>
        
        <div className="relative group mx-auto md:mx-0 w-3/4 md:w-full max-w-sm">
          {/* Decorative frame */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border-2 border-indigo-500/30 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          {/* Main image placeholder / styling frame */}
          <div className="relative aspect-square rounded-xl bg-slate-900 overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-300"></div>
            <div className="flex h-full items-center justify-center font-mono text-sm text-indigo-400/70">
              [Profile Image Placeholder]
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="mb-4 h-6 w-6 text-indigo-500" />,
    items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3 / Tailwind"]
  },
  {
    category: "Backend",
    icon: <Server className="mb-4 h-6 w-6 text-indigo-500" />,
    items: ["Node.js", "Express.js", "Python", "Flask"]
  },
  {
    category: "Database & Tools",
    icon: <Database className="mb-4 h-6 w-6 text-indigo-500" />,
    items: ["MongoDB", "Git & GitHub", "REST APIs", "Postman"]
  },
  {
    category: "AI / ML",
    icon: <Cpu className="mb-4 h-6 w-6 text-indigo-500" />,
    items: ["Python Data Stack", "Basic Machine Learning", "Scikit-Learn", "Pandas & NumPy"]
  }
];

function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-8 scroll-mt-32"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-bold font-mono tracking-tight text-slate-200">
          <span className="text-indigo-400 mr-2">02.</span>Skills & Technologies
        </h3>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group hover:shadow-lg hover:shadow-indigo-500/5 rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="text-indigo-400 mb-4">{skillGroup.icon}</div>
            <h4 className="font-bold text-lg mb-4 text-slate-200">{skillGroup.category}</h4>
            <ul className="space-y-2 text-sm text-slate-400 font-mono">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="flex items-center before:content-['▹'] before:mr-2 before:text-indigo-400">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

const projects = [
  {
    title: "Full Stack eCommerce Platform",
    description: "A comprehensive shopping application featuring user authentication, product catalog, cart management, and secure checkout. Built from scratch with a robust REST API.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: true
  },
  {
    title: "AI Image Analyzer",
    description: "A Python/Flask web app integrating machine learning models to classify and analyze user-uploaded images. Showcases ML model consumption within a web context.",
    tech: ["Python", "Flask", "Scikit-Learn", "HTML/CSS"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: true
  },
  {
    title: "RESTful Task Management API",
    description: "A scalable backend service for complex task tracking. Features robust validation, JWT authentication, rate limiting, and comprehensive error handling.",
    tech: ["Node.js", "Express", "MongoDB", "Jest"],
    github: "https://github.com",
    live: "",
    featured: true
  }
];

function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-12 scroll-mt-32"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-2xl font-bold font-mono tracking-tight text-slate-200">
          <span className="text-indigo-400 mr-2">03.</span>Projects
        </h3>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Project Image Placeholder */}
            <div className="relative w-full md:w-3/5 group">
              <a href={project.live || project.github} target="_blank" rel="noreferrer" className="block relative aspect-video rounded-xl bg-slate-900 overflow-hidden border border-slate-800 shadow-sm mix-blend-normal">
                 <div className="absolute inset-0 bg-indigo-500/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                 <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-slate-500">
                    <Terminal className="h-12 w-12 opacity-30 mb-2 text-indigo-400" />
                    <span className="font-mono text-sm opacity-50">[Project Screenshot]</span>
                 </div>
              </a>
            </div>

            {/* Project Content */}
            <div className={`relative w-full md:w-2/5 md:absolute md:top-1/2 md:-translate-y-1/2 flex flex-col pointer-events-none ${idx % 2 === 1 ? 'md:left-0 md:items-start text-left' : 'md:right-0 md:items-end md:text-right'}`}>
              <p className="font-mono text-xs font-bold text-indigo-400 mb-2">Featured Project</p>
              <h4 className="text-2xl font-bold text-slate-200 mb-6 pointer-events-auto">
                <a href={project.live || project.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
                  {project.title}
                </a>
              </h4>
              <div className="bg-slate-900 rounded-xl p-6 shadow-xl relative z-10 pointer-events-auto border border-slate-800">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <ul className={`mt-6 flex flex-wrap gap-4 font-mono text-xs text-slate-400 pointer-events-auto ${idx % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                {project.tech.map((t, i) => (
                  <li key={i} className="whitespace-nowrap">{t}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-4 text-slate-400 pointer-events-auto">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link" className="hover:text-indigo-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="External Link" className="hover:text-indigo-400 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-8 max-w-3xl mx-auto w-full text-center items-center py-12 scroll-mt-32"
    >
      <p className="font-mono text-sm text-indigo-400 mb-2 tracking-tight">04. My Journey</p>
      <h3 className="text-3xl font-black tracking-tight text-slate-200 mb-6">
        Learning & Growth
      </h3>
      
      <p className="text-slate-400 leading-relaxed mb-8">
        My path in technology has been heavily self-driven. Having completed my BSc IT degree, I now focus
        my efforts entirely on intense personal study and real-world project building. 
      </p>

      <ul className="text-left w-full max-w-xl mx-auto space-y-2">
        <motion.li 
          whileHover={{ x: 8 }}
          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all"
        >
          <div className="mt-1 text-indigo-500">
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-2">
              <h4 className="font-bold text-lg text-slate-200 group-hover:text-indigo-400 transition-colors">Current Focus: Deepening AI/ML</h4>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Taking specialized courses in Python and Machine Learning, focusing on practical implementation of models alongside robust backends.</p>
          </div>
        </motion.li>
        
        <motion.li 
          whileHover={{ x: 8 }}
          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all"
        >
          <div className="mt-1 text-indigo-500">
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-2">
              <h4 className="font-bold text-lg text-slate-200 group-hover:text-indigo-400 transition-colors">Full Stack Mastery</h4>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Building complex, data-driven applications utilizing the MERN stack while experimenting with different architectural patterns.</p>
          </div>
        </motion.li>

        <motion.li 
          whileHover={{ x: 8 }}
          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all"
        >
          <div className="mt-1 text-indigo-500">
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-2">
              <h4 className="font-bold text-lg text-slate-300 group-hover:text-slate-200 transition-colors">University Studies (Completed)</h4>
              <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full shadow-sm">BSc IT</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Graduated with strong foundational knowledge in computer science principles, database systems, and networking.</p>
          </div>
        </motion.li>
      </ul>
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-6 max-w-2xl mx-auto items-center py-24 w-full scroll-mt-32"
    >
      <div className="text-center w-full">
        <p className="font-mono text-sm text-indigo-400 mb-2 tracking-tight">05. What's Next?</p>
        <h3 className="text-4xl font-black tracking-tight text-slate-200 mb-6">
          Get In Touch
        </h3>
        <p className="text-slate-400 leading-relaxed mb-10 w-full px-4 text-center">
          I'm currently looking for new opportunities, internships, or entry-level roles where I can contribute
          to meaningful projects while continuing to learn. 
        </p>
      </div>

      <form className="w-full max-w-md flex flex-col gap-4 bg-slate-900/50 p-8 rounded-2xl shadow-lg border border-slate-800" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
          <input type="text" id="name" placeholder="John Doe" className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all w-full text-sm text-slate-200 placeholder:text-slate-600" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
          <input type="email" id="email" placeholder="john@example.com" className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all w-full text-sm text-slate-200 placeholder:text-slate-600" />
        </div>
        <div className="flex flex-col gap-1.5 mb-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
          <textarea id="message" rows={4} placeholder="Hi Tapas, I'd like to discuss..." className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all w-full resize-none text-sm text-slate-200 placeholder:text-slate-600"></textarea>
        </div>
        <button type="button" className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-md text-white font-medium py-3 transition-colors">
          Send Message
        </button>
      </form>
      
      <div className="mt-8 flex gap-6 text-slate-400">
         <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 hover:-translate-y-1 transition-all p-2" aria-label="GitHub">
            <Github className="w-6 h-6" />
         </a>
         <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 hover:-translate-y-1 transition-all p-2" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
         </a>
         <a href="mailto:tapaskarmakar676@gmail.com" className="hover:text-indigo-400 hover:-translate-y-1 transition-all p-2" aria-label="Email">
            <Mail className="w-6 h-6" />
         </a>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-center py-8 font-mono text-xs text-slate-400 flex flex-col items-center gap-2 mt-12 w-full">
      <a href="https://github.com" className="hover:text-indigo-400 transition-colors">
        Designed & Built by Tapas Karmakar
      </a>
      <p>BSc IT • Full Stack • AI/ML</p>
    </footer>
  );
}

