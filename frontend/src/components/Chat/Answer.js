import React, { useEffect } from 'react';
import SpeechBubble from './SpeechBubble';

const Answer = ({index}) => {
  useEffect(() => {
    console.log('answer');
  });

  return (
    <SpeechBubble role="answer">
      답 {index}
    </SpeechBubble>
  )
}

export default Answer;
