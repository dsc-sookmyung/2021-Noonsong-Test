import React from 'react';
import { useEffect } from 'react';
import SpeechBubbleContainer from './SpeechBubbleContainer';
import SpeechBubble from './SpeechBubble';

const Question = ({index}) => {
  useEffect(() => {
    console.log('question');
  });

  return (
    <SpeechBubbleContainer>
      <SpeechBubble role="question">
        질문 {index}
      </SpeechBubble>
    </SpeechBubbleContainer>
  )
}

export default Question;
