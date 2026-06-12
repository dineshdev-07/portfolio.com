import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import SectionShell from "./SectionShell";
import img from "../assets/output.png";

export default function Projects({ projects }) {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Selected work extracted from the resume."
      // description="Each card uses only the details explicitly mentioned in the PDF."
    >
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-7 shadow-[var(--shadow-soft)] sm:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--text-primary)]">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  {project.description}
                </p>

                <div className="flex items-start gap-3 mt-5">
                  {project.links.length ? (
                    project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-raised)] px-4 py-2 text-sm text-[var(--text-primary)] transition hover:-translate-y-0.5"
                      >
                        {link.label}
                        <ArrowUpRight size={15} />
                      </a>
                    ))
                  ) : (
                    <span className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-raised)] px-4 py-2 text-sm text-[var(--text-muted)]">
                      No external links listed
                    </span>
                  )}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-raised)] p-4">
                <div className="flex min-h-[220px] items-center justify-center rounded-[1.35rem] border border-dashed border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.05))] text-center">
                  <img style={{ borderRadius: "15px" }} src={img} alt="" />
                  {/* <div className="px-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--surface-card)] text-[var(--text-muted)] shadow-[var(--shadow-soft)]">
                      <ImageIcon size={24} />
                    </div>
                    <p className="mt-4 text-lg font-medium text-[var(--text-primary)]">
                      Project Output
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                      Add a screenshot or preview image here.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm text-[var(--text-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <ul className="mt-6 grid gap-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-raised)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
