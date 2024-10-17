import HtmlSVG from "../components/icons/Html.astro"
import JavaScriptSVG from "../components/icons/JavaScript.astro"
import TypeScriptSVG from "../components/icons/TypeScript.astro"
import CssSVG from "../components/icons/Css.astro"
import SassSVG from "../components/icons/Sass.astro"
import AstroSVG from "../components/icons/AstroJS.astro"
import ReactJSSVG from "../components/icons/ReactJS.astro"
import TailwindSVG from "../components/icons/Tailwind.astro"



type NavLinks = {
  label: string
  href: string
  text: string
}

interface Content {
  navLinks: NavLinks[]
}

export type TagKey = keyof typeof Tags

export interface Tag {
  name: string
  color: string
  icon: any
}
interface Skill {
  name: string
  icon: any
}

export const Tags: Record<string, Tag> = {
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
  }
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    icon: HtmlSVG
  },
  {
    name: 'JavaScript',
    icon: JavaScriptSVG
  },
  {
    name: 'TypeScript',
    icon: TypeScriptSVG
  },
  {
    name: 'CSS',
    icon: CssSVG
  },
  {
    name: 'Sass',
    icon: SassSVG
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindSVG
  },
  {
    name: 'React JS',
    icon: ReactJSSVG
  },
  {
    name: 'Astro JS',
    icon: AstroSVG
  }
]

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
      label: 'Inicio',
      text: 'Inicio'
    },
    {
      href: '#proyectos',
      label: 'Proyectos',
      text: 'Proyectos'
    },
    {
      href: '#habilidades',
      label: 'Habilidades',
      text: 'Habilidades'
    },
    {
      href: '#sobre_mi',
      label: 'Sobre mí',
      text: 'Sobre mí'
    }
  ]
}

export const projects: Project[] = [
  {
    name: 'Todo App',
    description: 'Esta es una app simple e intuitiva que permite gestionar tareas mediante las operaciones CRUD básicas, incluyendo la opción de filtrar por tarea completada. Para ello, utilicé los React Custom Hooks para mantener componentes limpios, legibles y escalables.',
    image: '../assets/TodoApp.webp',
    tech: [Tags.REACTJS, Tags.TS, Tags.SASS],
    link: 'https://todo-app-ts-beta.vercel.app/',
    github: 'https://github.com/holddev/react-todo-app-ts'
  },
  {
    name: 'Calculadora de operaciones básicas',
    description: 'Esta calculadora utiliza las tecnologías fundamentales del desarrollo web. Además, se emplea el popular lenguaje de programación JavaScript. Su objetivo es demostrar mis habilidades en el uso de herramientas potentes que forman la base del desarrollo de sitios web.',
    image: '../assets/Calculadora.webp',
    tech: [Tags.HTML, Tags.CSS, Tags.JS],
    link: 'https://elementary-calculator.pages.dev/',
    github: 'https://github.com/holddev/calculadora-simple'
  },
]

