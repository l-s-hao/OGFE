import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { homepageMarkup, setupHomepageInteractions } from './main.js';
import './style.css';

function App() {
  useEffect(() => setupHomepageInteractions(), []);
  return <div dangerouslySetInnerHTML={{ __html: homepageMarkup }} />;
}

createRoot(document.querySelector('#app')).render(<App />);
