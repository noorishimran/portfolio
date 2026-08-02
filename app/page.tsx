import Link from "next/link";
import CertificateViewer from "./components/CertificateViewer";

export default function Home() {
  const projects = [
    {
      name: "VisionMate",
      description:
        "A Flutter-based assistive mobile system with on-device obstacle detection, offline face recognition, voice guidance, and safety alerts for more confident daily navigation.",
      technologies: ["Flutter", "Edge AI", "TensorFlow Lite", "Accessibility"],
      github: "https://github.com/noorishimran/VisionMate",
      demo: "Assistive mobile flow",
    },
    {
      name: "UMT Chatbot",
      description:
        "A campus support chatbot designed to answer student questions, guide study planning, and deliver more context-aware responses for day-to-day academic help.",
      technologies: ["Python", "Flask", "RAG", "Gemini", "Evaluation"],
      github: "https://github.com/noorishimran/Umt-Chatbot",
      demo: "Conversational demo",
    },
    {
      name: "AI Content Forensics System",
      description:
        "An explainable Python app for detecting AI-generated text and presenting the reasoning in a simple, demo-ready format for review and analysis.",
      technologies: ["Python", "Streamlit", "scikit-learn", "CLI", "Explainable AI"],
      github: "https://github.com/noorishimran/AI-Content-Forensics-System",
      demo: "Forensics walkthrough",
    },
    {
      name: "Streamlit First App",
      description:
        "A clean and lightweight Streamlit starter app focused on rapid prototyping and a clear interactive UI for showcasing ideas quickly.",
      technologies: ["Python", "Streamlit", "UI", "Prototyping"],
      github: "https://github.com/noorishimran/streamlit-first-app",
      demo: "Starter template",
    },
    {
      name: "Streamlit YOLOv8 App",
      description:
        "A computer-vision prototype that brings object detection into a simple web interface for visual demos, testing, and experimentation.",
      technologies: ["Python", "Streamlit", "YOLOv8", "Computer Vision"],
      github: "https://github.com/noorishimran/streamlit-yolov8-app",
      demo: "Vision demo",
    },
  ];

  const socials = [
    { label: "Noorish Imran", href: "https://github.com/noorishimran" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/noorish-imran-3a9581291" },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#14081f] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-[-8rem] h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute top-24 right-[-7rem] h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-500/15 blur-3xl" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#14081f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-2xl font-semibold tracking-tight">Noorish Imran</div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">AI Portfolio</p>
          </div>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <Link href="#about" className="transition hover:text-white">
              About
            </Link>
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#projects" className="transition hover:text-white">
              Projects
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="grid gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-400/10 px-4 py-2 text-sm text-rose-200">
              <span className="h-2 w-2 rounded-full bg-rose-300" />
              Building practical AI products, chatbots, and accessibility-focused experiences
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Crafting AI experiences that feel smart, useful, and human.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              I design and build practical AI products that blend innovation with clarity — from accessible assistive tools to polished interactive experiences that are easy to understand and genuinely valuable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-rose-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-300">
                Explore Projects
              </a>
              <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300/40 hover:bg-white/10">
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-rose-300/30 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Education", value: "BSCS, UMT" },
                { label: "Focus", value: "Applied AI, automation, and product interfaces" },
                { label: "Recognition", value: "Harvard HSIL Hackathon, 2nd Runner-Up" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-white/90">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/20 via-transparent to-amber-500/20 blur-2xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-rose-950/20 backdrop-blur-xl">
              <div className="rounded-3xl border border-white/10 bg-[#1b1026] p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-rose-300/80">Featured project</p>
                <div className="mt-3 flex items-center gap-4">
                  <h2 className="text-3xl font-semibold">VisionMate</h2>
                  <span className="rounded-full bg-rose-500/15 px-2.5 py-1 text-xs font-medium text-rose-200">Assistive AI Project</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  VisionMate is an assistive mobile system designed for safer and more accessible navigation through obstacle detection, face recognition, voice guidance, and emergency support.
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    "On-device obstacle detection",
                    "Offline face recognition",
                    "Voice-guided navigation",
                    "Guardian safety sync",
                    "Accessibility-first design",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/80">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-white/10 py-20">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.28em] text-rose-300/80">Core strengths</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">What I bring to a project</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "AI Demo Systems",
                deliverables: [
                  "Explainable AI prototypes for reviews, demos, and stakeholder presentations",
                  "Text-analysis and classification workflows with clear output",
                  "Polished interfaces that make technical ideas easy to understand",
                ],
              },
              {
                title: "Product Interfaces",
                deliverables: [
                  "Streamlit apps for fast interactive demos",
                  "Responsive landing pages and portfolio experiences",
                  "Presentation-friendly flows that feel easy to follow",
                ],
              },
              {
                title: "Modeling & Delivery",
                deliverables: [
                  "Python-based model workflows and lightweight services",
                  "Batch demo pipelines and CLI-based tooling",
                  "Deployment-ready packaging for local and web use",
                ],
              },
              {
                title: "Project Strengths",
                deliverables: [
                  "Accessibility-first design",
                  "Rapid prototyping under real deadlines",
                  "A strong focus on clarity and storytelling",
                ],
              },
            ].map((service, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-rose-300/30">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-rose-300/80">About</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Building AI projects people can trust and understand.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                I enjoy turning technical ideas into tools that feel helpful, fast, and easy to explain. My work blends machine learning, accessible design, and product-minded thinking so the result is not just functional, but professional and clear.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Python",
                "Streamlit",
                "Flask",
                "TensorFlow Lite",
                "scikit-learn",
                "Explainable AI",
                "Rapid Prototyping",
                "Accessible UI",
              ].map((skill) => (
                <div key={skill} className="rounded-2xl border border-rose-300/15 bg-rose-300/10 px-4 py-4 text-sm font-medium text-white/86 backdrop-blur">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-rose-300/80">Portfolio</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Featured Projects</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/65">
              A selected mix of accessibility, AI, and interactive application projects designed to be easy to understand and credible in a professional setting.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <article key={idx} className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-rose-300/30 hover:bg-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">Project {idx + 1}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">Featured</span>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-rose-300/15 bg-rose-300/10 px-3 py-1 text-xs text-rose-100">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm font-medium">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-rose-200 transition hover:text-white">
                    GitHub →
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/70 transition hover:text-white">
                    {project.demo} →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Awards & Recognition</h3>
                <p className="mt-2 text-sm text-white/70">
                  VisionMate — Harvard HSIL Hackathon, 2nd Runner-Up (April 2026). Acknowledged for innovation in assistive AI and accessibility-first engineering.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-rose-500/15 px-3 py-1 text-xs font-semibold text-rose-200 whitespace-nowrap">
                ✓ Award Winner
              </span>
            </div>

            <div className="mt-6">
              <CertificateViewer />
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-rose-300/80">Let&apos;s build together</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Open to AI and product work with real-world impact?</h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                This portfolio highlights Noorish Imran&apos;s work in assistive AI, explainable machine learning, and practical digital experiences.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="https://github.com/noorishimran" target="_blank" rel="noopener noreferrer" className="rounded-full bg-rose-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-300">
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/noorish-imran-3a9581291" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300/40 hover:bg-white/10">
                LinkedIn
              </a>
              <a href="mailto:noorishimran627@gmail.com" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300/40 hover:bg-white/10">
                Email Me
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-center text-sm text-white/45">
          <p>© 2026 Noorish Imran. Built with Next.js and a focus on practical AI products.</p>
        </footer>
      </main>
    </div>
  );
}
