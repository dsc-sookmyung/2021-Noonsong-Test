import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Message from './Message';
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
              <Message key={`message ${v}`} index={v} />
            </div>
          );
        })}
        <AlwaysScrollToBottom />
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
  position: relative;
  float: left;

  ${props =>
  props.disappear &&
  css`
    display: block;
  `}
`;
