import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import SelectContainer from './SelectContainer';
import Messages from './Messages';
import SideBar from '../_Basic/SideBar';
import ProgressBar from '../_Basic/ProgressBar';
import ResultTemplate from '../Result/ResultTemplate'
import DelayedRender from './DelayedRender';

const ChatTemplate = ({ isOpened, close }) => {
  const [numbers, setNumbers] = useState([1]);
  const [selected, setSelected] = useState([]);
  const [nowSelected, setNowSelected] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [isResultModalOpened, setIsResultModalOpened] = useState(false);
  const [questions, setQuestions] = useState([]);

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    }
    else {
      setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
    }
    console.log(selected);
  }, [selected])

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => setLoaded(true), 1000);
    }
  }, [loaded]);

  useEffect(async () => {
    let res = await fetch('http://localhost:8000/questions/');
    await res.json().then((data) => {
      setQuestions(data);
      console.log(questions);
    })
  }, [])

  const getSelected = useCallback((selectedIndex) => {
    setNowSelected([...nowSelected, selectedIndex]);
    setTimeout(() => setSelected([...selected, selectedIndex]), 1000);
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
  });

  const handleLoad = () => {
    setLoaded(!loaded);
  }

  const closeResultModal = () => {
    setIsResultModalOpened(false);
  }

  return (
    <>
    { isOpened ? (
      <div>
        <ChatModal>
          <SideBar close={close}/>
          { numbers.length < 26 ? (
          <ContentWrapper>
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
          </ContentWrapper>
          ) : (
          <ContentWrapper>
            <ProgressBarWrapper disappear={!loaded}>
              <ProgressBar/>
            </ProgressBarWrapper>
            <DelayedRender delay={1000}>
              <ResultTemplate isOpened={true} close={closeResultModal}></ResultTemplate>
            </DelayedRender>
          </ContentWrapper>
          )}
        </ChatModal>
      </div>
    ) : null}
  </>
  );
}

export default ChatTemplate;

const Background = styled.div`
  position: relative;
`;

const ChatModal = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: white;
  position: absolute;
  top: 50%;
  left 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MBoxWrapper = styled.div`
  width: 100%;
  height: 75%;
  margin: 0 auto;
`;

const ProgressBarWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  ${props =>
  props.disappear &&
  css`
    display: block;
  `}
`;
