# CLAUDE.md — Studio72H

> Constitución del proyecto Studio72H. Se lee completa antes de ejecutar cualquier tarea.
> Versión 1.0 · Abril 2026

---

## 1. QUÉ ES STUDIO72H

Studio72H es un **servicio de creación de páginas web profesionales para negocios en Colombia**, entregado en 72 horas garantizadas por un precio único de $500.000 COP.

**Posicionamiento:** "Tu negocio en internet. En 72 horas."

**Propuesta diferenciadora frente a la competencia:**
- Agencias tradicionales cobran millones y tardan semanas → Studio72H entrega en 72h por $500K
- Plantillas genéricas autoinstalables → Studio72H diseña con identidad del cliente
- Servicios recurrentes con mensualidades → Studio72H es pago único, sin mensualidades

**Dominio de producción:** studio72h.com
**Repo git:** https://github.com/cristianramos1794-888/estudio72h
**Canal único de cierre:** WhatsApp 573108779882
**Moneda operativa:** COP (pesos colombianos)
**Mercado:** Colombia (todo el país)

---

## 2. EL PRODUCTO CONCRETO

### Qué entrega Studio72H por $500.000 COP

- Diseño personalizado con colores y logo del cliente
- Dominio .com por 1 año
- Hosting por 1 año
- Hasta 5 secciones completas
- Sitio optimizado para móvil
- Botón flotante de WhatsApp
- Formulario de contacto funcional
- SEO básico (aparece en Google)
- Certificado SSL
- 100% propiedad del cliente, para siempre

### Condiciones comerciales publicadas

- **Precio:** $500.000 COP, pago único
- **Forma de pago:** 50% al arrancar, 50% al entregar
- **Medios de pago:** Nequi, Daviplata, transferencia bancaria
- **Plazo:** 72 horas desde recepción del material del cliente (logo, fotos, textos)
- **Garantía:** 100% de devolución si no se cumple el plazo
- **Propiedad:** el cliente es dueño 100% del sitio para siempre

### 4 tipos de página que ofrece

1. **Página corporativa** — restaurantes, clínicas, empresas
2. **Landing de producto** — productos, eventos, servicios
3. **Catálogo digital** — tiendas, talleres, distribuidores (modelo WhatsApp-first, sin carrito)
4. **Perfil profesional** — médicos, abogados, freelancers

---

## 3. ESTADO ACTUAL DEL NEGOCIO

**Al 16/04/2026:**

- **Ventas cerradas:** 0
- **Campañas activas:** sí, en Facebook/Meta Ads
- **Tracking instalado:** GA4 (`G-M48EJXQLVF`) + Meta Pixel (`2464374000687387`)
- **Foco geográfico actual:** Colombia en general
- **Portafolio público:** no visible todavía en el sitio

**Historial reciente:**
- Inicialmente el foco era regional (La Guajira) con popup específico
- Pivote a Colombia nacional completa el 12/04/2026
- Popup de La Guajira desactivado (código sigue presente para limpieza en refactor)

Ver `PROGRESO.md` para el estado vivo detallado y pendientes.

---

## 4. ARQUITECTURA TÉCNICA

### Stack

- **Frontend:** HTML + CSS + JavaScript puro (sin frameworks)
- **Hosting:** Vercel (deploy automático desde `main`)
- **Dominio:** studio72h.com
- **Analytics:** Google Analytics 4
- **Tracking publicidad:** Meta Pixel (Facebook/Instagram)
- **Canal comercial:** WhatsApp Business

### Estructura del proyecto

```
estudio72h/
├── CLAUDE.md           ← constitución (este archivo)
├── HISTORIAL.md        ← evolución cronológica
├── PROGRESO.md         ← estado vivo + pendientes
├── REQUISITOS.md       ← stack auditado
├── .gitignore          ← control de basura
│
├── index.html          ← página principal (HTML puro, estilos via <link>)
├── 404.html            ← página de error
├── robots.txt          ← indexación
├── sitemap.xml         ← mapa del sitio
│
├── assets/
│   ├── css/
│   │   ├── base.css         ← variables, reset, tipografía
│   │   ├── layout.css       ← grid, secciones, navegación
│   │   ├── components.css   ← botones, cards, forms, faq
│   │   ├── animations.css   ← keyframes, marquees, transiciones
│   │   └── responsive.css   ← todos los media queries
│   │
│   ├── js/
│   │   ├── main.js          ← lógica del sitio (scroll smooth, interacciones)
│   │   └── analytics.js     ← GA4 + Meta Pixel centralizado
│   │
│   └── img/
│       ├── favicon.svg
│       └── og-image.png
│
└── docs/
    └── og-image-source.html ← template para generar OG image (archivo histórico)
```

**Esta estructura es resultado de la reconstrucción del 16/04/2026.** Antes existía un solo `index.html` monolítico de 76 KB con CSS + HTML + JS inline. La modularización permite edición segura, performance mejorado, y escalabilidad.

---

## 5. ORDEN DE LECTURA PARA CLAUDE CODE

Cuando abras el proyecto Studio72H, lee los documentos en este orden:

1. **Este archivo** (`CLAUDE.md`) — contexto integral y reglas
2. **`HISTORIAL.md`** — evolución reciente del sistema
3. **`PROGRESO.md`** — estado actual del negocio y pendientes
4. **`REQUISITOS.md`** — stack requerido si trabajas en una máquina nueva

---

## 6. ESTÁNDARES DE OUTPUT

### Formato de cifras
- Precio del servicio: `$500.000 COP` (con separador de miles en punto — formato colombiano)
- Nunca escribir "500K" en contenido visible al cliente — decir precio exacto

