import { motion } from "framer-motion";

const defaultLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioNavbar({
  brand = "Jack",
  links = defaultLinks,
  activeHref = "#home",
  resumeLabel = "Resume",
  resumeHref = "#resume",
}) {
  const handleScroll = (event, href) => {
    if (!href?.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full bg-[#0d1013]/95 px-4 pt-3 backdrop-blur-sm sm:px-6"
    >
      <nav
        aria-label="Portfolio navigation"
        className="mx-auto flex min-h-[54px] w-full max-w-[1240px] items-center justify-between gap-4 rounded-full border border-white/5 bg-[#17191d] px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] sm:px-6 lg:px-7"
      >
        <a
          href="#home"
          onClick={(event) => handleScroll(event, "#home")}
          className="shrink-0 text-[20px] font-semibold tracking-[-0.03em] text-white"
        >
          {brand}
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-3 overflow-x-auto px-2 text-[10px] font-semibold text-[#7c7f86] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-7 lg:gap-9">
          {links.map((link) => {
            const isActive = link.href === activeHref;

            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(event) => handleScroll(event, link.href)}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className={`whitespace-nowrap transition-colors duration-200 ${
                  isActive ? "text-[#f2f4f7]" : "text-[#7c7f86] hover:text-[#d7d9de]"
                }`}
              >
                {link.label}
              </motion.a>
            );
          })}
        </div>

        <motion.a
          href={resumeHref}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex h-8 shrink-0 items-center justify-center rounded-full bg-[#0a6cff] px-4 text-[10px] font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-colors duration-200 hover:bg-[#1e7bff]"
          aria-label={resumeLabel}
          onClick={(event) => handleScroll(event, resumeHref)}
        >
          {resumeLabel}
        </motion.a>
      </nav>
    </motion.header>
  );
}
