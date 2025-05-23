import React, { useState } from 'react';
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
    <div>
      <SettingsPanel settings={settings} onSettingsChange={handleSettingsChange} />
      <FloatingButton
        label={settings.label}
        link={settings.link}
        background={settings.color}
        position={settings.position}
      />
    </div>
  );
}

export default App;
