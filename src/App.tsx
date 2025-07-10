import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { HomePage } from './components/Home/HomePage';

function AppContent() {
  const { state } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.theme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      state.theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Router>
        <Header onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<div className="min-h-screen flex items-center justify-center"><p className="text-2xl">Browse Page - Coming Soon</p></div>} />
            <Route path="/sell" element={<div className="min-h-screen flex items-center justify-center"><p className="text-2xl">Sell Page - Coming Soon</p></div>} />
            <Route path="/profile" element={<div className="min-h-screen flex items-center justify-center"><p className="text-2xl">Profile Page - Coming Soon</p></div>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;