// ==============================
// Projects Data
// ==============================
import temperanceIcon from "../assets/project1.webp";
import socialCollateralIcon from "../assets/project2.webp";
import pph21Icon from "../assets/project3.webp";
import iftarevent from "../assets/project4.webp";
import superquack from "../assets/project5.webp";
export const projects = [
  {
    title: "Temperance",
    description:
      "A smart goal and productivity management web app that integrates task tracking, time analytics, daily journaling, and digital rewards into one modern platform.",
    tech: ["React", "tailwind", "Artisan"],
    image: temperanceIcon,
    github: "https://github.com/bagaspra16/temperance",
  },
  {
    title: "SocialCollateral AI: Jaringan Amanah Amartha",
    description:
      "Designed an intuitive, data-driven dashboard for a Social Graph Engine aimed at reducing human bias in microfinance lending. I focused on turning complex AI analytics—including network graphs, NLP sentiment, and computer vision data—into a clean, actionable interface that helps risk analysts confidently assess and approve group loans.",
    tech: ["Figma"],
    image: socialCollateralIcon,
    demo: "https://www.figma.com/proto/I2CRpgqEZwQ0hTbacoXfdK/SocialCollateral-AI--Jaringan-Amanah-Amartha?node-id=94-2680&p=f&t=vWAbD3wBgJ8alwQZ-1&scaling=contain&content-scaling=fixed&page-id=94%3A2&starting-point-node-id=94%3A222",
  },
  {
    title: "PPh 21 Monthly Tax Calculator",
    description:
      "A web-based tax simulator designed for university practical exams. I created a clean and intuitive user interface to help students easily calculate monthly PPh 21 taxes, tax schemes, and deductions without getting lost in the formulas.",
    tech: ["Python", "PyQt6"],
    image: pph21Icon,
    github: "https://github.com/gheronshaq/kalkulator-pajak-labalb",
  },
  {
    title: "Iftar Invitation Web – Tax Laboratory Gunadarma",
    description:
      "A responsive web invitation for Gunadarma University’s Tax Laboratory Iftar event. Developed with HTML, CSS, and JavaScript, featuring a clean, mobile-friendly interface designed to boost attendee engagement.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: iftarevent,
    github: "https://github.com/gheronshaq/Bukber_TaxLaboratory_Web",
    demo: "https://bukber-tax-laboratory-web.vercel.app/",
  },
  {
    title: "Coming Soon...",
    description: "Something is cooking in the kitchen, Stay tuned.",
    tech: [],
    image: superquack,
  },
];
