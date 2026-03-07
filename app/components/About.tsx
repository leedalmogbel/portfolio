import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0">
      <ScrollReveal>
        <h3 className="sticky top-0 z-10 -mx-6 mb-8 bg-navy/75 px-6 py-5 text-xs font-semibold uppercase tracking-widest text-lightest-slate backdrop-blur lg:-mx-12 lg:px-12">
          About
        </h3>
        <div className="space-y-4 text-base leading-relaxed text-slate">
          <p>
            I&apos;m a full-stack developer with more than seven years of experience building web applications that solve real-world problems. 
            I&apos;’ve had the opportunity to contribute to projects for organizations such as{" "}
            <span className="font-medium text-lightest-slate hover:text-green transition-colors">ABS-CBN</span>,{" "}
            <span className="font-medium text-lightest-slate hover:text-green transition-colors">Globe Telecom</span>,{" "}
            <span className="font-medium text-lightest-slate hover:text-green transition-colors">
              Singapore Airlines
            </span>
            <span className="font-medium text-lightest-slate hover:text-green transition-colors">Terumo</span>,{" "}
            , and{" "}
            <span className="font-medium text-lightest-slate hover:text-green transition-colors">
              Johnson &amp; Johnson
            </span>{" "}
            — from CRMs and e-commerce platforms to VOIP systems and
            mobile application.
          </p>
          <p>
            I work across the entire stack, building modern frontend interfaces with React and Next.js, 
            and developing backend systems with Node.js and Laravel.
            I also use tools like Docker and AWS to deploy and manage scalable applications. 
            In addition to web platforms, I build mobile apps using React Native.
          </p>
          <p>
            I enjoy turning complex requirements into reliable, 
            user-focused software and building systems that help teams work more efficiently. 
            As AI continues to shape the future of software development, 
            I’m also actively exploring ways to learn and integrate AI tools and capabilities into modern applications.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}




