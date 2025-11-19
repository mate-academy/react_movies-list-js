import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';

import { App } from './App';
import './App.scss';

createRoot(document.getElementById('root')).render(<App />);
