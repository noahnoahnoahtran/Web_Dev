const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "Tech Innovators Inc.",
    description:
      "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "Frontend Engineer",
    company: "Digital Solutions Co.",
    description:
      "Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "2019 — 2020",
    role: "Junior Developer",
    company: "StartUp Labs",
    description:
      "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2018 — 2019",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(var(--primary), 0.8)]" />
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index}>
                {/* Timeline Dot */}
                <div></div>
                {/* Content */}
                <div>
                  <div>
                    <span>{experience.period}</span>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                    <p>{experience.description}</p>
                    <div>
                      {experience.technologies.map((technology, techIndex) => (
                        <span>{technology}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
