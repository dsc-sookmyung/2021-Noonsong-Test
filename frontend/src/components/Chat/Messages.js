import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Message from './Message';
import DelayedRender from './DelayedRender'
import './TypingDot.css';

const AlwaysScrollToBottom = () => {
  const scrollRef = useRef();
  useEffect(() => scrollRef.current.scrollIntoView());
  return <div ref={scrollRef} />;
};

const Messages = ({ numbers, loaded }) => {
  return (
    <div className="messagesSection">
      <MessagesContainer>
        {numbers.map((v) => {
          return (
            <div className="messagesContainer">
              {(v == numbers.length - 1) ? (
                <Wrapper disappear={!loaded}>
                <div class="dot-typing"></div>
                </Wrapper>
              ) : (null)}
              <DelayedRender delay={1500}>
                <Message key={`message ${v}`} index={v} />
                <AlwaysScrollToBottom />
              </DelayedRender>
            </div>
          );
        })}
      </MessagesContainer>
    </div>
  )
}

export default Messages;

const MessagesContainer = styled.div`
  height: 30rem;
  overflow-y: scroll;

  /* scrollbar */
  ::-webkit-scrollbar {
    width: 16px;
  }
  ::-webkit-scrollbar-thumb {
      height: 6px;
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      -webkit-border-radius: 7px;
      background-color: #f1f3f5; // background: #dee2e6;
      -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
  }
`;

const Wrapper = styled.div`
  display: none;
  margin-top: 10px;
  padding: 15px;
  font-family: arial;

  ${props =>
  props.disappear &&
  css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;
