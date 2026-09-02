import { lazy, Suspense, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import StrokeText from '@/components/reactbits/stroke-text';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import './style.css';

const GridDistortion = lazy(() => import('@/components/reactbits/grid-distortion'));

const products = [
  {
    name: '1G 本体',
    tag: '通用机器人',
    text: '面向真实世界打造的通用机器人本体。',
    image: './images/og-body-product.png',
    color: 'sand',
    category: 'robots',
  },
  {
    name: '1G 视觉',
    tag: '空间感知',
    text: '看见人物、物体与空间之间的关系。',
    image: './images/og-vision-sensor.png',
    color: 'ice',
    category: 'perception',
  },
  {
    name: '1G 开发平台',
    tag: '开发平台',
    text: '从模型训练到真机部署的一体化工具。',
    image: null,
    color: 'lime',
    category: 'tools',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [category, setCategory] = useState('all');
  const railRef = useRef(null);
  const menus = {
    系统: [
      ['1G 本体', '#featured'],
      ['1G 视觉', '#featured'],
      ['1G 开发平台', '#featured'],
    ],
    研究: [
      ['具身智能', '#use-case'],
      ['世界模型', '#use-case'],
      ['运动控制', '#use-case'],
    ],
    故事: [
      ['产品故事', '#use-case'],
      ['研发现场', '#accessories'],
      ['案例研究', '#use-case'],
    ],
    关于: [
      ['我们的使命', '#store-footer'],
      ['上海实验室', '#store-footer'],
      ['联系我们', '#store-footer'],
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
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <div
          className={`global-nav ${activeMenu ? 'expanded' : ''}`}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <header className="minimal-nav">
            <SheetTrigger asChild>
              <Button className="menu-trigger" variant="ghost">
                <i></i> 探索
              </Button>
            </SheetTrigger>
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
              联系我们 ↗
            </a>
          </header>
          <div className="nav-dropdown" aria-hidden={!activeMenu}>
            {activeMenu && (
              <div className="dropdown-inner">
                <section>
                  <small>探索 {activeMenu}</small>
                  {menus[activeMenu].map(([name, href]) => (
                    <a href={href} onClick={go(href)} key={name}>
                      {name}
                      <span>↗</span>
                    </a>
                  ))}
                </section>
                <aside>
                  <small>快捷入口</small>
                  <a href="#store" onClick={go('#store')}>
                    浏览全部产品
                  </a>
                  <a href="#accessories" onClick={go('#accessories')}>
                    配件与模块
                  </a>
                  <a href="mailto:hello@one-g.ai">咨询产品专家</a>
                </aside>
              </div>
            )}
          </div>
        </div>
        <SheetContent className="drawer" side="top">
          <SheetTitle className="sr-only">探索菜单</SheetTitle>
          <SheetDescription className="sr-only">浏览商店、产品与联系方式</SheetDescription>
          <nav>
            <SheetClose asChild>
              <a href="#store" onClick={go('#store')}>
                01 / 商店
              </a>
            </SheetClose>
            <SheetClose asChild>
              <a href="#featured" onClick={go('#featured')}>
                02 / 产品
              </a>
            </SheetClose>
            <a href="mailto:hello@one-g.ai">03 / 联系</a>
          </nav>
          <small>ONE - G / 上海 / 2026</small>
        </SheetContent>
      </Sheet>

      <main id="top">
        <section className="brand-hero">
          <div className="hero-distortion" aria-hidden="true">
            <Suspense fallback={<div className="hero-distortion-fallback" />}>
              <GridDistortion
                imageSrc="./images/robot-collaboration.png"
                grid={18}
                mouse={0.16}
                strength={0.22}
                relaxation={0.92}
              />
            </Suspense>
          </div>
          <div className="hero-meta">
            <span>机器人 / 浙江</span>
            <span>运动中的智能</span>
          </div>
          <StrokeText
            text="ONE - G"
            className="hero-stroke"
            strokeColor="#171715"
            fillColor="#171715"
            strokeWidth={1.8}
            drawDuration={1.35}
            fillDelay={0.12}
            stagger={0.07}
            fillMode="wipe"
            fontSize={240}
            fontWeight={600}
            letterSpacing={-17}
          />
          <div className="hero-foot">
            <p>
              为现实世界
              <br />
              构建智能机器。
            </p>
            <p>让机器理解世界。</p>
            <Button asChild>
              <a href="#store" onClick={go('#store')}>
                探索商店 ↓
              </a>
            </Button>
          </div>
        </section>

        <section className="store" id="store">
          <div className="store-heading">
            <small>ONE - G 商店</small>
            <h2>
              探索
              <br />
              ONE - G 商店
            </h2>
            <p>
              探索机器人本体、感知系统与开发工具。每一项产品都可独立工作，也可组成完整智能系统。
            </p>
          </div>
          <Tabs className="category-tabs" value={category} onValueChange={setCategory}>
            <TabsList aria-label="产品分类">
              <TabsTrigger value="all">全部产品</TabsTrigger>
              <TabsTrigger value="robots">机器人</TabsTrigger>
              <TabsTrigger value="perception">感知系统</TabsTrigger>
              <TabsTrigger value="tools">开发工具</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className={`product-grid ${category !== 'all' ? 'filtered' : ''}`} id="featured">
            {products
              .filter((product) => category === 'all' || product.category === category)
              .map((product, index) => (
                <article
                  className={`product-card ${product.color} ${category === 'all' && index === 0 ? 'large' : ''}`}
                  key={product.name}
                >
                  <div className="product-copy">
                    <small>{product.tag}</small>
                    <h3>{product.name}</h3>
                    <p>{product.text}</p>
                    <div>
                      <Button variant="outline">了解更多</Button>
                      <Button className="buy">选购</Button>
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
                        构建
                        <br />
                        测试
                        <br />
                        部署
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
            <small>为真实工作而生</small>
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
              <small>完善你的系统</small>
              <h2>配件与模块</h2>
            </div>
            <div>
              <Button
                variant="outline"
                size="icon"
                aria-label="向左浏览"
                onClick={() => moveRail(-1)}
              >
                ←
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="向右浏览"
                onClick={() => moveRail(1)}
              >
                →
              </Button>
            </div>
          </div>
          <div className="accessory-rail" ref={railRef}>
            {[
              ['灵巧手模组', '手部 / 01'],
              ['移动底盘', '底盘 / 02'],
              ['力觉传感器', '传感器 / 03'],
              ['边缘计算单元', '计算 / 04'],
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
          <small>需要选购帮助？</small>
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
        <span>中国，上海</span>
        <a href="#top" onClick={go('#top')}>
          返回顶部 ↑
        </a>
      </footer>
    </>
  );
}

createRoot(document.querySelector('#app')).render(<App />);
