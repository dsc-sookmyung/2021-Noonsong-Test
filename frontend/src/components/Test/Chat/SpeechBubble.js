import React from 'react';
import styled, { css } from 'styled-components';


const colorStyles = css`
  ${props => 
    props.role === 'question' &&
    css`
      color: black;
      background: #e9ecef;
    `}

  ${props => 
    props.role === 'answer' &&
    css`
      color: white;
      background: #0D2D84;
    `}
`;

const positionStyles = css`
  ${props =>
    props.role === 'question' &&
    css`
      float: left;
    `}

  ${props =>
    props.role === 'answer' &&
    css`
      float: right;
    `}
`;

const tailStyles = css`
    ${props =>
      props.role === 'question' &&
      css`
        border-radius: 0 15px 15px 15px;
        margin-left: 1rem;
    `}

    ${props =>
      props.role === 'answer' &&
      css`
        border-radius: 15px 0 15px 15px;
        margin-right: 1rem;
    `}
`;

const StyledSpeechBubble = styled.div`
  /* 공통 스타일 */
  width: auto;
  display: inline-block;
  margin-top: 0.8rem;
  padding: 1.2rem 1.6rem;
  text-align: center;
  font-weight: 900;
  font-family: arial;
  position: relative;
  border-radius: 15px 0 15px 15px;

  /* 색상 */
  ${colorStyles}
  ${tailStyles}

  /* 말풍선 위치 */
  ${positionStyles}
`;

const Wrapper = styled.div`
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

function SpeechBubble({children, role, ...rest}) {
  return (
    <Wrapper>
      <StyledSpeechBubble role={role} {...rest}>
        {children}
      </StyledSpeechBubble>

    </Wrapper>
  );
}

export default SpeechBubble;
