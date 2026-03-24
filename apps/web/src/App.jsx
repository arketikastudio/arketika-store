
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import CatalogoPage from './pages/CatalogoPage.jsx';
import BajoPedidoPage from './pages/BajoPedidoPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/bajo-pedido" element={<BajoPedidoPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
