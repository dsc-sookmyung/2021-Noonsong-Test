import React from 'react';
import styled from 'styled-components';
import type { CommentProps } from './types';


const StyledComment = styled.div`
  display: inline-block;
  width: auto;
  padding: 1.2rem 0rem;
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

function Comment({ name, comment }: CommentProps) {
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
