import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { App } from './App';

const container = document.querySelector('#shadow-root');
const shadowContainer = container.attachShadow({ mode: 'open' });
const emotionRoot = document.createElement('style');
const shadowRootElement = document.createElement('div');
shadowContainer.appendChild(emotionRoot);
shadowContainer.appendChild(shadowRootElement);

const cache = createCache({
  key: 'css',
  prepend: true,
  container: emotionRoot,
});

ReactDOM.createRoot(shadowRootElement).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <div>Inside Shadow DOM</div>
    </CacheProvider>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
