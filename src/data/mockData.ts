import { PermitInfo, ReviewItem } from '../types';

export const PERMITS: PermitInfo[] = [
  {
    id: 'b',
    title: 'Carnet B (Coche)',
    subtitle: 'Conduce coches y descubre la libertad de moverte por tu cuenta.',
    description:
      'El permiso esencial para conducir turismos y furgonetas ligeras hasta 3.500 kg de masa máxima autorizada y hasta 9 plazas. Formación teórica intensiva y prácticas.',
    features: [
      'Flexibilidad de horario para prácticas',
      'Metodología clara y sin estrés',
      'Vehículo moderno y de fácil maniobra',
    ],
    requirements: [
      'Tener 18 años cumplidos (puedes presentarte al teórico con 17 años y 9 meses)',
      'Superar el reconocimiento médico psicotécnico',
      'Residir en España',
    ],
    examSummary: [
      'Examen teórico común DGT: 30 preguntas tipo test (máx. 3 fallos)',
      'Examen práctico de circulación en vías urbanas e interurbanas con examinador oficial',
    ],
    ageMin: '18 años (teórico desde 17 y 9 meses)',
  },
  {
    id: 'moto',
    title: 'Carnets de moto',
    subtitle: 'Encuentra la opción que mejor encaje contigo.',
    description:
      'Diferentes modalidades según tu edad, potencia de la motocicleta y experiencia previa. Te asesoramos para elegir el permiso idóneo (AM, A1, A2, A).',
    features: [
      'Asesoramiento sobre el carnet adecuado',
      'Circuitos de maniobras con seguridad',
      'Maniobras en carretera con máxima seguridad',
    ],
    requirements: [
      'AM (Ciclomotores hasta 50cc): Desde los 15 años',
      'A1 (Motos hasta 125cc, 11 kW): Desde los 16 años',
      'A2 (Motos hasta 35 kW / ~47 CV): Desde los 18 años',
      'A (Sin límite de potencia): Desde los 20 años y 2 años con carnet A2',
    ],
    examSummary: [
      'Teórico común y específico de moto (según permiso)',
      'Examen de maniobras en circuito cerrado (equilibrio, destreza y frenada)',
      'Examen de circulación en tráfico real',
    ],
    ageMin: 'Desde 15 años (AM), 16 (A1), 18 (A2)',
  },
  {
    id: 'otros',
    title: 'Otros permisos y cursos',
    subtitle: 'Consulta con nosotros qué opciones están disponibles.',
    description:
      '¿Buscas renovación de permisos, clases de reciclaje o permisos profesionales? En Autoescuela Sergio Alcaudete atendemos tus necesidades formativas.',
    features: [
      'Atención directa con Sergio',
      'Planes adaptados a tu ritmo y disponibilidad',
      'Asesoramiento honesto sobre tus necesidades',
    ],
    requirements: [
      'Clases de reciclaje: Disponibles para cualquier persona con permiso que desee retomar confianza',
      'Renovaciones: Trámites rápidos y orientación con centros médicos colaboradores',
      'Consultas profesionales: Formación a medida según la normativa vigente',
    ],
    examSummary: [
      'Sin examen oficial para reciclaje: sesiones 100% prácticas a tu ritmo',
      'Asesoramiento personalizado en las rutas habituales de Alcaudete, Jaén y alrededores',
    ],
    ageMin: 'A partir de 18 años',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: '1',
    author: 'jose lopez',
    avatarLetter: 'J',
    stars: 5,
    highlight: 'Aspectos positivos: Comunicación, Profesionalidad y Valor',
    text: 'Valoración máxima de 5 estrellas en la ficha oficial de Google Maps.',
    verifiedGoogle: true,
    date: 'Reseña verificada en Google',
  },
  {
    id: '2',
    author: 'Fofi Medina',
    avatarLetter: 'F',
    stars: 5,
    highlight: 'Aspectos positivos: Comunicación, Calidad y Profesionalidad',
    text: 'Valoración máxima de 5 estrellas en la ficha oficial de Google Maps.',
    verifiedGoogle: true,
    date: 'Reseña verificada en Google',
  },
  {
    id: '3',
    author: 'marta cano barranco',
    avatarLetter: 'M',
    stars: 5,
    highlight: 'Valoración máxima 5 estrellas',
    text: 'Valoración oficial de 5 estrellas en la ficha de Google Maps.',
    verifiedGoogle: true,
    date: 'Reseña verificada en Google',
  },
];

export const CONTACT_INFO = {
  name: 'Autoescuela Sergio',
  town: 'Alcaudete (Jaén)',
  address: 'Tr.ª Peñuelas, 8, 23660 Alcaudete, Jaén',
  plusCode: 'HWQC+52 Alcaudete',
  phone1: '690 14 04 40',
  phone1Raw: '690140440',
  phone2: '607 395 798',
  phone2Raw: '607395798',
  whatsappUrl: 'https://wa.me/34690140440?text=Hola%20Autoescuela%20Sergio,%20quiero%20información%20o%20consultar%20sobre%20el%20carnet%20en%20Alcaudete',
  hours: 'Lunes a Viernes · Mañanas: 10:30 - 13:30 h | Tardes: 17:00 - 20:00 h (de 5 a 8 de la tarde)',
  hoursMorning: '10:30 - 13:30 h',
  hoursAfternoon: '17:00 - 20:00 h (de 5 a 8 de la tarde)',
  googleMapsUrl: 'https://www.google.com/maps?q=37.588625,-4.080179',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=37.588625,-4.080179',
  lat: 37.588625,
  lng: -4.080179,
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/34690140440?text=${encodeURIComponent(message)}`;
};

