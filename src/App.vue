<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { portfolio } from '@/data/data'

const isMenuOpen = ref(false)
const form = reactive({ name: '', email: '', message: '' })
const visibleProjects = computed(() => portfolio.projects.filter((project) => !project.empty))

const navItems = [
  { label: 'INTRO', href: '#intro' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
]

function sendMessage() {
  const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
  window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <a class="skip-link" href="#main-content">跳到主要內容</a>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#intro" aria-label="回到首頁">BELLA.C_</a>

      <nav class="desktop-nav" aria-label="主要導覽">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <span class="status-tag">OPEN TO WORK</span>
      <button
        class="menu-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        MENU [{{ isMenuOpen ? '−' : '+' }}]
      </button>

      <nav v-if="isMenuOpen" id="mobile-menu" class="mobile-nav" aria-label="行動版導覽">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="isMenuOpen = false">
          {{ item.label }} <span>→</span>
        </a>
      </nav>
    </header>

    <main id="main-content">
      <section id="intro" class="hero section-pad">
        <div class="hero-copy">
          <span class="eyebrow eyebrow--magenta">01 / 簡介 INTRO</span>
          <h1>
            <span class="desktop-title">{{ portfolio.displayName }}</span>
            <span class="mobile-title">Bella.<br />Cheng</span><span class="typing-cursor">_</span>
          </h1>
          <p class="role-line">{{ portfolio.role }} / VUE 3 / TYPESCRIPT</p>
          <p class="hero-lead">嗨，我是 Bella。<br />{{ portfolio.intro[0] }}</p>
          <div class="hero-actions">
            <a class="pixel-button pixel-button--yellow" :href="portfolio.github" target="_blank" rel="noopener">
              GITHUB
            </a>
            <a class="pixel-button" :href="portfolio.hackmd" target="_blank" rel="noopener">HACKMD</a>
          </div>
        </div>

        <figure class="portrait-card">
          <figcaption>PIXEL PORTRAIT</figcaption>
          <img :src="portfolio.portrait" :alt="`${portfolio.name}的個人形象照`" />
          <div class="portrait-meta">
            <span>{{ portfolio.englishName }}</span>
            <strong>{{ portfolio.location }}</strong>
          </div>
        </figure>
      </section>

      <section id="skills" class="content-section section-pad">
        <div class="section-heading">
          <span class="eyebrow eyebrow--yellow">02 / 技能 SKILLS</span>
          <h2>What I do.</h2>
        </div>
        <div class="skill-grid">
          <article v-for="(skill, index) in portfolio.skills" :key="skill.title" class="skill-card">
            <span class="card-index">0{{ index + 1 }}</span>
            <div>
              <h3>{{ skill.title }}</h3>
              <p>{{ skill.summary }}</p>
              <ul class="tag-list" :aria-label="`${skill.title} 技能`">
                <li v-for="item in skill.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="content-section section-pad">
        <div class="section-heading">
          <span class="eyebrow eyebrow--magenta">03 / 工作經歷 EXPERIENCE</span>
          <h2>Where I grew.</h2>
        </div>
        <div class="experience-list">
          <article v-for="experience in portfolio.experiences" :key="experience.company" class="experience-card">
            <span class="period-tag">{{ experience.period }}</span>
            <div class="experience-title">
              <h3>{{ experience.role }}</h3>
              <p>{{ experience.company }}</p>
            </div>
            <div class="experience-detail">
              <p>{{ experience.summary }}</p>
              <ul>
                <li v-for="highlight in experience.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
              <div class="stack-line">{{ experience.stack.join(' · ') }}</div>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" class="content-section section-pad">
        <div class="section-heading">
          <span class="eyebrow eyebrow--yellow">04 / 專案 PROJECTS</span>
          <h2>Selected work.</h2>
        </div>
        <div class="projects-list">
          <article
            v-for="(project, index) in visibleProjects"
            :key="project.name"
            class="project-card"
            :class="`project-card--${index + 1}`"
          >
            <div class="project-visual">
              <img v-if="project.image" :src="project.image" :alt="project.imageAlt" />
              <div v-else class="project-placeholder" aria-label="第二個專案截圖預留位置">
                <span>PROJECT 02 SCREENSHOT</span>
                <small>TODO: DROP UI MOCKUP HERE</small>
              </div>
            </div>
            <div class="project-copy">
              <span class="eyebrow" :class="index === 0 ? 'eyebrow--yellow' : 'eyebrow--magenta'">
                0{{ index + 1 }} / CASE STUDY
              </span>
              <h3>{{ project.name }}</h3>
              <p class="project-summary">{{ project.summary }}</p>
              <p v-if="project.period" class="project-meta">{{ project.type }} / {{ project.period }}</p>
              <ul v-if="project.highlights.length" class="project-highlights">
                <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
              <ul v-if="project.stack.length" class="tag-list">
                <li v-for="item in project.stack" :key="item">{{ item }}</li>
              </ul>
              <a v-if="project.href" class="pixel-button" :href="project.href" target="_blank" rel="noopener">
                VIEW PROJECT →
              </a>
              <span v-else class="todo-note">TODO: 補上專案連結</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" class="contact-section section-pad">
        <div class="contact-copy">
          <span class="eyebrow eyebrow--yellow">05 / 聯繫我 CONTACT</span>
          <h2>Let’s make<br />something good.</h2>
          <p>有合作想法、職缺或只是想聊聊前端開發，都歡迎來信。</p>
          <a :href="`mailto:${portfolio.email}`">{{ portfolio.email }} →</a>
          <div class="social-links">
            <a :href="portfolio.github" target="_blank" rel="noopener">GITHUB</a>
            <a :href="portfolio.hackmd" target="_blank" rel="noopener">HACKMD</a>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="sendMessage">
          <label>
            <span>NAME</span>
            <input v-model="form.name" type="text" name="name" autocomplete="name" required />
          </label>
          <label>
            <span>EMAIL</span>
            <input v-model="form.email" type="email" name="email" autocomplete="email" required />
          </label>
          <label>
            <span>MESSAGE</span>
            <textarea v-model="form.message" name="message" rows="4" required></textarea>
          </label>
          <button class="pixel-button pixel-button--magenta" type="submit">SEND MESSAGE →</button>
        </form>
      </section>
    </main>

    <footer class="site-footer">
      <strong>BELLA.CHENG_</strong>
      <span>GITHUB / HACKMD / EMAIL</span>
      <span>© 2026 TAIPEI</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
$tablet: 768px;
$desktop: 1200px;

.skip-link {
  position: fixed;
  z-index: 100;
  top: 8px;
  left: 8px;
  padding: 8px 12px;
  transform: translateY(-150%);
  border: var(--border-pixel);
  background: var(--color-yellow);
  font-family: var(--font-pixel);

  &:focus { transform: translateY(0); }
}

.site-shell {
  min-height: 100vh;
  overflow: clip;
  background-color: var(--color-canvas);
  background-image:
    linear-gradient(to right, rgb(10 10 10 / 6%) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(10 10 10 / 6%) 1px, transparent 1px);
  background-size: 120px 120px;
}

.site-header {
  position: relative;
  z-index: 20;
  display: flex;
  height: 88px;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--page-padding);
  border-bottom: var(--border-pixel);
  background: var(--color-paper);
}

.brand, .site-footer strong {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 900;
  text-decoration: none;
}

.desktop-nav {
  display: flex;
  gap: 28px;
  font-family: var(--font-pixel);
  font-size: 14px;
  font-weight: 600;

  a { text-decoration: none; }
  a:hover { color: var(--color-magenta); }
}

.status-tag, .eyebrow, .period-tag, .todo-note {
  display: inline-flex;
  width: fit-content;
  padding: 6px 9px;
  border: var(--border-pixel);
  font-family: var(--font-pixel);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .03em;
}

.status-tag, .eyebrow--yellow { background: var(--color-yellow); }
.eyebrow--magenta { background: var(--color-magenta); }
.menu-button { display: none; }
.mobile-nav { display: none; }

.section-pad { padding-inline: var(--page-padding); }
.hero, .content-section, .contact-section { scroll-margin-top: 24px; }

.hero {
  display: grid;
  grid-template-columns: minmax(0, 780px) 430px;
  min-height: 760px;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding-block: 88px;
}

.hero-copy { min-width: 0; }
.hero h1 {
  margin: 26px 0 6px;
  font-family: var(--font-title);
  font-size: clamp(86px, 8.3vw, 124px);
  font-weight: 400;
  line-height: .96;
  letter-spacing: 1px;
}
.mobile-title { display: none; }
.typing-cursor { color: var(--color-magenta); animation: blink 1s steps(1) infinite; }
@keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }

