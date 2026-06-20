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
  SiVercel, SiRender ,
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
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Database",
   
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools",
   
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel},
      { name: "Render", icon: SiRender}
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
          const MainIcon = group.icon;

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
              <div className="mb-5 flex items-center gap-3">
                <MainIcon size={28} />
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {group.title}
                </h3>
              </div>

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
                      <Icon size={18} />
                      <span>{skill.name}</span>
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