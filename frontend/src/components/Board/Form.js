import React, { useRef } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useInputState from './useInputState';
import style from './Form.module.css';

const Form = ({ saveComment, getComment }) => {
  const { name, comment, reset, onChangeName, onChangeComment } = useInputState('');
  {/* todo : const textRef = useRef(null); */}

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        /* post comments */
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({guest: name, content: comment})
        };
        await fetch('http://localhost:8000/feedbacks/', requestOptions)
          .then(res=>res.json())
          .then(data=>console.log(data));

        // 로딩 중임을 알리는 불투명 화면 같은 것이 필요함

        { /*saveComment({name: name, comment: comment}); */ }

        getComment();
        
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
