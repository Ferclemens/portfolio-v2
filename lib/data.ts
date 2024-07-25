import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import remembaappImg from "@/public/remembaapp.png";
import awesomecolorschemepickerImg from "@/public/awesomecolorschemepicker.png";
import varsityraptorImg from "@/public/varsityraptor.png";
import encriptadorImg from "@/public/encriptador.png";
import tablesandchartsImg from "@/public/tablesandcharts.png";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Info",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SkillFactory",
    description:
      "Bootcamp de la empresa Avalith para la creación de interfaces de usuario dinámicas usando React y Firebase como base de datos.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Informatorio",
    description:
      "Bootcamp de desarrollo Backend usando Java y SpringBoot. Entrenamiento en testing manual y exploración de webs, desarrollo de historias de usuario, casos de prueba y reporte de bugs.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Frontend Career Path",
    description:
      "Curso completo de Frontend en plataforma Scrimba. Creación de interfaces de usuario responsive, funcionales y estilizadas utilizando HTML, CSS, Javascript y React.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Tecnicatura en desarrollo de software",
    description:
      "Estudiante de 1º año de 'Tecnicatura Superior en desarrollo de software' dictada por el Instituto de Formación Técnica Superior Nº 29 (CABA) de forma remota.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Oracle Alura Latam G7 - XAcademy QA",
    description:
      "Actualmente formo parte del grupo G7 del bootcamp ORACLE - Alura Latam sobre desarrollo web. También presente en el grupo 2024 de XAcademy QA sobre calidad de software.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Varsity Raptor",
    description:
      "Landing page del emprendimiento Varsity Raptor. Empresa dedicada al Marketing digital y posicionamiento web.",
    tags: ["React", "Vite", "Tailwind", "i18n"],
    imageUrl: varsityraptorImg,
    link: "https://varsityraptor.com/",
  },
  {
    title: "Rememba app",
    description:
      "Una App para anotar y persistir información como una lista de supermercado o tareas a realizar.",
    tags: ["HTML", "CSS", "Javascript", "Vite", "Testing"],
    imageUrl: remembaappImg,
    link: "https://rememba-app.netlify.app/",
  },
  {
    title: "Awesome color scheme picker",
    description:
      "App de selección y recomendación de paletas de colores. Funciona con la API de https://www.thecolorapi.com/ ",
    tags: ["HTML", "CSS", "Javascript", "Vite"],
    imageUrl: awesomecolorschemepickerImg,
    link: "https://awesome-color-scheme-picker.netlify.app/",
  },
  {
    title: "Encriptador de texto",
    description:
      "App para encriptar y desencriptar mensajes. Desafio de ORACLE Alura Latam - G7",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: encriptadorImg,
    link: "https://ferclemens.github.io/encriptador-de-texto/",
  },
  {
    title: "Tables and charts app",
    description:
      "App para importar archivo csv y desplegar gráficos de análisis con los datos cargados.",
    tags: ["Vite", "React-Table", "Xlsx", "Chart.js", "Chakra UI"],
    imageUrl: tablesandchartsImg,
    link: "https://tables-and-charts-app.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "MySQL",
  "Framer Motion",
] as const;
