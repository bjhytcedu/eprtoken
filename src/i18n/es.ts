import type { Strings } from './types'

export const es: Strings = {
  htmlLang: 'es',
  seo: {
    title: 'EPR Token — Hub unificado de API de modelos de IA | Una clave para GPT, DeepSeek, Kimi y más',
    description:
      'EPR Token es un hub unificado de agregación y distribución de modelos de IA. Con una API compatible con OpenAI, una sola clave desbloquea GPT, DeepSeek, Kimi, Qwen, GLM y más. Conexión en un clic para Cherry Studio, LobeChat, NextChat y otros clientes. Pago por uso con precios transparentes.',
    keywords:
      'EPR Token,API de IA,API de LLM,agregación de API,compatible con OpenAI,API de DeepSeek,API de GPT,API de Kimi,pasarela de IA,pago por uso',
  },
  nav: {
    models: 'Modelos',
    features: 'Funciones',
    start: 'Inicio rápido',
    clients: 'Clientes',
    faq: 'FAQ',
    docs: 'Docs ↗',
    login: 'Iniciar sesión',
    register: 'Registrarse gratis',
  },
  hero: {
    kicker: 'AI Gateway · Aggregation & Distribution',
    title1: 'Una clave,',
    title2: 'todos los modelos de IA',
    descPre: 'EPR Token es un hub unificado de modelos de IA. Con un endpoint compatible con OpenAI, cambiar cuesta una sola línea de código: llama a',
    descMid: 'GPT, DeepSeek, Kimi, Qwen, GLM',
    descPost: 'y más, con facturación por uso, ratios transparentes y registros auditables.',
    ctaPrimary: 'Regístrate gratis, obtén tu clave',
    ctaSecondary: 'Ver precios de modelos',
    stats: [
      ['30+', 'Modelos de IA principales'],
      ['100%', 'Compatible con OpenAI'],
      ['8+', 'Clientes en un clic'],
    ],
  },
  terminal: {
    title: 'epr-token — zsh · api.eprtoken.com',
    badge: 'Compatible con OpenAI',
    comment: '# 200 OK · stream=true · primer token en 47ms',
    stream:
      '¡Hola! Soy un modelo de IA servido a través de la pasarela unificada EPR Token. Una clave enruta a GPT, DeepSeek, Kimi y otros modelos principales — pago por uso, precios transparentes, empieza cuando quieras.',
    online: 'Pasarela en línea',
    latency: 'latencia 47ms',
  },
  models: {
    kicker: '/ 01 · Model Hub',
    title: 'Todos los modelos, un endpoint',
    desc: 'Del chat y el razonamiento a la generación de imágenes y video: los canales se incorporan y mantienen continuamente. Los ratios de modelos y la disponibilidad se publican en vivo en la página de precios.',
    countSuffix: 'modelos',
    moreTitle: 'Ver todos los modelos y ratios',
    groups: [
      { vendor: 'DeepSeek', tint: '#4ED3FB', models: ['deepseek-v4-pro', 'deepseek-v4-flash', 'deepseek-v3.2', 'DeepSeek-R1'] },
      { vendor: 'Familia OpenAI', tint: '#47E27C', models: ['GPT-6-Astra', 'gpt-5.6-luna', 'gpt-5.6-terra'] },
      { vendor: 'Moonshot Kimi', tint: '#b350b3', models: ['Kimi-K3', 'kimi-k2.5'] },
      { vendor: 'Alibaba Qwen', tint: '#e8c84a', models: ['Qwen3-32B', 'Qwen2.5-72B-Instruct', 'Qwen2.5-VL-72B', 'QwQ-32B'] },
      { vendor: 'Zhipu GLM', tint: '#2f8fd0', models: ['glm-5'] },
      { vendor: 'MiniMax', tint: '#ff8a5c', models: ['MiniMax-M2.5'] },
      { vendor: 'Imagen / Video', tint: '#ff5ca8', models: ['happyhorse-1.0-t2v', 'happyhorse-1.0-i2v', 'happyhorse-1.0-r2v'] },
    ],
  },
  features: {
    kicker: '/ 02 · Capabilities',
    title1: 'Más que un proxy,',
    title2: 'una pasarela de IA completa',
    items: [
      {
        accent: 'green',
        title: 'API compatible con OpenAI',
        desc: 'Totalmente compatible con la API de OpenAI. En tu código existente solo cambia base_url y la clave — costo de migración cero.',
        code: 'base_url = "https://eprtoken.com/v1"',
      },
      {
        accent: 'purple',
        title: 'Una clave para todos los modelos',
        desc: 'Chat, razonamiento, imágenes y video tras un solo endpoint, con ratios de modelos públicos y transparentes.',
        code: 'model = "Kimi-K3" | "deepseek-v4-pro" | ...',
      },
      {
        accent: 'blue',
        title: 'Pago por uso · facturación transparente',
        desc: 'Facturación por uso real de tokens. Cada llamada queda registrada y es auditable — sin cuotas mensuales ni costes ocultos.',
        code: '$ registros de uso · estadísticas en vivo · exportables',
      },
      {
        accent: 'gold',
        title: 'Control de cuotas a nivel pasarela',
        desc: 'Grupos de tokens, límites de cuota, caducidad, listas blancas de IP — todo lo que necesitan equipos y distribuidores.',
        code: 'token: cuota 500,000 · sin caducidad',
      },
    ],
  },
  steps: {
    kicker: '/ 03 · Quick Start',
    title: 'Tres pasos, cinco minutos',
    items: [
      {
        title: 'Crea una cuenta',
        desc: 'Regístrate en EPR Token en menos de un minuto — con correo o teléfono.',
        linkText: 'Regístrate ahora',
        linkKey: 'register',
      },
      {
        title: 'Crea un token',
        desc: 'Crea una clave de API en la consola, con cuota y grupos de modelos según necesites.',
        linkText: 'Abrir consola',
        linkKey: 'token',
      },
      {
        title: 'Cambia el endpoint',
        desc: 'Apunta tu app a https://eprtoken.com/v1, pega la clave y empieza a construir.',
        linkText: 'Leer la documentación',
        linkKey: 'docs',
      },
    ],
  },
  clients: {
    kicker: '/ 04 · Clients',
    title1: 'Los clientes que ya usas',
    title2: 'conectan directamente',
    tutorial: 'Guías de configuración por cliente',
    items: [
      { name: 'Cherry Studio', kind: 'Escritorio', desc: 'Más de 30 asistentes de IA integrados, clave en un clic' },
      { name: 'Lobe Chat', kind: 'Web', desc: 'Framework de chat open source con ejemplo oficial de configuración' },
      { name: 'NextChat', kind: 'Web', desc: 'Cliente ligero de ChatGPT multiplataforma' },
      { name: 'Immersive Translate', kind: 'Extensión', desc: 'Traducción web bilingüe con endpoints de API personalizados' },
      { name: 'OpenCat', kind: 'Ecosistema Apple', desc: 'Cliente de IA nativo para Mac / iOS' },
      { name: 'AMA', kind: 'Móvil', desc: 'Un asistente de IA de bolsillo en tu teléfono' },
      { name: 'AI as Workspace', kind: 'Workspace', desc: 'Un workspace de IA para trabajo de conocimiento' },
      { name: 'Tu app', kind: 'Desarrolladores', desc: 'Cualquier código o herramienta que hable el protocolo OpenAI' },
    ],
  },
  faq: {
    kicker: '/ 05 · FAQ',
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Qué es EPR Token?',
        a: 'EPR Token es un hub unificado de modelos de IA (pasarela de IA) para agregación y distribución. A través de un endpoint compatible con OpenAI puedes llamar a GPT, DeepSeek, Kimi, Qwen, GLM y otros modelos principales, incluida la generación de imágenes y video.',
      },
      {
        q: '¿Qué modelos están disponibles?',
        a: 'La plataforma incorpora continuamente modelos principales: series DeepSeek V4 / R1, series GPT, series Kimi, Alibaba Qwen, Zhipu GLM, MiniMax, además de modelos de generación de imágenes y video. Consulta la página de precios para la lista completa y los ratios en vivo.',
        linkText: 'Ver precios de modelos',
        linkKey: 'pricing',
      },
      {
        q: '¿Cómo se factura? ¿Hay costes ocultos?',
        a: 'Pago por uso según el consumo real de tokens, con ratios de modelos públicos. La consola ofrece registros por llamada y estadísticas de cuota — sin cuotas mensuales ni costes ocultos.',
      },
      {
        q: 'Mi app ya usa la API de OpenAI. ¿Cómo migro?',
        a: 'Dos pasos: cambia base_url a https://eprtoken.com/v1 y sustituye la clave de API por tu token de EPR Token. Nada más cambia.',
        linkText: 'Leer la guía',
        linkKey: 'docs',
      },
      {
        q: '¿Qué clientes son compatibles?',
        a: 'Cherry Studio, Lobe Chat, NextChat, Immersive Translate, OpenCat, AMA y más — varios permiten configurar la clave en un clic.',
      },
      {
        q: '¿Puedo usarlo en equipo o revender?',
        a: 'Sí. La plataforma incluye grupos de tokens, gestión de cuotas, programas de proveedores y distribuidores con comisiones por referido — ideal para equipos, estudios y partners de canal.',
      },
    ],
  },
  cta: {
    kicker: '/ 06 · Get Your Key',
    title1: 'Conecta tu app a',
    title2: 'todo el mundo de la IA',
    desc: 'Regístrate → crea un token → cambia base_url. Tres líneas de cambio dan a tu producto todos los modelos principales de IA.',
    primary: 'Regístrate en EPR Token',
    secondary: 'Leer la documentación',
  },
  footer: {
    tagline: 'La infraestructura unificada que soporta cada aplicación de IA, gestiona tus activos digitales y conecta el futuro.',
    product: 'Producto',
    resources: 'Recursos',
    start: 'Empezar',
    links: {
      pricing: 'Precios de modelos',
      console: 'Consola',
      token: 'Gestión de tokens',
      topup: 'Recargar',
      docs: 'Documentación',
      cherry: 'Guía de Cherry Studio',
      about: 'Sobre nosotros',
      register: 'Registrarse',
      login: 'Iniciar sesión',
    },
    copyright: '© 2026 EPR Token · A unified AI model hub for aggregation and distribution.',
    note: 'Página oficial de EPR Token · todos los servicios proporcionados por',
  },
}
