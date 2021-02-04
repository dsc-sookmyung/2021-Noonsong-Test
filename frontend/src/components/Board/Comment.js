import React from 'react';
import styled, { css } from 'styled-components';

const StyledComment = styled.div`
  /* 공통 스타일 */
  width: 100%;
  display: inline-block;
  margin-top: 10px;
  padding: 15px;
  text-align: center;
  font-weight: 900;
  font-family: arial;
  position: relative;
  border-bottom: 1px solid #f1f3f5;
  word-break: break-all;
  fullWidth: true;
`;

const Wrapper = styled.div`
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

function Comment({children, ...rest}) {
  return (
    <Wrapper>
      <StyledComment {...rest}>
        {children}
      </StyledComment>
    </Wrapper>
  );
}

export default Comment;