.role-line, .project-meta, .stack-line {
  font-family: var(--font-pixel);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .05em;
}
.role-line { margin: 0 0 20px; color: var(--color-magenta); }
.hero-lead { max-width: 740px; margin: 0; font-size: 22px; line-height: 1.65; }
.hero-actions { display: flex; gap: 14px; margin-top: 28px; }

.pixel-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 32px;
  padding: 7px 10px;
  border: var(--border-pixel);
  background: var(--color-paper);
  box-shadow: 3px 3px 0 var(--color-ink);
  font-family: var(--font-pixel);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 120ms ease, box-shadow 120ms ease;

  &:not(:disabled):hover { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--color-ink); }
  &:disabled { cursor: not-allowed; opacity: .45; }
  &--yellow { background: var(--color-yellow); }
  &--magenta { background: var(--color-magenta); }
}

.portrait-card {
  width: 430px;
  margin: 0;
  padding: 26px;
  border: var(--border-pixel);
  background: var(--color-paper);
  box-shadow: var(--shadow-magenta);

  figcaption { margin-bottom: 18px; font-family: var(--font-pixel); font-size: 14px; font-weight: 600; }
  img { display: block; width: 100%; aspect-ratio: 1; border: var(--border-pixel); object-fit: cover; }
}
.portrait-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 18px; font-family: var(--font-pixel); font-size: 14px; }
.portrait-meta strong { padding: 8px 12px; background: var(--color-ink); color: white; }

