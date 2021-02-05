import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import SelectContainer from './SelectContainer';
import Messages from './Messages';
import SideBar from '../_Basic/SideBar';
import ProgressBar from '../_Basic/ProgressBar';
import ResultTemplate from '../Result/ResultTemplate'
import DelayedRender from './DelayedRender';

const ChatTemplate = ({ isOpened, close }) => {
  const [numbers, setNumbers] = useState([1]);
  const [selected, setSelected] = useState([]);
  const [loaded, setLoaded] = useState(true);

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

  const getSelected = useCallback((selectedIndex) => {
    setSelected([...selected, selectedIndex])
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
  });

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => setLoaded(true), 1000);
    }
  }, [loaded]);

  const handleLoad = () => {
    setLoaded(!loaded);
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
              <Messages numbers={numbers} loaded={loaded}/>
            </MBoxWrapper>
            <SelectContainer 
              index={Math.ceil(numbers.length / 2)} 
              getSelected={getSelected}
              handleLoad={handleLoad}>
            </SelectContainer>
          </ContentWrapper>
          ) : (
          <ContentWrapper>
            <ProgressBar/>
            <DelayedRender delay={1500}>
              <ResultTemplate></ResultTemplate>
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
  width: 90%;
  height: 75%;
  margin: 0 auto;
  padding: 1rem;
`;
