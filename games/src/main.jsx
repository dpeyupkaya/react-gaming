import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter'ı ekleyin
import { MainLayout } from './layout/MainLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* BrowserRouter ile sarmalayın */}
    
        <App />
      
    </BrowserRouter>
  </StrictMode>
);