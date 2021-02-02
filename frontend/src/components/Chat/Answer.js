import React, { useEffect } from 'react';
import SpeechBubbleContainer from './SpeechBubbleContainer';
import SpeechBubble from './SpeechBubble';

const Answer = ({index}) => {
  useEffect(() => {
    console.log('answer');
  });

  return (
    <SpeechBubbleContainer>
      <SpeechBubble role="answer">
        답 {index}
      </SpeechBubble>
    </SpeechBubbleContainer>
  )
}

export default Answer;
