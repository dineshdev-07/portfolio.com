import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionShell from "./SectionShell";
import { useState } from "react";

function TimelineCard({ item, index }) {
  const hasCertificate = Boolean(item.certificateHref);
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-soft)]"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_180px] lg:items-center">
        <div>
          <div className="mb-4 inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-primary)]">
            {item.type}
          </div>

          <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
            {item.title}
          </h3>

          <p className="mt-1 text-lg text-[var(--text-secondary)]">
            {item.organization}
          </p>

          {item.description ? (
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              {item.description}
            </p>
          ) : null}
        </div>

        <div className="flex items-center justify-center gap-4 lg:justify-end">
          {hasCertificate ? (
            <button
              onClick={() => setShowCertificate(!showCertificate)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-raised)] text-[var(--text-primary)]"
            >
              <Award size={20} />
            </button>
          ) : null}

          <p className="min-w-[72px] text-left text-sm font-medium text-[var(--text-muted)] lg:text-right">
            {item.period}
          </p>
        </div>
      </div>
      {showCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowCertificate(false)}
        >
          <img
            src={item.certificateHref}
            alt="Certificate"
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </motion.article>
  );
}

export default function Experience({ education, experience }) {
  const timelineItems = [...education, ...experience];

  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Education & Experience "
      // description="A minimal overview of internship, workshop, and academic background."
    >
      <div className="relative grid gap-5 before:absolute before:left-4 before:top-0 before:hidden before:h-full before:w-px before:bg-[var(--border-soft)] lg:before:block">
        {timelineItems.map((item, index) => (
          <div key={`${item.title}-${item.organization}`} className="lg:pl-12">
            <TimelineCard item={item} index={index} />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
