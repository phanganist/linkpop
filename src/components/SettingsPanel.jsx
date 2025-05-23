import React, { useState } from 'react';

const SettingsPanel = ({ settings = {}, onSettingsChange }) => {
  const [label, setLabel] = useState(settings.label || 'Click Me');
  const [link, setLink] = useState(settings.link || 'https://example.com');
  const [color, setColor] = useState(settings.color || '#007bff');
  const [position, setPosition] = useState(settings.position || 'bottom-right');

  const updateSettings = () => {
    onSettingsChange({ label, link, color, position });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h3>LinkPop Button Settings</h3>

      <label>Label:</label>
      <input value={label} onChange={(e) => setLabel(e.target.value)} />

      <label>Link:</label>
      <input value={link} onChange={(e) => setLink(e.target.value)} />

      <label>Color:</label>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

      <label>Position:</label>
      <select value={position} onChange={(e) => setPosition(e.target.value)}>
        <option value="bottom-right">Bottom Right</option>
        <option value="bottom-left">Bottom Left</option>
        <option value="top-right">Top Right</option>
        <option value="top-left">Top Left</option>
      </select>

      <br /><br />
      <button onClick={updateSettings}>Save</button>
    </div>
  );
};

export default SettingsPanel;
