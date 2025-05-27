import React, { useState } from 'react';
import './SettingsPanel.css';

const SettingsPanel = ({ settings = {}, onSettingsChange }) => {
  const [label, setLabel] = useState(settings.label || 'Click Me');
  const [link, setLink] = useState(settings.link || 'https://example.com');
  const [color, setColor] = useState(settings.color || '#007bff');
  const [position, setPosition] = useState(settings.position || 'bottom-right');

  const updateSettings = () => {
    onSettingsChange({ label, link, color, position });
  };

  return (
    <div
      className="settings-container"
      style={{
        maxWidth: '640px',
        padding: '24px',
        fontFamily: 'sans-serif',
        margin: '0 auto',
        height: 'auto',
        boxSizing: 'border-box'
      }}
    >
      <h2 style={{ marginBottom: '16px' }}>🎯 LinkPop Button Settings</h2>

      <div className="form-group" style={{ marginBottom: '12px' }}>
        <label htmlFor="label">Label</label>
        <input
          id="label"
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '12px' }}>
        <label htmlFor="link">Link</label>
        <input
          id="link"
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '12px' }}>
        <label htmlFor="color">Color</label>
        <input
          id="color"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '16px' }}>
        <label htmlFor="position">Position</label>
        <select
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="bottom-right">Bottom Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="top-right">Top Right</option>
          <option value="top-left">Top Left</option>
        </select>
      </div>

      <button className="save-button" onClick={updateSettings}>
        💾 Save
      </button>
    </div>
  );
};

export default SettingsPanel;
