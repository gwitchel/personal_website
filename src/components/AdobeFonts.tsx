import React, { useEffect } from 'react';

const AdobeFonts: React.FC = () => {
  useEffect(() => {
    // Load Adobe Fonts stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://use.typekit.net/xpw0gdb.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup stylesheet when component unmounts
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default AdobeFonts; 