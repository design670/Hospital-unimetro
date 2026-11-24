# HUM · Pendientes

Prototipo en Vite + React. Vista previa: `hum-web` (puerto 5208). Textos tomados de
`material/HUM · Textos y estructura de la web - 2026 universidad metropolitana.docx`.

Dirección visual: colores y Montserrat del HUM, con el estilo de las referencias que eligió el cliente
(Docshield en Awwwards y heureka.health): bloques con degradado azul, menú en píldora flotante,
títulos livianos con palabras en color, tarjetas blancas con sombra suave y pie azul con el logo grande.
Nota: la guía del HUM pide Montserrat Extrabold en títulos; para acercarse a las referencias se usaron
pesos 500–600 con palabras clave en negrita/color. Decisión confirmada por la agencia el 2026-11-23: títulos livianos. Luego (mismo día): títulos en Inter, cuerpo de texto en Montserrat.

## Datos que debe entregar el hospital
Se ven en el sitio resaltados en amarillo con [corchetes].
- Teléfono de Urgencias (barra superior, Urgencias, avisos, Contacto). En `src/pages/Urgencias.jsx` cambiar `TEL_URG_HREF`.
- Horario del servicio de citas.
- SIAU: ubicación, horario, teléfono, buzones y plazo de respuesta; número de radicado real.
- Horario y normas de visita, número de visitantes, entrega de información médica.
- Procedimiento para reclamar resultados e historia clínica.
- Accesibilidad del edificio.
- Misión, visión, principios y valores.
- NIT, naturaleza jurídica, certificaciones y acreditaciones.
- Política de calidad y seguridad del paciente.
- Listado de especialistas con autorización (hoy hay 6 tarjetas de muestra en `src/pages/Equipo.jsx`).
- Confirmación de neurocirugía y de la lista de programas.
- EPS y aseguradoras con convenio; contacto comercial.
- Cómo llegar y parqueadero.
- Redes sociales.
- Enlace al sitio de la Universidad Metropolitana.
- Textos legales: datos personales, términos, cookies y transparencia.
- Confirmar horarios y contactos tomados del brief.
- Tratamiento «tú» o «usted».

## Fotos
Las imágenes con rótulo "Fotografía real: ..." son marcadores. Faltan fotos reales de la fachada y del equipo.
En «¿Qué necesitas hoy?» las fotos `public/img/home/urgencias.jpg` y `especialista.jpg` son provisionales,
creadas con IA (2026-11-23); reemplazarlas por fotos reales del HUM cuando lleguen (mismo nombre de archivo).

## Técnico
- Los formularios validan en el navegador y muestran el mensaje de envío, pero no envían a ningún lado: falta conectar el destino (correo o CRM).
- El banner de cookies solo guarda la elección; falta la configuración real cuando Jurídica defina las cookies.
