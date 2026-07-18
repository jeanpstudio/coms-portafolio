const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const CONTEXTO_PATH = path.join(ROOT_DIR, 'contexto.md');
const BASE_LAYOUT_PATH = path.join(ROOT_DIR, 'src', 'layouts', 'BaseLayout.astro');
const GLOBAL_CSS_PATH = path.join(ROOT_DIR, 'src', 'assets', 'styles', 'global.css');

function syncDesign() {
  console.log('🔄 Iniciando sincronización del sistema de diseño...');

  if (!fs.existsSync(CONTEXTO_PATH)) {
    console.error(`❌ Error: No se encontró el archivo contexto.md en la ruta: ${CONTEXTO_PATH}`);
    process.exit(1);
  }

  const contextoContent = fs.readFileSync(CONTEXTO_PATH, 'utf8');

  // Extraer el JSON entre los marcadores
  const startMarker = '<!-- DESIGN_TOKENS_START -->';
  const endMarker = '<!-- DESIGN_TOKENS_END -->';

  const startIdx = contextoContent.indexOf(startMarker);
  const endIdx = contextoContent.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    console.error('❌ Error: No se encontraron los marcadores <!-- DESIGN_TOKENS_START --> y <!-- DESIGN_TOKENS_END --> en contexto.md');
    process.exit(1);
  }

  let jsonSection = contextoContent.substring(startIdx + startMarker.length, endIdx).trim();

  // Limpiar posibles bloques de código de markdown como ```json o ```
  if (jsonSection.startsWith('```')) {
    const firstNewline = jsonSection.indexOf('\n');
    jsonSection = jsonSection.substring(firstNewline + 1);
  }
  if (jsonSection.endsWith('```')) {
    jsonSection = jsonSection.substring(0, jsonSection.length - 3);
  }
  jsonSection = jsonSection.trim();

  let tokens;
  try {
    tokens = JSON.parse(jsonSection);
  } catch (err) {
    console.error('❌ Error al parsear el JSON de tokens de diseño en contexto.md:', err.message);
    process.exit(1);
  }

  // 1. Actualizar src/layouts/BaseLayout.astro
  if (fs.existsSync(BASE_LAYOUT_PATH)) {
    let layoutContent = fs.readFileSync(BASE_LAYOUT_PATH, 'utf8');

    // Reemplazar Google Fonts URL
    const fontsStartMarker = '<!-- DESIGN_SYSTEM_FONTS_START -->';
    const fontsEndMarker = '<!-- DESIGN_SYSTEM_FONTS_END -->';
    const fontsStartIdx = layoutContent.indexOf(fontsStartMarker);
    const fontsEndIdx = layoutContent.indexOf(fontsEndMarker);

    if (fontsStartIdx !== -1 && fontsEndIdx !== -1) {
      const replacement = `${fontsStartMarker}\n    <link rel="preconnect" href="https://fonts.googleapis.com" />\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n    <link\n      href="${tokens.googleFontsUrl}"\n      rel="stylesheet"\n    />\n    <!-- DESIGN_SYSTEM_FONTS_END -->`;
      layoutContent = layoutContent.substring(0, fontsStartIdx) + replacement + layoutContent.substring(fontsEndIdx + fontsEndMarker.length);
    } else {
      console.warn('⚠️ Advertencia: No se encontraron marcadores de Google Fonts en BaseLayout.astro');
    }

    // Reemplazar variables de fuentes de CSS
    const cssVarsStartMarker = '/* DESIGN_SYSTEM_VARIABLES_START */';
    const cssVarsEndMarker = '/* DESIGN_SYSTEM_VARIABLES_END */';
    const cssVarsStartIdx = layoutContent.indexOf(cssVarsStartMarker);
    const cssVarsEndIdx = layoutContent.indexOf(cssVarsEndMarker);

    if (cssVarsStartIdx !== -1 && cssVarsEndIdx !== -1) {
      const replacement = `${cssVarsStartMarker}\n    --font-sans: ${tokens.fontSans};\n    --font-heading: ${tokens.fontHeading};\n    /* DESIGN_SYSTEM_VARIABLES_END */`;
      layoutContent = layoutContent.substring(0, cssVarsStartIdx) + replacement + layoutContent.substring(cssVarsEndIdx + cssVarsEndMarker.length);
    } else {
      console.warn('⚠️ Advertencia: No se encontraron marcadores de variables de fuente CSS en BaseLayout.astro');
    }

    fs.writeFileSync(BASE_LAYOUT_PATH, layoutContent, 'utf8');
    console.log('✅ BaseLayout.astro actualizado con éxito.');
  } else {
    console.warn(`⚠️ Advertencia: No se encontró BaseLayout.astro en la ruta: ${BASE_LAYOUT_PATH}`);
  }

  // 2. Actualizar src/assets/styles/global.css
  if (fs.existsSync(GLOBAL_CSS_PATH)) {
    let globalCssContent = fs.readFileSync(GLOBAL_CSS_PATH, 'utf8');

    const cssStartMarker = '/* DESIGN_SYSTEM_LIGHT_START */';
    const cssEndMarker = '/* DESIGN_SYSTEM_LIGHT_END */';
    const cssStartIdx = globalCssContent.indexOf(cssStartMarker);
    const cssEndIdx = globalCssContent.indexOf(cssEndMarker);

    if (cssStartIdx !== -1 && cssEndIdx !== -1) {
      const c = tokens.colors;
      const h = tokens.headingSizes;
      const p = tokens.paragraphSizes || {
        "p-lead-mobile": "1.125rem",
        "p-lead-desktop": "1.25rem",
        "p-body": "1rem",
        "p-sm": "0.875rem"
      };
      const replacement = `${cssStartMarker}
    --background: ${c.background};
    --foreground: ${c.foreground};
    --card: ${c.card};
    --card-foreground: ${c["card-foreground"] || c.foreground};
    --popover: ${c.popover || c.background};
    --popover-foreground: ${c["popover-foreground"] || c.foreground};
    --primary: ${c.primary};
    --primary-foreground: ${c["primary-foreground"] || "0 0% 100%"};
    --secondary: ${c.secondary};
    --secondary-foreground: ${c["secondary-foreground"] || c.primary};
    --muted: ${c.muted};
    --muted-foreground: ${c["muted-foreground"] || "215 20% 45%"};
    --accent: ${c.accent || c.primary};
    --accent-foreground: ${c["accent-foreground"] || "0 0% 100%"};
    --destructive: ${c.destructive || "0 84.2% 60.2%"};
    --destructive-foreground: ${c["destructive-foreground"] || "0 0% 100%"};
    --border: ${c.border};
    --input: ${c.input || c.border};
    --ring: ${c.ring || c.primary};
    --radius: ${c.radius || "0.5rem"};

    /* Custom Design System Tokens */
    --text-title: ${c["text-title"] || c.foreground};
    --text-subtitle: ${c["text-subtitle"] || "215 20% 45%"};
    --text-title-dark-bg: ${c["text-title-dark-bg"] || "0 0% 100%"};
    --text-subtitle-dark-bg: ${c["text-subtitle-dark-bg"] || "240 5% 84%"};
    --image-radius: ${tokens.imageRadius};
    --size-h1-mobile: ${h["h1-mobile"]};
    --size-h1-desktop: ${h["h1-desktop"]};
    --size-h2-mobile: ${h["h2-mobile"]};
    --size-h2-desktop: ${h["h2-desktop"]};
    --size-h3-mobile: ${h["h3-mobile"]};
    --size-h3-desktop: ${h["h3-desktop"]};
    --size-h4-mobile: ${h["h4-mobile"]};
    --size-h4-desktop: ${h["h4-desktop"]};
    --size-p-lead-mobile: ${p["p-lead-mobile"]};
    --size-p-lead-desktop: ${p["p-lead-desktop"]};
    --size-p-body: ${p["p-body"]};
    --size-p-sm: ${p["p-sm"]};
    /* DESIGN_SYSTEM_LIGHT_END */`;

      globalCssContent = globalCssContent.substring(0, cssStartIdx) + replacement + globalCssContent.substring(cssEndIdx + cssEndMarker.length);
      fs.writeFileSync(GLOBAL_CSS_PATH, globalCssContent, 'utf8');
      console.log('✅ global.css actualizado con éxito.');
    } else {
      console.warn('⚠️ Advertencia: No se encontraron marcadores de diseño en global.css');
    }
  } else {
    console.warn(`⚠️ Advertencia: No se encontró global.css en la ruta: ${GLOBAL_CSS_PATH}`);
  }

  console.log('✨ Sincronización finalizada correctamente.');
}

if (require.main === module) {
  syncDesign();
}

module.exports = syncDesign;
