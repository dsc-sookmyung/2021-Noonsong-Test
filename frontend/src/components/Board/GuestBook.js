import React, { useState, useEffect, useCallback } from 'react';
import Comments from './Comments';
import Form from './Form';

function GuestBook() {
  const [comments, setComments] = useState([]);
  const [numbers, setNumbers] = useState([]);

  useEffect(async () => {
    /* get comments */
    let res = await fetch('http://localhost:8000/feedbacks/');
    await res.json().then((data) => {
      setComments(data);
    });
    console.log("use effect");
  }, [numbers])

  const getComment = useCallback(() => {
    setNumbers([...numbers, numbers[numbers.length -1] + 1]);
  });

  return (
    <>
      <Comments comments={comments} />
      <Form saveComment={(commentObject) => {
        setComments((prevComments) => {
          console.log(comments);
          return [...prevComments, commentObject]
        });
      }} getComment={getComment}
      />
    </>
  )
}

export default GuestBook;
