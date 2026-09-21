export const SITE = 'https://eprtoken.com'

export const LINKS = {
  home: SITE,
  register: `${SITE}/register`,
  login: `${SITE}/login`,
  console: `${SITE}/console`,
  pricing: `${SITE}/pricing`,
  docs: `${SITE}/zh/docs`,
  about: `${SITE}/about`,
  topup: `${SITE}/console/topup`,
  token: `${SITE}/console/token`,
}

export interface ModelGroup {
  vendor: string
  tint: string
  models: string[]
}

export const MODEL_GROUPS: ModelGroup[] = [
  {
    vendor: 'DeepSeek',
    tint: '#4ED3FB',
    models: ['deepseek-v4-pro', 'deepseek-v4-flash', 'deepseek-v3.2', 'DeepSeek-R1'],
  },
  {
    vendor: 'OpenAI 系',
    tint: '#47E27C',
    models: ['GPT-6-Astra', 'gpt-5.6-luna', 'gpt-5.6-terra'],
  },
  {
    vendor: 'Moonshot Kimi',
    tint: '#b350b3',
    models: ['Kimi-K3', 'kimi-k2.5'],
  },
  {
    vendor: '阿里通义',
    tint: '#e8c84a',
    models: ['Qwen3-32B', 'Qwen2.5-72B-Instruct', 'Qwen2.5-VL-72B', 'QwQ-32B'],
  },
  {
    vendor: '智谱 GLM',
    tint: '#2f8fd0',
    models: ['glm-5'],
  },
  {
    vendor: 'MiniMax',
    tint: '#ff8a5c',
    models: ['MiniMax-M2.5'],
  },
  {
    vendor: '图像 / 视频',
    tint: '#ff5ca8',
    models: ['happyhorse-1.0-t2v', 'happyhorse-1.0-i2v', 'happyhorse-1.0-r2v'],
  },
]

export interface Feature {
  accent: 'green' | 'purple' | 'blue' | 'gold'
  title: string
  desc: string
  code: string
}

export const FEATURES: Feature[] = [
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
]

export interface Step {
  no: string
  title: string
  desc: string
  linkText: string
  link: string
}

export const STEPS: Step[] = [
  {
    no: '01',
    title: '注册账号',
    desc: '打开 EPR Token，一分钟完成注册，支持邮箱与手机号登录。',
    linkText: '立即注册',
    link: LINKS.register,
  },
  {
    no: '02',
    title: '创建令牌',
    desc: '在控制台「令牌」页创建 API Key，按需设置额度与模型分组。',
    linkText: '进入控制台',
    link: LINKS.token,
  },
  {
    no: '03',
    title: '替换接入地址',
    desc: '把应用的 API 地址改为 https://eprtoken.com/v1，粘贴 Key 即可开始使用。',
    linkText: '查看接入文档',
    link: LINKS.docs,
  },
]

export interface Client {
  name: string
  kind: string
  desc: string
}

export const CLIENTS: Client[] = [
  { name: 'Cherry Studio', kind: '桌面客户端', desc: '内置 30+ 专业 AI 助手，支持一键填入 API Key' },
  { name: 'Lobe Chat', kind: 'Web 客户端', desc: '高颜值开源聊天框架，官方示例一键配置' },
  { name: 'NextChat', kind: 'Web 客户端', desc: '轻量跨平台 ChatGPT 客户端' },
  { name: '沉浸式翻译', kind: '浏览器插件', desc: '网页双语对照翻译，自定义 API 接口' },
  { name: 'OpenCat', kind: 'Apple 生态', desc: 'Mac / iOS 原生 AI 客户端' },
  { name: 'AMA 问天', kind: '移动端', desc: '手机上的随身 AI 助手' },
  { name: 'AI as Workspace', kind: '工作台', desc: '面向知识工作的 AI 工作台' },
  { name: '你的应用', kind: '开发者', desc: '任何兼容 OpenAI 协议的代码与工具' },
]

export interface Faq {
  q: string
  a: string
  linkText?: string
  link?: string
}

export const FAQS: Faq[] = [
  {
    q: 'EPR Token 是什么？',
    a: 'EPR Token 是统一的 AI 大模型聚合与分发平台（AI 网关）。通过一个 OpenAI 兼容的 API 入口，即可调用 GPT、DeepSeek、Kimi、通义千问、GLM 等主流大模型，以及绘图、视频生成模型。',
  },
  {
    q: '支持哪些模型？',
    a: '平台持续接入主流模型，包括 DeepSeek V4 / R1 系列、GPT 系列、Kimi 系列、通义千问 Qwen 系列、智谱 GLM、MiniMax 以及图像、视频生成模型等，完整列表与实时倍率见定价页。',
    linkText: '查看模型定价',
    link: LINKS.pricing,
  },
  {
    q: '如何计费？会不会有隐藏费用？',
    a: '按实际 Token 用量计费，各模型倍率公开透明；控制台提供逐条调用日志与额度统计，用多少付多少，没有月费与隐藏费用。',
  },
  {
    q: '我的应用已有 OpenAI 代码，如何迁移？',
    a: '只需两步：把 base_url 改为 https://eprtoken.com/v1，把 API Key 换成 EPR Token 令牌。其余代码无需改动。',
    linkText: '查看接入教程',
    link: LINKS.docs,
  },
  {
    q: '支持哪些客户端？',
    a: '支持 Cherry Studio、Lobe Chat、NextChat、沉浸式翻译、OpenCat、AMA 问天等主流客户端，部分客户端支持一键填入 Key。',
  },
  {
    q: '可以团队使用或分销吗？',
    a: '可以。平台内置令牌分组、额度管理、供应商与分销商体系，支持邀请返佣，适合团队、工作室与渠道合作。',
  },
]

export const TICKER_MODELS = [
  'deepseek-v4-pro', 'Kimi-K3', 'GPT-6-Astra', 'Qwen3-32B', 'glm-5',
  'DeepSeek-R1', 'MiniMax-M2.5', 'gpt-5.6-terra', 'deepseek-v4-flash',
  'Qwen2.5-72B-Instruct', 'kimi-k2.5', 'happyhorse-1.0-t2v', 'QwQ-32B',
  'Qwen2.5-VL-72B', 'gpt-5.6-luna', 'deepseek-v3.2',
]
