import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Link2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import SectionShell from "./SectionShell";

const iconMap = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin,
  Social: Globe,
};

const accentMap = {
  Email: "bg-blue-100 text-blue-600",
  Phone: "bg-green-100 text-green-600",
  Location: "bg-violet-100 text-violet-600",
  Social: "bg-slate-100 text-slate-700",
};

const WEB3FORMS_ACCESS_KEY = "1bb83ad1-0aee-47f6-9952-8c5256a3f326";

export default function Contact({ contact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
    showToast: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      loading: true,
      error: "",
      success: "",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Portfolio Contact Message",
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        loading: false,
        error: "",
        success: "Message sent successfully.",
        showToast: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus((prev) => ({
          ...prev,
          success: "",
          showToast: false,
        }));
      }, 5000);
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message || "Something went wrong.",
        success: "",
        showToast: false,
      });
    }
  }

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Get In Touch"
      description="Open to opportunities, internships, and meaningful collaborations."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-soft)] sm:p-7"
        >
          <div className="flex h-full flex-col">
            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--text-primary)] sm:text-3xl">
              Let's Connect
            </h3>

            <p className="mt-5 max-w-fit text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
             Whether you have a project idea, internship opportunity, or just want to connect, I'd love to hear from you.
            </p>

            <div className="mt-7 space-y-4">
              {contact.map((item, index) => {
                const Icon = iconMap[item.label] || Mail;
                const accent =
                  accentMap[item.label] || "bg-slate-100 text-slate-600";

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-[1.5rem] p-2 transition hover:bg-[var(--surface-raised)]"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accent}`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)]">
                          {item.label}
                        </p>

                        {item.links ? (
                          <div className="mt-3 flex flex-wrap gap-2.5">
                            {item.links.map((link, idx) => (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-raised)] px-4 py-2 text-sm text-[var(--text-primary)] transition hover:-translate-y-0.5"
                              >
                                {idx === 0 ? (
                                  <Globe size={15} />
                                ) : (
                                  <Link2 size={15} />
                                )}
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <p className="mt-1 break-words text-sm text-[var(--text-secondary)] sm:text-base">
                            {item.value}
                          </p>
                        )}
                      </div>

                      {item.href ? (
                        <a href={item.href} className="mt-1">
                          <ArrowUpRight
                            size={16}
                            className="text-[var(--text-muted)] transition hover:translate-x-0.5 hover:-translate-y-0.5"
                          />
                        </a>
                      ) : null}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.55,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-soft)] sm:p-7"
        >
          <div className="flex h-full flex-col">
            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--text-primary)] sm:text-3xl">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-1 flex-col space-y-4"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-raised)] px-5 py-3.5 text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-slate-300"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-raised)] px-5 py-3.5 text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-slate-300"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="min-h-[130px] w-full resize-none rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-raised)] px-5 py-3.5 text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-slate-300"
                  required
                />
              </div>

              {status.error ? (
                <p className="text-sm text-red-500">{status.error}</p>
              ) : null}

              {status.success ? (
                <p className="text-sm text-green-600">{status.success}</p>
              ) : null}

              <div className="mt-auto pt-2">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,#2d3748_0%,#111827_100%)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.22)] disabled:cursor-not-allowed disabled:opacity-70 dark:border-white/10 dark:bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] dark:text-[#07111f] "
                >
                  <Send size={16} />
                  {status.loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
  {
    status.showToast ? (
      <div className="fixed bottom-6 right-6 z-50 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-card)] px-5 py-4 text-sm font-medium text-green-600 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        {status.success}
      </div>
    ) : null;
  }
}