### Idioma
- Español colombiano para todo el contenido cara al cliente
- Inglés técnico solo en: nombres de variables, comentarios de código, commits de git

### Calidad mínima de cualquier output
Todo entregable (copy, código, diseño) debe pasar este filtro:

> "¿Un dueño de negocio en Colombia que entra al sitio en su celular por primera vez entiende en 10 segundos qué hace Studio72H, cuánto cuesta, y cómo contactar?"

Si la respuesta no es un sí rotundo, no está listo.

### Contexto colombiano siempre activo
- Nequi y Daviplata son medios de pago primarios
- Transferencia bancaria tradicional también
- 78%+ del tráfico viene de móvil
- La comunicación comercial cierra por WhatsApp

---

## 7. AUTONOMÍA DEL SISTEMA

### ✅ Decide sin preguntar
- Optimizaciones internas que no cambian comportamiento observable
- Refactors dentro de archivos CSS/JS separados (no cruzan hacia otro)
- Documentación y comentarios de código
- Bugs evidentes de syntax o estilo

### ⚠️ Propone antes de ejecutar
- Cambios en copy visible al usuario
- Añadir o eliminar secciones del sitio
- Cambios de esquema de colores o tipografía
- Modificar tracking (GA4 o Meta Pixel)
- Añadir dependencias externas

### 🚫 Nunca sin autorización explícita
- Cambiar el precio ($500.000 COP)
- Cambiar el plazo (72 horas)
- Cambiar el número de WhatsApp (573108779882)
- Cambiar el dominio o tagline principal
- Deshabilitar o modificar los IDs de tracking
- Hacer push a `main` sin revisión

---

## 8. FLUJO DE TRABAJO GIT

- **Branch principal:** `main` — sincronizado con `origin/main`
- **Remote:** `cristianramos1794-888/estudio72h` (GitHub)
- **Deploy automático:** Vercel sigue `main` para servir studio72h.com

### Convenciones de commit
```
<tipo>: <descripción corta en imperativo>

<cuerpo opcional con contexto>
```

Tipos válidos: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`.

### Archivos ignorados (ver `.gitignore`)
- `.DS_Store`
- `.claude/` (config local de Claude Code, no versionada)
- Backups manuales (`*.backup.*`)
- `__pycache__/`, archivos temporales de editores

---

## 9. DECISIONES DE PRODUCTO PERMANENTES

Estas decisiones son inamovibles sin autorización explícita:

1. **Canal único de cierre:** WhatsApp directo al 573108779882
2. **Moneda:** COP en todo el sitio
3. **Precio único:** $500.000 COP — no hay planes ni tiers
4. **Plazo fijo:** 72 horas garantizadas
5. **Propuesta de valor:** velocidad + calidad + garantía de devolución
6. **Mercado:** Colombia (no internacional por ahora)
7. **Separación estricta Escalio / Studio72H:** nunca mezclar contexto entre proyectos

---

## 10. PRIORIDAD ACTUAL

La prioridad es **validar el producto con las campañas activas antes de optimizar más el sitio.**

Específicamente:
1. Generar primera venta real
2. Documentar el proceso de onboarding del primer cliente
3. Capturar testimonio real y reemplazar placeholder
4. Ajustar campañas según datos de GA4 y Meta Pixel

Cualquier trabajo de desarrollo que no apoye estos objetivos directamente **no es prioritario**.

---

## 11. SISTEMA DE DISEÑO

### Filosofía visual
Dark theme profesional con acentos vibrantes. Transmite modernidad, velocidad y confianza. No es una agencia — es una plataforma de servicio eficiente.

### Principios
1. **Claridad sobre creatividad** — si hay duda, elige lo más claro
2. **Performance sobre estética** — animación que ralentiza se elimina
3. **Mobile first** — 78%+ del tráfico es celular
4. **Confianza cuantificada** — cifras exactas (72h, $500.000, 5 secciones), nunca "rápido" o "económico"

### Accesibilidad no negociable
- Todo texto con contraste WCAG AA mínimo
- Tab navega elementos interactivos en orden lógico
- Imágenes con `alt` descriptivo
- Focus ring visible
- Landmarks semánticos: `<nav>`, `<main>`, `<section>`, `<footer>`

---

## 12. REGLAS DE COPY

### Tono de voz
- **Directo:** la primera frase comunica el beneficio principal
- **Empático:** entiende al dueño de negocio que no es técnico
- **Preciso:** cifras exactas, plazos exactos
- **Confiado:** sin dubitativos ni condicionales ("podríamos", "tal vez")
- **Colombiano:** cercano, profesional, sin jerga regional forzada

### Estructura de cualquier sección
```
1. DOLOR      — nombrar el problema del dueño de negocio
2. SOLUCIÓN   — Studio72H como alternativa concreta
3. PRUEBA     — cifra, testimonio o garantía
4. ACCIÓN     — un solo CTA hacia WhatsApp
```

### Prohibiciones absolutas
- ❌ "Solución integral", "ecosistema", "sinergia"
- ❌ Preguntas retóricas sin dato
- ❌ Promesas sin número
- ❌ Testimonios falsos o inventados
- ✅ Siempre: cifra + plazo + garantía

---

## 13. CUANDO ALGO NO ESTÁ EN ESTE DOCUMENTO

Si una tarea no tiene respuesta en este archivo:

1. **Interpretación más conservadora** — preserva lo que ya funciona
2. **Documenta el supuesto** — comentario en código o nota
3. **Marca la decisión tomada** — para revisión posterior

Ante ambigüedad, ejecutar lo mínimo indispensable y preguntar.

---

*CLAUDE.md — Studio72H v1.0*
*Actualizado: 16/04/2026 tras reconstrucción completa a arquitectura modular.*
