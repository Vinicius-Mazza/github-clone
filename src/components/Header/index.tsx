import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GitHubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  return(
    <Container>
      <GitHubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input placeholder="Search or jump to..." 
        value={search} 
        onChange={e => setSearch(e.currentTarget.value)} 
      />
      </SearchForm>
    </Container>
  );
}

export default Header;