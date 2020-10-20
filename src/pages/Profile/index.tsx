import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

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

        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;