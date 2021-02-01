import React from 'react';
import styled from 'styled-components';
import SelectContainer from './components/Chat/SelectContainer';
import Select from './components/Chat/Select';
import SpeechBubble from './components/Chat/SpeechBubble';
import SpeechBubbleContainer from './components/Chat/SpeechBubbleContainer';
import ProgressBar from './components/_Basic/ProgressBar';

const pointColors = ['#4379B7', '#0D2D84']; // 연한 파랑, 코발트 블루

const AppBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <AppBlock>
      <SpeechBubbleContainer>
        <SpeechBubble role="question">말풍선입니다!</SpeechBubble>
        <SpeechBubble role="answer">말풍선입니다!</SpeechBubble>
        <SpeechBubble role="question">말풍선입니다!</SpeechBubble>
        <SpeechBubble role="answer">말풍선입니다!</SpeechBubble>
      </SpeechBubbleContainer>
      <br></br>
      <SelectContainer>
        <Select>첫 번째 선택지 엄청 길어지는 경우 </Select>
        <Select>두 번째 선택지가 이렇게 밀린다!</Select>
      </SelectContainer>
      <AppBlock>
        <ProgressBar></ProgressBar>
      </AppBlock>
    </AppBlock>
  );
}

export default App;
