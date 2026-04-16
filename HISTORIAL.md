# HISTORIAL.md — Studio72H

> Evolución cronológica del proyecto. Último cambio arriba.

---

## 16 de abril de 2026 — Reconstrucción modular + deploy en producción

### Contexto inicial

El proyecto tenía un `index.html` monolítico de 76 KB (1387 líneas) con CSS, HTML y JavaScript mezclados en un solo archivo. Un primer intento de eliminar el popup de La Guajira por rangos de línea rompió el sitio localmente, confirmando que la arquitectura monolítica era el cuello de botella real: cualquier modificación futura correría el mismo riesgo.

Decisión estratégica: reconstrucción completa a arquitectura modular en 5 fases, sin pausar hasta terminar.

### Sesión completa — 5 fases ejecutadas

**FASE 1 · Documentación base**
- Creados 4 documentos maestros: `CLAUDE.md` (constitución), `HISTORIAL.md` (cronología), `PROGRESO.md` (estado vivo), `REQUISITOS.md` (stack auditado)
- `.gitignore` agregado para control de basura (backups, .DS_Store, .claude/)
- Estructura de carpetas creada: `assets/{css,js,img}/` y `docs/`
- Skill local `ui-ux-pro-max` instalada en `.claude/skills/` (17 MB, gitignored)

**FASE 2 · Separación de CSS**
- 602 líneas de CSS inline clasificadas en 5 archivos temáticos:
  - `base.css` — variables, reset, cursor, preloader, noise (169 líneas)
  - `layout.css` — nav, hero, secciones, pricing, footer (645 líneas)
  - `components.css` — botones, cards, FAQ, marquee, mobile menu (706 líneas)
  - `animations.css` — keyframes globales (32 líneas)
  - `responsive.css` — todos los media queries (367 líneas)
- `<style>` monolítico reemplazado por 5 `<link rel="stylesheet">`
- Popup CSS mantenido aislado en bloque `<style>` único (preparación para eliminación limpia en FASE 4)
- Verificación visual confirmó sitio idéntico a producción

**FASE 3 · Separación de JavaScript**
- IIFE principal (253 líneas inline) separado en 2 archivos:
  - `analytics.js` — GA4 + Meta Pixel centralizado (26 líneas)
  - `main.js` — testimonios, hamburger menu, animaciones GSAP, cursor custom, magnetic effect, smooth scroll (264 líneas)
- Scripts inline reemplazados por `<script src>` externos
- Schema.org JSON-LD y GSAP CDN mantenidos en HTML (no son lógica ejecutable del sitio)
- Verificación confirmó interactividad intacta

**FASE 4 · Eliminación popup + reorganización**
- Popup de La Guajira eliminado completamente en 3 cirugías:
  - HTML del popup (139 líneas) removidas del `<body>`
  - CSS inline del popup (53 líneas) removidas del `<head>`
  - JavaScript del popup (36 líneas) removidas de `main.js`
- `og-image-source.html` movido a `docs/` (template histórico, no asset de producción)
- `favicon.svg` y `og-image.png` se mantuvieron en raíz por convención web y estabilidad de OG cache
- Comentarios huérfanos limpiados, líneas vacías consecutivas comprimidas

**FASE 5 · Deploy a producción**
- Commit estructurado `0cdafc2` con mensaje descriptivo completo
- Push exitoso a `origin/main` (26 KB comprimidos, 19 objetos)
- Vercel detectó el commit y redeployó automáticamente
- Verificación en vivo confirmó:
  - HTTP 200 en homepage y todos los 7 assets modulares
  - 5 CSS links + 2 JS links correctamente servidos
  - GA4 y Meta Pixel disparando pageview
  - Nuevo número WhatsApp en las 7 ubicaciones esperadas
  - Cero apariciones del número viejo, popup, o La Guajira

### Cambio adicional — Unificación de WhatsApp

Durante FASE 4 se detectó el número de contacto viejo y se decidió unificar el canal comercial:

- **Antes:** Studio72H usaba `+57 320 541 5236` (canal separado de Escalio)
- **Ahora:** Studio72H usa `+57 310 877 9882` (mismo canal que Escalio)

Total de ubicaciones actualizadas: 12 (7 en HTML, 5 en documentación del proyecto).

La separación estratégica Escalio/Studio72H se mantiene vigente en datos, contexto y sistemas. Solo el canal de WhatsApp se unificó.

### Impacto cuantificado

| Métrica | Antes | Después | Cambio |
|---------|-------|---------|--------|
| `index.html` tamaño | 76 KB | 24 KB | -68% |
| `index.html` líneas | 1,387 | 380 | -73% |
| Arquitectura | 1 archivo monolítico | 13 archivos modulares | Profesional |
| CSS inline | 602 líneas | 0 | Totalmente externo |
| JS inline | 253 líneas | 0 | Totalmente externo |
| Documentación del proyecto | Ninguna | 4 docs maestros | Completa |
| Código muerto (popup) | ~300 líneas | 0 | Eliminado |

### Qué habilita la nueva arquitectura

1. Modificaciones aisladas por archivo sin riesgo de romper el sitio
2. Navegador cachea CSS y JS separadamente (performance mejorada)
3. Debugging trivial: errores apuntan a línea exacta del archivo correcto
4. Escalabilidad real: agregar secciones nuevas es agregar código específico
5. Documentación alineada al estándar de Escalio (proyecto hermano)
6. Base lista para futuros eventos custom en GA4 y Meta Pixel

### Lección técnica registrada

El primer intento de eliminar el popup por rangos de línea (`sed` sobre el monolito original) rompió el sitio porque el CSS del popup estaba mezclado con reglas compartidas. El abordaje correcto fue: primero separar por arquitectura modular, después cortar bloques completos aislados. Esta lección se documenta para cualquier refactor futuro sobre archivos monolíticos.

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
*Última actualización: 16/04/2026 tras deploy exitoso de reconstrucción modular a producción.*
