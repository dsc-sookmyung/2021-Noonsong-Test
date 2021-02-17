import React from 'react';
import styled from 'styled-components';
import SelectContainer from './SelectContainer';
import Messages from './Messages';
import DelayedRender from '../DelayedRender';

const ChatTemplate = ({ numbers, nowSelected, loaded, questions, getSelected, handleLoad }) => {
  return (
    <>
      <MBoxWrapper>
        <Messages numbers={numbers} contents={questions} selected={nowSelected} loaded={loaded}/>
      </MBoxWrapper>
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

const MBoxWrapper = styled.div`
  width: 100%;
  height: 80%;
  margin: 0 auto;
`;
