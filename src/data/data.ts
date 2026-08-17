import bellaPortrait from '@/assets/Bella.jpg'
import joinBarCover from '@/assets/JoinBar 封面.jpg'

export interface SkillGroup {
  title: string
  summary: string
  items: string[]
}

export interface Experience {
  period: string
  role: string
  company: string
  summary: string
  highlights: string[]
  stack: string[]
}

export interface Project {
  name: string
  period: string
  type: string
  summary: string
  highlights: string[]
  stack: string[]
  image?: string
  imageAlt?: string
  href?: string
  empty?: boolean
}

export const portfolio = {
  updatedAt: '2026 / 08',
  name: '鄭婉君',
  englishName: 'Cheng Wan-Chun',
  displayName: 'Bella.Cheng',
  role: 'FRONT-END DEVELOPER',
  location: '新北市',
  email: 'dhp951320@gmail.com',
  github: 'https://github.com/Bella-Cheng',
  hackmd: 'https://hackmd.io/@BellaCheng',
  portrait: bellaPortrait,
  intro: [
    '具一年以上前端開發經驗，主要使用 Vue 3、TypeScript、Quasar、Pinia 開發 B2B 企業系統與 C 端 Web 應用，具備獨立開發及多人團隊協作經驗。',
    '曾參與企業即時通訊平台、點數商城、電子票券及營運管理後台等產品開發，實作 SSO／登入權限、Router Guard、Token Refresh、WebView／JS Bridge 與即時事件整合。',
    '過去具產品推廣與設計相關背景，擅長跨部門溝通與需求理解，開發時重視程式維護性與使用者操作體驗。',
  ],
  skills: [
    {
      title: 'FRONT-END CORE',
      summary: '介面實作、API 串接與響應式體驗',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'RWD', 'RESTful API'],
    },
    {
      title: 'VUE ECOSYSTEM',
      summary: '可維護的 Vue 應用與狀態架構',
      items: ['Vue 3', 'Quasar', 'Tailwind CSS', 'Pinia', 'Vue Router', 'Axios'],
    },
    {
      title: 'BACK-END & DATA',
      summary: '具備全端協作與資料建模經驗',
      items: ['Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Swagger'],
    },
    {
      title: 'WORKFLOW & TOOLS',
      summary: '從設計、測試到部署的完整工作流',
      items: ['Git', 'Vite', 'NPM', 'ESLint', 'Playwright', 'Postman', 'Figma'],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      name: 'Join Bar｜酒吧社交平台',
      period: '2025 / 05 — 2025 / 07',
      type: 'GROUP PROJECT',
      summary: '提供酒吧探索與揪團活動的社交平台，整合地圖查詢、會員、活動、訂閱及優惠券功能。',
      highlights: [
        '使用 Vue.js 與 Tailwind CSS 開發活動、訂閱與優惠券頁面。',
        '以 Node.js、Express.js 建立 RESTful API，並設計活動、訂閱與優惠券核銷邏輯。',
        '使用 PostgreSQL、Drizzle ORM、Snowflake ID，並建立 Swagger API 文件。',
      ],
      stack: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM'],
      image: joinBarCover,
      imageAlt: 'Join Bar 酒吧社交平台首頁畫面',
      href: 'https://joinbar.netlify.app/home',
    },
    {
      name: 'PROJECT 02',
      period: '',
      type: 'COMING SOON',
      summary: '第二個專案內容預留中。',
      highlights: [],
      stack: [],
      href: undefined,
      empty: true,
      // TODO: 補上第二個專案名稱、期間、摘要、負責功能、技術棧、截圖與連結。
    },
  ] satisfies Project[],
  experiences: [
    {
      period: '2025 / 08 — NOW',
      role: '前端工程師',
      company: '互動科技有限公司',
      summary:
        '開發 B2B 企業系統與 C 端 Web 應用，參與企業後台、點數商城、電子票券與企業即時通訊平台。',
      highlights: [
        '開發企業圖文選單、自動回覆、群發訊息、視訊會議、應用中心與 SSO 登入流程。',
        '以 Runtime CSS Variables 建立白牌客製機制，並重構 Router Guard、Token 與自動登入流程。',
        '開發點數商城、電子票券 WebView 與 B2B 營運後台，處理 RBAC、JS Bridge、WebSocket 與 i18n。',
        '以 Single-Flight + Request Queue 解決 Refresh Token 多支 API 同時 401 的競態問題。',
      ],
      stack: ['Vue 3', 'TypeScript', 'Quasar', 'Pinia', 'Vue Router', 'Axios', 'WebSocket'],
    },
    {
      period: '2025 / 03 — 2025 / 07',
      role: '前端工程師培訓',
      company: '商研院產業新尖兵｜510 小時',
      summary:
        '完成前後端密集培訓，以 Vue.js 開發 SPA，並使用 Node.js、Express 與 PostgreSQL 完成全端專案。',
      highlights: ['頁面切版、元件開發與 API 串接', 'RESTful API、CRUD、購物流程、訂單及金流串接'],
      stack: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'PostgreSQL'],
    },
    {
      period: '2024 / 09 — 2025 / 02',
      role: '技術業務專員',
      company: '網際威信集團－逸凡科技',
      summary: '負責資訊產品銷售、客戶需求訪談與需求文件，作為客戶與工程團隊間的溝通橋樑。',
      highlights: ['釐清產品問題與使用情境', '協助改善產品操作流程'],
      stack: ['需求訪談', '需求文件', '跨部門協作', '資訊產品'],
    },
    {
      period: '2021 / 08 — 2024 / 08',
      role: '產品營運專員',
      company: '紅陽科技',
      summary: '負責第三方支付金流服務推廣、商戶導入、客戶維護與產品教育訓練。',
      highlights: ['與工程團隊協作處理商戶需求與產品問題', '參與 EDM 製作及行銷活動執行'],
      stack: ['第三方支付', '產品營運', '客戶需求', '跨部門協作'],
    },
    {
      period: '2018 / 02 — 2021 / 02',
      role: 'OP 人員',
      company: '百夫長旅行社',
      summary: '維護公司網站內容並使用 HTML 模板套版，也負責旅遊文宣、EDM 與活動視覺素材。',
      highlights: ['旅遊行程上架與網站內容維護', 'Illustrator、Photoshop 視覺製作'],
      stack: ['HTML', 'Illustrator', 'Photoshop', 'EDM'],
    },
  ] satisfies Experience[],
} as const
