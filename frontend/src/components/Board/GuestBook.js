import React, { useState, useEffect, useRef, useCallback } from 'react';
import Comments from './Comments';
import Form from './Form';

function GuestBook() {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    /* get comments */
    await fetch('http://localhost:8000/feedbacks/')
      .then((res) => console.log(res))
      .catch((err) => console.log("error: ", err));
  }, [])

  return (
    <>
      <Comments comments={comments} />
      <Form saveComment={(commentObject) => {
        setComments((prevComments) => {
          console.log(comments);
          return [...prevComments, commentObject]
        });
        /* fetch post */
      }}
      />
    </>
  )
}

export default GuestBook;
