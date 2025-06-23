import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ default import

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, // ✅ trailing comma exigido pelo Prettier
);
