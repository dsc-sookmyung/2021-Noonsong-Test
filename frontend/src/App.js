import React from 'react';
import styled from 'styled-components';
import SelectContainer from './components/Chat/SelectContainer';
import Select from './components/Chat/Select';


// 
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <AppBlock>
      <SelectContainer>
        <Select>첫 번째 선택지 엄청 길어지는 경우 </Select>
        <Select>두 번째 선택지가 이렇게 밀린다!</Select>
      </SelectContainer>
    </AppBlock>
  );
}

export default App;