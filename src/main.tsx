import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';

const container = document.querySelector('#shadow-root');

const shadowContainer = container.attachShadow({ mode: 'open' });

const shadowRootElement = document.createElement('div');

shadowContainer.appendChild(shadowRootElement);

ReactDOM.createRoot(shadowRootElement).render(
  <React.StrictMode>
    {/* <CacheProvider value={cache}> */}
    <div>Shadow DOM</div>
    <App />
    {/* </CacheProvider> */}
  </React.StrictMode>
);
