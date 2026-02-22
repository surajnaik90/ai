import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Summary from './components/Summary';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Self Reflection Tool</h1>
        <p className="subtitle">My View of the World Experienced</p>
      </header>
      
      <nav className="app-nav">
        <button 
          className={activeMenu === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveMenu('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={activeMenu === 'summary' ? 'active' : ''}
          onClick={() => setActiveMenu('summary')}
        >
          AI Summary
        </button>
      </nav>

      <main className="app-main">
        {activeMenu === 'dashboard' ? <Dashboard /> : <Summary />}
      </main>

      <footer className="app-footer">
        <p>Created by Suraj Naik | Bengaluru, Electronic City | February 2026</p>
      </footer>
    </div>
  );
}

export default App;
