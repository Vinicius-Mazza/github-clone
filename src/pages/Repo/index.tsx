import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return(
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/Vinicius-Mazza'}>
          Vinicius-Mazza
        </Link>

        <span></span>

        <Link className={'reponame'} to={'/Vinicius-Mazza/github-clone'}>
          github-clone
        </Link>
      
      </Breadcrumb>

      <p>A simple clone of the github!</p>

      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/Vinicius-Mazza/github-clone'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;