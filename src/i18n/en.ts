import type { Strings } from './types'

export const en: Strings = {
  htmlLang: 'en',
  seo: {
    title: 'EPR Token — Unified AI Model API Hub | One Key for GPT, DeepSeek, Kimi & More',
    description:
      'EPR Token is a unified AI model hub for aggregation and distribution. With an OpenAI-compatible API, one API key unlocks GPT, DeepSeek, Kimi, Qwen, GLM and more. One-click setup for Cherry Studio, LobeChat, NextChat and other clients. Pay-as-you-go with transparent pricing.',
    keywords:
      'EPR Token,AI API,LLM API,API aggregation,OpenAI compatible,DeepSeek API,GPT API,Kimi API,AI gateway,API proxy,pay as you go',
  },
  nav: {
    models: 'Models',
    features: 'Features',
    start: 'Quick Start',
    clients: 'Clients',
    faq: 'FAQ',
    docs: 'Docs ↗',
    login: 'Log in',
    register: 'Sign up free',
  },
  hero: {
    kicker: 'AI Gateway · Aggregation & Distribution',
    title1: 'One key,',
    title2: 'every major AI model',
    descPre: 'EPR Token is a unified AI model hub. With an OpenAI-compatible endpoint, switching takes a single line of code — call',
    descMid: 'GPT, DeepSeek, Kimi, Qwen, GLM',
    descPost: 'and more, with pay-as-you-go billing, transparent ratios and auditable logs.',
    ctaPrimary: 'Sign up free, get your key',
    ctaSecondary: 'View model pricing',
    stats: [
      ['30+', 'Major AI models'],
      ['100%', 'OpenAI-compatible'],
      ['8+', 'One-click clients'],
    ],
  },
  terminal: {
    title: 'epr-token — zsh · api.eprtoken.com',
    badge: 'OpenAI compatible',
    comment: '# 200 OK · stream=true · first token in 47ms',
    stream:
      'Hello! I am an AI model served through the EPR Token unified gateway. One key routes to GPT, DeepSeek, Kimi and other major models — pay as you go, transparent pricing, start anytime.',
    online: 'Gateway online',
    latency: '47ms latency',
  },
  models: {
    kicker: '/ 01 · Model Hub',
    title: 'Every major model, one endpoint',
    desc: 'From chat and reasoning to image and video generation — channels are continuously onboarded and maintained. Model ratios and availability are published live on the pricing page.',
    countSuffix: 'models',
    moreTitle: 'See all models & ratios',
    groups: [
      { vendor: 'DeepSeek', tint: '#4ED3FB', models: ['deepseek-v4-pro', 'deepseek-v4-flash', 'deepseek-v3.2', 'DeepSeek-R1'] },
      { vendor: 'OpenAI family', tint: '#47E27C', models: ['GPT-6-Astra', 'gpt-5.6-luna', 'gpt-5.6-terra'] },
      { vendor: 'Moonshot Kimi', tint: '#b350b3', models: ['Kimi-K3', 'kimi-k2.5'] },
      { vendor: 'Alibaba Qwen', tint: '#e8c84a', models: ['Qwen3-32B', 'Qwen2.5-72B-Instruct', 'Qwen2.5-VL-72B', 'QwQ-32B'] },
      { vendor: 'Zhipu GLM', tint: '#2f8fd0', models: ['glm-5'] },
      { vendor: 'MiniMax', tint: '#ff8a5c', models: ['MiniMax-M2.5'] },
      { vendor: 'Image / Video', tint: '#ff5ca8', models: ['happyhorse-1.0-t2v', 'happyhorse-1.0-i2v', 'happyhorse-1.0-r2v'] },
    ],
  },
  features: {
    kicker: '/ 02 · Capabilities',
    title1: 'More than a proxy,',
    title2: 'a complete AI gateway',
    items: [
      {
        accent: 'green',
        title: 'OpenAI-compatible API',
        desc: 'Fully compatible with the OpenAI API. Swap base_url and key in your existing code — zero migration cost.',
        code: 'base_url = "https://eprtoken.com/v1"',
      },
      {
        accent: 'purple',
        title: 'One key for every model',
        desc: 'Chat, reasoning, image and video generation behind one endpoint, with public, transparent model ratios.',
        code: 'model = "Kimi-K3" | "deepseek-v4-pro" | ...',
      },
      {
        accent: 'blue',
        title: 'Pay-as-you-go billing',
        desc: 'Billed by actual token usage. Every call is logged and auditable — no monthly fees, no hidden costs.',
        code: '$ usage logs · live stats · exportable',
      },
      {
        accent: 'gold',
        title: 'Gateway-level quota control',
        desc: 'Token groups, quota caps, expiry, IP allowlists — everything teams and resellers need.',
        code: 'token: quota 500,000 · never expires',
      },
    ],
  },
  steps: {
    kicker: '/ 03 · Quick Start',
    title: 'Three steps, five minutes',
    items: [
      {
        title: 'Create an account',
        desc: 'Sign up on EPR Token in under a minute — email and phone login supported.',
        linkText: 'Sign up now',
        linkKey: 'register',
      },
      {
        title: 'Create a token',
        desc: 'Create an API key in the console, with quota and model groups as needed.',
        linkText: 'Open console',
        linkKey: 'token',
      },
      {
        title: 'Swap the endpoint',
        desc: 'Point your app to https://eprtoken.com/v1, paste the key, and start building.',
        linkText: 'Read the docs',
        linkKey: 'docs',
      },
    ],
  },
  clients: {
    kicker: '/ 04 · Clients',
    title1: 'The clients you already use',
    title2: 'connect out of the box',
    tutorial: 'Client setup guides',
    items: [
      { name: 'Cherry Studio', kind: 'Desktop', desc: '30+ built-in AI assistants, one-click API key setup' },
      { name: 'Lobe Chat', kind: 'Web', desc: 'Open-source chat framework with official config example' },
      { name: 'NextChat', kind: 'Web', desc: 'Lightweight cross-platform ChatGPT client' },
      { name: 'Immersive Translate', kind: 'Browser extension', desc: 'Bilingual web translation with custom API endpoints' },
      { name: 'OpenCat', kind: 'Apple ecosystem', desc: 'Native AI client for Mac / iOS' },
      { name: 'AMA', kind: 'Mobile', desc: 'A pocket AI assistant on your phone' },
      { name: 'AI as Workspace', kind: 'Workspace', desc: 'An AI workspace for knowledge work' },
      { name: 'Your app', kind: 'Developers', desc: 'Any code or tool speaking the OpenAI protocol' },
    ],
  },
  faq: {
    kicker: '/ 05 · FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'What is EPR Token?',
        a: 'EPR Token is a unified AI model hub (AI gateway) for aggregation and distribution. Through one OpenAI-compatible endpoint you can call GPT, DeepSeek, Kimi, Qwen, GLM and other major models, including image and video generation.',
      },
      {
        q: 'Which models are supported?',
        a: 'The platform continuously onboards major models: DeepSeek V4 / R1 series, GPT series, Kimi series, Alibaba Qwen, Zhipu GLM, MiniMax, plus image and video generation models. See the pricing page for the full list and live ratios.',
        linkText: 'View model pricing',
        linkKey: 'pricing',
      },
      {
        q: 'How is it billed? Any hidden fees?',
        a: 'Pay-as-you-go by actual token usage with public model ratios. The console provides per-call logs and quota statistics — no monthly fees, no hidden costs.',
      },
      {
        q: 'My app already uses the OpenAI API. How do I migrate?',
        a: 'Two steps: change base_url to https://eprtoken.com/v1 and replace the API key with your EPR Token. Nothing else changes.',
        linkText: 'Read the guide',
        linkKey: 'docs',
      },
      {
        q: 'Which clients are supported?',
        a: 'Cherry Studio, Lobe Chat, NextChat, Immersive Translate, OpenCat, AMA and more — several support one-click key setup.',
      },
      {
        q: 'Can I use it for a team or resell?',
        a: 'Yes. The platform includes token groups, quota management, supplier and distributor programs with referral commissions — suited for teams, studios and channel partners.',
      },
    ],
  },
  cta: {
    kicker: '/ 06 · Get Your Key',
    title1: 'Plug your app into',
    title2: 'the entire AI world',
    desc: 'Sign up → create a token → swap base_url. Three lines of change give your product every major AI model.',
    primary: 'Sign up for EPR Token',
    secondary: 'Read the docs',
  },
  footer: {
    tagline: 'The unified infrastructure that carries every AI application, manages your digital assets, and connects the future.',
    product: 'Product',
    resources: 'Resources',
    start: 'Get started',
    links: {
      pricing: 'Model pricing',
      console: 'Console',
      token: 'Token management',
      topup: 'Top up',
      docs: 'Documentation',
      cherry: 'Cherry Studio guide',
      about: 'About us',
      register: 'Sign up',
      login: 'Log in',
    },
    copyright: '© 2026 EPR Token · A unified AI model hub for aggregation and distribution.',
    note: 'Official gateway page of EPR Token · all services provided by',
  },
}
