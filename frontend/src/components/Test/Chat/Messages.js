import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Message from './Message';
import './TypingDot.css';

const AlwaysScrollToBottom = () => {
  const scrollRef = useRef();
  useEffect(() => scrollRef.current.scrollIntoView());
  return <div ref={scrollRef} />;
};

const Messages = ({ numbers, contents, selected, loaded }) => {
  return (
    <div className="messagesSection">
      <MessagesContainer>
        {numbers.map((v) => {
          return (
            <div className="messagesContainer">
              <Message key={`message ${v}`} text={contents[Math.ceil(v / 2) - 1]} selectedAnswer={selected} index={v} />
              {(v === numbers.length) ? (
                <Wrapper key={`typing ${v}`} disappear={!loaded}>
                <div class="dot-typing"></div>
                </Wrapper>
              ) : (null)}
              <AlwaysScrollToBottom />
            </div>
          );
        })}
      </MessagesContainer>
    </div>
  )
}

export default Messages;

const MessagesContainer = styled.div`
  width: 100%;
  height: 80vh;
  padding: 1rem 0;
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

  /* Mobile */
  @media only screen and (max-width: 767px) and (max-height: 760px) {
    min-height: 78vh;
    height: auto;
  }

  @media only screen and (max-width: 767px) and (max-height: 680px) {
    min-height: 76vh;
    height: auto;
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
    display: block;
    float: left;
    `}
`;
