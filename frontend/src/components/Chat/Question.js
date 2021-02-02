import React from 'react';
import { useEffect } from 'react';
import SpeechBubble from './SpeechBubble';

const Question = ({index}) => {
  useEffect(() => {
    console.log('question');
  });

  return (
    <SpeechBubble role="question">
      질문 {index}
    </SpeechBubble>
  )
}

export default Question;
