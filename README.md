# 📚 Free Biblio

Plataforma web minimalista, liviana y de código abierto orientada a la difusión y descarga libre de publicaciones digitales (PDF / ePub) y recursos independientes sin restricciones.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React 19 + Vite 8
* **Estilos & UI:** Tailwind CSS v4
* **Iconografía & Assets:** SVG vectoriales nativos para optimizar tiempos de carga.
* **SEO & Social Sharing:** Meta tags Open Graph, Twitter Cards y favicon vectorizado estilo *Calibre*.

---

## 🚀 Características Principales

* **Lector / Descarga Directa:** Acceso inmediato a recursos en formatos estándar (`.pdf`, `.epub`).
* **Soporte & Financiamiento Independiente:** Integración modular con botón de apoyo comunitario vía Cafecito.
* **Diseño Fluid & Responsive:** Layout dinámico optimizado para móviles y computadoras.
* **Optimización SEO / Open Graph:** Tarjetas de visualización previa preconfiguradas para WhatsApp, X (Twitter) y LinkedIn.

---

## 📂 Estructura del Proyecto

```text
free-biblio/
├── public/
│   ├── favicon.svg          # Favicon vectorial (pila de libros estilo Calibre)
│   ├── og-image.jpg         # Vista previa para redes sociales (1200x630)
│   └── ...                  # Archivos estáticos de e-books (PDF/ePub)
├── src/
│   ├── components/          # Componentes reutilizables (Header, ItemCard, CafecitoBtn)
│   ├── data/                # Catálogo de recursos (items.js)
│   ├── App.jsx              # Vista principal de la aplicación
│   ├── main.jsx             # Punto de entrada de React
│   └── index.css            # Configuración de Tailwind CSS v4
├── index.html               # Plantilla HTML con Meta Tags de Open Graph
└── package.json             # Dependencias del proyecto
```
---

## ⚙️ Instalación y Desarrollo Local

1. **Clonar el repositorio:**
   ```bash
      git clone https://github.com/e-legal032/free-biblio.git
   cd free-biblio
   ```
2. **Instalar dependencias:**
   ```npm install
   ```
3. **Iniciar servidor de desarrollo:**
   ```npm run dev
   ```
4. **Compilar para producción:**
   ```npm run build
   ```
## 🌐 Despliegue en Netlify

El proyecto está listo para integración continua (CI/CD) vinculando el repositorio con Netlify:

* **Build command:** `npm run build`
* **Publish directory:** `dist`

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT. Formatos, contenidos y recursos bajo principios de acceso libre y gestión independiente.