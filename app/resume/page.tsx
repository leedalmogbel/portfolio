import Link from "next/link";
import DownloadButton from "./DownloadButton";

export const metadata = {
  title: "Resume — Waleed Almogbel",
};

export default function ResumePage() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 font-sans md:px-12 md:py-16 lg:px-16">
      {/* Top bar */}
      <div className="mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-green transition-colors hover:text-green"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Waleed Almogbel
        </Link>
        <DownloadButton />
      </div>

      {/* Resume Document */}
      <div className="resume-card rounded-lg border border-navy-lighter/50 bg-navy-light/30 p-8 shadow-xl md:p-12 lg:p-14">
        {/* Header */}
        <header className="flex flex-col justify-between gap-6 border-b border-navy-lighter pb-8 sm:flex-row">
          <div>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight text-lightest-slate md:text-5xl">
              Waleed Almogbel
            </h1>
            <p className="mt-2 text-base text-slate">
              Full Stack Developer with 7+ years of experience building
              reliable, scalable web &amp; mobile applications
            </p>
          </div>
          <div className="shrink-0 space-y-1.5 text-sm text-slate-light sm:text-right">
            <p>
              <a href="mailto:leedalmogbel@gmail.com" className="transition-colors hover:text-green">
                leedalmogbel@gmail.com
              </a>
            </p>
            <p>
              <a href="https://github.com/leedalmogbel" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-green">
                github.com/leedalmogbel
              </a>
            </p>
            <p>
              <a href="https://linkedin.com/in/leed-almogbel-645a2a52" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-green">
                linkedin.com/in/leed-almogbel
              </a>
            </p>
            <p className="text-slate">Philippines</p>
          </div>
        </header>

        {/* Two-column body */}
        <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:gap-14">
          {/* Left Column - Experience */}
          <div className="lg:w-[62%]">
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-green">
              Relevant Experience
            </h2>

            <div className="space-y-7">
              {/* Rapid App Werks */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-lightest-slate">Software Developer (Consultant)</span>
                  <span className="text-sm text-slate">·</span>
                  <span className="text-sm font-semibold text-light-slate">Rapid App Werks</span>
                  <span className="ml-auto text-xs text-slate">Feb 2025 — Present</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Building and maintaining enterprise low-code applications on the Mendix platform for clients including Terumo and Johnson &amp; Johnson</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Designing domain models, microflows, and nanoflows for data processing and business logic</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Integrated external services and APIs with Mendix applications; collaborated on enterprise projects</span></li>
                </ul>
              </div>

              {/* MacGyver Consulting */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-lightest-slate">Software Developer (Consultant)</span>
                  <span className="text-sm text-slate">·</span>
                  <span className="text-sm font-semibold text-light-slate">MacGyver Consulting</span>
                  <span className="ml-auto text-xs text-slate">Mar 2024 — Dec 2024</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Full-stack development using React, Node.js, WordPress, and Laravel</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Managed and synchronized data across multiple databases; integrated BreadStack services into e-commerce platforms</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Implemented designs from Figma mockups and optimized projects for mobile responsiveness</span></li>
                </ul>
              </div>

              {/* Netfone VOIP */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-lightest-slate">Software Developer</span>
                  <span className="text-sm text-slate">·</span>
                  <span className="text-sm font-semibold text-light-slate">Netfone VOIP Services (NZ)</span>
                  <span className="ml-auto text-xs text-slate">Nov 2023 — Mar 2024</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Backend development using Laravel 8–10, GraphQL, Docker, and AWS</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Managed data across multiple databases; part of VOIP integration, CRM, and fuel system digitalization</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Worked with unit testing to secure endpoints and functionality</span></li>
                </ul>
              </div>

              {/* EIEV */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-lightest-slate">Web Developer</span>
                  <span className="text-sm text-slate">·</span>
                  <span className="text-sm font-semibold text-light-slate">Emirates Intl Endurance Village</span>
                  <span className="ml-auto text-xs text-slate">Feb 2022 — Nov 2023</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Developed dynamic registration system for endurance horse ride events; integrated with third-party APIs</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Used MERN stack and later migrated to PHP (Laravel); created user-friendly site listing Arabian horses</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Developed internal tools and APIs; built a cross-platform mobile application</span></li>
                </ul>
              </div>

              {/* Decenternet */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-lightest-slate">Senior Software Developer</span>
                  <span className="text-sm text-slate">·</span>
                  <span className="text-sm font-semibold text-light-slate">Decenternet</span>
                  <span className="ml-auto text-xs text-slate">Jan 2020 — Jan 2022</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Led backend development with Node.js, Express, and NoSQL database</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Contributed to frontend with React.js; designed and exposed APIs for third-party applications</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Integrated Coin Market API for real-time cryptocurrency data</span></li>
                </ul>
              </div>

              {/* StarkDev / BlueRock */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-lightest-slate">Software Developer</span>
                  <span className="text-sm text-slate">·</span>
                  <span className="text-sm font-semibold text-light-slate">StarkDev Solutions / BlueRock Digital</span>
                  <span className="ml-auto text-xs text-slate">Dec 2020 — Jan 2022</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Integrated CRM tools (HubSpot) for user information and shipping details</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Created middleware for seamless integration between Shopify and HubSpot</span></li>
                </ul>
              </div>

              {/* Stratpoint */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-lightest-slate">Senior Software Engineer</span>
                  <span className="text-sm text-slate">·</span>
                  <span className="text-sm font-semibold text-light-slate">Stratpoint</span>
                  <span className="ml-auto text-xs text-slate">Oct 2019 — Nov 2020</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Built customized CMS for ABS-CBN, the top TV network in the Philippines</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Engineered bespoke CRM for Globe Telecom; backend with Node.js, Express, React, MySQL, AWS (RDS, Lambda, Cognito, S3, CloudWatch)</span></li>
                </ul>
              </div>

              {/* Openovate Labs */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-lightest-slate">Full Stack Developer</span>
                  <span className="text-sm text-slate">·</span>
                  <span className="text-sm font-semibold text-light-slate">Sterling Technologies (Openovate Labs)</span>
                  <span className="ml-auto text-xs text-slate">Oct 2017 — Oct 2019</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Spearheaded e-commerce, job hunting, and cashback sites (Dealcha, Buzzbee) in Thailand</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" /><span>Web backend with OOP, PHP, Node.js, React, React Native, MySQL, AWS S3</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Skills, Projects, Education */}
          <div className="lg:w-[38%]">
            {/* Skills */}
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-green">
              Skills
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-lightest-slate">Programming Languages</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  JavaScript (ES2015+), TypeScript, PHP, HTML, CSS, GraphQL
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-lightest-slate">Libraries &amp; Frameworks</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  React, Next.js, Node.js, Express, Laravel, NestJS, React Native, Tailwind CSS, Framer Motion, Flutter
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-lightest-slate">Tools &amp; Platforms</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  Git, GitHub, Docker, AWS (S3, RDS, Lambda, Cognito, CloudWatch), Supabase, Firebase, MySQL, MongoDB, Figma, Vercel, WordPress
                </p>
              </div>
            </div>

            {/* Selected Projects */}
            <h2 className="mb-6 mt-10 text-sm font-bold uppercase tracking-widest text-green">
              Selected Projects
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-lightest-slate">Singapore Airlines</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  Enterprise-level airline website delivering seamless booking and travel experience for millions of users
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-lightest-slate">Hilton Asia Pacific</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  Corporate and reservation platform handling hotel bookings across the Asia Pacific region
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-lightest-slate">EIEV Registration System</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  End-to-end event management with web, mobile, and on-site kiosk integration for equestrian events in the UAE
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-lightest-slate">Doshmate</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  Personal finance tracker built with Next.js and Supabase, live at doshmate.leedalmogbel.com
                </p>
              </div>
            </div>

            {/* Education */}
            <h2 className="mb-6 mt-10 text-sm font-bold uppercase tracking-widest text-green">
              Education
            </h2>

            <div>
              <h3 className="text-sm font-semibold text-lightest-slate">Pamantasan ng Cabuyao</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate">
                BS in Computer Science
              </p>
              <p className="text-xs text-slate">2009 — 2013</p>
            </div>

            {/* Interests */}
            <h2 className="mb-6 mt-10 text-sm font-bold uppercase tracking-widest text-green">
              Interests
            </h2>

            <p className="text-sm leading-relaxed text-slate">
              Exploring new technologies, AI &amp; machine learning, open-source development, improving 1% everyday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
