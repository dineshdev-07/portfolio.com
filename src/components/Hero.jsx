import { motion } from "framer-motion";
import { BriefcaseBusiness, Download } from "lucide-react";
import img from "../assets/3.png";

export default function Hero({ data }) {
  return (
    <section
      id="home"
      className="scroll-mt-24 px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pb-18 lg:pt-14"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-glass)] p-8 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-10 flex flex-col justify-center"
        >
          <p className="text-5xl font-bold tracking-[-0.04em] text-[var(--text-primary)] sm:text-6xl">
            {data.name}
          </p>

          <p className="mt-4 text-xl font-medium text-[var(--text-secondary)] sm:text-2xl">
            {data.role}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {data.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={data.resumeHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--button-primary)] px-6 py-3 text-sm font-medium text-[var(--button-text)] shadow-[var(--shadow-button)] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              <Download size={16} />
              Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-raised)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition hover:-translate-y-0.5"
            >
              <BriefcaseBusiness size={16} />
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-4 shadow-[var(--shadow-soft)] sm:p-5 flex"
        >
          <div className="relative flex w-full min-h-[340px] overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)]">
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none " />

            <figure className="profile-image overflow-hidden" >
              <img
                src={img}
                alt={data.name}
                className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-300"></img>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
