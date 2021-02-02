import React, { useState, useEffect, useCallback, useRef } from 'react';
import SelectContainer from './SelectContainer';
import Question from './Question';
import Answer from './Answer';
import SpeechBubbleContainer from './SpeechBubbleContainer';

const AlwaysScrollToBottom = () => {
  const scrollRef = useRef();
  useEffect(() => scrollRef.current.scrollIntoView());
  return <div ref={scrollRef} />;
};

const ChatTemplate = () => {
  const [question, setQuestion] = useState(false);
  const [select, setSelect] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [numbers, setNumbers] = useState([1]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setQuestion(true);
    setAnswer(false);
  }, [])

  useEffect(() => {
    setSelect(true);
  }, [question])

  useEffect(() => {
    setAnswer(true);
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
    setQuestion(false);
    setSelect(false);
  }, [select])

  const getSelected = useCallback((selectedIndex) => {
    setSelected([...selected, selectedIndex])
  });

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    }
    else {
      setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
    }
  }, [selected])

  return (
    <>
    <SpeechBubbleContainer>
      {numbers.map((v) => 
        <>
          <Question 
            key={`${v}question`} 
            index={v}>
          </Question>
          <Answer 
            key={`${v}answer`} 
            index={v}>
          </Answer> 
          <AlwaysScrollToBottom />
        </>
      )}
    </SpeechBubbleContainer>
    <SelectContainer 
      index={numbers.length - 1} 
      getSelected={getSelected}>   
    </SelectContainer>
  </>
  )
}

export default ChatTemplate;

