import React, { useEffect, useRef } from 'react';
import Message from './Message';
import SpeechBubbleContainer from './SpeechBubbleContainer';

const AlwaysScrollToBottom = () => {
  const scrollRef = useRef();
  useEffect(() => scrollRef.current.scrollIntoView());
  return <div ref={scrollRef} />;
};

const Messages = ({ numbers }) => {
  return (
    <div className="messagesSection">
      <SpeechBubbleContainer>
        {numbers.map((v) => {
          return (
            <div className="messagesContainer">
              <Message index={v} selected={selected} />
            </div>
          );
        })}
        <AlwaysScrollToBottom />
      </SpeechBubbleContainer>
    </div>
  )
}

export default Messages;
