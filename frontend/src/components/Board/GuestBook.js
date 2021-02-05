import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Comments from './Comments';
import Form from './Form';

function GuestBook() {
  const [comments, setComments] = useState([]); 

  useEffect(async () => {
    await fetch('http://localhost:8000/feedbacks/')
      .then((res) => console.log(res))
      .catch((err) => console.log("error: ", err));
  }, [])

  return (
    <>
      <CBoxWrapper>
        <Comments comments={comments} />
      </CBoxWrapper>
      <Form saveComment={(commentText) => {
        const trimmedText = commentText.trim();
        if (trimmedText.length > 0) {
          setComments([...comments, trimmedText]);
        }
      }}/>
    </>
  )
}

export default GuestBook;

const CBoxWrapper = styled.div`
  width: 100%;
  height: 75%;
  margin: 0 auto;
  padding: 1rem;
`;
