import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#top" aria-label="ONE G 首页">ONE—G<sup>®</sup></a>
      <nav class="desktop-nav" aria-label="主导航">
        <a href="#work">产品能力</a><a href="#stories">研发现场</a><a href="#about">关于我们</a>
      </nav>
      <div class="top-actions"><span class="status"><i></i> SYSTEM ONLINE</span><button class="menu-button" type="button" aria-label="打开菜单" aria-expanded="false"><span></span><span></span></button></div>
    </header>
    <main id="top">
      <section class="hero section-pad">
        <div class="hero-kicker reveal"><span>01</span><span>Robotics / Shanghai</span></div>
        <h1 class="reveal">让机器<br><em>理解世界。</em></h1>
        <div class="hero-bottom reveal"><p>我们打造能感知、思考与行动的通用机器人，<br>让智能真正进入现实世界。</p><a class="circle-link" href="#work" aria-label="查看产品能力">↘</a></div>
      </section>
      <section class="feature-wrap section-pad reveal" id="work">
        <article class="feature-card">
          <div class="feature-art" aria-hidden="true"><div class="orb orb-one"></div><div class="orb orb-two"></div><div class="robot-mark"><span>OG</span><i></i></div><div class="scan-lines"></div></div>
          <div class="feature-info"><div><small>FEATURED SYSTEM</small><h2>OG-01<br>通用智能体</h2></div><p>视觉、语言与运动控制在同一系统中协同，<br>从指令理解到精准执行，一步完成。</p><span class="card-index">01 / 03</span></div>
        </article>
      </section>
      <section class="manifesto section-pad" id="about">
        <div class="section-head reveal"><span>02 / OUR APPROACH</span><span>INTELLIGENCE IN MOTION</span></div>
        <p class="manifesto-copy reveal">不是让机器人看起来更像未来，<br>而是让未来<span>真正可用。</span></p>
        <div class="manifesto-foot reveal"><p>ONE—G 将前沿具身智能研究转化为稳定、开放、可扩展的机器人系统。</p><a href="#stories">探索研发现场 <span>↗</span></a></div>
      </section>
      <section class="projects section-pad" id="stories">
        <div class="section-head reveal"><span>03 / FIELD NOTES</span><span>SELECTED EXPERIMENTS</span></div>
        <div class="project-grid">
          <article class="project reveal"><div class="project-visual visual-a"><span class="cross">+</span><b>SEE</b></div><div class="project-meta"><h3>空间感知</h3><p>动态环境理解 / 2026</p><span>↗</span></div></article>
          <article class="project reveal"><div class="project-visual visual-b"><div class="joint"><i></i><i></i><i></i></div><b>MOVE</b></div><div class="project-meta"><h3>全身控制</h3><p>实时运动规划 / 2026</p><span>↗</span></div></article>
          <article class="project project-wide reveal"><div class="project-visual visual-c"><div class="wave"></div><b>THINK</b><small>01 101 001 110</small></div><div class="project-meta"><h3>多模态决策</h3><p>视觉语言行动模型 / 2026</p><span>↗</span></div></article>
        </div>
      </section>
      <section class="closing section-pad reveal"><p>ONE—G / ROBOTICS</p><h2>智能，应当<br><em>走出屏幕。</em></h2><a href="mailto:hello@one-g.ai">开始对话 <span>↗</span></a></section>
    </main>
    <footer class="footer section-pad"><span>© 2026 ONE—G</span><span>SHANGHAI, CN · 14:32</span><a href="#top">BACK TO TOP ↑</a></footer>
    <div class="menu-panel" aria-hidden="true"><nav><a href="#work">产品能力</a><a href="#stories">研发现场</a><a href="#about">关于我们</a></nav><small>ONE—G / MENU</small></div>
  </div>`;

const menuButton = document.querySelector('.menu-button');
const menuPanel = document.querySelector('.menu-panel');
function closeMenu() {
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuPanel.setAttribute('aria-hidden', 'true');
}
menuButton.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuPanel.setAttribute('aria-hidden', String(!open));
});
document.querySelectorAll('a[href^="#"]').forEach((link) =>
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: 'smooth' });
  }),
);
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
  { threshold: 0.14 },
);
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
const art = document.querySelector('.feature-art');
art.addEventListener('pointermove', (event) => {
  const rect = art.getBoundingClientRect();
  art.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width - 0.5) * 18}px`);
  art.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height - 0.5) * 18}px`);
});
