import React from 'react';
import styled from 'styled-components';

const StyledComment = styled.div`
  display: inline-block;
  width: auto;
  padding: 1rem 1.4rem;
  margin: 0.4rem;
`;

const Name = styled.div`
  margin-bottom: 0.8rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Content = styled.p`
  color: #666666;
`;

const Wrapper = styled.div`
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const Comment = ({ name, comment }) => {
  console.log(name);
  return (
    <Wrapper>
      <StyledComment>
        <Name>{name}</Name>
        <Content>{comment}</Content>
      </StyledComment>
    </Wrapper>
  );
}

export default Comment;
