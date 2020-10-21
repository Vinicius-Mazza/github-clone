import React from 'react';

import { 
  Container, 
  Main, 
  LeftSide, 
  RightSide, 
  Repos, 
  CalendarHeading 
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  return(
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'Vinicius-Mazza'}
            name={'Vinicius Mazza'}
            avatarUrl={'https://avatars3.githubusercontent.com/u/63126725?v=4'}
            followers={0}
            following={1}
            company={undefined}
            location={'Ceará, Brasil'}
            email={'viniciusmazza2552@gmail.com'}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Here the repos...</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'Vinicius-Mazza'}
                  reponame={'github-clone'}
                  description={'Demonstrative text for RepoCard!!'}
                  language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={0}
                  forks={0}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (Demonstrative...do not represent the true calendar)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;