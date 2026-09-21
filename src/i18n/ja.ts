import type { Strings } from './types'

export const ja: Strings = {
  htmlLang: 'ja',
  seo: {
    title: 'EPR Token — 統合 AI モデル API ハブ | 1つのキーで GPT・DeepSeek・Kimi に接続',
    description:
      'EPR Token は AI 大規模モデルの統合集約・配信プラットフォームです。OpenAI 互換 API で、1つの API キーから GPT、DeepSeek、Kimi、Qwen、GLM など主要モデルを呼び出せます。Cherry Studio、LobeChat、NextChat などのクライアントにワンクリック接続。従量課金で料金体系も透明です。',
    keywords:
      'EPR Token,AI API,LLM API,API 集約,OpenAI 互換,DeepSeek API,GPT API,Kimi API,AI ゲートウェイ,従量課金',
  },
  nav: {
    models: 'モデル',
    features: '機能',
    start: '導入方法',
    clients: 'クライアント',
    faq: 'FAQ',
    docs: 'ドキュメント ↗',
    login: 'ログイン',
    register: '無料登録',
  },
  hero: {
    kicker: 'AI Gateway · Aggregation & Distribution',
    title1: '1つのキーで、',
    title2: '世界の主要 AI モデルへ',
    descPre: 'EPR Token は統合 AI モデルハブです。OpenAI 互換エンドポイントで、1行の変更だけで',
    descMid: 'GPT、DeepSeek、Kimi、Qwen、GLM',
    descPost: 'などを呼び出せます。従量課金・透明な料金倍率・監査可能なログ。',
    ctaPrimary: '無料登録してキーを取得',
    ctaSecondary: '料金を見る',
    stats: [
      ['30+', '主要 AI モデル'],
      ['100%', 'OpenAI 互換'],
      ['8+', 'ワンクリック接続'],
    ],
  },
  terminal: {
    title: 'epr-token — zsh · api.eprtoken.com',
    badge: 'OpenAI 互換',
    comment: '# 200 OK · stream=true · 初トークン 47ms',
    stream:
      'こんにちは！EPR Token 統合ゲートウェイ経由の AI モデルです。1つのキーで GPT、DeepSeek、Kimi など主要モデルを切り替え可能——従量課金、透明な料金、いつでも開始できます。',
    online: 'ゲートウェイ稼働中',
    latency: '遅延 47ms',
  },
  models: {
    kicker: '/ 01 · Model Hub',
    title: '主要モデルを、1つの入口に',
    desc: 'チャット・推論から画像・動画生成まで、チャネルを継続的に追加・保守しています。モデル倍率と稼働状況は料金ページで公開。',
    countSuffix: 'モデル',
    moreTitle: 'すべてのモデルと倍率を見る',
    groups: [
      { vendor: 'DeepSeek', tint: '#4ED3FB', models: ['deepseek-v4-pro', 'deepseek-v4-flash', 'deepseek-v3.2', 'DeepSeek-R1'] },
      { vendor: 'OpenAI 系', tint: '#47E27C', models: ['GPT-6-Astra', 'gpt-5.6-luna', 'gpt-5.6-terra'] },
      { vendor: 'Moonshot Kimi', tint: '#b350b3', models: ['Kimi-K3', 'kimi-k2.5'] },
      { vendor: 'Alibaba Qwen', tint: '#e8c84a', models: ['Qwen3-32B', 'Qwen2.5-72B-Instruct', 'Qwen2.5-VL-72B', 'QwQ-32B'] },
      { vendor: 'Zhipu GLM', tint: '#2f8fd0', models: ['glm-5'] },
      { vendor: 'MiniMax', tint: '#ff8a5c', models: ['MiniMax-M2.5'] },
      { vendor: '画像 / 動画', tint: '#ff5ca8', models: ['happyhorse-1.0-t2v', 'happyhorse-1.0-i2v', 'happyhorse-1.0-r2v'] },
    ],
  },
  features: {
    kicker: '/ 02 · Capabilities',
    title1: '単なる API 中継ではなく、',
    title2: '完全な AI ゲートウェイ',
    items: [
      {
        accent: 'green',
        title: 'OpenAI 互換 API',
        desc: 'OpenAI API プロトコルに完全互換。既存コードは base_url とキーを差し替えるだけ。移行コストゼロ。',
        code: 'base_url = "https://eprtoken.com/v1"',
      },
      {
        accent: 'purple',
        title: '1つのキーで全モデルを制御',
        desc: 'チャット・推論・画像・動画生成を統一入口に。モデル倍率は公開され、料金ページでいつでも確認可能。',
        code: 'model = "Kimi-K3" | "deepseek-v4-pro" | ...',
      },
      {
        accent: 'blue',
        title: '従量課金・透明な請求',
        desc: '実際のトークン使用量に基づく課金。すべての呼び出しがログに記録され、月額費用や隠れたコストはなし。',
        code: '$ 利用ログ · リアルタイム統計 · エクスポート',
      },
      {
        accent: 'gold',
        title: 'ゲートウェイ級のクォータ管理',
        desc: 'トークングループ、クォータ上限、有効期限、IP ホワイトリスト。チームや再販のシナリオにも対応。',
        code: 'token: クォータ 500,000 · 無期限',
      },
    ],
  },
  steps: {
    kicker: '/ 03 · Quick Start',
    title: '3ステップ、5分で完了',
    items: [
      {
        title: 'アカウント登録',
        desc: 'EPR Token を開き、1分で登録完了。メールと携帯番号でのログインに対応。',
        linkText: '今すぐ登録',
        linkKey: 'register',
      },
      {
        title: 'トークンを作成',
        desc: 'コンソールの「トークン」ページで API キーを作成。クォータとモデルグループを設定。',
        linkText: 'コンソールへ',
        linkKey: 'token',
      },
      {
        title: 'エンドポイントを切替',
        desc: 'アプリの API アドレスを https://eprtoken.com/v1 に変更し、キーを貼るだけ。',
        linkText: '導入ドキュメント',
        linkKey: 'docs',
      },
    ],
  },
  clients: {
    kicker: '/ 04 · Clients',
    title1: 'いつものクライアントが、',
    title2: 'そのまま接続できる',
    tutorial: '各クライアントの接続ガイド',
    items: [
      { name: 'Cherry Studio', kind: 'デスクトップ', desc: '30+ の AI アシスタント内蔵、API キーをワンクリック設定' },
      { name: 'Lobe Chat', kind: 'Web', desc: '高デザインのオープンソースチャット、公式設定例あり' },
      { name: 'NextChat', kind: 'Web', desc: '軽量クロスプラットフォーム ChatGPT クライアント' },
      { name: 'Immersive Translate', kind: 'ブラウザ拡張', desc: 'バイリンガル翻訳、カスタム API エンドポイント対応' },
      { name: 'OpenCat', kind: 'Apple 環境', desc: 'Mac / iOS ネイティブ AI クライアント' },
      { name: 'AMA', kind: 'モバイル', desc: 'スマホの AI アシスタント' },
      { name: 'AI as Workspace', kind: 'ワークスペース', desc: 'ナレッジワーク向け AI ワークスペース' },
      { name: 'あなたのアプリ', kind: '開発者', desc: 'OpenAI プロトコル対応のあらゆるコードとツール' },
    ],
  },
  faq: {
    kicker: '/ 05 · FAQ',
    title: 'よくある質問',
    items: [
      {
        q: 'EPR Token とは？',
        a: 'EPR Token は AI 大規模モデルの統合集約・配信プラットフォーム（AI ゲートウェイ）です。1つの OpenAI 互換エンドポイントから、GPT、DeepSeek、Kimi、Qwen、GLM など主要モデルや画像・動画生成モデルを呼び出せます。',
      },
      {
        q: '対応モデルは？',
        a: 'DeepSeek V4 / R1 シリーズ、GPT シリーズ、Kimi シリーズ、Alibaba Qwen、Zhipu GLM、MiniMax、画像・動画生成モデルなどを継続的に追加。完全なリストと最新倍率は料金ページをご覧ください。',
        linkText: '料金を見る',
        linkKey: 'pricing',
      },
      {
        q: '料金体系は？隠れた費用は？',
        a: '実際のトークン使用量に基づく従量課金で、モデル倍率は公開。コンソールで呼び出しごとのログとクォータ統計を確認でき、月額費用や隠れた費用はありません。',
      },
      {
        q: '既存の OpenAI コードからの移行方法は？',
        a: '2ステップだけ：base_url を https://eprtoken.com/v1 に変更し、API キーを EPR Token のトークンに差し替えるだけです。',
        linkText: 'ガイドを読む',
        linkKey: 'docs',
      },
      {
        q: '対応クライアントは？',
        a: 'Cherry Studio、Lobe Chat、NextChat、Immersive Translate、OpenCat、AMA など主要クライアントに対応。一部はワンクリックでキー設定が可能です。',
      },
      {
        q: 'チーム利用や再販は可能？',
        a: '可能です。トークングループ、クォータ管理、サプライヤー・ディストリビューター制度、紹介コミッションを備え、チーム・スタジオ・チャネルパートナーに適しています。',
      },
    ],
  },
  cta: {
    kicker: '/ 06 · Get Your Key',
    title1: 'あなたのアプリを、',
    title2: 'AI の世界全体につなぐ',
    desc: '登録 → トークン作成 → base_url 切替。3行の変更で、世界の主要 AI モデルがあなたのものに。',
    primary: 'EPR Token に無料登録',
    secondary: 'ドキュメントを読む',
  },
  footer: {
    tagline: 'すべての AI アプリを支え、デジタル資産を管理し、未来をつなぐ統合インフラプラットフォーム。',
    product: '製品',
    resources: 'リソース',
    start: 'はじめる',
    links: {
      pricing: 'モデル料金',
      console: 'コンソール',
      token: 'トークン管理',
      topup: 'チャージ',
      docs: 'ドキュメント',
      cherry: 'Cherry Studio ガイド',
      about: '私たちについて',
      register: '新規登録',
      login: 'ログイン',
    },
    copyright: '© 2026 EPR Token · A unified AI model hub for aggregation and distribution.',
    note: '本サイトは EPR Token 公式ゲートウェイページ · すべてのサービスは',
  },
}
