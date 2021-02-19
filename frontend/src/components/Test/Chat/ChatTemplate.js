import React from 'react';
import styled from 'styled-components';
import SelectContainer from './SelectContainer';
import Messages from './Messages';
import DelayedRender from '../DelayedRender';

const ChatTemplate = ({ numbers, nowSelected, loaded, questions, getSelected, handleLoad }) => {
  return (
    <>
      <Messages numbers={numbers} contents={questions} selected={nowSelected} loaded={loaded}/>
      <DelayedRender delay={1000}>
        <SelectContainer 
          index={Math.ceil(numbers.length / 2)} 
          getSelected={getSelected}
          handleLoad={handleLoad}
          contents={questions}>
        </SelectContainer>
      </DelayedRender>
    </>
  )
}

export default ChatTemplate;
