import HtmlSVG from "../components/icons/Html.astro"
import JavaScriptSVG from "../components/icons/JavaScript.astro"
import TypeScriptSVG from "../components/icons/TypeScript.astro"
import CssSVG from "../components/icons/Css.astro"
import SassSVG from "../components/icons/Sass.astro"
import AstroSVG from "../components/icons/AstroJS.astro"
import ReactJSSVG from "../components/icons/ReactJS.astro"
import TailwindSVG from "../components/icons/Tailwind.astro"
import NextJSSVG from "../components/icons/NextJS.astro"



type NavLinks = {
  href: string
  text: string
}

interface Content {
  navLinks: NavLinks[]
}

export interface Tag {
  name: string
  color: string
  icon: any
}

export const skills: Record<string, Tag> = {
  HTML: {
    name: 'HTML',
    color: '#e34f2644',
    icon: HtmlSVG
  },
  JS: {
    name: 'JS',
    color: '#f0db4f44',
    icon: JavaScriptSVG
  },
  TS: {
    name: 'TS',
    color: '#3178c644',
    icon: TypeScriptSVG
  },
  CSS: {
    name: 'CSS',
    color: '#0c73b844',
    icon: CssSVG
  },
  SASS: {
    name: 'Sass',
    color: '#d0699d44',
    icon: SassSVG
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    color: '#18b8b944',
    icon: TailwindSVG
  },
  REACTJS: {
    name: 'React JS',
    color: '#00d8ff44',
    icon: ReactJSSVG
  },
  ASTROJS: {
    name: 'Astro JS',
    color: '#ffffff44',
    icon: AstroSVG
  },
  NEXTJS: {
    name: 'Next JS',
    color: '#8f8f8f44',
    icon: NextJSSVG
  },
}

export interface Project {
  name: string
  description: string
  image: string
  tech: Tag[]
  link?: string
  github?: string
}

export const content: Content = {
  navLinks: [
    {
      href: '#inicio',
      text: 'Inicio'
    },
    {
      href: '#experiencia',
      text: 'Experiencia'
    },
    {
      href: '#proyectos',
      text: 'Proyectos'
    },
    {
      href: '#habilidades',
      text: 'Habilidades'
    }
  ]
}

export const projects: Project[] = [
  {
    name: 'Pixminify',
    description: 'Esta es una herramienta de optimización de imágenes, con la cual puedes reducir el peso de tus imagenes y ahorrar espacio de almacenamiento.',
    image: '../assets/Pixminify.webp',
    tech: [skills.REACTJS, skills.TS, skills.TAILWIND],
    link: 'https://pixminify.pages.dev/',
    github: 'https://github.com/holddev/pixminify-optimizer'
  },
  {
    name: 'Todo App',
    description: 'Esta es una app simple e intuitiva que permite gestionar tareas mediante las operaciones CRUD básicas, incluyendo la opción de filtrar por tarea completada. Para ello, utilicé los React Custom Hooks para mantener componentes limpios, legibles y escalables.',
    image: '../assets/TodoApp.webp',
    tech: [skills.REACTJS, skills.TS, skills.SASS],
    link: 'https://todo-app-ts-beta.vercel.app/',
    github: 'https://github.com/holddev/react-todo-app-ts'
  },
  {
    name: 'Calculadora de operaciones básicas',
    description: 'Esta calculadora utiliza las tecnologías fundamentales del desarrollo web. Además, se emplea el popular lenguaje de programación JavaScript. Su objetivo es demostrar mis habilidades en el uso de herramientas potentes que forman la base del desarrollo de sitios web.',
    image: '../assets/Calculadora.webp',
    tech: [skills.HTML, skills.CSS, skills.JS],
    link: 'https://elementary-calculator.pages.dev/',
    github: 'https://github.com/holddev/calculadora-simple'
  },
]

export const experiences = [
  {
    workPosition: "Pasantia Frontend Developer",
    company: "Noxun SRL",
    startDate: "Diciembre 2024",
    endDate: "Abril 2025",
    location: "La Paz, Bolivia",
    description: "En Noxun SRL, trabajé como desarrollador frontend, participando activamente en el desarrollo e implementación de nuevas funcionalidades, generación de reportes y creación de módulos para los sistemas en operación. Utilicé tecnologías como Next.js, React.js, ShadCN y Tailwind CSS para desarrollar interfaces modernas, eficientes y centradas en la experiencia del usuario.",
  }
]

