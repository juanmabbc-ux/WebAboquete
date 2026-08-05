/**
 * Aboquete vivero (plant nursery) catalog
 *
 * Plants are sold primarily for projects (paisajismo, constructoras,
 * urbanizaciones) with nationwide delivery. No public prices — everything
 * is quoted via WhatsApp.
 */

import aglaonemaImg from '../assets/vivero/aglaonema.jpg';
import alocasiaImg from '../assets/vivero/alocasia-blanca.jpg';
import araliaImg from '../assets/vivero/aralia.jpg';
import singonioImg from '../assets/vivero/singonio-blanco.jpg';
import clusiaImg from '../assets/vivero/clusia.jpg';
import cordylineImg from '../assets/vivero/cordyline.jpg';
import cucarachaImg from '../assets/vivero/cucaracha.jpg';
import dracenaImg from '../assets/vivero/dracena-variegata.jpg';
import lenguaImg from '../assets/vivero/lengua-de-suegra.jpg';
import peperomiaImg from '../assets/vivero/peperomia.jpg';
import burleMarxImg from '../assets/vivero/filodendro-burle-marx.jpg';
import filodendroImg from '../assets/vivero/filodendro.jpg';
import scheffleraImg from '../assets/vivero/schefflera.jpg';
import crotoImg from '../assets/vivero/croto-rabo-de-puerco.jpg';
import durantaImg from '../assets/vivero/duranta-amarilla.jpg';
import type { ImageMetadata } from 'astro';

export interface Plant {
  slug: string;
  name: string;
  /** Nombre científico (mostrado en itálica bajo el nombre común) */
  scientificName: string;
  description: string;
  /** Etiquetas cortas: luz, uso típico en proyectos */
  tags: string[];
  image: ImageMetadata;
}

