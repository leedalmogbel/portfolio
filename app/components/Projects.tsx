import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 pt-24">
      <h3 className="sticky top-0 z-10 -mx-6 mb-8 bg-navy/75 px-6 py-5 text-xs font-semibold uppercase tracking-widest text-lightest-slate backdrop-blur lg:-mx-12 lg:px-12">
        Projects
      </h3>

      <ol className="space-y-2">
        {featuredProjects.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <li className="group -mx-4 rounded-lg p-4 transition-all duration-200 hover:bg-navy-light/70 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate sm:w-28 sm:pt-1">
                  {project.role}
                </span>
                <div className="flex-1">
                  <h4 className="font-medium text-light-slate group-hover:text-green transition-colors">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                      >
                        {project.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {project.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-green-tint px-2.5 py-0.5 text-xs font-medium text-green"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ol>

      <ScrollReveal delay={0.1}>
        <Link
          href="/archive"
          className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-light-slate transition-colors hover:text-green"
        >
          View Full Project Archive
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </ScrollReveal>
    </section>
  );
}
