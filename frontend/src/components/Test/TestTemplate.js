import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../_Basic/Modal';
import SelectContainer from './SelectContainer';
import Messages from './Messages';
import SideBar from '../_Basic/SideBar';
import ProgressBar from '../_Basic/ProgressBar';
import DelayedRender from './DelayedRender';

import noonsongImage from '../../Images/bbosong.jpg';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '@material-ui/core/Button';
import KakaoShareButton from './KakaoShareButton';

const TestTemplate = ({ isOpened, close, reopen }) => {
  const [numbers, setNumbers] = useState([1]);
  const [selected, setSelected] = useState([]);
  const [nowSelected, setNowSelected] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [questions, setQuestions] = useState([]);
  //const [noonsongType, setNoonsongType] = useState("");
  //const [noonsongImage, setNoonsongImage] = useState("");
  //const [noonsongDescription, setNoonsongDescription] = useState("");
  //const [resultLoaded, setResultLoaded] = useState(false);
 
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

  const getSelected = useCallback((selectedIndex) => {
    setNowSelected([...nowSelected, selectedIndex]);
    setTimeout(() => setSelected([...selected, selectedIndex]), 1000);
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
  });

  const handleLoad = () => {
    setLoaded(!loaded);
  }

  const getConsole = () => {
    console.log(numbers);
    console.log(selected);
    console.log(nowSelected);
    console.log(loaded);
    console.log(questions);
  }

  const replayHandler = (e) => {
    e.preventDefault(e);
    close();
    setTimeout(() => getConsole(), 5000);
    window.location.reload();
  }

  if (numbers.length === 30) {    
    console.log("JSON: "+JSON.stringify(nowSelected.toString()));
    (async () => {
      const requestOptions = await fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({answer_list: nowSelected.toString(), ip: null, result_id: null})
      });
      const content = await requestOptions.json();
      console.log(content);
    })();

    (async () => {
      let res = await fetch('http://localhost:8000/users/');
      await res.json().then((data) => {
        console.log("RESULT: "+data);
        // setNoonsongType(data.title);
        // setNoonsongImage(data.image);
        // setNoonsongDescription(data.explain);
        // setResultLoaded(true);
      });
    })();
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
            { !loaded ? //resultLoaded
              <ProgressBarWrapper disappear={!loaded}>
                <ProgressBar/>
              </ProgressBarWrapper>
              :
              <ResultWrapper>
                <NoonsongType>뽀송뽀송 함박눈송이{/*noonsongType*/}</NoonsongType>
                <NoonsongImage><img src={noonsongImage} alt="loading..." style={{width: "20rem"}} /></NoonsongImage>
                <NoonsongDescription>
                  {/*noonsongDescription*/}
                  주변 사람들을 편안하게 해주는 능력을 갖고 있는, 누구에게나 사랑받는 눈송이에요!<br/>
                  뽀송뽀송한 함박눈송이들 사이에 있으면 제 마음도 뽀송뽀송해지는 기분이랄까요?<br/>
                </NoonsongDescription>
                <ButtonsWrapper>
                  <Replay>
                    <Button 
                      onClick={replayHandler}
                      variant="text"
                      startIcon={<ReplayIcon fontSize="large"/>} >
                      다시하기
                    </Button>
                  </Replay>
                  <KakaoLink>
                    <KakaoShareButton />
                  </KakaoLink>
                </ButtonsWrapper>                
              </ResultWrapper>
              }
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
    display: block;
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