import React from 'react';
import styled from 'styled-components';
import SelectContainer from './components/Chat/SelectContainer';
import Select from './components/Chat/Select';
import SpeechBubble from './components/Chat/SpeechBubble';
import SpeechBubbleContainer from './components/Chat/SpeechBubbleContainer';
import ChatTemplate from './components/Chat/ChatTemplate';
import ProgressBar from './components/_Basic/ProgressBar';

const pointColors = ['#4379B7', '#0D2D84']; // 연한 파랑, 코발트 블루

const AppBlock = styled.div`
  width: 70%;
  height: 300px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <AppBlock>
        <ChatTemplate></ChatTemplate>
      </AppBlock>
      <AppBlock>
        <ProgressBar></ProgressBar>
      </AppBlock>
    </>
  );
}

export default App;
