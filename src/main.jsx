import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import { homepageMarkup, setupHomepageInteractions } from './main.js';
import { BlurText } from '@/components/reactbits/blur-text';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { PlatformBento } from '@/components/platform-bento';
import './style.css';

function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const cleanup = setupHomepageInteractions();
    setMounted(true);
    return cleanup;
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: homepageMarkup }} />
      {mounted && createPortal(<BlurText />, document.querySelector('#heroTitle'))}
      {mounted &&
        createPortal(
          <NumberTicker value={360} suffix="°" />,
          document.querySelector('#tickerVision'),
        )}
      {mounted &&
        createPortal(
          <NumberTicker value={18} prefix="< " suffix="ms" delay={0.1} />,
          document.querySelector('#tickerLatency'),
        )}
      {mounted &&
        createPortal(
          <NumberTicker value={48} suffix="+" delay={0.2} />,
          document.querySelector('#tickerModules'),
        )}
      {mounted &&
        createPortal(
          <NumberTicker value={12} suffix="h" delay={0.3} />,
          document.querySelector('#tickerRuntime'),
        )}
      {mounted && createPortal(<PlatformBento />, document.querySelector('#platformCards'))}
    </>
  );
}

createRoot(document.querySelector('#app')).render(<App />);
