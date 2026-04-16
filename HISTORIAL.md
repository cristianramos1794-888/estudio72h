# HISTORIAL.md — Studio72H

> Evolución cronológica del proyecto. Último cambio arriba.

---

## 16 de abril de 2026 — Reconstrucción completa a arquitectura modular

### Contexto
El proyecto tenía un `index.html` monolítico de 76 KB (1387 líneas) con CSS, HTML y JavaScript mezclados en un solo archivo. Esta arquitectura hacía imposible modificar secciones específicas sin riesgo de romper el resto del sitio.

### Qué cambió
- **Separación completa de CSS** en 5 archivos temáticos:
  - `base.css` — variables, reset, tipografía
  - `layout.css` — grid, secciones, navegación
  - `components.css` — botones, cards, FAQ, testimonios
  - `animations.css` — keyframes, marquees
  - `responsive.css` — media queries
- **Separación de JavaScript** en:
  - `main.js` — lógica del sitio
  - `analytics.js` — GA4 + Meta Pixel centralizado
- **Reorganización de assets** en `assets/img/`, `assets/css/`, `assets/js/`
- **Eliminación del popup de La Guajira** (código completo: HTML + CSS + JS) que estaba desactivado desde el pivote a mercado nacional
- **Documentación del proyecto** creada desde cero:
  - `CLAUDE.md` — constitución
  - `HISTORIAL.md` — este archivo
  - `PROGRESO.md` — estado vivo
  - `REQUISITOS.md` — stack auditado
- **`.gitignore` agregado** — control de basura (backups, .DS_Store, .claude/)

### Por qué
1. Un error al intentar eliminar el popup por rangos de líneas demostró que la arquitectura monolítica era riesgosa
2. Cualquier modificación futura del sitio necesitaría esta estructura antes o después
3. Tener documentación alineada con el estándar de Escalio (proyecto hermano)

### Resultado
- Archivo HTML principal ~60% más liviano
- Modificaciones futuras son aisladas por archivo
- Performance mejora (navegador cachea CSS separadamente)
- Base documental completa para cualquier futura sesión de trabajo

---

## 12 de abril de 2026 — Pivote estratégico: de La Guajira a Colombia nacional

### Contexto
El producto había lanzado inicialmente enfocado en la región de La Guajira. Había un popup específico dando la bienvenida "LLEGAMOS A LA GUAJIRA" con oferta de preview gratuito.

### Qué cambió
- Mercado objetivo expandido: de "solo La Guajira" a "Colombia en general"
- Popup de La Guajira desactivado (commit `9d71c63 feat: disable popup temporarily`)
- Robots.txt actualizado para permitir crawlers sociales completos
- FAQ actualizada con info de formas de pago (Nequi, Daviplata, transferencia)

### Por qué
- Validar el producto con mercado más amplio antes de especializarse
- Las campañas de Facebook pueden segmentar todo Colombia con mejor volumen

---

## 11-12 de abril de 2026 — Instalación de tracking publicitario

### Qué cambió
- **GA4 agregado** (commit `b114fbc`) con ID `G-M48EJXQLVF`
- **Meta Pixel agregado** (commit `65c934e`) con ID `2464374000687387`
- Imagen Open Graph para compartir en redes sociales (commit `a64f5aa`)
- Testimonios corregidos de regional genérico a negocio específico (commit `e10997b`)
- Robots.txt ajustado para Facebook y Twitter crawlers (commits `672b5b4`, `67945d5`)

### Por qué
- Preparar infraestructura de medición antes de activar campañas
- Permitir previews ricos en redes sociales cuando se comparte studio72h.com

---

## 10-11 de abril de 2026 — Estructura inicial del sitio

### Qué cambió
- `index.html` creado con sitio completo (diseño, servicios, precios, proceso, FAQ)
- `404.html`, `favicon.svg`, `sitemap.xml`, `robots.txt` configurados
- Hero counters con fallback (commit `728690d`)
- OG image template (`og-image-source.html`) para generar social preview

### Resultado
Sitio deployado en Vercel, dominio studio72h.com conectado vía Hostinger.

---

## Antes del 10 de abril de 2026 — Concepción

### Propuesta inicial del servicio
- Nombre: Studio72H
- Modelo: servicio único, pago único, plazo fijo
- Diferencial principal: velocidad (72 horas) con garantía de devolución
- Precio: $500.000 COP

Ver `CLAUDE.md` para la constitución actual completa.

---

## Convención de este documento

**Orden cronológico inverso.** Lo más reciente arriba. Cada entrada tiene:
- Fecha exacta
- Contexto (qué estado había)
- Qué cambió (acción concreta)
- Por qué (razón estratégica)
- Resultado (cuando aplique)

Se actualiza cada vez que hay un cambio estructural al proyecto.

---

*HISTORIAL.md — Studio72H*
*Reconstruido desde git log y memoria del proyecto el 16/04/2026.*
