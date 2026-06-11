import { motion } from "framer-motion";

export default function SectionShell({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-28 px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 max-w-3xl"
          >
            {eyebrow ? (
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-[var(--text-muted)]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--text-primary)] sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
                {description}
              </p>
            ) : null}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
