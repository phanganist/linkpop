import React from 'react';
import './FloatingButton.css';

const FloatingButton = ({ label = 'Click Me', link = '#', position = 'bottom-right', background = '#FF4081' }) => {
  const style = {
    position: 'fixed',
    [position.includes('bottom') ? 'bottom' : 'top']: '20px',
    [position.includes('right') ? 'right' : 'left']: '20px',
    backgroundColor: background,
    color: 'white',
    padding: '12px 20px',
    borderRadius: '30px',
    fontSize: '16px',
    textDecoration: 'none',
    zIndex: 9999
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={style}>
      {label}
    </a>
  );
};

export default FloatingButton;
