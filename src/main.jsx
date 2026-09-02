import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const latest = [
  {
    no: '01',
    title: 'OG Body / Alpha',
    type: '通用机器人',
    image: './images/og-body-product.png',
    tone: 'warm',
  },
  {
    no: '02',
    title: 'Vision Module S2',
    type: '空间感知',
    image: './images/og-vision-sensor.png',
    tone: 'blue',
  },
  {
    no: '03',
    title: 'Human + Machine',
    type: '协作系统',
    image: './images/robot-collaboration.png',
    tone: 'dark',
  },
];

const notes = [
  ['01', '让机器人在陌生空间中快速建立世界模型', 'PERCEPTION', '08.26'],
  ['02', '从语言指令到全身动作的端到端控制', 'INTELLIGENCE', '08.18'],
  ['03', '灵巧手如何理解物体材质与抓取力度', 'MANIPULATION', '08.05'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menus = {
    Systems: [
      ['OG Body', '通用机器人本体'],
      ['OG Vision', '空间感知模组'],
      ['OG Hand', '灵巧操作系统'],
    ],
    Research: [
      ['Embodied AI', '具身基础模型'],
      ['World Model', '环境理解'],
      ['Motion', '全身运动控制'],
    ],
    Stories: [
      ['Field Notes', '研发现场'],
      ['Journal', '技术文章'],
      ['Collections', '专题集合'],
    ],
    About: [
      ['Mission', '我们的使命'],
      ['Studio', '团队与实验室'],
      ['Contact', '合作与咨询'],
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('shown')),
      { threshold: 0.12 },
    );
    document.querySelectorAll('[data-reveal]').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={`global-nav ${activeMenu ? 'expanded' : ''}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <header className="nav-shell">
          <button className="explore" onClick={() => setMenuOpen(!menuOpen)}>
            <i></i> Explore
          </button>
          <a className="wordmark" href="#top" onClick={scrollTo('#top')}>
            ONE—G
          </a>
          <nav>
            {Object.keys(menus).map((name) => (
              <button
                key={name}
                onMouseEnter={() => setActiveMenu(name)}
                onFocus={() => setActiveMenu(name)}
              >
                {name}
              </button>
            ))}
          </nav>
          <a className="talk" href="mailto:hello@one-g.ai">
            Start a project ↗
          </a>
        </header>
        <div className="nav-dropdown" aria-hidden={!activeMenu}>
          {activeMenu && (
            <div className="dropdown-inner">
              <div className="dropdown-main">
                <small>EXPLORE {activeMenu.toUpperCase()}</small>
                {menus[activeMenu].map(([title, desc]) => (
                  <a
                    href={activeMenu === 'Research' ? '#research' : '#systems'}
                    onClick={scrollTo(activeMenu === 'Research' ? '#research' : '#systems')}
                    key={title}
                  >
                    <b>{title}</b>
                    <span>{desc}</span>
                  </a>
                ))}
              </div>
              <aside>
                <small>QUICK LINKS</small>
                <a href="#featured" onClick={scrollTo('#featured')}>
                  Robot of the day ↗
                </a>
                <a href="#stories" onClick={scrollTo('#stories')}>
                  Latest stories ↗
                </a>
                <a href="#contact" onClick={scrollTo('#contact')}>
                  Contact us ↗
                </a>
              </aside>
            </div>
          )}
        </div>
      </div>

      <div className={`menu-drawer ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => setMenuOpen(false)}>Close ×</button>
        <nav>
          <a href="#systems" onClick={scrollTo('#systems')}>
            01 / Systems
          </a>
          <a href="#research" onClick={scrollTo('#research')}>
            02 / Research
          </a>
          <a href="#stories" onClick={scrollTo('#stories')}>
            03 / Stories
          </a>
          <a href="#contact" onClick={scrollTo('#contact')}>
            04 / Contact
          </a>
        </nav>
        <p>
          SHANGHAI · CN
          <br />
          INTELLIGENCE IN MOTION
        </p>
      </div>

      <main id="top">
        <section className="masthead page-pad">
          <div className="mast-meta">
            <span>Independent robotics lab</span>
            <span>Shanghai · 2026</span>
          </div>
          <h1>ONE—G</h1>
          <div className="mast-foot">
            <p>
              Building intelligent machines
              <br />
              for the physical world.
            </p>
            <p>
              构建能够感知、思考与行动的
              <br />
              通用机器人。
            </p>
            <a href="#featured" onClick={scrollTo('#featured')}>
              Scroll to explore ↓
            </a>
          </div>
        </section>

        <section className="featured page-pad" id="featured" data-reveal>
          <div className="section-cap">
            <span>Robot of the day</span>
            <span>Sep 02, 2026</span>
            <span>Score 9.1 / 10</span>
          </div>
          <div className="featured-image">
            <img src="./images/robot-collaboration.png" alt="机器人与设计师协作" />
            <div className="award-pill">
              <b>R</b>
              <small>
                ROBOT
                <br />
                OF THE DAY
              </small>
            </div>
          </div>
          <div className="featured-copy">
            <div>
              <small>FEATURED SYSTEM</small>
              <h2>
                OG Collaborative
                <br />
                Intelligence
              </h2>
            </div>
            <p>让机器人理解人的意图，自然进入设计、制造与服务流程。</p>
            <a href="#systems" onClick={scrollTo('#systems')}>
              View system ↗
            </a>
          </div>
        </section>

        <section className="latest page-pad" id="systems">
          <div className="section-title" data-reveal>
            <div>
              <span>Latest</span>
              <small>01</small>
            </div>
            <h2>
              最新机器人
              <br />
              系统与实验。
            </h2>
            <p>从本体、感知到协作智能，探索正在形成的产品能力。</p>
          </div>
          <div className="latest-grid">
            {latest.map((item) => (
              <article className="latest-card" key={item.no} data-reveal>
                <div className={`latest-image ${item.tone}`}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span>{item.no}</span>
                </div>
                <div className="card-info">
                  <h3>{item.title}</h3>
                  <p>{item.type} / 2026</p>
                  <span>↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="statement page-pad" data-reveal>
          <small>OUR MISSION / 02</small>
          <p>
            我们不制造看起来像未来的机器。
            <br />
            我们让未来，<em>真正开始工作。</em>
          </p>
        </section>

        <section className="winners page-pad" id="research">
          <div className="section-title inverted" data-reveal>
            <div>
              <span>Selected</span>
              <small>02</small>
            </div>
            <h2>
              核心能力，
              <br />
              持续进化。
            </h2>
            <p>每个系统都来自真实环境中的长期测试与迭代。</p>
          </div>
          <div className="winner-list">
            {[
              '空间理解与动态建图',
              '全身运动与安全控制',
              '视觉语言行动模型',
              '精细操作与触觉反馈',
            ].map((title, i) => (
              <a href="#stories" onClick={scrollTo('#stories')} key={title} data-reveal>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <small>{['PERCEPTION', 'MOTION', 'FOUNDATION MODEL', 'MANIPULATION'][i]}</small>
                <b>↗</b>
              </a>
            ))}
          </div>
        </section>

        <section className="collections page-pad" id="stories">
          <div className="section-title" data-reveal>
            <div>
              <span>Collections</span>
              <small>03</small>
            </div>
            <h2>
              机器智能的
              <br />
              不同切面。
            </h2>
            <p>按照技术、场景和实验主题，浏览 ONE—G 的研发集合。</p>
          </div>
          <div className="collection-row">
            <article className="collection-card lime" data-reveal>
              <small>COLLECTION / 01</small>
              <h3>
                Intelligence
                <br />
                in Motion
              </h3>
              <div className="rings">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <footer>
                <span>12 EXPERIMENTS</span>
                <b>↗</b>
              </footer>
            </article>
            <article className="collection-card graphite" data-reveal>
              <small>COLLECTION / 02</small>
              <h3>
                Seeing the
                <br />
                Real World
              </h3>
              <div className="eye">
                <i></i>
              </div>
              <footer>
                <span>08 EXPERIMENTS</span>
                <b>↗</b>
              </footer>
            </article>
          </div>
        </section>

        <section className="journal page-pad">
          <div className="section-title" data-reveal>
            <div>
              <span>Journal</span>
              <small>04</small>
            </div>
            <h2>
              研发笔记与
              <br />
              最新进展。
            </h2>
            <p>记录具身智能从研究走向现实的每一步。</p>
          </div>
          <div className="note-list">
            {notes.map(([no, title, type, date]) => (
              <article key={no} data-reveal>
                <span>{no}</span>
                <h3>{title}</h3>
                <small>{type}</small>
                <time>{date}</time>
                <b>→</b>
              </article>
            ))}
          </div>
        </section>

        <section className="contact page-pad" id="contact" data-reveal>
          <small>HAVE A PROJECT?</small>
          <h2>
            Let's build
            <br />
            <em>what's next.</em>
          </h2>
          <a href="mailto:hello@one-g.ai">hello@one-g.ai ↗</a>
        </section>
      </main>

      <footer className="site-footer page-pad">
        <span>ONE—G © 2026</span>
        <span>SHANGHAI, CHINA</span>
        <a href="#top" onClick={scrollTo('#top')}>
          BACK TO TOP ↑
        </a>
      </footer>
    </>
  );
}

createRoot(document.querySelector('#app')).render(<App />);
