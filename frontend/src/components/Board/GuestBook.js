import React, { useState, useEffect, useRef, useCallback } from 'react';
import Comments from './Comments';
import Form from './Form';

function GuestBook() {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    /* get comments */
    let res = await fetch('http://localhost:8000/feedbacks/');
    await res.json().then((data) => {
      setComments(data);
    });
  }, [])

  return (
    <>
      <Comments comments={comments} />
      <Form saveComment={(commentObject) => {
        setComments((prevComments) => {
          console.log(comments);
          return [...prevComments, commentObject]
        });
        /* post comments */
        // let res = fetch('http://localhost:8000/feedbacks/')
      }}
      />
    </>
  )
}

export default GuestBook;
