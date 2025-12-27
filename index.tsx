import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import '@fontsource/crimson-text/400.css'
import '@fontsource/crimson-text/700.css'
import '@fontsource/patrick-hand/400.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);