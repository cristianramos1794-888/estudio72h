# REQUISITOS.md — Studio72H

> Stack de entorno requerido para operar el proyecto.
> Última auditoría: 16/04/2026

---

## Propósito

Este documento lista qué software, herramientas y configuraciones debe tener Claude Code en la máquina local para trabajar en Studio72H. No versiona skills ni MCPs (configuración de cada máquina), pero sí documenta qué instalar cuando se configure en una nueva.

---

## 1. Sistema operativo

| Herramienta | Versión mínima | Para qué |
|-------------|----------------|----------|
| macOS | 14+ | SO base |
| Node.js | 20+ | Runtime para MCPs y npm |
| npm | 10+ | Gestor de paquetes |
| git | 2.40+ | Control de versiones |
| python3 | 3.10+ | Scripts auxiliares |

Verificación:
```bash
node --version
npm --version
git --version
python3 --version
```

---

## 2. Claude Code

Claude Code instalado y configurado. Ver [docs.claude.com](https://docs.claude.com) para instrucciones actualizadas.

### Configuración global (`~/.claude/settings.json`)

```json
{
  "enabledPlugins": {
    "frontend-design@claude-plugins-official": true,
    "playwright@claude-plugins-official": true,
    "security-guidance@claude-plugins-official": true,
    "commit-commands@claude-plugins-official": true
  },
  "effortLevel": "max"
}
```

---

## 3. Plugins oficiales (globales)

Los 4 plugins activos de Claude Code que aportan valor a Studio72H:

| Plugin | Para qué |
|--------|----------|
| `frontend-design` | Patrones de diseño frontend (HTML, CSS, componentes) |
| `playwright` | Testing del sitio |
| `security-guidance` | Prácticas seguras transversales |
| `commit-commands` | Flujos git estructurados |

---

## 4. MCPs requeridos

### MCPs globales (claude.ai connectors)

| MCP | Origen | Para qué |
|-----|--------|----------|
| Vercel | claude.ai | Deploy automático del sitio |

Activar vía: [claude.ai](https://claude.ai) → Settings → Connectors → Vercel.

### MCPs locales/globales activos

| MCP | Comando | Para qué |
|-----|---------|----------|
| `playwright` | (viene del plugin) | Testing del sitio |
| `magic` | `claude mcp add magic -- npx -y @21st-dev/magic@latest` | Componentes UI rápidos |

### MCPs NO requeridos

- `n8n-mcp` — Studio72H no tiene automatizaciones n8n (si aparece en `claude mcp list` es porque se instaló local a Escalio, no afecta)

### Verificar

```bash
cd ~/estudio72h
claude mcp list
```

Esperado:
```
claude.ai Vercel: ✓ Connected
plugin:playwright:playwright: ✓ Connected
magic: ✓ Connected
```

---

## 5. Skills

### Skills globales

Ninguna skill global es estrictamente requerida por Studio72H. Si `n8n-skills` aparece en `~/.claude/skills/` por otro proyecto, no afecta.

### Skills locales al proyecto

| Skill | Ubicación | Para qué |
|-------|-----------|----------|
| `ui-ux-pro-max` | `.claude/skills/ui-ux-pro-max` | Diseño frontend, tokens, componentes |

**Instalación en máquina nueva:**

```bash
cd ~/estudio72h
mkdir -p .claude/skills

# Opción A: copiar desde marketplace global si ya existe
cp -r ~/.claude/plugins/marketplaces/ui-ux-pro-max-skill .claude/skills/ui-ux-pro-max

# Opción B: instalar desde su repo original
# git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git .claude/skills/ui-ux-pro-max
```

**Nota:** la carpeta `.claude/` está en `.gitignore`. Las skills NO se versionan — cada máquina las instala localmente.

---

## 6. Servicios externos

Servicios que el **producto** usa (no el entorno de desarrollo):

| Servicio | Qué hace | Config |
|----------|----------|--------|
| Vercel | Sirve studio72h.com, deploy automático desde main | Cuenta activa con proyecto `estudio72h` |
| Hostinger | Dominio studio72h.com | DNS apuntando a Vercel |
| GitHub | Repo del código | cristianramos1794-888/estudio72h |
| Google Analytics 4 | Métricas de tráfico | ID `G-M48EJXQLVF` |
| Meta Business | Tracking publicidad + campañas | Pixel ID `2464374000687387` |
| WhatsApp Business | Canal comercial único | +57 310 541 5236 |

---

## 7. Setup desde cero en máquina nueva

Orden recomendado:

1. Instalar Claude Code (ver docs oficiales)
2. Configurar `~/.claude/settings.json` con el JSON del punto 2
3. Clonar repo:
   ```bash
   git clone https://github.com/cristianramos1794-888/estudio72h.git ~/estudio72h
   cd ~/estudio72h
   ```
4. Instalar skill local `ui-ux-pro-max` (ver punto 5)
5. Verificar MCPs con `claude mcp list`
6. Conectar Vercel en claude.ai si aún no está
7. Leer en orden: `CLAUDE.md`, `HISTORIAL.md`, `PROGRESO.md`
8. Abrir `index.html` en navegador para verificar que el sitio funciona local

---

## 8. Nota sobre la arquitectura actual

Tras la reconstrucción del 16/04/2026, el proyecto usa arquitectura modular:
- CSS en `assets/css/` (5 archivos temáticos)
- JS en `assets/js/` (main + analytics separados)
- Assets en `assets/img/`

**No existe paso de build.** Los archivos se sirven directamente desde Vercel. HTML + CSS + JS puro, sin framework, sin bundler, sin npm install local requerido.

Esto significa:
- No hay `package.json`, `node_modules/`, ni `dist/`
- Editar = ver cambios al recargar (`open index.html` en navegador)
- Deploy = `git push` (Vercel hace el resto)

Filosofía: mínima dependencia, máxima control, máxima velocidad de edición.

---

*REQUISITOS.md — Studio72H*
*Actualizar este documento cada vez que se añada o elimine una herramienta del stack.*
