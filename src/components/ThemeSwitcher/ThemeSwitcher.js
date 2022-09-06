import React, { useState } from 'react';
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');
  // my css styles
  const myTheme = {
    dark: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '1rem',
    },
    light: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '1rem',
    },
  };
  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <div style={theme === 'light' ? myTheme.light : myTheme.dark}>
      <h2 style={{ color: ' #61dafb' }}>
        ThemeSwitcher | User Generated Event
      </h2>
      <p>Current Theme: {theme}</p>
      <button onClick={handleToggleTheme}>Switch Theme</button>
      <br />
      <a href="https://enzymejs.github.io/enzyme/">
        Refer Enzyme official document.
      </a>
    </div>
  );
};
export default ThemeSwitcher;
