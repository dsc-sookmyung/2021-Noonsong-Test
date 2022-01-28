import React, { useEffect, useState } from 'react';
import SelectContainer from './SelectContainer';
import Messages from './Messages';
import type { ChatProps } from '../types';


function ChatTemplate({ numbers, nowSelected, loaded, questions, getSelected, handleLoad }: ChatProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return undefined;

    const timeout = setTimeout(() => 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Messages numbers={numbers} contents={questions} selected={nowSelected} loaded={loaded}/>
      <SelectContainer 
        index={Math.ceil(numbers.length / 2)} 
        getSelected={getSelected}
        handleLoad={handleLoad}
        contents={questions}>
      </SelectContainer>
    </>
  )
}

export default ChatTemplate;