.content-section { padding-block: 60px 90px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; margin-bottom: 38px; }
.section-heading h2, .contact-copy h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(40px, 4vw, 58px);
  font-weight: 900;
  line-height: 1.15;
}

.skill-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.skill-card {
  display: grid;
  min-height: 190px;
  grid-template-columns: 40px 1fr;
  gap: 16px;
  padding: 22px;
  border: var(--border-pixel);
  background: var(--color-paper);

  &:nth-child(4n + 1), &:nth-child(4n) { background: var(--color-ink); color: white; }
  h3 { margin: 0; font-family: var(--font-display); font-size: 24px; }
  p { margin: 10px 0 18px; font-size: 18px; }
}
.card-index { font-family: var(--font-pixel); font-size: 14px; }
.tag-list { display: flex; flex-wrap: wrap; gap: 7px; margin: 0; padding: 0; list-style: none; }
.tag-list li { padding: 4px 7px; border: 1px solid currentColor; font-family: var(--font-pixel); font-size: 14px; }

.experience-list { border-block: var(--border-pixel); }
.experience-card {
  display: grid;
  grid-template-columns: 110px 360px minmax(0, 1fr);
  align-items: start;
  gap: 30px;
  padding: 28px 20px;
  border-bottom: 1px solid var(--color-ink);
  background: var(--color-paper);

  &:nth-child(even) { background: var(--color-gray); }
  &:last-child { border-bottom: 0; }
}
.period-tag { justify-content: center; background: var(--color-yellow); }
.experience-title h3 { margin: 0 0 8px; font-family: var(--font-display); font-size: 22px; text-transform: uppercase; }
.experience-title p { margin: 0; color: var(--color-magenta); font-family: var(--font-pixel); font-size: 14px; font-weight: 600; }
.experience-detail { font-size: 18px; line-height: 1.7; }
.experience-detail > p { margin: 0 0 10px; }
.experience-detail ul, .project-highlights { margin: 0 0 14px; padding-left: 20px; }
.stack-line { color: var(--color-magenta); }

