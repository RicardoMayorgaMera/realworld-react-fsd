import React from 'react';
import GitHubIcon from 'react-icons/lib/fa/github';
import TwitterIcon from 'react-icons/lib/twemoji/twitter';
import LinkedInIcon from 'react-icons/lib/tfi/linkedin';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '20px' }}>
      <div>
        <p>Built with React</p>
        <nav>
          <ul>
            <li><GitHubIcon size={24} data-testid='github-icon' /></li>
            <li><TwitterIcon size={24} data-testid='twitter-icon' /></li>
            <li><LinkedInIcon size={24} data-testid='linkedin-icon' /></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;