import { useState } from 'react';

export default (initialValue: string) => {
  const [name, setName] = useState(initialValue);
  const [comment, setComment] = useState(initialValue);

  return {
    name,
    comment,
    onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.currentTarget.value);
    },
    onChangeComment: (event: React.ChangeEvent<HTMLInputElement>) => {
      setComment(event.currentTarget.value);
    },
    reset: () => { setName(''); setComment(''); }
  };
};