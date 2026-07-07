# Portafolio Personal - Manuel Matías

Bienvenido al código fuente de mi portafolio personal. Este proyecto fue creado con el objetivo de aplicar y mostrar los conocimientos que he ido adquiriendo en desarrollo web.

Es un diseño de una sola página (Single Page Application) muy sencillo y limpio, enfocado en mostrar mi información de manera directa sin depender de librerías complejas.

##  Características

- **Diseño Responsivo:** Se adapta a dispositivos móviles, tablets y monitores de escritorio.
- **Navegación Fluida:** Desplazamiento suave (smooth scroll) entre las diferentes secciones.
## Descripción de Secciones

El portafolio está dividido en las siguientes secciones para facilitar la navegación:

- **Inicio**: Es la primera vista. Contiene mi foto de perfil, un saludo de bienvenida y una breve descripción de mi perfil como estudiante, además de botones de acción rápida.
- **Sobre Mí**: Un espacio donde explico detalladamente quién soy, mis metas, mi motivación para aprender desarrollo web y qué estoy practicando actualmente.
- **Habilidades**: Una galería de tarjetas que muestran las herramientas y lenguajes que manejo o estoy aprendiendo (HTML, CSS, JS, Bootstrap, PHP, MySQL, Git, Python).
- **Proyectos**: Muestra tarjetas informativas de mis proyectos de práctica (por ejemplo: Task Manager, Tienda Online, App del Clima). Cada uno indica las tecnologías usadas y un enlace al código.
- **Contacto**: Un formulario básico simulado para que los visitantes me envíen un mensaje, además de indicar mi correo y enlaces a redes profesionales.

##  Tecnologías Utilizadas

Este portafolio está construido con tecnologías web básicas, ideal para asentar las bases del desarrollo frontend:

- **HTML5:** Estructura semántica.
- **CSS3:** Estilos personalizados mínimos.
- **Vanilla JavaScript:** Lógica simple para el formulario y el menú de navegación.
- **Bootstrap 5.3.3:** Utilizado para el sistema de cuadrículas (Grid), botones y utilidades rápidas sin reinventar la rueda.
- **Bootstrap Icons 1.11.3:** Para la iconografía en todo el sitio.

##  Estructura de Archivos

El proyecto mantiene una estructura simple:

```text
/
├── css/
│   └── portafolio.css     # Estilos extra y personalizados
├── img/
│   └── perfil.png         # Foto de perfil
├── js/
│   └── portafolio.js      # Scripts de comportamiento
└── index.html             # Documento HTML principal
```

##  Cómo correr el proyecto

No necesitas instalar Node.js ni correr comandos complicados:

1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/mi-portafolio.git
   ```
2. Abre el archivo `index.html` directamente en tu navegador web.
3. *Opcional:* Si usas un editor como VS Code, puedes usar la extensión **Live Server** o colocar la carpeta en tu servidor local de XAMPP (ej. `htdocs`).

## Proceso de Creación

Este portafolio es una refactorización de una plantilla original mucho más compleja. El objetivo de las modificaciones fue **simplificar el código** para crear un portafolio ligero, sincero y manejable, ideal para un perfil junior o estudiante. 

**¿Qué se modificó y por qué?**
1. **Eliminación de dependencias pesadas:** Se removieron librerías de animación (AOS), partículas, y scripts de efectos de "escribir a máquina" (Typewriter). *¿Por qué?* Para evitar que la página se sintiera sobrecargada ("mucho ruido visual") y lograr que cargue de forma casi instantánea.
2. **Refactorización a Bootstrap Vanilla:** Se eliminaron los gradientes, bordes brillantes (glow) y temas oscuros personalizados. Ahora todo usa clases estándar de Bootstrap. *¿Por qué?* Para demostrar un uso limpio y correcto del framework base, facilitando el mantenimiento.
3. **Limpieza de Código:** Reducción de más de 500 líneas de HTML a solo ~230 líneas, y de 800 líneas de CSS a tan solo ~25 líneas. Además, se eliminaron todos los comentarios de las secciones del código. *¿Por qué?* Un código más corto es más fácil de leer, debugear y extender en el futuro.
4. **Diseño de Habilidades y Proyectos:** Se reemplazaron imágenes placeholder complejas y barras de progreso por íconos minimalistas e insignias (badges). *¿Por qué?* Para comunicar la información de manera más directa, sin depender de imágenes externas que muchas veces lucen genéricas.

## Plantilla Original

Este proyecto fue adaptado y simplificado a partir de una plantilla original para fines educativos. Si deseas ver o utilizar la versión base, puedes encontrarla aquí:
🔗 **[Enlace a la plantilla original](https://github.com/MuriungiPatrick/Bootstrap-5-portfolio-template)**

## Descargar mi Proyecto

Puedes descargar el código fuente de mi portafolio modificado y simplificado de forma gratuita. Haz clic en el siguiente enlace para descargarla:

🔗 **[Descargar Plantilla (ZIP)](https://github.com/ManueldJMatias/Actividad-4/archive/refs/heads/main.zip)**


---
Hecho con esfuerzo por [Manuel Matías] - 2026.