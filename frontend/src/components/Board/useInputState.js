import { useState } from 'react';

export default (initialValue) => {
  const [name, setName] = useState(initialValue);
  const [comment, setComment] = useState(initialValue);

  return {
    name,
    comment,
    onChangeName: (event) => {
      setName(event.target.value);
    },
    onChangeComment: (event) => {
      setComment(event.target.value);
    },
    reset: () => { setName(''); setComment(''); }
  };
};