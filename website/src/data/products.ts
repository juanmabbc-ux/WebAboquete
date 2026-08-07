/**
 * Aboquete product catalog
 * Source: context.md + ABOQUETE_Catalogo_Productos_2026.pdf
 *
 * Schema is intentionally AI-extractable: each product has a self-contained
 * definition (40–60 words) so AI search systems can quote it standalone.
 */

import abonoImg from '../assets/products/abono_organico.jpg';
import tierraImg from '../assets/products/tierra_negra.jpg';
import humusImg from '../assets/products/humus_de_lombriz.jpg';
import cascarillaImg from '../assets/products/cascarilla_de_arroz.jpg';
import aluvionImg from '../assets/products/aluvion_de_rio.jpg';
import type { ImageMetadata } from 'astro';

export type Composition = { label: string; value: string }[];
export type Presentation = { size: string; weight?: string };

export interface PackagedProduct {
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  /** 40–60 word self-contained definition for AI extraction */
  definition: string;
  description: string;
  composition?: Composition;
  uses: string[];
  presentations: Presentation[];
  image: ImageMetadata;
  category: 'empacado';
}

export interface BulkProduct {
  slug: string;
  name: string;
  formula: string;
  use: string;
  category: 'granel';
}

export const packaged: PackagedProduct[] = [
  {
    slug: 'abono-organico',
    name: 'Abono Orgánico',
    tagline: 'Caballaza 100% compostada',
    definition:
      'El Abono Orgánico Aboquete es caballaza de caballo 100% compostada. Aporta materia orgánica al 40.75% y libera nitrógeno, fósforo y potasio en forma orgánica para alimentar plantas ornamentales, frutales, hortalizas y semilleros sin químicos sintéticos ni hormonas.',
    description:
      'Fertilizante orgánico puro a base de caballaza estabilizada por compostaje. Mejora la fertilidad natural del suelo mientras alimenta tus plantas de forma sostenida.',
    composition: [
      { label: 'Materia Orgánica', value: '40.75%' },
      { label: 'Nitrógeno (N)', value: '2.37%' },
      { label: 'Fósforo (P₂O₅)', value: '3.12%' },
      { label: 'Calcio (Ca)', value: '2.87%' },
    ],
    uses: [
      'Plantas ornamentales',
      'Frutales y hortalizas',
      'Semilleros',
      'Jardines y macetas',
    ],
    presentations: [
      { size: '5 lbs', weight: '2.3 kg' },
      { size: '100 lbs', weight: '45.4 kg' },
    ],
    image: abonoImg,
    category: 'empacado',
  },
  {
    slug: 'tierra-negra',
    name: 'Tierra Negra',
    tagline: 'Tierra preparada lista para sembrar',
    definition:
      'La Tierra Negra Aboquete es una mezcla preparada de aluvión de río, caballaza compostada y cascarilla de arroz. Equilibra drenaje, materia orgánica y aireación para trasplantes, macetas, jardines y huertos caseros — lista para usar directamente, sin preparación adicional.',
    description:
      'Mezcla profesional balanceada para que tus plantas arranquen con el pie derecho. Drena bien, retiene la humedad justa y nutre desde el primer día.',
    uses: [
      'Trasplantes',
      'Macetas y jardineras',
      'Jardines',
      'Huertos caseros',
    ],
    presentations: [
      { size: '15 lbs', weight: '6.8 kg' },
      { size: '100 lbs', weight: '45.4 kg' },
    ],
    image: tierraImg,
    category: 'empacado',
  },
  {
    slug: 'humus-de-lombriz',
    name: 'Humus de Lombriz',
    tagline: 'Vermicompost premium',
    definition:
      'El Humus de Lombriz Aboquete es vermicompost producido por la Lombriz Roja Californiana (Eisenia fetida). Aporta enzimas, ácidos húmicos y microorganismos benéficos que activan el suelo, además de nutrientes de liberación lenta ideales para germinación, enraizamiento y crecimiento vegetal.',
    description:
      'El “oro negro” del jardín: nutre, oxigena y revive suelos cansados con vida microbiana viva.',
    uses: [
      'Germinación de semillas',
      'Enraizamiento de esquejes',
      'Crecimiento vegetal',
      'Mezclas premium de sustrato',
    ],
    presentations: [
      { size: '8 lbs', weight: '3.6 kg' },
    ],
    image: humusImg,
    category: 'empacado',
  },
  {
    slug: 'cascarilla-de-arroz',
    name: 'Cascarilla de Arroz',
    tagline: 'Sustrato solarizado de alto drenaje',
    definition:
      'La Cascarilla de Arroz Aboquete es un sustrato inerte solarizado de alta porosidad. Su alto contenido de sílice y potasio, sumado a su ligereza y durabilidad, la hace ideal para mezclas de sustrato, semilleros y cultivos en contenedor que requieren drenaje y aireación.',
    description:
      'Aireación, drenaje y peso ligero. Perfecta para mezclar con tierra negra y para todo cultivo en contenedor.',
    uses: [
      'Mezclas de sustrato',
      'Semilleros',
      'Cultivos en contenedor',
      'Mulching superficial',
    ],
    presentations: [
      { size: '6 lts' },
      { size: '80 lts' },
    ],
    image: cascarillaImg,
    category: 'empacado',
  },
  {
    slug: 'aluvion-de-rio',
    name: 'Aluvión de Río',
    tagline: 'Arena hortícola natural',
    definition:
      'El Aluvión de Río Aboquete es arena hortícola natural con granulometría fina a media. Aporta el drenaje preciso que necesitan suculentas, cactus y semilleros, y funciona como componente base en mezclas de sustrato profesionales para viveros y jardines.',
    description:
      'Arena hortícola limpia, ideal cuando el drenaje es la prioridad. Lo que tu cactus, suculenta o semillero estaba esperando.',
    uses: [
      'Suculentas y cactus',
      'Semilleros',
      'Mezclas de sustrato',
      'Drenaje en macetas',
    ],
    presentations: [
      { size: '8 lbs' },
      { size: '100 lbs' },
    ],
    image: aluvionImg,
    category: 'empacado',
  },
  {
    slug: 'enmienda-agricola',
    name: 'Enmienda Agrícola',
    shortName: 'Enmienda Agrícola — Mayoreo',
    tagline: 'Mayoreo y exportación FOB Panamá',
    definition:
      'La Enmienda Agrícola Aboquete es caballaza compostada en formato mayoreo y exportación. Se entrega en sacos de 100 lbs o pallets de 25 sacos (~1.13 toneladas), con composición certificada de M.O. 40.75%, N 2.37% y P₂O₅ 3.12%. Disponible FOB Panamá para mercados de exportación.',
    description:
      'Para fincas, viveros, paisajistas y exportadores. Mismos parámetros que nuestro abono empacado — en volumen.',
    composition: [
      { label: 'Materia Orgánica', value: '40.75%' },
      { label: 'Nitrógeno (N)', value: '2.37%' },
      { label: 'Fósforo (P₂O₅)', value: '3.12%' },
    ],
    uses: [
      'Producción agrícola comercial',
      'Viveros y paisajismo',
      'Exportación FOB Panamá',
    ],
    presentations: [
      { size: 'Saco', weight: '100 lbs' },
      { size: 'Pallet', weight: '25 sacos · ~1.13 t' },
    ],
    image: abonoImg,
    category: 'empacado',
  },
];

