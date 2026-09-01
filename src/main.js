import './style.css';

const app = document.querySelector('#app');
const state = {
  scene: sessionStorage.getItem('og-scene') || '迎宾讲解',
  parts: new Set(
    JSON.parse(sessionStorage.getItem('og-parts') || '["移动底盘","RGB-D视觉","语音交互"]'),
  ),
};

const scenes = [
  ['迎宾讲解', '接待、导览与智能讲解'],
  ['自主巡检', '环境巡查与异常识别'],
  ['物品搬运', '室内运输与自动避障'],
  ['远程操作', '实时影像与低延迟控制'],
  ['教育科研', '开放接口与算法验证'],
  ['动作模仿', '姿态捕捉与动作复现'],
];

const parts = [
  ['移动底盘', '稳定移动与自主导航', 29900],
  ['机械臂', '六轴抓取与精细操作', 12999],
  ['RGB-D视觉', '深度感知与目标识别', 3999],
  ['激光雷达', '360° 环境建图', 6999],
  ['语音交互', '远场拾音与自然语言对话', 2599],
  ['自主充电', '低电量自动回充', 4999],
];

const header = (step = '') => `
  <header class="header">
    <a class="logo" href="/" data-link><span>OG</span> ROBOTICS</a>
    ${step ? `<span class="header-step">${step}</span>` : ''}
    <a class="home-link" href="/" data-link>返回主页 <span>↗</span></a>
  </header>`;

const home = () => `
  <main class="home page-enter">
    <aside class="home-rail" aria-label="首页章节导航">
      <a class="rail-brand" href="#overview" data-scroll><b>1G</b><span>ONE—G</span></a>
      <nav>
        <a class="active" href="#overview" data-scroll><i>01</i><span>首页</span></a>
        <a href="#capability" data-scroll><i>02</i><span>能力</span></a>
        <a href="#process" data-scroll><i>03</i><span>流程</span></a>
        <a href="#start" data-scroll><i>04</i><span>开始</span></a>
      </nav>
      <div class="rail-progress"><span id="railProgress"></span></div>
      <small>SCROLL TO EXPLORE</small>
    </aside>

    <div class="home-scroll">
      <section class="home-section hero-section" id="overview" data-home-section>
        <div class="hero-grid"></div>
        <div class="hero-copy">
          <div class="signal"><i></i> ONE—G / ROBOT CONFIGURATOR</div>
          <h1>定制属于你的<br /><em>机器人</em></h1>
          <p>选择机器人平台、机械部件、感知设备和智能功能，<br />实时查看机器人能力、兼容性与价格。</p>
          <a class="tech-link" href="#capability" data-scroll>向下探索 <span>↓</span></a>
        </div>
        <div class="data-orb" aria-hidden="true"><span>1G</span><i></i><b></b></div>
        <div class="hero-meta"><span>SYS / ONLINE</span><span>LATENCY / 12MS</span><span>MODULES / 48+</span></div>
      </section>

      <section class="home-section capability-section" id="capability" data-home-section>
        <div class="section-label"><span>02</span><p>MODULAR CAPABILITY</p></div>
        <div class="section-intro"><h2>一个平台，组合无限能力</h2><p>从移动方式到感知系统，每个模块都经过兼容性验证，所选配置实时联动。</p></div>
        <div class="capability-grid">
          <article><small>PLATFORM</small><b>01</b><h3>机器人平台</h3><p>轮式、全地形与人形平台，匹配不同工作环境。</p></article>
          <article><small>MECHANISM</small><b>02</b><h3>机械部件</h3><p>机械臂、夹爪与载物模块，按任务自由组合。</p></article>
          <article><small>PERCEPTION</small><b>03</b><h3>感知设备</h3><p>视觉、雷达与声音传感器，让机器人理解环境。</p></article>
          <article><small>INTELLIGENCE</small><b>04</b><h3>智能功能</h3><p>导航、对话、识别和学习能力，实时查看价格。</p></article>
        </div>
      </section>

      <section class="home-section process-section" id="process" data-home-section>
        <div class="section-label"><span>03</span><p>BUILD PROCESS</p></div>
        <div class="process-title"><h2>三步完成机器人配置</h2><p>无需专业背景，系统会在每一步提供清晰提示。</p></div>
        <ol class="home-steps">
          <li><span>01</span><div><small>DEFINE</small><h3>选择用途</h3><p>确定机器人需要完成的核心任务与使用场景。</p></div></li>
          <li><span>02</span><div><small>ASSEMBLE</small><h3>选择部件与功能</h3><p>搭配硬件与智能模块，实时检查兼容性。</p></div></li>
          <li><span>03</span><div><small>DELIVER</small><h3>获取配置和报价</h3><p>生成完整清单、能力说明与透明参考价格。</p></div></li>
        </ol>
      </section>

      <section class="home-section start-section" id="start" data-home-section>
        <div class="start-code">04 / READY</div>
        <h2>下一台机器人<br />由你定义</h2>
        <p>从使用场景出发，开始构建你的 ONE—G 机器人。</p>
        <a class="button primary start-button" href="/scenes" data-link>开始定制 <span>→</span></a>
        <footer><span>ONE—G / 2026</span><span>MODULAR · INTELLIGENT · YOURS</span></footer>
      </section>
    </div>
    <a class="sensor-entry" href="/scenes" data-link aria-label="进入机器人定制">
      <span class="sensor-scan" aria-hidden="true"></span>
      <span class="sensor-copy"><small>READY?</small><b>进入定制</b><i>→</i></span>
    </a>
  </main>`;

