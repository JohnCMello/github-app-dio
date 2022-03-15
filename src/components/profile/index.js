import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar || 'https://avatars.githubusercontent.com/u/65418937?v=4'} alt="Avatar of user" />
      <S.WrapperInfoUser>
        <div>
          <S.WrapperUserGeneric>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login || "John Mello"}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>{githubState.user.company || "Company"}</h3>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>{githubState.user.location || "Location"}</h3>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog || "Blog"}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
