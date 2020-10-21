import React from 'react';

import { Container, Line, GitHubLogo } from './styles';

const Footer: React.FC = () => {
  return(
    <Container>
      <Line />
      <GitHubLogo />
    </Container>
  );
}

export default Footer;