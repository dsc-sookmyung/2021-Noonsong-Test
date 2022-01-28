import React from 'react';
import SpeechBubble from './SpeechBubble';
import type { MessageProps } from '../types';

const Message = ({ text, selectedAnswer, index }: MessageProps) => {
  return (
    <>
      {(index % 2) ? (
        <SpeechBubble role="question">
          {text.question}
        </SpeechBubble>
      ) : (
        <SpeechBubble role="answer">
          {text.answers[selectedAnswer[Math.ceil(index / 2) - 1] - 1].answer}
        </SpeechBubble>
      )}
    </>
  )
}

export default Message;
