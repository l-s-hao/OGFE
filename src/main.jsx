import { createRoot } from 'react-dom/client';
import { homepageMarkup, setupHomepageInteractions } from './main.js';
import './style.css';

function App() {
  return <div dangerouslySetInnerHTML={{ __html: homepageMarkup }} />;
}

createRoot(document.querySelector('#app')).render(<App />);

requestAnimationFrame(() => {
  try {
    setupHomepageInteractions();
  } catch (error) {
    console.error('Optional homepage interactions failed:', error);
  }
});
