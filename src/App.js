import React, { useState } from 'react';
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
    setSettings(newSettings);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/settings"
          element={
            <SettingsPanel settings={settings} onSettingsChange={handleSettingsChange} />
          }
        />
        <Route
          path="/"
          element={
            <FloatingButton
              label={settings.label}
              link={settings.link}
              background={settings.color}
              position={settings.position}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
