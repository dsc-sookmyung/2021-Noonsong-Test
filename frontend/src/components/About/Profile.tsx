import React from 'react';
import styled from 'styled-components';

import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const Profile = ({ name, major, image, insta, github, role }) => {
  const StyledProfile = styled.div`
    display: flex;
    width: 15rem;
    padding: 1.6rem 0;

    @media only screen and (max-width: 768px) {
      width: 16rem;
    }
  `;

  const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.6rem 0;
    height: 76%;
  `;

  const Info = styled.div`
    font-size: 0.8rem;
    align-items: center;
    display: flex;
    color: #666666;
    line-height: 1;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }

  `;

  const ProfileImage = styled.img`
    border-radius: 50%;
    width: 6.4rem;
    height: 6.4rem;
    object-fit: cover;
    margin-right: 0.8rem;

    @media only screen and (max-width: 768px) {
      width: 8rem;
      height: 8rem;
    }
  `;

  const Name = styled.h3`
    margin: 0.2rem 0;
    font-size: 1rem;
    &:after {
      content: ' ${props => props.role}';
      font-size: 0.7rem;
      color: #444444;
    }
  `;

    return (
        <StyledProfile>
          <ProfileImage src={image} alt="profile image"/>
          <DescWrapper>
              <Name role={role}>{name}</Name>
              <Info style={{fontSize: "0.8rem", marginBottom: "0.4rem"}}>{major}</Info>
              { github ? 
                  <Info><GitHubIcon fontSize="small" style={{transform: "scale(0.6)"}}/>{github}</Info>
                : null 
              }
              { insta ? 
                  <Info><InstagramIcon fontSize="small" style={{transform: "scale(0.65)"}}/>{insta}</Info>
                : null 
              }
          </DescWrapper>
        </StyledProfile>
    );
}

export default Profile;