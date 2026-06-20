import SectionShell from "./SectionShell";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiVercel,
  SiRender,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",

    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
    ],
  },
  {
    title: "Backend",

    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-[var(--text-primary)]",
      },
    ],
  },
  {
    title: "Database",

    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ],
  },
  {
    title: "Tools",

    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-[var(--text-primary)]" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Vercel", icon: SiVercel, color: "text-[var(--text-primary)]" },
      { name: "Render", icon: SiRender, color: "text-[var(--text-primary)]" },
    ],
  },
];

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Tech Stack"
      description="Technologies and tools I use to build modern web applications."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="
                rounded-[1.75rem]
                border
                border-[var(--border-soft)]
                bg-[var(--surface-card)]
                p-6
                shadow-[var(--shadow-soft)]
              "
            >
              <h3 className="mb-5 text-xl font-semibold text-[var(--text-primary)]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[var(--border-soft)]
                        bg-[var(--surface-raised)]
                        px-4
                        py-2
                        text-sm
                        transition
                        hover:-translate-y-1
                      "
                    >
                      <Icon size={20} />
                      className={skill.color}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
