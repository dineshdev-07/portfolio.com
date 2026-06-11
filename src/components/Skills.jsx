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
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript ES6",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-[var(--text-primary)]",
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-sky-500",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-600",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-[var(--text-primary)]",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-500",
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.03,
              }}
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-[var(--border-soft)]
                bg-[var(--surface-card)]
                p-6
                text-center
                shadow-sm
              "
            >
              <Icon
                className={`${skill.color} mb-3`}
                size={38}
              />

              <span
                className="
                  text-base
                  font-medium
                 
                "
              >
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}