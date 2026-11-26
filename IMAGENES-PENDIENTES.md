# HUM · Imágenes que faltan

Revisado en el sitio el 2026-11-26. Tamaños pensados para pantallas retina (el doble de lo que se ve en escritorio).
Formato de entrega: JPG o WebP, en color, sin texto ni logos encima. Todas deben ser **fotos reales del HUM**
y las personas que aparezcan deben haber autorizado el uso de su imagen.

## 1. Espacios vacíos (hoy muestran el rótulo «Fotografía real…»)

| # | Página | Sección | Qué foto | Tamaño | Archivo |
|---|--------|---------|----------|--------|---------|
| 1 | Inicio | Portada (hero), debajo de los botones | Fachada del hospital o equipo médico frente al edificio. Foto horizontal amplia | 2400 × 1100 px | `src/pages/Home.jsx` |
| 2 | Inicio | Bloque «Hospital universitario» | Estudiantes y residentes con su docente, en una sala o pasillo del hospital | 1200 × 1000 px | `src/pages/Home.jsx` |
| 3 | Quiénes somos | Junto al texto de presentación | Fachada o equipo del HUM | 1200 × 1000 px | `src/pages/Quienes.jsx` |
| 4 | Hospital universitario | Junto al texto de la alianza | Docencia en el hospital: docente enseñando a residentes junto a un paciente o en simulación | 1200 × 1000 px | `src/pages/Universitario.jsx` |

## 2. Fotos provisionales hechas con IA (reemplazar por fotos reales)

| # | Página | Sección | Qué foto | Tamaño | Archivo actual |
|---|--------|---------|----------|--------|----------------|
| 5 | Inicio | Tarjeta «Tengo una urgencia» (vertical) | Entrada de Urgencias del HUM con personal y paciente | 700 × 1400 px | `public/img/home/urgencias.jpg` |
| 6 | Inicio | Tarjeta «Busco un especialista» | Retrato de un especialista del HUM en consultorio | 800 × 800 px | `public/img/home/especialista.jpg` |
| 7 | Equipo médico | 15 tarjetas con retrato | Retrato de cada especialista, busto, bata blanca, fondo gris claro liso | 1200 × 1200 px | `public/img/equipo/equipo-01…15.webp` |

## 3. Retratos que faltan en Equipo médico (hoy muestran iniciales)

26 profesionales, mismo estilo que el punto 7 (1200 × 1200 px, fondo gris claro).
Los nombres de hoy son de muestra: se cambian por el listado oficial en `src/data/equipo.js`.

Endocrinología · Gastroenterología · Hematología · Infectología · Inmunología · Nefrología · Neumología ·
Reumatología · Toxicología · Cirugía gastrointestinal · Cirugía de tórax · Cirugía de cabeza y cuello ·
Cirugía de la mano · Cirugía plástica y estética · Cirugía pediátrica · Oftalmología · Optometría ·
Otorrinolaringología · Psicología · Estomatología · Cirugía oral · Cirugía maxilofacial · Medicina general ·
Medicina laboral · Nutrición y dietética · Medicina física y rehabilitación

## 4. Opcionales (hoy el diseño funciona sin foto)

**Encabezados de las páginas internas.** Hoy son un degradado azul (rojo en Urgencias) sin foto. Si se quiere
una foto de fondo, una por página (2800 × 1100 px, horizontal, con espacio libre en el centro para el título):

| Página | Foto sugerida |
|--------|---------------|
| Servicios y especialidades | Pasillo o área asistencial del hospital |
| Urgencias | Entrada o sala de Urgencias |
| Solicitar cita | Recepción o admisiones atendiendo a un paciente |
| Equipo médico | Grupo de especialistas del HUM |
| Hospital universitario | Residentes y docentes en ronda |
| Quiénes somos | Fachada del hospital |
| Pacientes y visitantes | Habitación de hospitalización o familiar acompañando |
| Atención al usuario (SIAU) | Oficina o punto de atención al usuario |
| EPS, empresas y remitentes | Reunión o área administrativa |
| Contacto y ubicación | Fachada con la calle o el acceso principal |

**Tarjetas de «Servicios».** Las 9 tarjetas usan íconos. Si se quiere foto en cada una (1200 × 800 px):
Urgencias · Hospitalización · Cuidado intensivo e intermedio · Cirugía · Parto y salud de la mujer ·
Consulta con especialistas · Diagnóstico (laboratorio e imágenes) · Terapias y rehabilitación · Vacunación

## Resumen

- **Obligatorias:** 4 espacios vacíos + 2 fotos de IA en Inicio + 41 retratos del equipo (15 de IA + 26 sin foto) = **47 fotos**.
- **Opcionales:** 10 encabezados + 9 servicios = **19 fotos**.
