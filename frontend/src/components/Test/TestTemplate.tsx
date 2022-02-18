import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import ChatTemplate from './Chat/ChatTemplate';
import ResultTemplate from './Result/ResultTemplate';
import StatTemplate from './Statistics/StatTemplate';
import Modal from '../Common/Modal';
import ScrollModal from '../Common/ScrollModal';
import SideBar from '../Common/SideBar';
import ProgressBar from '../Common/ProgressBar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import type { TestProps, Result, Stat } from './types';


function TestTemplate({ isOpened, close }: TestProps) {
  const [numbers, setNumbers] = useState<number[]>([1]);
  const [selected, setSelected] = useState<number[]>([]);
  const [nowSelected, setNowSelected] = useState<number[]>([]);
  const [loaded, setLoaded] = useState<boolean>(true);
  const [completed, setCompleted] = useState<number>(0);
  const [questions, setQuestions] = useState<[]>([]);
  const [result, setResult] = useState<Result>();
  const [resultLoaded, setResultLoaded] = useState<boolean>(false);
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);
  const [stat, setStat] = useState<Stat>();
  const [openStat, setOpenStat] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("전체");
  const classes = useStyles();
 
  useEffect(() => {
    const timer = setInterval(progress, 200);

    (async () => {
      /* GET questions */
      let res = await fetch('http://localhost:8000/questions/');
      await res.json().then((data) => {
        setQuestions(data);
        console.log("Questions: "+questions);
      })
    })();
    
    return () => {
      clearInterval(timer);
    }
  }, []);

  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    }
    else {
      setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
    }
  }, [selected]);

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
            setResultLoaded(true);
            //alert("RESPONSE: "+data+" RESULT: "+result);
          })
      })();
    }  
  }, [numbers]);

  const getSelected = ((selectedIndex: number): void => {
    setNowSelected([...nowSelected, selectedIndex]);
    setTimeout(() => setSelected([...selected, selectedIndex]), 1000);
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
  });

  const handleLoad = () => {
    setLoaded(!loaded);
  }

  const progress = () => {
    setCompleted((prevState) => prevState >= 100 ? 0 : prevState + 1);
  }

  const viewStat = () => {
    setShowBackdrop(true);
    (async () => {
      const requestOptions = await fetch('http://localhost:8000/majorcharts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({s_major: 15, result_id: null})
      });
      await requestOptions.json().then((data) => {
        setStat(data);
        setLabel("전체");
        setShowBackdrop(false);
        setOpenStat(true);
      })
    })();
  }

  const selectHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setShowBackdrop(true);
    setLabel(e.currentTarget.value);
    (async () => {
      const requestOptions = await fetch('http://localhost:8000/majorcharts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({s_major: e.currentTarget.value, result_id: null})
      });
      await requestOptions.json().then((data) => {
        setShowBackdrop(false);
        setStat(data);
      })
    })();
  }

  const viewResult = (e: React.MouseEvent<HTMLElement>): void => {
    setOpenStat(false);
  }

  return (
    <>
    { isOpened ? (
      <div>
        { numbers.length < 30 ? (
        <Modal>
          <SideBar close={close}/>
            <ContentWrapper>
              {questions.length === 0 ?
              <LoadingTest>로딩중입니다...</LoadingTest> :
              <ChatTemplate numbers={numbers} nowSelected={nowSelected} loaded={loaded} questions={questions} getSelected={getSelected} handleLoad={handleLoad}/>
              }
            </ContentWrapper>
        </Modal>
        ) : (
        <ScrollModal>
          <SideBar close={close}/>
            <ContentWrapper>
            { !resultLoaded ? (
              <ProgressBarWrapper disappear={!resultLoaded}>
                <ProgressBar/>
              </ProgressBarWrapper>
            ) : (
              !openStat ? (
                (!showBackdrop && result) ? (
                  <ResultTemplate title={result.title} image={result.image} explain={result.explain} viewStat={viewStat}/>
                ) : (
                  <Backdrop className={classes.backdrop} open={showBackdrop}>
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )  
              ) : (
                (!showBackdrop && stat) ? (
                  <StatTemplate stat={stat} selectHandler={selectHandler} label={label} viewResult={viewResult}/>
                ) : (
                  <Backdrop className={classes.backdrop} open={showBackdrop}>
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )
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

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const ContentWrapper = styled.div`
  width: 100%;
  min-height: calc(100% - 3rem);
  height: auto;
  display: flex;
  flex-direction: column;
  font-family: "Carmen Sans";
  position: relative;
`;

interface styledProps {
  disappear: boolean;
}

const ProgressBarWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  ${(props: styledProps) => props.disappear &&
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

const LoadingTest = styled.div`
  width: 100%;
  height: 37rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
