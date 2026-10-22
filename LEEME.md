# Invitación XV · versión de demostración (Isabella)

Invitación web hecha con HTML, CSS y JavaScript puros. No necesita instalar nada.

## Cómo verla
- Abrí `index.html` con doble clic, o
- En VS Code, con la extensión **Live Server**: clic derecho en `index.html` → *Open with Live Server*.

Para revisar el diseño sin el sobre de entrada: `index.html?directo`

## Estructura
```
index.html            Página principal
css/style.css         Colores, tipografías y diseño
js/config.js          TODOS los datos de la invitación (editar acá)
js/main.js            Sobre que se abre, calendario, alias, WhatsApp y destellos en los botones
js/magia.js           Partículas mágicas (destellos y pétalos)
js/petalo-guia.js     Pétalo que se desprende de la rosa y cae hasta el final de la página
js/petalos.js         Pétalos y polvo dorado de fondo (se dibuja a 30 cuadros/s y solo con la invitación abierta)
js/reproductor.js     Música: play/pausa, anterior, siguiente, barra, aleatorio, repetir, volumen
js/cuenta.js          Cuenta regresiva
js/galeria.js         Carrusel de fotos (puntos, flechas y deslizar con el dedo)
assets/audio/         Música (MP3)
assets/fonts/         Tipografías incluidas (funciona sin internet)
assets/img/           Rosa con cúpula, rosa del pie de página (rosa-pie.webp), piezas del sobre, sello, favicon y miniatura.jpg (vista previa al compartir)
assets/fotos/         Fotos del carrusel (hoy hay 5 de ejemplo para reemplazar)
herramientas/         Scripts opcionales y tus piezas originales (piezas-originales/)
                        recortar_sobre.py  vuelve a generar las piezas del sobre desde piezas-originales/sobre.png
                        procesar_rosa.py   vuelve a generar la rosa desde piezas-originales/Rosa.png (necesita opencv-python)
```

## Música
La canción es `assets/audio/musica.mp3` y empieza en el segundo 0 (`inicio: 0`).
**OJO: el archivo `musica.mp3` que viene todavía es la canción anterior. Reemplazalo por la tuya (mismo nombre) o cambiá `archivo`.**
Está definida en `js/config.js`, en `playlist`:
```js
{ titulo: "La bella y la bestia", artista: "Ivan", archivo: "assets/audio/musica.mp3", inicio: 0 }
```
- Si cambiás el nombre del archivo, cambialo también en `archivo`; si no, no suena.
- `inicio` es el segundo desde el que arranca. La barra y el tiempo cuentan desde ahí.
- Usá un MP3 verdadero (no un M4A renombrado), así suena en cualquier navegador.
- Si agregás más canciones a la lista, anterior, siguiente y aleatorio empiezan a cambiar de tema.

## Carrusel de fotos
1. Copiá tus fotos a `assets/fotos/` (verticales 4:5, ~720 x 900 px, JPG o WEBP, menos de 150 KB cada una).
2. En `js/config.js`, en `fotos`, listá cada una. Ejemplo: `{ src: "assets/fotos/mi-foto.webp", alt: "Descripción" }`.
3. De 3 a 8 fotos queda lindo. Si dejás la lista vacía (`fotos: []`), la sección desaparece sola.
Se desliza con el dedo y también tiene puntos y flechas. No avanza sola, para que no se mueva nada sin que el invitado lo toque.

## Datos de demostración cargados (js/config.js)
- Nombre: Isabella · Salón Encantado, Corrientes · sábado 27 de noviembre de 2027 · 21:00 hs
- WhatsApp de confirmación: +54 9 379 4394807 · confirmar hasta el 20 de noviembre
- Alias de ejemplo: isabella.xv · dress code elegante · colores reservados dorado y amarillo
- La cuenta regresiva termina el 27/11/2027: después de esa fecha mostrará el mensaje final. Cambiá `fechaISO`, `diaSemana`, `dia`, `mes` y `anio` para renovarla.

## Vista previa al compartir el link (WhatsApp)
En `index.html` hay dos líneas con `NOMBRE-DEL-REPOSITORIO` (`og:url` y `og:image`): reemplazalo por el nombre real del repositorio donde la publiques.
La imagen de vista previa es `assets/img/miniatura.jpg` (630 x 630, liviana).

## Cómo publicarla (gratis)
- **Netlify Drop**: entrá a app.netlify.com/drop y arrastrá toda la carpeta.
- **GitHub Pages**: subí la carpeta a un repositorio y activá Pages.

Después compartí el link por WhatsApp.

## Optimización para celulares (cambios hechos)
- Se quitó el sobre que flotaba y el latido del sello: ahora el sobre está quieto hasta que se toca.
- Se eliminaron las estrellas blancas que titilaban por toda la página y sobre el nombre (js/destellos.js).
- Se quitó `backdrop-filter` (desenfoque de fondo) de reproductor, cuenta regresiva, ventanas y botón flotante.
- El fondo ya no usa `background-attachment: fixed` (repintaba todo en cada scroll).
- El dorado del texto ya no se anima, y el nombre ya no cambia su resplandor en cada cuadro.
- Resplandores del sobre, la carta, la rosa y el nombre: degradados fijos en vez de blur/drop-shadow animados.
- Pétalos de fondo: menos cantidad, 30 cuadros/s y pausados mientras el sobre está cerrado.
- Pétalo guía: al posarse al final de la página deja de animarse.
- Se borró rosa-cupula.png (el .webp se usa directo).

## Corrección del "movimiento de pantalla" (2.ª ronda)
La causa era el halo dorado detrás del nombre (`.nombre-wrap::before`): pulsaba con `scale()` y se salía unos píxeles del
borde de la pantalla, así que el navegador del celular re-encajaba toda la página una y otra vez. Ahora:
- el halo queda dentro de su caja y solo cambia de opacidad;
- las estrellitas del sobre (`titilar`) y la salida del sobre ya no usan `scale()` sobre capas de pantalla completa;
- `.invitacion` tiene `overflow-x:clip` como seguro extra.