const scenePage = () => `${header('场景选择 / 01')}
  <main class="content-page page-enter">
    <section class="page-title"><p>CHOOSE A SCENE</p><h1>机器人将用在哪里？</h1><span>选择一个最接近的使用场景，下一步仍可自由调整配置。</span></section>
    <section class="scene-list">
      ${scenes.map(([name, text], i) => `<button class="scene ${state.scene === name ? 'selected' : ''}" data-scene="${name}"><small>0${i + 1}</small><div><h2>${name}</h2><p>${text}</p></div><span>选择</span></button>`).join('')}
    </section>
    <a class="plan-special scene-plan-special" href="/plans" data-link><small>想快速开始？</small><b>查看推荐方案</b><span>↗</span></a>
    <div class="bottom-action"><a href="/" data-link>← 返回</a><button class="button primary" id="continueConfig">确认场景，继续 <span>→</span></button></div>
  </main>`;

const configurePage = () => `${header('机器人配置 / 02')}
  <main class="config-page page-enter">
    <aside class="step-nav">
      <p>BUILD PROCESS</p>
      <ol><li class="active"><b>1</b><span>选择用途<small>${state.scene}</small></span></li><li class="active"><b>2</b><span>选择部件与功能<small>自由组合模块</small></span></li><li><b>3</b><span>完整配置和报价<small>实时生成结果</small></span></li></ol>
      <a href="/scenes" data-link>← 重新选择场景</a>
    </aside>
    <section class="builder">
      <div class="builder-head"><div><p>STEP 02</p><h1>选择部件与功能</h1></div><span>已选择 <b id="partCount">${state.parts.size}</b> 项</span></div>
      <div class="parts">${parts.map(([name, desc, price]) => `<label class="part ${state.parts.has(name) ? 'checked' : ''}"><input type="checkbox" data-part="${name}" ${state.parts.has(name) ? 'checked' : ''}><span class="check">✓</span><div><h2>${name}</h2><p>${desc}</p></div><strong>+ ¥${price.toLocaleString()}</strong></label>`).join('')}</div>
      <button class="button primary finish" id="showQuote">生成完整配置和报价 <span>→</span></button>
    </section>
    <aside class="live-summary"><p>实时配置预览</p><h2>${state.scene}机器人</h2><ul id="liveParts">${[...state.parts].map((x) => `<li>✓ ${x}</li>`).join('')}</ul></aside>
  </main>`;

const quotePage = () => {
  const selected = parts.filter(([name]) => state.parts.has(name));
  const total = 9900 + selected.reduce((sum, item) => sum + item[2], 0);
  return `${header('配置结果 / 03')}
  <main class="quote-page page-enter">
    <section class="quote-intro"><span class="done">✓</span><p>CONFIGURATION COMPLETE</p><h1>你的机器人方案<br />已生成</h1><span>基于“${state.scene}”场景，为你生成以下建议配置。</span></section>
    <section class="quote-sheet">
      <div class="quote-top"><div><small>OG ROBOTICS / ESTIMATE</small><h2>${state.scene}机器人</h2></div><span>方案编号<br /><b>OG-${Date.now().toString().slice(-6)}</b></span></div>
      <div class="quote-items"><div><span>机器人基础平台</span><b>¥9,900</b></div>${selected.map(([name, desc, price]) => `<div><span>${name}<small>${desc}</small></span><b>¥${price.toLocaleString()}</b></div>`).join('')}</div>
      <div class="total"><span>参考总价<small>含基础平台，不含运输与部署服务</small></span><strong>¥${total.toLocaleString()}</strong></div>
      <div class="compat"><i>✓</i><span><b>兼容性检查通过</b><small>所选部件可协同工作</small></span></div>
      <div class="quote-actions"><a class="button secondary" href="/configure" data-link>修改配置</a><a class="button primary" href="/" data-link>完成并返回主页 →</a></div>
    </section>
  </main>`;
};

