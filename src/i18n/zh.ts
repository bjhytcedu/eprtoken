import type { Strings } from './types'

export const zh: Strings = {
  htmlLang: 'zh-CN',
  seo: {
    title: 'EPR Token — 一站式 AI 大模型 API 聚合平台 | 一个 Key 接入 GPT / DeepSeek / Kimi',
    description:
      'EPR Token 是统一的 AI 大模型 API 聚合与分发平台。OpenAI 兼容接口，一个 API Key 即可调用 GPT、DeepSeek、Kimi、通义千问、GLM 等主流大模型，支持 Cherry Studio、LobeChat、NextChat 等客户端一键接入，按量计费、倍率透明。立即注册获取你的专属 Key。',
    keywords:
      'EPR Token,AI API,大模型 API,API 聚合,OpenAI 兼容,DeepSeek API,GPT API,Kimi API,AI 网关,API 中转,Cherry Studio,LobeChat,按量计费',
  },
  nav: {
    models: '模型',
    features: '能力',
    start: '接入',
    clients: '客户端',
    faq: 'FAQ',
    docs: '文档 ↗',
    login: '登录',
    register: '免费注册',
  },
  hero: {
    kicker: 'AI Gateway · Aggregation & Distribution',
    title1: '一个 Key，',
    title2: '接入全球主流大模型',
    descPre: 'EPR Token 是统一的 AI 大模型聚合与分发平台。OpenAI 兼容接口，一行地址切换即可调用',
    descMid: 'GPT、DeepSeek、Kimi、通义千问、GLM',
    descPost: '等模型，按量计费、倍率透明、日志可查。',
    ctaPrimary: '免费注册，领取 Key',
    ctaSecondary: '查看模型定价',
    stats: [
      ['30+', '主流大模型'],
      ['100%', 'OpenAI 协议兼容'],
      ['8+', '客户端一键接入'],
    ],
  },
  terminal: {
    title: 'epr-token — zsh · api.eprtoken.com',
    badge: 'OpenAI 兼容',
    comment: '# 200 OK · stream=true · 47ms 首 token',
    stream:
      '你好！我是通过 EPR Token 统一网关接入的 AI 模型，一个 Key 即可调度 GPT、DeepSeek、Kimi 等主流大模型——按量计费，倍率透明，随时开始。',
    online: '网关在线',
    latency: '延迟 47ms',
  },
  models: {
    kicker: '/ 01 · Model Hub',
    title: '主流模型，一个入口',
    desc: '从聊天推理到绘图视频，平台持续接入并维护上游渠道。模型倍率与可用状态在定价页实时公开。',
    countSuffix: '个模型',
    moreTitle: '查看全部模型与倍率',
    groups: [
      { vendor: 'DeepSeek', tint: '#4ED3FB', models: ['deepseek-v4-pro', 'deepseek-v4-flash', 'deepseek-v3.2', 'DeepSeek-R1'] },
      { vendor: 'OpenAI 系', tint: '#47E27C', models: ['GPT-6-Astra', 'gpt-5.6-luna', 'gpt-5.6-terra'] },
      { vendor: 'Moonshot Kimi', tint: '#b350b3', models: ['Kimi-K3', 'kimi-k2.5'] },
      { vendor: '阿里通义', tint: '#e8c84a', models: ['Qwen3-32B', 'Qwen2.5-72B-Instruct', 'Qwen2.5-VL-72B', 'QwQ-32B'] },
      { vendor: '智谱 GLM', tint: '#2f8fd0', models: ['glm-5'] },
      { vendor: 'MiniMax', tint: '#ff8a5c', models: ['MiniMax-M2.5'] },
      { vendor: '图像 / 视频', tint: '#ff5ca8', models: ['happyhorse-1.0-t2v', 'happyhorse-1.0-i2v', 'happyhorse-1.0-r2v'] },
    ],
  },
  features: {
    kicker: '/ 02 · Capabilities',
    title1: '不止是 API 中转，',
    title2: '是完整的 AI 网关',
    items: [
      {
        accent: 'green',
        title: 'OpenAI 兼容接口',
        desc: '完全兼容 OpenAI API 协议，现有代码只需替换 base_url 与 Key，零迁移成本。',
        code: 'base_url = "https://eprtoken.com/v1"',
      },
      {
        accent: 'purple',
        title: '一个 Key 调度全部模型',
        desc: '聊天、推理、绘图、视频生成统一入口，模型倍率公开透明，随时在定价页查询。',
        code: 'model = "Kimi-K3" | "deepseek-v4-pro" | ...',
      },
      {
        accent: 'blue',
        title: '按量计费 · 透明账单',
        desc: '按实际 Token 用量扣费，每一笔调用都有日志可查，用多少付多少，无隐藏费用。',
        code: '$ 用量日志 · 实时统计 · 明细导出',
      },
      {
        accent: 'gold',
        title: '网关级额度管理',
        desc: '令牌分组、额度上限、过期时间、IP 白名单，团队与分销场景一应俱全。',
        code: 'token: 额度 500,000 · 永不过期',
      },
    ],
  },
  steps: {
    kicker: '/ 03 · Quick Start',
    title: '三步接入，五分钟跑通',
    items: [
      {
        title: '注册账号',
        desc: '打开 EPR Token，一分钟完成注册，支持邮箱与手机号登录。',
        linkText: '立即注册',
        linkKey: 'register',
      },
      {
        title: '创建令牌',
        desc: '在控制台「令牌」页创建 API Key，按需设置额度与模型分组。',
        linkText: '进入控制台',
        linkKey: 'token',
      },
      {
        title: '替换接入地址',
        desc: '把应用的 API 地址改为 https://eprtoken.com/v1，粘贴 Key 即可开始使用。',
        linkText: '查看接入文档',
        linkKey: 'docs',
      },
    ],
  },
  clients: {
    kicker: '/ 04 · Clients',
    title1: '你常用的客户端，',
    title2: '都能直接连上',
    tutorial: '查看各客户端接入教程',
    items: [
      { name: 'Cherry Studio', kind: '桌面客户端', desc: '内置 30+ 专业 AI 助手，支持一键填入 API Key' },
      { name: 'Lobe Chat', kind: 'Web 客户端', desc: '高颜值开源聊天框架，官方示例一键配置' },
      { name: 'NextChat', kind: 'Web 客户端', desc: '轻量跨平台 ChatGPT 客户端' },
      { name: '沉浸式翻译', kind: '浏览器插件', desc: '网页双语对照翻译，自定义 API 接口' },
      { name: 'OpenCat', kind: 'Apple 生态', desc: 'Mac / iOS 原生 AI 客户端' },
      { name: 'AMA 问天', kind: '移动端', desc: '手机上的随身 AI 助手' },
      { name: 'AI as Workspace', kind: '工作台', desc: '面向知识工作的 AI 工作台' },
      { name: '你的应用', kind: '开发者', desc: '任何兼容 OpenAI 协议的代码与工具' },
    ],
  },
  faq: {
    kicker: '/ 05 · FAQ',
    title: '常见问题',
    items: [
      {
        q: 'EPR Token 是什么？',
        a: 'EPR Token 是统一的 AI 大模型聚合与分发平台（AI 网关）。通过一个 OpenAI 兼容的 API 入口，即可调用 GPT、DeepSeek、Kimi、通义千问、GLM 等主流大模型，以及绘图、视频生成模型。',
      },
      {
        q: '支持哪些模型？',
        a: '平台持续接入主流模型，包括 DeepSeek V4 / R1 系列、GPT 系列、Kimi 系列、通义千问 Qwen 系列、智谱 GLM、MiniMax 以及图像、视频生成模型等，完整列表与实时倍率见定价页。',
        linkText: '查看模型定价',
        linkKey: 'pricing',
      },
      {
        q: '如何计费？会不会有隐藏费用？',
        a: '按实际 Token 用量计费，各模型倍率公开透明；控制台提供逐条调用日志与额度统计，用多少付多少，没有月费与隐藏费用。',
      },
      {
        q: '我的应用已有 OpenAI 代码，如何迁移？',
        a: '只需两步：把 base_url 改为 https://eprtoken.com/v1，把 API Key 换成 EPR Token 令牌。其余代码无需改动。',
        linkText: '查看接入教程',
        linkKey: 'docs',
      },
      {
        q: '支持哪些客户端？',
        a: '支持 Cherry Studio、Lobe Chat、NextChat、沉浸式翻译、OpenCat、AMA 问天等主流客户端，部分客户端支持一键填入 Key。',
      },
      {
        q: '可以团队使用或分销吗？',
        a: '可以。平台内置令牌分组、额度管理、供应商与分销商体系，支持邀请返佣，适合团队、工作室与渠道合作。',
      },
    ],
  },
  cta: {
    kicker: '/ 06 · Get Your Key',
    title1: '现在就把你的应用',
    title2: '接入整个 AI 世界',
    desc: '注册 → 创建令牌 → 替换 base_url。三行改动，让你的产品拥有全球主流大模型的能力。',
    primary: '免费注册 EPR Token',
    secondary: '阅读接入文档',
  },
  footer: {
    tagline: '承载所有 AI 应用，管理你的数字资产，连接未来的统一基础设施平台。',
    product: '产品',
    resources: '资源',
    start: '开始',
    links: {
      pricing: '模型定价',
      console: '控制台',
      token: '令牌管理',
      topup: '余额充值',
      docs: '接入文档',
      cherry: 'Cherry Studio 教程',
      about: '关于我们',
      register: '注册账号',
      login: '登录',
    },
    copyright: '© 2026 EPR Token · A unified AI model hub for aggregation and distribution.',
    note: '本站为 EPR Token 官方引导页 · 全部服务由',
  },
}
