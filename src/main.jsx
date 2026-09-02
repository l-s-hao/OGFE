import { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { StrokeText } from '@/components/reactbits/stroke-text';
import './style.css';

const products = [
  {
    name: '1G Body',
    tag: '通用机器人',
    text: '面向真实世界打造的通用机器人本体。',
    image: './images/og-body-product.png',
    color: 'sand',
  },
  {
    name: '1G Vision',
    tag: '空间感知',
    text: '看见人物、物体与空间之间的关系。',
    image: './images/og-vision-sensor.png',
    color: 'ice',
  },
  {
    name: '1G Studio',
    tag: '开发平台',
    text: '从模型训练到真机部署的一体化工具。',
    image: null,
    color: 'lime',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const railRef = useRef(null);
  const menus = {
    Systems: [
      ['1G Body', '#featured'],
      ['1G Vision', '#featured'],
      ['1G Studio', '#featured'],
    ],
    Research: [
      ['Embodied AI', '#use-case'],
      ['World Model', '#use-case'],
      ['Motion Control', '#use-case'],
    ],
    Stories: [
      ['Product stories', '#use-case'],
      ['Field notes', '#accessories'],
      ['Case studies', '#use-case'],
    ],
    About: [
      ['Our mission', '#store-footer'],
      ['Shanghai Lab', '#store-footer'],
      ['Contact', '#store-footer'],
    ],
  };
  const go = (id) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const moveRail = (direction) =>
    railRef.current?.scrollBy({
      left: direction * railRef.current.clientWidth * 0.72,
      behavior: 'smooth',
    });

  return (
    <>
      <div
        className={`global-nav ${activeMenu ? 'expanded' : ''}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <header className="minimal-nav">
          <button className="menu-trigger" onClick={() => setMenuOpen(true)}>
            <i></i> Explore
          </button>
          <a className="nav-logo" href="#top" onClick={go('#top')}>
            ONE - G
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
          <a className="nav-contact" href="mailto:hello@one-g.ai">
            Contact ↗
          </a>
        </header>
        <div className="nav-dropdown" aria-hidden={!activeMenu}>
          {activeMenu && (
            <div className="dropdown-inner">
              <section>
                <small>EXPLORE {activeMenu.toUpperCase()}</small>
                {menus[activeMenu].map(([name, href]) => (
                  <a href={href} onClick={go(href)} key={name}>
                    {name}
                    <span>↗</span>
                  </a>
                ))}
              </section>
              <aside>
                <small>QUICK LINKS</small>
                <a href="#store" onClick={go('#store')}>
                  Explore all products
                </a>
                <a href="#accessories" onClick={go('#accessories')}>
                  Accessories & modules
                </a>
                <a href="mailto:hello@one-g.ai">Talk to a specialist</a>
              </aside>
            </div>
          )}
        </div>
      </div>
      <aside className={`drawer ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => setMenuOpen(false)}>Close ×</button>
        <nav>
          <a href="#store" onClick={go('#store')}>
            01 / Store
          </a>
          <a href="#featured" onClick={go('#featured')}>
            02 / Products
          </a>
          <a href="mailto:hello@one-g.ai">03 / Contact</a>
        </nav>
        <small>ONE - G / SHANGHAI / 2026</small>
      </aside>

      <main id="top">
        <section className="brand-hero">
          <div className="hero-meta">
            <span>ROBOTICS / SHANGHAI</span>
            <span>INTELLIGENCE IN MOTION</span>
          </div>
          <StrokeText text="ONE - G" />
          <div className="hero-foot">
            <p>
              Building intelligent machines
              <br />
              for the physical world.
            </p>
            <p>让机器理解世界。</p>
            <a href="#store" onClick={go('#store')}>
              Explore the store ↓
            </a>
          </div>
        </section>

        <section className="store" id="store">
          <div className="store-heading">
            <small>ONE - G STORE</small>
            <h2>
              Explore the
              <br />
              ONE - G Store
            </h2>
            <p>
              探索机器人本体、感知系统与开发工具。每一项产品都可独立工作，也可组成完整智能系统。
            </p>
          </div>
          <div className="category-tabs">
            <button className="active">All products</button>
            <button>Robots</button>
            <button>Perception</button>
            <button>Developer tools</button>
          </div>
          <div className="product-grid" id="featured">
            {products.map((product, index) => (
              <article
                className={`product-card ${product.color} ${index === 0 ? 'large' : ''}`}
                key={product.name}
              >
                <div className="product-copy">
                  <small>{product.tag}</small>
                  <h3>{product.name}</h3>
                  <p>{product.text}</p>
                  <div>
                    <button>了解更多</button>
                    <button className="buy">选购</button>
                  </div>
                </div>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={`${product.name} 产品效果图`}
                    loading={index ? 'lazy' : 'eager'}
                  />
                ) : (
                  <div className="studio-graphic">
                    <span>1G</span>
                    <i></i>
                    <b>
                      BUILD
                      <br />
                      TEST
                      <br />
                      DEPLOY
                    </b>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="use-case" id="use-case">
          <div className="use-photo">
            <img src="./images/robot-collaboration.png" alt="机器人与设计师协作" loading="lazy" />
          </div>
          <div className="use-copy">
            <small>BUILT FOR REAL WORK</small>
            <h2>
              与人一起，
              <br />
              完成更多。
            </h2>
            <p>自然语言协作、实时空间理解和安全运动控制，让 1G 机器人进入真实工作流。</p>
            <a href="mailto:hello@one-g.ai">预约产品演示 ↗</a>
          </div>
        </section>

        <section className="accessories" id="accessories">
          <div className="rail-head">
            <div>
              <small>COMPLETE YOUR SYSTEM</small>
              <h2>配件与模块</h2>
            </div>
            <div>
              <button onClick={() => moveRail(-1)}>←</button>
              <button onClick={() => moveRail(1)}>→</button>
            </div>
          </div>
          <div className="accessory-rail" ref={railRef}>
            {[
              ['灵巧手模组', 'HAND / 01'],
              ['移动底盘', 'BASE / 02'],
              ['力觉传感器', 'SENSOR / 03'],
              ['边缘计算单元', 'COMPUTE / 04'],
            ].map(([name, code], i) => (
              <article key={name}>
                <div className={`accessory-art a${i}`}>
                  <span>{i + 1}</span>
                  <i></i>
                </div>
                <small>{code}</small>
                <h3>{name}</h3>
                <p>了解更多 ↗</p>
              </article>
            ))}
          </div>
        </section>

        <section className="store-footer" id="store-footer">
          <small>NEED HELP CHOOSING?</small>
          <h2>
            找到适合你的
            <br />
            机器人系统。
          </h2>
          <div>
            <a href="mailto:hello@one-g.ai">联系产品顾问</a>
            <a href="#store" onClick={go('#store')}>
              浏览全部产品
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span>ONE - G © 2026</span>
        <span>SHANGHAI, CHINA</span>
        <a href="#top" onClick={go('#top')}>
          BACK TO TOP ↑
        </a>
      </footer>
    </>
  );
}

createRoot(document.querySelector('#app')).render(<App />);
