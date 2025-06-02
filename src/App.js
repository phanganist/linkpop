import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingButton from './components/FloatingButton';
import SettingsPanel from './components/SettingsPanel';

function App() {
  const [settings, setSettings] = useState({
    label: 'Click Me',
    link: 'https://example.com',
    color: '#007bff',
    position: 'bottom-right',
  });

  const handleSettingsChange = (newSettings) => {
    localStorage.setItem('linkpop-settings', JSON.stringify(newSettings));
    setSettings(newSettings);
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('linkpop-settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.label && parsed.link && parsed.color && parsed.position) {
          setSettings(parsed);
        }
      }    } catch (err) {
      console.warn('Invalid settings in localStorage', err);
    }
  }, []);

  useEffect(() => {
    console.log('Loaded settings:', settings);
  }, [settings]);

  return (
    <Router>
      <Routes>
        <Route path="/settings" element={<SettingsPanel settings={settings} onSettingsChange={handleSettingsChange} />} />
        <Route path="*" element={<FloatingButton {...settings} />} />
      </Routes>
    </Router>
  );
}

export default App;
