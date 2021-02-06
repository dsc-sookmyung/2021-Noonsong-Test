import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const AlwaysScrollToBottom = () => {
  const scrollRef = useRef();
  useEffect(() => scrollRef.current.scrollIntoView());
  return <div ref={scrollRef}/>;
};

const Comments = ({ comments }) => {
  return (
    <div className="commentsSection">
      <CommentsContainer>
        {Array.prototype.map.call(comments, (comment, index) => {
          return (<Comment key={comment.guest + comment.id} name={comment.guest} comment={comment.content}/>);
        })}
        <AlwaysScrollToBottom />
      </CommentsContainer>
    </div>
  )
}

export default Comments;

const CommentsContainer = styled.div`
  height: 24rem;
  overflow-y: scroll;
  padding: 0.8rem;

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
