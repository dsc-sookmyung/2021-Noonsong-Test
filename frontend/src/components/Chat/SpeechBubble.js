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
      align-items: flex-start;
    `}

  ${props =>
    props.role === 'answer' &&
    css`
      align-self: flex-end;
    `}
`;

const TailStyles = css`
    ${props =>
      props.role === 'question' &&
      css`
        border-top: 15px solid #e9ecef;
        border-left: 15px solid transparent;
        border-right: 15px solid #e9ecef;
        left: -16px;
      `}

    ${props =>
      props.role === 'answer' &&
      css`
        border-top: 15px solid #0D2D84;
        border-left: 15px solid #0D2D84;
        border-right: 15px solid transparent;
        right: -16px;
      `}
`;

const StyledSpeechBubble = styled.div`
  /* 공통 스타일 */
  width: 300px;
  margin-top: 10px;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  font-family: arial;
  position: relative;

  /* 색상 */
  ${colorStyles}

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-bottom: 5px solid transparent;
    top: 0px;

    /* 말풍선 꼬리 위치 */
    ${TailStyles}
  }

  /* 말풍선 위치 */
  ${PositionStyles}
`;

function SpeechBubble({children, role, ...rest}) {
  return (
    <StyledSpeechBubble role={role} {...rest}>
      {children}
    </StyledSpeechBubble>
  );
}

export default SpeechBubble;
