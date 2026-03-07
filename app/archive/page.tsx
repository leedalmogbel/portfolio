import Link from "next/link";
import { archiveProjects, mobileProjects } from "@/lib/data";

export const metadata = {
  title: "All Projects — Waleed Almogbel",
};

export default function ArchivePage() {
  const allProjects = [...archiveProjects, ...mobileProjects].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
      <Link
        href="/"
        className="group mb-2 inline-flex items-center gap-1.5 text-sm font-semibold text-green transition-colors hover:text-green"
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

      <h1 className="font-[family-name:var(--font-sora)] text-[42px] font-bold leading-tight tracking-tight text-lightest-slate">
        All Projects
      </h1>

      <table className="mt-12 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-navy-lighter">
            <th className="pb-4 pr-8 text-sm font-semibold text-slate">Year</th>
            <th className="pb-4 pr-8 text-sm font-semibold text-slate">Project</th>
            <th className="hidden pb-4 text-sm font-semibold text-slate md:table-cell">Built with</th>
            <th className="hidden pb-4 text-sm font-semibold text-slate sm:table-cell">Link</th>
          </tr>
        </thead>
        <tbody>
          {allProjects.map((project, i) => (
            <tr
              key={i}
              className="border-b border-navy-light/50 transition-colors hover:bg-navy-light/30"
            >
              <td className="py-4 pr-8 text-slate">{project.year}</td>
              <td className="py-4 pr-8 font-semibold text-lightest-slate">
                {project.title}
              </td>
              <td className="hidden py-4 pr-8 md:table-cell">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-green-tint px-2.5 py-0.5 text-xs font-medium text-green"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="hidden py-4 sm:table-cell">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-light transition-colors hover:text-green"
                  >
                    {project.link.replace(/^https?:\/\//, "")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
