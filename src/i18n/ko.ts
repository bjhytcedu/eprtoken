import type { Strings } from './types'

export const ko: Strings = {
  htmlLang: 'ko',
  seo: {
    title: 'EPR Token — 통합 AI 모델 API 허브 | 하나의 키로 GPT·DeepSeek·Kimi 연결',
    description:
      'EPR Token은 AI 대규모 모델 통합 집계·배포 플랫폼입니다. OpenAI 호환 API로 하나의 API 키만으로 GPT, DeepSeek, Kimi, Qwen, GLM 등 주요 모델을 호출하세요. Cherry Studio, LobeChat, NextChat 등 클라이언트 원클릭 연결. 종량제 요금, 투명한 가격.',
    keywords:
      'EPR Token,AI API,LLM API,API 집계,OpenAI 호환,DeepSeek API,GPT API,Kimi API,AI 게이트웨이,종량제',
  },
  nav: {
    models: '모델',
    features: '기능',
    start: '시작하기',
    clients: '클라이언트',
    faq: 'FAQ',
    docs: '문서 ↗',
    login: '로그인',
    register: '무료 가입',
  },
  hero: {
    kicker: 'AI Gateway · Aggregation & Distribution',
    title1: '하나의 키로,',
    title2: '전 세계 주요 AI 모델을',
    descPre: 'EPR Token은 통합 AI 모델 허브입니다. OpenAI 호환 엔드포인트로 단 한 줄 변경만으로',
    descMid: 'GPT, DeepSeek, Kimi, Qwen, GLM',
    descPost: '등을 호출할 수 있습니다. 종량제 과금, 투명한 요금 배율, 감사 가능한 로그.',
    ctaPrimary: '무료 가입하고 키 받기',
    ctaSecondary: '모델 요금 보기',
    stats: [
      ['30+', '주요 AI 모델'],
      ['100%', 'OpenAI 프로토콜 호환'],
      ['8+', '원클릭 클라이언트'],
    ],
  },
  terminal: {
    title: 'epr-token — zsh · api.eprtoken.com',
    badge: 'OpenAI 호환',
    comment: '# 200 OK · stream=true · 첫 토큰 47ms',
    stream:
      '안녕하세요! EPR Token 통합 게이트웨이를 통해 연결된 AI 모델입니다. 하나의 키로 GPT, DeepSeek, Kimi 등 주요 모델을 전환할 수 있습니다 — 종량제 과금, 투명한 요금, 언제든 시작하세요.',
    online: '게이트웨이 온라인',
    latency: '지연 47ms',
  },
  models: {
    kicker: '/ 01 · Model Hub',
    title: '주요 모델을 하나의 입구로',
    desc: '채팅·추론부터 이미지·영상 생성까지, 채널을 지속적으로 추가하고 유지 관리합니다. 모델 배율과 가용 상태는 요금 페이지에서 실시간으로 공개됩니다.',
    countSuffix: '개 모델',
    moreTitle: '전체 모델과 배율 보기',
    groups: [
      { vendor: 'DeepSeek', tint: '#4ED3FB', models: ['deepseek-v4-pro', 'deepseek-v4-flash', 'deepseek-v3.2', 'DeepSeek-R1'] },
      { vendor: 'OpenAI 계열', tint: '#47E27C', models: ['GPT-6-Astra', 'gpt-5.6-luna', 'gpt-5.6-terra'] },
      { vendor: 'Moonshot Kimi', tint: '#b350b3', models: ['Kimi-K3', 'kimi-k2.5'] },
      { vendor: 'Alibaba Qwen', tint: '#e8c84a', models: ['Qwen3-32B', 'Qwen2.5-72B-Instruct', 'Qwen2.5-VL-72B', 'QwQ-32B'] },
      { vendor: 'Zhipu GLM', tint: '#2f8fd0', models: ['glm-5'] },
      { vendor: 'MiniMax', tint: '#ff8a5c', models: ['MiniMax-M2.5'] },
      { vendor: '이미지 / 영상', tint: '#ff5ca8', models: ['happyhorse-1.0-t2v', 'happyhorse-1.0-i2v', 'happyhorse-1.0-r2v'] },
    ],
  },
  features: {
    kicker: '/ 02 · Capabilities',
    title1: '단순한 API 중계가 아닌,',
    title2: '완전한 AI 게이트웨이',
    items: [
      {
        accent: 'green',
        title: 'OpenAI 호환 API',
        desc: 'OpenAI API 프로토콜과 완전 호환. 기존 코드에서 base_url과 키만 교체하면 됩니다. 마이그레이션 비용 제로.',
        code: 'base_url = "https://eprtoken.com/v1"',
      },
      {
        accent: 'purple',
        title: '하나의 키로 모든 모델 제어',
        desc: '채팅·추론·이미지·영상 생성을 하나의 입구로 통합. 모델 배율은 공개되며 요금 페이지에서 언제든 확인 가능.',
        code: 'model = "Kimi-K3" | "deepseek-v4-pro" | ...',
      },
      {
        accent: 'blue',
        title: '종량제 · 투명한 청구',
        desc: '실제 토큰 사용량 기반 과금. 모든 호출이 로그에 기록되며, 월정액이나 숨겨진 비용은 없습니다.',
        code: '$ 사용 로그 · 실시간 통계 ·내보내기',
      },
      {
        accent: 'gold',
        title: '게이트웨이급 쿼터 관리',
        desc: '토큰 그룹, 쿼터 상한, 만료 시간, IP 화이트리스트. 팀과 리셀러 시나리오까지 모두 지원.',
        code: 'token: 쿼터 500,000 · 무기한',
      },
    ],
  },
  steps: {
    kicker: '/ 03 · Quick Start',
    title: '3단계, 5분이면 완료',
    items: [
      {
        title: '계정 만들기',
        desc: 'EPR Token을 열고 1분 만에 가입. 이메일과 휴대폰 로그인 지원.',
        linkText: '지금 가입',
        linkKey: 'register',
      },
      {
        title: '토큰 생성',
        desc: '콘솔의 「토큰」 페이지에서 API 키를 생성하고 쿼터와 모델 그룹을 설정.',
        linkText: '콘솔 열기',
        linkKey: 'token',
      },
      {
        title: '엔드포인트 교체',
        desc: '앱의 API 주소를 https://eprtoken.com/v1로 변경하고 키를 붙여넣으면 끝.',
        linkText: '연동 문서 보기',
        linkKey: 'docs',
      },
    ],
  },
  clients: {
    kicker: '/ 04 · Clients',
    title1: '익숙한 클라이언트를',
    title2: '그대로 연결하세요',
    tutorial: '클라이언트별 연동 가이드',
    items: [
      { name: 'Cherry Studio', kind: '데스크톱', desc: '30+ AI 어시스턴트 내장, API 키 원클릭 설정' },
      { name: 'Lobe Chat', kind: 'Web', desc: '고품질 오픈소스 채팅 프레임워크, 공식 설정 예시 제공' },
      { name: 'NextChat', kind: 'Web', desc: '가벼운 크로스플랫폼 ChatGPT 클라이언트' },
      { name: 'Immersive Translate', kind: '브라우저 확장', desc: '이중언어 웹 번역, 커스텀 API 엔드포인트 지원' },
      { name: 'OpenCat', kind: 'Apple 생태계', desc: 'Mac / iOS 네이티브 AI 클라이언트' },
      { name: 'AMA', kind: '모바일', desc: '휴대폰 속 AI 어시스턴트' },
      { name: 'AI as Workspace', kind: '워크스페이스', desc: '지식 작업을 위한 AI 워크스페이스' },
      { name: '당신의 앱', kind: '개발자', desc: 'OpenAI 프로토콜을 지원하는 모든 코드와 도구' },
    ],
  },
  faq: {
    kicker: '/ 05 · FAQ',
    title: '자주 묻는 질문',
    items: [
      {
        q: 'EPR Token이란?',
        a: 'EPR Token은 AI 대규모 모델 통합 집계·배포 플랫폼(AI 게이트웨이)입니다. 하나의 OpenAI 호환 엔드포인트로 GPT, DeepSeek, Kimi, Qwen, GLM 등 주요 모델과 이미지·영상 생성 모델을 호출할 수 있습니다.',
      },
      {
        q: '어떤 모델을 지원하나요?',
        a: 'DeepSeek V4 / R1 시리즈, GPT 시리즈, Kimi 시리즈, Alibaba Qwen, Zhipu GLM, MiniMax, 이미지·영상 생성 모델 등을 지속적으로 추가하고 있습니다. 전체 목록과 실시간 배율은 요금 페이지에서 확인하세요.',
        linkText: '모델 요금 보기',
        linkKey: 'pricing',
      },
      {
        q: '요금은 어떻게 되나요? 숨겨진 비용이 있나요?',
        a: '실제 토큰 사용량 기반 종량제이며 모델 배율은 공개됩니다. 콘솔에서 호출별 로그와 쿼터 통계를 확인할 수 있고, 월정액이나 숨겨진 비용은 없습니다.',
      },
      {
        q: '기존 OpenAI 코드를 어떻게 마이그레이션하나요?',
        a: '두 단계면 됩니다: base_url을 https://eprtoken.com/v1로 바꾸고, API 키를 EPR Token 토큰으로 교체하세요. 나머지 코드는 그대로입니다.',
        linkText: '가이드 보기',
        linkKey: 'docs',
      },
      {
        q: '어떤 클라이언트를 지원하나요?',
        a: 'Cherry Studio, Lobe Chat, NextChat, Immersive Translate, OpenCat, AMA 등 주요 클라이언트를 지원하며, 일부는 원클릭으로 키를 설정할 수 있습니다.',
      },
      {
        q: '팀 사용이나 리셀링이 가능한가요?',
        a: '가능합니다. 토큰 그룹, 쿼터 관리, 공급자·디스트리뷰터 체계와 추천 커미션을 갖추고 있어 팀, 스튜디오, 채널 파트너에게 적합합니다.',
      },
    ],
  },
  cta: {
    kicker: '/ 06 · Get Your Key',
    title1: '지금 당신의 앱을',
    title2: 'AI 세계 전체와 연결하세요',
    desc: '가입 → 토큰 생성 → base_url 교체. 세 줄의 변경으로 제품에 전 세계 주요 AI 모델의 힘을 더하세요.',
    primary: 'EPR Token 무료 가입',
    secondary: '연동 문서 읽기',
  },
  footer: {
    tagline: '모든 AI 애플리케이션을 담고, 디지털 자산을 관리하며, 미래를 연결하는 통합 인프라 플랫폼.',
    product: '제품',
    resources: '리소스',
    start: '시작하기',
    links: {
      pricing: '모델 요금',
      console: '콘솔',
      token: '토큰 관리',
      topup: '충전',
      docs: '연동 문서',
      cherry: 'Cherry Studio 가이드',
      about: '회사 소개',
      register: '회원가입',
      login: '로그인',
    },
    copyright: '© 2026 EPR Token · A unified AI model hub for aggregation and distribution.',
    note: '본 사이트는 EPR Token 공식 게이트웨이 페이지 · 모든 서비스는',
  },
}
