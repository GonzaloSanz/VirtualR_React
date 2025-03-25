import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Características", href: "#features" },
  { label: "Flujo de Trabajo", href: "#workflow" },
  { label: "Precios", href: "#pricing" },
  { label: "Opiniones", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Jonathan Gómez",
    company: "Stellar Solutions",
    image: user1,
    text: "Estoy muy satisfecho con los servicios prestados. El equipo fue receptivo, profesional y entregó resultados más allá de mis expectativas.",
  },
  {
    user: "Alexia Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "No podría estar más contenta con el resultado de nuestro proyecto. La creatividad y las habilidades de resolución de problemas del equipo fueron fundamentales para dar vida a nuestra visión.",
  },
  {
    user: "David Serra",
    company: "Quantum Innovations",
    image: user3,
    text: "Trabajar con esta empresa fue un placer. Los recomendaría encarecidamente a cualquiera que busque un servicio de primer nivel.",
  },
  {
    user: "Luis Barbosa",
    company: "Fusion Dynamics",
    image: user4,
    text: "Su atención al detalle y sus soluciones innovadoras nos ayudaron a alcanzar nuestros objetivos más rápido de lo que creíamos posible.",
  },
  {
    user: "Miguel Gutierrez",
    company: "Visionary Creations",
    image: user5,
    text: "Estoy sorprendido por el nivel de profesionalismo y dedicación mostrado por el equipo. Fueron capaces de superar nuestras expectativas y ofrecer resultados sobresalientes.",
  },
  {
    user: "Emilia Castillo",
    company: "Synergy Systems",
    image: user6,
    text: "El equipo hizo todo lo posible para garantizar que nuestro proyecto fuera un éxito. Su experiencia y dedicación son inigualables. Espero volver a trabajar con ellos en el futuro.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interfaz de arrastrar y soltar",
    description:
      "Diseña y organiza fácilmente tus entornos de realidad virtual con una interfaz de arrastrar y soltar fácil de usar.",
  },
  {
    icon: <Fingerprint />,
    text: "Multiplataforma",
    description:
      "Crea aplicaciones de realidad virtual que se ejecuten sin problemas en múltiples plataformas, incluidos dispositivos móviles, ordenadores y gafas de realidad virtual.",
  },
  {
    icon: <ShieldHalf />,
    text: "Plantillas incorporadas",
    description:
      "Ponga en marcha sus proyectos de realidad virtual con una variedad de plantillas integradas para diferentes tipos de aplicaciones y entornos.",
  },
  {
    icon: <BatteryCharging />,
    text: "Vista previa en tiempo real",
    description:
      "Obtenga una vista previa de su aplicación de realidad virtual en tiempo real a medida que realiza cambios, lo que permite iteraciones y ajustes rápidos.",
  },
  {
    icon: <PlugZap />,
    text: "Herramientas de colaboración",
    description:
      "Trabaja junto con tu equipo en tiempo real en proyectos de realidad virtual, permitiendo una colaboración fluida y el intercambio de ideas.",
  },
  {
    icon: <GlobeLock />,
    text: "Panel de análisis",
    description:
      "Obtenga información sobre las interacciones y el comportamiento de los usuarios dentro de sus aplicaciones de realidad virtual con un panel de análisis integrado.",
  },
];

export const checkListItems = [
  {
    title: "Fusión de código simplificada",
    description:
      "Ideal para interacciones y cambios en el proyecto.",
  },
  {
    title: "Revisa el código sin preocupaciones",
    description:
      "Notificará cualquier mejora o problema en el código fuente.",
  },
  {
    title: "Asistencia de IA para reducir el tiempo",
    description:
      "Ahorra tiempo con nuestra IA de última generación.",
  },
  {
    title: "Comparta el trabajo en minutos",
    description:
      "Colaboración fluida para intercambiar ideas con el equipo de trabajo.",
  },
];

export const pricingOptions = [
  {
    title: "Gratis",
    price: "0€",
    features: [
      "Compartir tablón privado",
      "5 GB de almacenamiento",
      "Analítica web",
      "Modo privado",
    ],
  },
  {
    title: "Pro",
    price: "10€",
    features: [
      "Compartir tablón privado",
      "10 GB de almacenamiento",
      "Analítica web (avanzado)",
      "Modo privado",
    ],
  },
  {
    title: "Empresa",
    price: "200€",
    features: [
      "Compartir tablón privado",
      "Almacenamiento ilimitado",
      "Red de alto rendimiento",
      "Modo privado",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Comenzar" },
  { href: "#", text: "Documentación" },
  { href: "#", text: "Tutoriales" },
  { href: "#", text: "Referencias API" },
  { href: "#", text: "Foros" },
];

export const platformLinks = [
  { href: "#", text: "Características" },
  { href: "#", text: "Dispositivos soportados" },
  { href: "#", text: "Requisitos del Sistema" },
  { href: "#", text: "Descargas" },
  { href: "#", text: "Notas" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encuentros" },
  { href: "#", text: "Conferencias" },
  { href: "#", text: "Hackatones" },
  { href: "#", text: "Trabajos" },
];
