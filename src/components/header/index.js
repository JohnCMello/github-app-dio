import React, { useState } from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = (event) => {
    if (event.key === "Enter") getUser(usernameForSearch);
    console.log(usernameForSearch)
  };

  return (
    <header>
      <S.Wrapper>
        <input
          id='github-user'
          type='text'
          onChange={(event) => setUsernameForSearch(event.target.value)}
          onKeyPress={(event) => submitGetUser(event)}
        />
        <label htmlFor='github-user'>Github User</label>

      </S.Wrapper>
    </header>
  );
};

export default Header;
