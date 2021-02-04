import React from "react"
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const Form = ({ saveComment }) => {
  const { value, reset, onChange } = useInputState('');
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveComment(value);
        reset();
      }}
    >
      <TextField
        variant="standard"  // outlined
        placeholder="댓글 쓰기"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default Form;
