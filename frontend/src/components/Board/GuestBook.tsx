import React, { useState, useEffect, useCallback } from 'react';
import Comments from './Comments';
import Form from './Form';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function GuestBook() {
  const [comments, setComments] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const classes = useStyles();

  useEffect(async () => {
    /* get comments */
    let res = await fetch('http://localhost:8000/feedbacks/');
    await res.json().then((data) => {
      setComments(data);
    });
  }, [numbers])

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => setLoaded(true), 2500);
    }
  }, [loaded]);

  const getComment = useCallback(() => {
    setNumbers([...numbers, numbers[numbers.length -1] + 1]);
  });

  const handleLoad = () => {
    setLoaded(!loaded);
    console.log(loaded);
  }

  return (
    <>
      <Comments comments={comments} />
      <Form saveComment={(commentObject) => {
        setComments((prevComments) => {
          console.log(comments);
          return [...prevComments, commentObject]
        });
      }} 
      getComment={getComment}
      handleLoad={handleLoad}
      />
      { !loaded ? (
        <Backdrop className={classes.backdrop} open={!loaded}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null }
    </>
  )
}

export default GuestBook;