.projects-list { display: grid; gap: 38px; }
.project-card {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  min-height: 500px;
  border: var(--border-pixel);
  background: var(--color-paper);

  &--1 { box-shadow: var(--shadow-yellow); }
  &--2 { box-shadow: var(--shadow-magenta); }
  &--2 .project-visual { order: 2; }
  &--empty { min-height: 380px; }
}
.project-visual { min-width: 0; border-right: var(--border-pixel); background: var(--color-gray); }
.project-card--2 .project-visual { border-right: 0; border-left: var(--border-pixel); }
.project-visual img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.project-placeholder { display: flex; height: 100%; min-height: 330px; flex-direction: column; align-items: center; justify-content: center; gap: 8px; font-family: var(--font-pixel); text-align: center; }
.project-placeholder small { color: var(--color-magenta); }
.project-copy { display: flex; min-width: 0; flex-direction: column; align-items: flex-start; justify-content: center; gap: 20px; padding: 46px; }
.project-copy h3 { margin: 0; font-family: var(--font-display); font-size: clamp(32px, 3vw, 46px); line-height: 1.25; }
.project-summary { margin: 0; font-size: 20px; line-height: 1.7; }
.project-meta { margin: 0; }
.project-highlights { font-size: 18px; line-height: 1.7; }
.todo-note { border-style: dashed; color: var(--color-magenta); }

.contact-section {
  display: grid;
  grid-template-columns: minmax(0, 580px) minmax(0, 600px);
  justify-content: space-between;
  gap: 70px;
  padding-block: 70px 90px;
  border-top: 3px solid var(--color-ink);
}
.contact-copy { display: flex; flex-direction: column; align-items: flex-start; gap: 22px; }
.contact-copy h2 { font-size: clamp(44px, 4.3vw, 62px); }
.contact-copy > p { margin: 0; }
.contact-copy > a { color: var(--color-magenta); font-family: var(--font-display); font-weight: 700; }
.social-links { display: flex; gap: 18px; font-family: var(--font-pixel); font-size: 14px; }
.contact-form { display: flex; flex-direction: column; gap: 20px; padding: 24px 26px; border: var(--border-pixel); background: var(--color-paper); }
.contact-form label { display: grid; gap: 8px; font-family: var(--font-pixel); font-size: 14px; font-weight: 600; }
.contact-form input, .contact-form textarea { width: 100%; border: 0; border-bottom: 2px solid var(--color-ink); border-radius: 0; background: transparent; font-family: var(--font-body); font-size: 18px; }
.contact-form input { height: 34px; }
.contact-form textarea { resize: vertical; border: 1px solid var(--color-ink); background: var(--color-gray); }

.site-footer { display: flex; min-height: 164px; align-items: center; justify-content: space-between; gap: 24px; padding: 36px var(--page-padding); background: var(--color-ink); color: white; font-family: var(--font-pixel); font-size: 14px; }
.site-footer span:last-child { color: var(--color-yellow); }

@media (max-width: 1199px) {
  .site-header { height: 80px; }
  .desktop-nav { gap: 16px; }
  .hero { grid-template-columns: minmax(0, 430px) 240px; min-height: 720px; gap: 18px; padding-block: 72px; }
  .hero h1 { font-size: 80px; }
  .hero-lead { font-size: 20px; }
  .portrait-card { width: 240px; padding: 18px; }
  .portrait-card figcaption { margin-bottom: 12px; }
  .portrait-meta { align-items: flex-start; flex-direction: column; }
  .section-heading h2 { font-size: 46px; }
  .experience-card { grid-template-columns: 92px 210px minmax(0, 1fr); gap: 18px; }
  .experience-title h3 { font-size: 19px; }
  .project-copy { padding: 28px; }
  .contact-section { grid-template-columns: 300px minmax(0, 1fr); gap: 48px; }
}

