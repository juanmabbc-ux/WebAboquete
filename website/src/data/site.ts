/**
 * Site-wide constants for Aboquete S.A.
 * Single source of truth for NAP, social links, and SEO defaults.
 */

export const site = {
  name: 'Aboquete',
  legalName: 'Aboquete S.A.',
  tagline: 'Siempre Verde',
  url: 'https://aboquetepty.com',
  locale: 'es-PA',
  founded: '2000',

  // ----- Contact / NAP -----
  phoneDisplay: '+507 6645-7828',
  phoneE164: '+50766457828',
  whatsappE164: '50766457828',
  email: 'info@aboquete.com',

  address: {
    street: 'Chanis, Hipódromo Presidente Remón',
    city: 'Ciudad de Panamá',
    region: 'Panamá',
    country: 'Panamá',
    countryCode: 'PA',
  },

  // ----- Credenciales -----
  ruc: '164705-1-388664 DV80',
  itbmsCert: '967000028026',
  midaRegistro: '2253',
  senacytProject: 'DINE-028-2023',

  // ----- Social -----
  social: {
    instagram: 'https://www.instagram.com/aboquete',
    instagramHandle: '@aboquete',
  },

  // ----- Default SEO -----
  defaultDescription:
    'Aboquete S.A. — abono orgánico, tierra negra, humus de lombriz y sustratos a base de caballaza compostada. Producción 100% panameña, respaldo SENACYT-CECOM, Registro MIDA #2253. Entregas en todo Panamá.',
  keywords: [
    'abono orgánico Panamá',
    'caballaza compostada',
    'tierra negra Panamá',
    'humus de lombriz',
    'sustratos orgánicos',
    'cascarilla de arroz',
    'aluvión de río',
    'enmienda orgánica MIDA',
    'fertilizante orgánico Panamá',
    'agricultura regenerativa Panamá',
  ],

  lastUpdated: 'Mayo 2026',
};

export const whatsappUrl = (msg: string = 'Hola Aboquete, quisiera más información sobre sus productos.') =>
  `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(msg)}`;