export const bulk: BulkProduct[] = [
  {
    slug: 'enmienda-granel',
    name: 'Enmienda Agrícola Orgánica a Granel',
    formula: 'Caballaza compostada',
    use: 'Fincas, viveros, paisajismo y reforestación',
    category: 'granel',
  },
  {
    slug: 'tierra-negra-granel',
    name: 'Tierra Negra Preparada a Granel',
    formula: 'Aluvión de río + caballaza compostada + cascarilla de arroz',
    use: 'Jardines, huertos, camas elevadas y proyectos de paisajismo',
    category: 'granel',
  },
  {
    slug: 'tierra-cesped',
    name: 'Tierra Especializada para Césped',
    formula: 'Tierra negra + abono orgánico + arena aluvial',
    use: 'Canchas, jardines, áreas verdes y campos deportivos',
    category: 'granel',
  },
  {
    slug: 'tierra-siembra-arboles',
    name: 'Tierra para Siembra de Árboles',
    formula: 'Mezcla profunda de tierra negra y enmienda orgánica',
    use: 'Arborización, reforestación y proyectos de urbanización',
    category: 'granel',
  },
  {
    slug: 'mezcla-personalizada',
    name: 'Mezcla Personalizada',
    formula: 'A tu especificación — combinamos aluvión, caballaza, cascarilla y arena',
    use: 'Proyectos con requerimientos técnicos específicos de suelo',
    category: 'granel',
  },
];

/** Featured set for the homepage preview */
export const featuredSlugs = [
  'abono-organico',
  'tierra-negra',
  'humus-de-lombriz',
  'cascarilla-de-arroz',
];
