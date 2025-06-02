import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FloatingButton from './components/FloatingButton';
import reportWebVitals from './reportWebVitals';

// Initialize Wix embedded script and messaging
const initWixIntegration = () => {
  // Load Wix embedded script
  const script = document.createElement('script');
  script.src = 'https://static.wix.com/embed.js';
  script.async = true;
  script.onload = () => {
    // Initialize Wix messaging
    window.wixEmbedsAPI.onMessage((event) => {
      if (event.type === 'settings-updated') {
        // Update button settings when changed in the iframe
        const settings = event.data;
        localStorage.setItem('linkpopSettings', JSON.stringify(settings));
        // You can add code here to update the button if it's already rendered
      }
    });
  };
  document.head.appendChild(script);
};

console.log("LinkPop script loaded new one with no iframe");
console.log("window.location.pathname:", window.location.pathname);
console.log("window.self === window.top:", window.self === window.top);

const path = window.location.pathname;

if (path === '/settings') {
  console.log("Rendering settings panel (/settings)");
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.log("Rendering floating button (main site)");
  // Initialize Wix integration
  initWixIntegration();

  // Get settings from localStorage
  const stored = localStorage.getItem('linkpopSettings');
  const settings = stored ? JSON.parse(stored) : {
    label: 'Click Me',
    link: 'https://example.com',
    color: '#007bff',
    position: 'bottom-right',
  };

  // Create container for the floating button
  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'linkpop-button-container';
  document.body.appendChild(buttonContainer);

  // Render the floating button
  const root = ReactDOM.createRoot(buttonContainer);
  root.render(
    <React.StrictMode>
      <FloatingButton
        label={settings.label}
        link={settings.link}
        background={settings.color}
        position={settings.position}
      />
    </React.StrictMode>
  );
}

reportWebVitals();
