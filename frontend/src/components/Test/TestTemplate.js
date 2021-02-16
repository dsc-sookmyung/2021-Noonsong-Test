import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../_Basic/Modal';
import SelectContainer from './SelectContainer';
import Messages from './Messages';
import SideBar from '../_Basic/SideBar';
import ProgressBar from '../_Basic/ProgressBar';
import DelayedRender from './DelayedRender';

import Button from '../_Basic/Button';
import KakaoShareButton from './KakaoShareButton';

const TestTemplate = ({ isOpened, close, reopen }) => {
  const [numbers, setNumbers] = useState([1]);
  const [selected, setSelected] = useState([]);
  const [nowSelected, setNowSelected] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState();
  const [resultLoaded, setResultLoaded] = useState(false);
 
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    }
    else {
      setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
    }
  }, [selected])

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => setLoaded(true), 1000);
    }
  }, [loaded]);

  useEffect(async () => {
    /* GET questions */
    let res = await fetch('http://localhost:8000/questions/');
    await res.json().then((data) => {
      setQuestions(data);
      console.log("Questions: "+questions);
    })
  }, [])

  if (numbers.length === 30) {    
    (async () => {
      const requestOptions = await fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({answer_list: nowSelected.toString(), ip: null, result_id: null})
      });
      await requestOptions.json().then((data) => {
          setResult(data);
          //alert("RESPONSE: "+data+" RESULT: "+result);
        })
    })();
  }

  const getSelected = useCallback((selectedIndex) => {
    setNowSelected([...nowSelected, selectedIndex]);
    setTimeout(() => setSelected([...selected, selectedIndex]), 1000);
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
  });

  const handleLoad = () => {
    setLoaded(!loaded);
  }

  const replayHandler = (e) => {
    e.preventDefault(e);
    close();
    window.location.reload();
  }

  const viewResult = (e) => {
    setResultLoaded(true);
  }

  return (
    <>
    { isOpened ? (
      <div>
        <Modal>
          <SideBar close={close}/>
          { numbers.length < 30 ? (
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
            {!resultLoaded ? (
              <ProgressBarWrapper disappear={!resultLoaded}>
                <ProgressBar/>
                <DelayedRender delay={3000}>
                  <Button
                    onClick={viewResult}
                    size="medium"
                    >
                    📌 결과보기
                  </Button>
                </DelayedRender>
              </ProgressBarWrapper>
            ) : (
              <ResultWrapper>
                <NoonsongType>{result.title}</NoonsongType>
                <NoonsongImage><img src={result.image} alt="loading..." style={{width: "20rem"}} /></NoonsongImage>
                <NoonsongDescription>
                  {result.explain}
                </NoonsongDescription>
                <ButtonsWrapper>
                  <Replay>
                    <Button 
                      onClick={replayHandler} >
                      {/*
                      variant="text"
                      startIcon={<ReplayIcon fontSize="large"/>} */}
                      📊 통계보기
                    </Button>
                  </Replay>
                  <KakaoLink>
                    <KakaoShareButton />
                  </KakaoLink>
                </ButtonsWrapper>                
              </ResultWrapper>
              )}
              </ContentWrapper>
          )}
        </Modal>
      </div>
    ) : null}
  </>
  );
}

export default TestTemplate;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: calc(100% - 3rem);
  height: auto;
  display: flex;
  flex-direction: column;
  font-family: "Carmen Sans";
`;

const MBoxWrapper = styled.div`
  width: 100%;
  height: 80%;
  margin: 0 auto;
`;

const ProgressBarWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  ${props =>
  props.disappear &&
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

const NoonsongType = styled.div`
    width: 80%;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
`;

const NoonsongImage = styled.div`
    margin-bottom: 0.4rem;
`;

const NoonsongDescription = styled.div`
    width: 80%;
    font-size: 1rem;
    text-align: center;
    word-break: keep-all;
    margin-bottom: 1rem;
`;

const Replay = styled.div`
    padding-right: 0.5rem;
`;

const KakaoLink = styled.div`
    padding-left: 0.5rem;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ResultWrapper = styled.div`
    width: calc(100% - 4rem);
    min-height: calc(100% - 3rem);
    height: auto;  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto;
    padding: 2rem;
    font-family: "Carmen Sans";
    overflow-y: scroll;

    /* scrollbar */
    ::-webkit-scrollbar {
      width: 16px;
    }
    ::-webkit-scrollbar-thumb {
        height: 6px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        -webkit-border-radius: 7px;
        background-color: #f1f3f5; // background: #dee2e6;
        -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    }
`;