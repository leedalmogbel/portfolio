import { archiveProjects, mobileProjects } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Archive() {
  const allArchive = [...archiveProjects, ...mobileProjects].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  return (
    <section className="scroll-mt-24 pt-24 pb-24">
      <ScrollReveal>
        <h3 id="archive" className="sticky top-0 z-10 -mx-6 mb-8 scroll-mt-24 bg-navy/75 px-6 py-5 text-xs font-semibold uppercase tracking-widest text-lightest-slate backdrop-blur lg:-mx-12 lg:px-12">
          All Projects
        </h3>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-navy-lighter">
                <th className="pb-3 pr-4 text-xs font-semibold uppercase tracking-widest text-slate">
                  Year
                </th>
                <th className="pb-3 pr-4 text-xs font-semibold uppercase tracking-widest text-slate">
                  Project
                </th>
                <th className="hidden pb-3 pr-4 text-xs font-semibold uppercase tracking-widest text-slate sm:table-cell">
                  Role
                </th>
                <th className="hidden pb-3 text-xs font-semibold uppercase tracking-widest text-slate md:table-cell">
                  Tech
                </th>
              </tr>
            </thead>
            <tbody>
              {allArchive.map((project, i) => (
                <tr
                  key={i}
                  className="border-b border-navy-light transition-colors hover:bg-navy-light/50"
                >
                  <td className="py-3 pr-4 text-slate">{project.year}</td>
                  <td className="py-3 pr-4 font-medium text-light-slate">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </td>
                  <td className="hidden py-3 pr-4 text-slate sm:table-cell">
                    {project.role}
                  </td>
                  <td className="hidden py-3 md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-navy-lighter/50 px-2 py-0.5 text-xs text-slate-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>
    </section>
  );
}
