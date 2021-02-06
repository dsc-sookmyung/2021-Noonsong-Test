import React from 'react';
import styled, { css } from 'styled-components';

const StyledComment = styled.div`
  display: inline-block;
  width: auto;
  padding: 1.4rem 2rem;
`;

const Name = styled.div`
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  font-weight: 700;
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
        <p>{comment}</p>
      </StyledComment>
    </Wrapper>
  );
}

export default Comment;
