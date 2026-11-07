# LOS ÁNGLES RP — Concesionario

Web estática responsive para consultar el catálogo y generar un texto de solicitud para un ticket de Discord.

## Archivos
- `index.html`: estructura semántica.
- `styles.css`: estilos responsive y diseño visual dorado/negro.
- `script.js`: búsqueda, catálogo desplegable y formulario local.
- `fondo-los-angeles-rp.jpg`: imagen del logo del servidor usada como fondo de toda la página.

## Publicar gratis con GitHub Pages
1. Crea un repositorio público en https://github.com/ (por ejemplo `los-angeles-rp-web`).
2. Sube todos los archivos anteriores a la raíz del repositorio, incluida la imagen `fondo-los-angeles-rp.jpg`.
3. Abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
5. Espera a que GitHub publique la web y abre la URL indicada en esa misma sección.

## Cambiar la imagen de fondo
Reemplaza `fondo-los-angeles-rp.jpg` por la imagen deseada manteniendo ese mismo nombre, o modifica la ruta de `body::before` al final de `styles.css`.

## Seguridad
El formulario se procesa localmente en el navegador; no cobra ni envía solicitudes automáticamente. HTML, CSS y JavaScript publicados son visibles para los visitantes. No es posible garantizar que F12 esté bloqueado ni impedir que alguien inspeccione el código. Para evitar cambios en la web pública, protege la cuenta de alojamiento con contraseña única y autenticación de dos factores y no compartas permisos de escritura.


## Guardado local (edición 03)
El formulario y el texto generado se guardan en `localStorage` del navegador para recuperarlos al volver a la página. El botón **Borrar datos guardados** elimina esos datos de ese navegador. No hay sincronización entre dispositivos. Si el equipo es compartido, se recomienda borrar los datos al terminar.
