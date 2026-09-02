export const homepageMarkup = `
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
        <h1 class="reveal" id="heroTitle" aria-label="让机器理解世界。"></h1>
        <div class="hero-bottom reveal"><p>我们打造能感知、思考与行动的通用机器人，<br>让智能真正进入现实世界。</p><a class="circle-link" href="#work" aria-label="查看产品能力">↘</a></div>
      </section>
      <section class="feature-wrap section-pad reveal" id="work">
        <article class="feature-card">
          <div class="feature-art" aria-hidden="true"><div class="orb orb-one"></div><div class="orb orb-two"></div><div class="robot-mark"><span>OG</span><i></i></div><div class="scan-lines"></div></div>
          <div class="feature-info"><div><small>FEATURED SYSTEM</small><h2>OG-01<br>通用智能体</h2></div><p>视觉、语言与运动控制在同一系统中协同，<br>从指令理解到精准执行，一步完成。</p><span class="card-index">01 / 03</span></div>
        </article>
      </section>
      <section class="product-family section-pad" id="products">
        <div class="section-head reveal"><span>02 / PRODUCT FAMILY</span><span>CHOOSE A CAPABILITY</span></div>
        <div class="family-layout reveal">
          <div class="family-tabs" role="tablist" aria-label="产品能力">
            <button class="family-tab active" data-family="body" role="tab"><small>01</small><span>通用本体</span><i>自主移动与全身控制</i></button>
            <button class="family-tab" data-family="vision" role="tab"><small>02</small><span>空间感知</span><i>理解人物、物体与环境</i></button>
            <button class="family-tab" data-family="hand" role="tab"><small>03</small><span>灵巧操作</span><i>完成精细的现实任务</i></button>
          </div>
          <div class="family-stage" data-active="body">
            <div class="family-shape"><span>OG</span><i></i><b></b></div>
            <div class="family-copy"><small id="familyEyebrow">OG BODY / 01</small><h2 id="familyTitle">稳定移动，<br>自然行动。</h2><p id="familyText">从室内导航到复杂地形，统一控制系统让机器人的每一次移动都安全、流畅。</p></div>
          </div>
        </div>
      </section>
      <section class="human-section reveal" id="collaboration">
        <img src="./images/robot-collaboration.png" alt="机器人与设计师在明亮工作室中协作" />
        <div class="human-copy"><small>03 / HUMAN + MACHINE</small><h2>不是替代人，<br>而是拓展人的能力。</h2><p>自然语言协作、意图理解和安全响应，让机器人进入真实工作流。</p><a href="#platform">了解协作系统 <span>↗</span></a></div>
      </section>
      <section class="capability-strip">
        <article><small>感知范围</small><strong id="tickerVision"></strong><p>多传感器环境融合</p></article>
        <article><small>响应延迟</small><strong id="tickerLatency"></strong><p>实时运动控制链路</p></article>
        <article><small>开放接口</small><strong id="tickerModules"></strong><p>硬件与软件模块</p></article>
        <article><small>持续运行</small><strong id="tickerRuntime"></strong><p>智能电源管理</p></article>
      </section>
      <section class="platform section-pad" id="platform">
        <div class="platform-intro reveal"><small>04 / OPEN PLATFORM</small><h2>一个平台，<br>连接所有能力。</h2><p>像组合产品生态一样构建机器人能力。硬件、模型和开发工具使用同一套标准接口。</p></div>
        <div class="platform-cards" id="platformCards"></div>
      </section>
      <section class="manifesto section-pad" id="about">
        <div class="section-head reveal"><span>05 / OUR APPROACH</span><span>INTELLIGENCE IN MOTION</span></div>
        <p class="manifesto-copy reveal">不是让机器人看起来更像未来，<br>而是让未来<span>真正可用。</span></p>
        <div class="manifesto-foot reveal"><p>ONE—G 将前沿具身智能研究转化为稳定、开放、可扩展的机器人系统。</p><a href="#stories">探索研发现场 <span>↗</span></a></div>
      </section>
      <section class="projects section-pad" id="stories">
        <div class="section-head reveal"><span>06 / FIELD NOTES</span><span>SELECTED EXPERIMENTS</span></div>
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

export function setupHomepageInteractions() {
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

  const familyContent = {
    body: [
      'OG BODY / 01',
      '稳定移动，<br>自然行动。',
      '从室内导航到复杂地形，统一控制系统让机器人的每一次移动都安全、流畅。',
    ],
    vision: [
      'OG VISION / 02',
      '看见环境，<br>理解现场。',
      '融合视觉、深度与声音信息，实时识别人、物体、空间关系和正在发生的事件。',
    ],
    hand: [
      'OG HAND / 03',
      '精细操作，<br>举重若轻。',
      '力控与触觉反馈共同工作，让机器人稳定抓取不同材质、形状和重量的物品。',
    ],
  };
  document.querySelectorAll('.family-tab').forEach((tab) =>
    tab.addEventListener('click', () => {
      document
        .querySelectorAll('.family-tab')
        .forEach((item) => item.classList.toggle('active', item === tab));
      const [eyebrow, title, text] = familyContent[tab.dataset.family];
      document.querySelector('.family-stage').dataset.active = tab.dataset.family;
      document.querySelector('#familyEyebrow').textContent = eyebrow;
      document.querySelector('#familyTitle').innerHTML = title;
      document.querySelector('#familyText').textContent = text;
    }),
  );
  return () => observer.disconnect();
}
