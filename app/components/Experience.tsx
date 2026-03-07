import { experiences } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 pt-24">
      <h3 className="sticky top-0 z-10 -mx-6 mb-8 bg-navy/75 px-6 py-5 text-xs font-semibold uppercase tracking-widest text-lightest-slate backdrop-blur lg:-mx-12 lg:px-12">
        Experience
      </h3>

      <ol className="space-y-2">
        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <li className="group -mx-4 rounded-lg p-4 transition-all duration-200 hover:bg-navy-light/70 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate sm:w-28 sm:pt-1">
                  {exp.period}
                </span>
                <div className="flex-1">
                  <h4 className="font-medium text-light-slate group-hover:text-green transition-colors">
                    {exp.title}{" "}
                    <span className="text-slate">· {exp.company}</span>
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {exp.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
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
    </section>
  );
}