@media (max-width: 767px) {
  .site-shell { background-size: 78px 78px; }
  .site-header { height: 72px; }
  .brand { font-size: 21px; }
  .desktop-nav, .status-tag { display: none; }
  .menu-button { display: inline-flex; padding: 7px 10px; border: var(--border-pixel); background: var(--color-yellow); font-family: var(--font-pixel); font-size: 14px; font-weight: 600; }
  .mobile-nav { position: absolute; top: 70px; right: 16px; display: grid; width: calc(100% - 32px); border: var(--border-pixel); box-shadow: var(--shadow-magenta); background: var(--color-paper); }
  .mobile-nav a { display: flex; justify-content: space-between; padding: 14px 16px; border-bottom: 1px solid var(--color-ink); font-family: var(--font-pixel); font-size: 14px; text-decoration: none; }
  .mobile-nav a:last-child { border-bottom: 0; }

  .hero { display: flex; min-height: 700px; flex-direction: column; align-items: stretch; gap: 24px; padding-block: 50px; }
  .hero h1 { margin-top: 20px; font-size: 68px; line-height: 1.02; }
  .desktop-title { display: none; }
  .mobile-title { display: inline; }
  .hero-lead { font-size: 19px; line-height: 1.65; }
  .hero-actions { flex-wrap: wrap; margin-top: 20px; }
  .hero-actions .pixel-button { flex: 1; }
  .portrait-card { display: grid; width: 100%; grid-template-columns: 1fr 1.3fr; align-items: center; gap: 14px; padding: 18px; }
  .portrait-card figcaption { grid-column: 1 / -1; margin: 0; }
  .portrait-card img { width: 110px; }
  .portrait-meta { margin: 0; }

  .content-section { padding-block: 48px 72px; }
  .section-heading { display: flex; align-items: flex-start; flex-direction: column; margin-bottom: 24px; }
  .section-heading h2 { font-size: 42px; }
  .skill-grid { grid-template-columns: 1fr; }
  .skill-card { min-height: 104px; grid-template-columns: 42px 1fr; padding: 16px; }
  .skill-card h3 { font-size: 21px; }
  .skill-card p { margin-block: 6px 12px; font-size: 14px; }

  .experience-list { border: 0; }
  .experience-card { display: flex; min-height: 185px; flex-direction: column; gap: 12px; margin-bottom: 18px; padding: 18px; border: var(--border-pixel); }
  .experience-card:last-child { border-bottom: var(--border-pixel); }
  .experience-detail { font-size: 14px; }

  .projects-list { gap: 28px; }
  .project-card { display: flex; min-height: 0; flex-direction: column; }
  .project-card--2 .project-visual { order: 0; border-left: 0; }
  .project-visual { height: 330px; border-right: 0; border-bottom: var(--border-pixel); }
  .project-copy { min-height: 390px; justify-content: flex-start; gap: 16px; padding: 22px; }
  .project-copy h3 { font-size: 32px; }
  .project-summary { font-size: 18px; }
  .project-highlights { font-size: 14px; }

  .contact-section { display: flex; flex-direction: column; gap: 28px; padding-block: 52px 28px; }
  .contact-copy h2 { font-size: 38px; }
  .contact-copy > p { font-size: 18px; }
  .contact-copy > a { font-size: 14px; overflow-wrap: anywhere; }
  .contact-form { padding: 22px; }
  .site-footer { min-height: 190px; align-items: flex-start; flex-direction: column; justify-content: center; gap: 18px; }
}

@media (prefers-reduced-motion: reduce) {
  .typing-cursor { animation: none; }
  .pixel-button { transition: none; }
}
</style>
