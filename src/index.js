import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import { ModalProvider } from './context/ModalContext';
import './i18n';
import App from './App';

import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </BrowserRouter>
);
