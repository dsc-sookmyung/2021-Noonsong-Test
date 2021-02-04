import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SpeechBubble from './SpeechBubble';

const Message = ({ index }) => {
  useEffect(() => {
    console.log('message');
  });

  return (
    <>
      {(index % 2) ? (
        <SpeechBubble role="question">
          질문 {Math.ceil(index / 2)}
        </SpeechBubble>
      ) : (
        <SpeechBubble role="answer">
          답 {index / 2}
        </SpeechBubble>
      )}
    </>
  )
}

export default Message;
