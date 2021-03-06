import React from 'react';
import styled, {css} from 'styled-components';


const StyledSpeechBubbleContainer = styled.div`
  max-height: 250px;
  overflow: hidden;
  padding: 2rem;

  &:hover {
    overflow-y: auto;
  }

  /* scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
    background: #f1f3f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dee2e6;
    border-radius: 6px;
  }
`;

function SpeechBubbleContainer({children, role, ...rest}) {
  return <StyledSpeechBubbleContainer role={role} {...rest}>{children}</StyledSpeechBubbleContainer>;
}

export default SpeechBubbleContainer;