const plansPage = () => `${header('推荐方案')}
  <main class="plans-page page-enter">
    <section class="page-title"><p>RECOMMENDED PACKAGES</p><h1>成熟方案，即选即用</h1><span>经过验证的软硬件组合，也可以作为定制起点。</span></section>
    <section class="plans">
      ${[
        [
          'OG GUIDE',
          '智能迎宾套装',
          '迎宾讲解',
          '36,398',
          ['室内移动底盘', 'RGB-D 视觉', '语音交互'],
        ],
        [
          'OG PATROL',
          '自主巡检套装',
          '自主巡检',
          '51,797',
          ['全向移动底盘', '激光雷达', '自主充电'],
        ],
        [
          'OG LAB',
          '教育科研套装',
          '教育科研',
          '29,897',
          ['开放开发平台', 'RGB-D 视觉', '开放 SDK'],
        ],
      ]
        .map(
          (p, i) =>
            `<article class="plan ${i === 0 ? 'featured' : ''}"><div class="plan-no">0${i + 1} ${i === 0 ? '<b>热门</b>' : ''}</div><p>${p[0]}</p><h2>${p[1]}</h2><ul>${p[4].map((x) => `<li>✓ ${x}</li>`).join('')}</ul><div class="plan-price"><span>¥${p[3]} <small>起</small></span><button data-plan="${p[2]}">选择此方案 →</button></div></article>`,
        )
        .join('')}
    </section>
  </main>`;

function navigate(path) {
  window.location.hash = path;
}

function render() {
  const route = window.location.hash.slice(1).replace(/\/$/, '') || '/';
  const views = {
    '/': home,
    '/scenes': scenePage,
    '/configure': configurePage,
    '/quote': quotePage,
    '/plans': plansPage,
  };
  app.innerHTML = (views[route] || home)();
  window.scrollTo(0, 0);
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-link]').forEach((link) =>
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigate(link.getAttribute('href'));
    }),
  );
  document.querySelectorAll('[data-scene]').forEach((button) =>
    button.addEventListener('click', () => {
      state.scene = button.dataset.scene;
      sessionStorage.setItem('og-scene', state.scene);
      document
        .querySelectorAll('.scene')
        .forEach((x) => x.classList.toggle('selected', x === button));
    }),
  );
  document
    .querySelector('#continueConfig')
    ?.addEventListener('click', () => navigate('/configure'));
  document.querySelectorAll('[data-part]').forEach((input) =>
    input.addEventListener('change', () => {
      input.checked ? state.parts.add(input.dataset.part) : state.parts.delete(input.dataset.part);
      sessionStorage.setItem('og-parts', JSON.stringify([...state.parts]));
      input.closest('.part').classList.toggle('checked', input.checked);
      document.querySelector('#partCount').textContent = state.parts.size;
      document.querySelector('#liveParts').innerHTML = [...state.parts]
        .map((x) => `<li>✓ ${x}</li>`)
        .join('');
    }),
  );
  document.querySelector('#showQuote')?.addEventListener('click', () => navigate('/quote'));
  document.querySelectorAll('[data-plan]').forEach((button) =>
    button.addEventListener('click', () => {
      state.scene = button.dataset.plan;
      state.parts = new Set(['移动底盘', 'RGB-D视觉', '语音交互']);
      sessionStorage.setItem('og-scene', state.scene);
      sessionStorage.setItem('og-parts', JSON.stringify([...state.parts]));
      navigate('/configure');
    }),
  );

  const homeScroller = document.querySelector('.home-scroll');
  const homeSections = [...document.querySelectorAll('[data-home-section]')];
  document.querySelectorAll('[data-scroll]').forEach((link) =>
    link.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    }),
  );
  if (homeScroller && homeSections.length) {
    const updateHomeRail = () => {
      const current = homeSections.reduce((active, section) =>
        section.getBoundingClientRect().top < window.innerHeight * 0.52 ? section : active,
      );
      document
        .querySelectorAll('.home-rail nav a')
        .forEach((link) =>
          link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`),
        );
      const max = homeScroller.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      document.querySelector('#railProgress').style.height = `${progress}%`;
    };
    window.addEventListener('scroll', updateHomeRail, { passive: true });
    updateHomeRail();

    const sensorEntry = document.querySelector('.sensor-entry');
    const updateSensor = (event) => {
      const activationZone = window.innerWidth * 0.2;
      const distanceFromRight = Math.max(0, window.innerWidth - event.clientX);
      const strength = Math.max(0, Math.min(1, 1 - distanceFromRight / activationZone));
      sensorEntry?.style.setProperty('--sensor-strength', strength.toFixed(3));
      sensorEntry?.classList.toggle('sensed', strength > 0.08);
    };
    window.addEventListener('pointermove', updateSensor, { passive: true });
    document.addEventListener('pointerleave', () => {
      sensorEntry?.style.setProperty('--sensor-strength', '0');
      sensorEntry?.classList.remove('sensed');
    });
  }
}

window.addEventListener('hashchange', render);
render();
