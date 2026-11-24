// Datos tomados del documento «HUM · Textos y estructura de la web» (2026-11-23).
// Lo que va entre corchetes en el documento se muestra con <Dato> hasta que el hospital lo entregue.

export const SITE = {
  name: 'HUM | Hospital Regional Universitario Metropolitano',
  address: 'Carrera 42F # 75B-55, Barranquilla',
  whatsapp: '315 985 7686',
  whatsappIntl: '573159857686',
  citas: 'citas@hospitalhum.org',
  siau: 'siau@hospitalhum.org',
  hours24: 'Urgencias, hospitalización, cirugía y cuidado intensivo: 24 horas.',
  hoursConsulta: 'Consulta externa: lunes a viernes, de 7:00 a. m. a 7:00 p. m.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Carrera 42F # 75B-55, Barranquilla, Colombia'),
  mapsEmbed: 'https://www.google.com/maps?q=' + encodeURIComponent('Carrera 42F 75B-55, Barranquilla, Colombia') + '&output=embed',
}

export const waLink = (desde = 'la página web') =>
  `https://wa.me/${SITE.whatsappIntl}?text=${encodeURIComponent(`Hola, quiero información sobre ${desde}.`)}`

export const MENU = [
  { to: '/servicios', label: 'Servicios y especialidades' },
  { to: '/equipo-medico', label: 'Equipo médico' },
  { to: '/pacientes', label: 'Pacientes' },
  { to: '/hospital-universitario', label: 'Hospital universitario' },
  { to: '/aliados', label: 'EPS y empresas' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
]

export const FOOTER_LINKS = [
  { to: '/servicios', label: 'Servicios y especialidades' },
  { to: '/equipo-medico', label: 'Equipo médico' },
  { to: '/pacientes', label: 'Pacientes y visitantes' },
  { to: '/hospital-universitario', label: 'Hospital universitario' },
  { to: '/aliados', label: 'EPS, empresas y remitentes' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/atencion-al-usuario', label: 'Atención al usuario' },
  { to: '/contacto', label: 'Contacto y ubicación' },
  { to: '/transparencia', label: 'Transparencia' },
]

export const SERVICIOS_LISTA = [
  'Urgencias', 'Hospitalización', 'Cuidado intensivo e intermedio', 'Cirugía', 'Parto y salud de la mujer',
  'Consulta con especialistas', 'Laboratorio clínico', 'Imágenes diagnósticas', 'Terapias y rehabilitación', 'Vacunación',
]

export const ESPECIALIDADES = {
  'Medicina interna y subespecialidades': ['Medicina interna', 'Cardiología', 'Endocrinología', 'Gastroenterología', 'Geriatría', 'Hematología', 'Infectología', 'Inmunología', 'Nefrología', 'Neumología', 'Neurología', 'Reumatología', 'Toxicología'],
  'Mujer y niños': ['Ginecobstetricia', 'Pediatría'],
  'Cirugía y especialidades quirúrgicas': ['Cirugía general', 'Cirugía gastrointestinal', 'Cirugía de tórax', 'Cirugía de cabeza y cuello', 'Cirugía de la mano', 'Cirugía plástica y estética', 'Cirugía pediátrica', 'Neurocirugía', 'Ortopedia y traumatología', 'Urología', 'Anestesia'],
  'Piel, ojos, oído y garganta': ['Dermatología', 'Oftalmología', 'Optometría', 'Otorrinolaringología'],
  'Salud mental': ['Psicología', 'Psiquiatría'],
  'Salud oral': ['Odontología general', 'Estomatología', 'Cirugía oral', 'Cirugía maxilofacial'],
  'Medicina general y familiar': ['Medicina general', 'Medicina familiar', 'Medicina laboral'],
  'Nutrición y rehabilitación': ['Nutrición y dietética', 'Medicina física y rehabilitación'],
}

export const TODAS_ESPECIALIDADES = Object.values(ESPECIALIDADES).flat().filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a.localeCompare(b, 'es'))
