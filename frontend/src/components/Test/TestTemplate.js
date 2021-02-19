import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import ChatTemplate from './Chat/ChatTemplate';
import ResultTemplate from './Result/ResultTemplate';
import StatTemplate from './Statistics/StatTemplate';
import Modal from '../_Basic/Modal';
import ScrollModal from '../_Basic/ScrollModal';
import SideBar from '../_Basic/SideBar';
import ProgressBar from '../_Basic/ProgressBar';
import Button from '../_Basic/Button';
import DelayedRender from './DelayedRender';

const TestTemplate = ({ isOpened, close }) => {
  const [numbers, setNumbers] = useState([1]);
  const [selected, setSelected] = useState([]);
  const [nowSelected, setNowSelected] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState();
  const [resultLoaded, setResultLoaded] = useState(false);
  const [openStat, setOpenStat] = useState(false);
 
  useEffect(async () => {
    /* GET questions */
    let res = await fetch('http://localhost:8000/questions/');
    await res.json().then((data) => {
      setQuestions(data);
      console.log("Questions: "+questions);
    })
  }, [])

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

  useEffect(() => {
    if (numbers.length === 30) {    
      console.log("POST answer_list");
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
  }, [numbers]);

  const getSelected = useCallback((selectedIndex) => {
    setNowSelected([...nowSelected, selectedIndex]);
    setTimeout(() => setSelected([...selected, selectedIndex]), 1000);
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
  });

  const handleLoad = () => {
    setLoaded(!loaded);
  }

  const viewResult = (e) => {
    setResultLoaded(true);
  }

  const viewStat = (e) => {
    setOpenStat(true);
  }

  return (
    <>
    { isOpened ? (
      <div>
        { numbers.length < 30 ? (
        <Modal>
          <SideBar close={close}/>
            <ContentWrapper>
              <ChatTemplate numbers={numbers} nowSelected={nowSelected} loaded={loaded} questions={questions} getSelected={getSelected} handleLoad={handleLoad}/>
            </ContentWrapper>
        </Modal>
        ) : (
        <ScrollModal>
          <SideBar close={close}/>
            <ContentWrapper>
            { !resultLoaded ? (
              <ProgressBarWrapper disappear={!resultLoaded}>
                <ProgressBar/>
                <DelayedRender delay={3000}>
                  <Button onClick={viewResult} size="medium">
                    📌 결과보기
                  </Button>
                </DelayedRender>
              </ProgressBarWrapper>
            ) : (
              !openStat ? (
                <ResultTemplate title={result.title} image={result.image} explain={result.explain} viewStat={viewStat}/>
              ) : (
                <StatTemplate/>
              )
            )}
            </ContentWrapper>
        </ScrollModal>
        )}
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
  // overflow: scroll;
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
