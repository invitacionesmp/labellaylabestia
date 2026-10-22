/* ============================================================
   CONFIGURACIÓN DE LA INVITACIÓN
   Todo lo que cambia de una invitación a otra está acá.
   ============================================================ */
window.INVITACION = {
  nombre: "Isabella",
  evento: "Mis XV años",
  tematica: "Prepárate para una noche inolvidable",

  // Fecha y hora de la fiesta (con zona horaria de Argentina, -03:00)
  fechaISO: "2027-11-27T21:00:00-03:00",
  diaSemana: "Sábado",
  dia: "27",
  mes: "Noviembre",
  anio: "2027",
  hora: "21:00 hs",

  lugar: "Salón Encantado",
  ciudad: "Corrientes",
  mapa: "https://www.google.com/maps/search/?api=1&query=Corrientes+Argentina",

  dressCode: "Elegante",
  coloresReservados: [
    { nombre: "Dorado", color: "#d4a937" },
    { nombre: "Amarillo", color: "#f4d03f" }
  ],

  alias: "isabella.xv",

  // Confirmación por WhatsApp.
  // Escribí el número con código de país y sin signos. Ej. Argentina: "5493794123456"
  // Si queda vacío, WhatsApp le pide al invitado que elija el contacto.
  whatsapp: "5493794394807",
  confirmarHasta: "20 de noviembre",

  // Música. El archivo está en assets/audio/. "inicio" es el segundo desde el que empieza a sonar.
  // Si cambiás el nombre del MP3, cambialo también acá (si no, no suena).
  playlist: [
    { titulo: "La bella y la bestia", artista: "Ivan", archivo: "assets/audio/musica.mp3", inicio: 0 }
  ],

  frase: [
    "Dicen que una rosa encantada florece una sola vez, cuando el tiempo se detiene y el corazón sabe que llegó su momento.",
    "Mis quince años son ese instante: una noche de luces, música y sueños que quiero vivir junto a las personas que más quiero.",
    "Sumate a mi cuento, porque sin vos ninguna historia estaría completa."
  ],

  // Carrusel de fotos. Poné tus fotos en la carpeta assets/fotos/ y listalas acá (de 3 a 8 queda lindo).
  // Lo ideal: formato vertical (4:5), JPG o WEBP, de unos 720 x 900 px y menos de 150 KB cada una.
  // Las de "ejemplo" son de relleno: reemplazalas por las reales. Si dejás la lista vacía, la sección no aparece.
  fotos: [
    { src: "assets/fotos/ejemplo-1.webp", alt: "Foto 1" },
    { src: "assets/fotos/ejemplo-2.webp", alt: "Foto 2" },
    { src: "assets/fotos/ejemplo-3.webp", alt: "Foto 3" },
    { src: "assets/fotos/ejemplo-4.webp", alt: "Foto 4" },
    { src: "assets/fotos/ejemplo-5.webp", alt: "Foto 5" }
  ]
};
