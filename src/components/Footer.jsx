export default function Footer({ name }) {
  return (
    <footer className="relative z-10 px-5 pb-10 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-[var(--border-soft)] pt-6 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
        
        <p>© 2026 Dinesh. All rights reserved.</p>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:-translate-y-0.5"
        >
          Download Resume
        </a>

      </div>
    </footer>
  );
} 