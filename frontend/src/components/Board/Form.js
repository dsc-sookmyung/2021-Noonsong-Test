import React from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInputState from './useInputState';
import style from './Form.module.css';

const Form = ({ saveComment }) => {
  const { name, comment, reset, onChangeName, onChangeComment } = useInputState('');
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveComment({name: name, comment: comment});
        reset();
      }}
      className={style.form}
    >
      <div className={style.inputWrapper}>
        <TextField
          variant="standard"  // outlined
          label="닉네임"
          margin="normal"
          onChange={onChangeName}
          value={name}
          variant="outlined"
          size="small"
          fullWidth
        />
        <TextField
          variant="standard"  // outlined
          label="댓글 쓰기"
          margin="normal"
          onChange={onChangeComment}
          value={comment}
          fullWidth
          variant="outlined"
        />
      </div>
      <Button type="submit" variant="contained" color="primary" style={{margin: "0.7rem"}}>작성하기</Button>
    </form>
  );
};

export default Form;
