import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';

import { Container, GitHubLogo, SearchForm } from './styles';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return(
    <Container>
      <GitHubLogo onClick={toggleTheme} />
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