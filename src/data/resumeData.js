import sdlc from '../assets/sdlc.png'
import futurik from '../assets/Futurik.png'



export const resumeData = {
  name: "Dinesh M",
  role: "Full-Stack MERN Developer",
  tagline:
    "Computer Science graduate focused on modern web development, problem-solving, and building clean digital experiences with a mindset of continuous learning and growth.",

  summary:
    "Detail-oriented Computer Science graduate with strong analytical and problem-solving abilities and a passion for technology. Focused on developing scalable, user-centric solutions while maintaining clean and efficient code. Committed to continuous learning, professional growth, and contributing effectively to dynamic development teams.",
  location: "Madurai",
  resumeHref: "/resume.pdf",
  stats: [
    { label: "Skill Groups", value: "5" },
    { label: "Projects", value: "1" },
    { label: "Location", value: "Madurai" },
  ],
  skills: [
    {
      title: "Language",
      items: ["JavaScript (ES6)"],
    },
    {
      title: "Frontend",
      items: ["HTML5", "CSS3", "React.js", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      items: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platform",
      items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"],
    },
  ],
  projects: [
    {
      title:
        "Smart Expiry Aware Dynamic Pricing System for E-Commerce Inventory Management",
      description:
        "Developed a MERN-based dynamic pricing engine integrating expiry, base discount, new user, and loyalty offers with automated real-time calculations.",
      highlights: [
        "Implemented intelligent offer stacking with discount caps for normal and plus members.",
        "Built rule-based discount validation across Product Card, Product Details, and Cart modules.",
      ],
      stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      links: [
        { label: "GitHub", href: "https://github.com/your-username/project" },
        { label: "Live Demo", href: "https://neomart-ecommerce.vercel.app/" },
      ],
    },
  ],
  education: [
    {
      title: "Bachelor of Engineering in Computer Science",
      organization: "RVS School of Engineering & Technology, Dindigul",
      period: "2022 - 2026",
      cgpa: "7.5",
      type: "Education",
    },
  ],
  experience: [
    {
      title: "Mern Stack Development",
      organization: "SDLC Center",
      period: "6 Months",
      type: "Experience",
      description: "Completed a 6-month MERN stack internship, developing modern web applications and RESTful APIs.",
      certificateHref:sdlc,
    },
    {
      title: "Web Development Intern",
      organization: "Futurik Technologies",
      period: "1 Month",
      type: "Experience",
      description: "Hands-on internship experience in web development.",
      certificateHref: futurik,
    },
  ],

  contact: [
    {
      label: "Email",
      value: "dineshdevtech@gmail.com",
      href: "mailto:dineshdevtech@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 78100 70599",
      href: "tel:+91 7810070599",
    },
    {
      label: "Social",
      links: [
        { label: "GitHub", href: "https://github.com/dineshdev-07" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/dinesh-m-001229406/" },
      ],
    },
  ],
};