export const plants: Plant[] = [
  {
    slug: 'aglaonema',
    name: 'Aglaonema',
    scientificName: 'Aglaonema commutatum',
    description:
      'Follaje jaspeado en verdes y rosados. Ideal para interiores, lobbies y jardineras bajo sombra.',
    tags: ['Sombra', 'Interiores', 'Follaje de color'],
    image: aglaonemaImg,
  },
  {
    slug: 'alocasia-blanca',
    name: 'Alocasia Blanca',
    scientificName: 'Alocasia sp.',
    description:
      'Hojas grandes de porte escultural. Punto focal en jardines tropicales y áreas techadas.',
    tags: ['Sombra parcial', 'Punto focal'],
    image: alocasiaImg,
  },
  {
    slug: 'aralia',
    name: 'Aralia',
    scientificName: 'Polyscias sp.',
    description:
      'Arbusto de follaje fino y elegante. Funciona como seto suave o planta de interior estructurada.',
    tags: ['Sol parcial', 'Setos', 'Interiores'],
    image: araliaImg,
  },
  {
    slug: 'singonio-blanco',
    name: 'Singonio Blanco',
    scientificName: 'Syngonium podophyllum',
    description:
      'Cobertora de crecimiento rápido con hojas en punta de flecha. Rellena jardineras y borduras sombreadas.',
    tags: ['Sombra', 'Cobertora'],
    image: singonioImg,
  },
  {
    slug: 'clusia',
    name: 'Clusia',
    scientificName: 'Clusia rosea',
    description:
      'Hoja gruesa y resistente al sol y la brisa. La favorita para setos y cercas vivas en proyectos residenciales.',
    tags: ['Sol pleno', 'Setos', 'Muy resistente'],
    image: clusiaImg,
  },
  {
    slug: 'cordyline',
    name: 'Cordyline',
    scientificName: 'Cordyline fruticosa',
    description:
      'Follaje rojizo que da contraste inmediato. Acentos de color en masas y borduras tropicales.',
    tags: ['Sol parcial', 'Follaje de color'],
    image: cordylineImg,
  },
  {
    slug: 'cucaracha',
    name: 'Cucaracha',
    scientificName: 'Tradescantia spathacea',
    description:
      'Cobertora compacta bicolor (verde y púrpura). Prácticamente indestructible en borduras y taludes.',
    tags: ['Sol o sombra', 'Cobertora', 'Muy resistente'],
    image: cucarachaImg,
  },
  {
    slug: 'dracena-variegata',
    name: 'Dracena Variegata',
    scientificName: 'Dracaena reflexa',
    description:
      'Líneas verticales de follaje variegado. Elegante en macetones, accesos e interiores corporativos.',
    tags: ['Sombra parcial', 'Interiores', 'Punto focal'],
    image: dracenaImg,
  },
  {
    slug: 'lengua-de-suegra',
    name: 'Lengua de Suegra',
    scientificName: 'Sansevieria trifasciata',
    description:
      'Hojas rígidas verticales de mínimo mantenimiento. Rinde igual en sol directo, sombra o interiores.',
    tags: ['Sol o sombra', 'Bajo mantenimiento', 'Interiores'],
    image: lenguaImg,
  },
  {
    slug: 'peperomia',
    name: 'Peperomia',
    scientificName: 'Peperomia obtusifolia',
    description:
      'Compacta y de hoja brillante. Perfecta para jardineras interiores, escritorios y detalles de sombra.',
    tags: ['Sombra', 'Interiores', 'Compacta'],
    image: peperomiaImg,
  },
  {
    slug: 'filodendro-burle-marx',
    name: 'Filodendro Burle Marx',
    scientificName: 'Philodendron burle-marxii',
    description:
      'Cobertora tropical densa de hoja alargada. Un clásico del paisajismo en masas bajo árboles.',
    tags: ['Sombra', 'Cobertora'],
    image: burleMarxImg,
  },
  {
    slug: 'filodendro',
    name: 'Filodendro',
    scientificName: 'Philodendron sp.',
    description:
      'Hoja amplia de aire selvático. Volumen verde inmediato para jardines y áreas techadas.',
    tags: ['Sombra parcial', 'Volumen verde'],
    image: filodendroImg,
  },
  {
    slug: 'schefflera',
    name: 'Schefflera',
    scientificName: 'Schefflera arboricola',
    description:
      'Arbusto noble de hoja en abanico. Setos, macetones y pantallas verdes de crecimiento confiable.',
    tags: ['Sol parcial', 'Setos', 'Interiores'],
    image: scheffleraImg,
  },
  {
    slug: 'croto-rabo-de-puerco',
    name: 'Croto Rabo de Puerco',
    scientificName: 'Codiaeum variegatum',
    description:
      'Follaje rizado en amarillos, verdes y rojos. Color permanente para borduras a pleno sol.',
    tags: ['Sol pleno', 'Follaje de color'],
    image: crotoImg,
  },
  {
    slug: 'duranta-amarilla',
    name: 'Duranta Amarilla',
    scientificName: 'Duranta erecta',
    description:
      'Seto dorado de crecimiento rápido. Define borduras y contrasta con verdes oscuros en cualquier proyecto.',
    tags: ['Sol pleno', 'Setos', 'Crecimiento rápido'],
    image: durantaImg,
  },
];

/** Categorías adicionales disponibles bajo cotización (sin catálogo con foto aún) */
export const moreCategories = [
  {
    name: 'Palmas',
    detail: 'Palmas para avenidas, accesos y jardines tropicales — varios tamaños según proyecto.',
  },
  {
    name: 'Árboles',
    detail: 'Árboles ornamentales y de sombra para urbanizaciones, parques y reforestación.',
  },
  {
    name: 'Cobertoras y setos',
    detail: 'Producción por volumen para masas de siembra, borduras y cercas vivas.',
  },
  {
    name: 'Plantas por encargo',
    detail: '¿Tu diseño pide una especie específica? La conseguimos o la producimos para tu proyecto.',
  },
];
