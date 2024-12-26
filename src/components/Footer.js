import React from 'react';

function Footer({ socialLinks }) {
  return (
    <footer className="footer">
      <p>© 2024 John Vincent Macayanan's Portfolio | All Rights Reserved</p>
      <p>
        Visit my Profile{' '}
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{' '}
        |{' '}
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        |{' '}
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </p>
    </footer>
  );
}

export default Footer;
