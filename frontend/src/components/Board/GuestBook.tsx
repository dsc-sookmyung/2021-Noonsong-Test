import React, { useState, useEffect, useCallback } from 'react';
import Comments from './Comments';
import Form from './Form';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import type { CommentProps } from './types';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function GuestBook() {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    /* get comments */
    (async () => {
      let res = await fetch('http://localhost:8000/feedbacks/');
      await res.json().then((data) => {
        setComments(data);
      });
    })();
  }, [numbers])

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => setLoaded(true), 2500);
    }
  }, [loaded]);

  const saveComment = (prop: CommentProps) => (e: React.FormEvent<HTMLFormElement>): void => {
    console.log(comments);
    let array = [...comments];
    array.push(prop);
    setComments(array);
  }

  const getComment = (e: React.FormEvent<HTMLFormElement>): void => {
    setNumbers([...numbers, numbers[numbers.length -1] + 1]);
  }

  const handleLoad = (e: React.FormEvent<HTMLFormElement>): void => {
    setLoaded(!loaded);
    console.log(loaded);
  }

  return (
    <>
      <Comments comments={comments} />
      <Form 
        saveComment={saveComment}
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
