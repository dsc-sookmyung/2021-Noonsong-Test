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

const PositionStyles = css`
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

const TailStyles = css`
    ${props =>
      props.role === 'question' &&
      css`
        border-radius: 0 15px 15px 15px;
    `}

    ${props =>
      props.role === 'answer' &&
      css`
        border-radius: 15px 0 15px 15px;
    `}
`;

const StyledSpeechBubble = styled.div`
  /* 공통 스타일 */
  width: auto;
  display: inline-block;
  margin-top: 10px;
  padding: 15px;
  text-align: center;
  font-weight: 900;
  font-family: arial;
  position: relative;
  border-radius: 15px 0 15px 15px;

  /* 색상 */
  ${colorStyles}
  ${TailStyles}

  /* 말풍선 위치 */
  ${PositionStyles}
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
