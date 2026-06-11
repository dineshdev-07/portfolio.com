import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

export default function About({ summary }) {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Built on strong fundamentals and a learner's mindset."
      // description="A concise snapshot pulled directly from the resume."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-8 shadow-[var(--shadow-soft)] sm:p-10"
      >
        <p className="max-w-5xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg ml-5">
          {summary}
        </p>
      </motion.div>
    </SectionShell>
  );
}
