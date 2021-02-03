import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import SelectContainer from './SelectContainer';
import Messages from './Messages';

const ChatTemplate = () => {
  const [numbers, setNumbers] = useState([1]);
  const [selected, setSelected] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [questions, setQuestions] = useState([]);

  const mounted = useRef(false);
  useEffect((prevSelected) => {
    if (!mounted.current) {
      mounted.current = true;
    }
    else {
      function handleStatusChange(status) {
        questions: questions.concat({
          index: numbers.length
        })
      }
      setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
    }
  }, [selected])

  const getSelected = useCallback((selectedIndex) => {
    setSelected([...selected, selectedIndex])
    console.log(selected);
  });

  const handleSelectClick = () => {
    setIsSelected(!isSelected);
  }

  return (
    <>
    {/*
    <SpeechBubbleContainer>
      {numbers.map((v) => 
        <>
          <Question 
            key={`question${v}`} 
            index={v}>
          </Question>
          <Answer
            key={`answer${v}`} 
            index={v}>
          </Answer>
        </>
      )}     
    </SpeechBubbleContainer>
    */}
    <MBoxWrapper>
      <Messages numbers={numbers} />
    </MBoxWrapper>
    <SelectContainer 
      index={Math.ceil(numbers.length / 2)} 
      getSelected={getSelected}
      handleSelectClick={handleSelectClick}>
    </SelectContainer>
  </>
  )
}

const MBoxWrapper = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  border: 1px solid black;
  padding: 1rem;
`;

export default ChatTemplate;
