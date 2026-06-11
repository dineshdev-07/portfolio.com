import { useState } from "react";
import { Menu, Moon, SunMedium, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function scrollToSection(event, href, closeMenu) {
  if (!href.startsWith("#")) return;

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();
  closeMenu?.();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ brand, links, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <nav className="flex items-center justify-between rounded-full border border-[var(--border-soft)] bg-[var(--surface-glass)] px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:px-6">
            <h1 className=" text-sm font-medium tracking-[0.45em] uppercase text-[var(--text-primary)]">
              PORTFOLIO
            </h1>
            <div className="hidden items-center gap-6 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) =>
                    scrollToSection(event, link.href, closeMenu)
                  }
                  className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-raised)] text-[var(--text-primary)] transition hover:scale-[1.03]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <SunMedium size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-raised)] text-[var(--text-primary)] transition hover:scale-[1.03] md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-[82%] max-w-[320px] bg-white px-6 pb-8 pt-6 text-black shadow-2xl dark:bg-[#0f172a] dark:text-white"
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="text-base font-semibold tracking-[0.18em]">
                  {brand}
                </p>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-current transition hover:bg-black/5 dark:hover:bg-white/10"
                  aria-label="Close navigation menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.28,
                      delay: 0.05 + index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={(event) =>
                      scrollToSection(event, link.href, closeMenu)
                    }
                    className="rounded-2xl px-3 py-2 text-[1.65rem] font-medium tracking-[-0.04em] transition hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
