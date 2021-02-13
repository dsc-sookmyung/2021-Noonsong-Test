import React from 'react';
import styled from 'styled-components';
import Select from './Select';

const SelectContainer = ({index, getSelected, handleLoad, contents}) => {
  const onClickSelect = (selectedIndex) => (e) => {
    getSelected(selectedIndex);
    handleLoad();
    // if (index === 16) {    }
    (async () => {
      const requestOptions = await fetch('http://localhost:8000/responses/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({selectedIndex})
      });
      const content = await requestOptions.json();

      console.log(content);
    })();

    /*
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({selectedIndex: selectedIndex})
      };
      fetch('http://localhost:8000/rgit esponses/', requestOptions)
        .then(res=>res.json())
        .then(data=>console.log(data));
    */
  }

  // const studentIdIndex = [1, 2, 3, 4, 5, 6, 7, 8];
  // const collegeIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  
  return (
    <div>
      {index === 1 ? (
        <StyledSelectContainer>
          <Select onClick={onClickSelect(1)}>{contents[index-1].answers[0].answer}</Select>
        </StyledSelectContainer>
      ) : (
        index === 2 ? (
          <StyledSelectContainer>
            {/*
            {studentIdIndex.map((v) => {
              return (
                <Select key={`studentId ${v}`} onclick={onClickSelect(v)}>{contents[index-1].answers[v-1].answer}</Select>
              )
              })}
            */}
            <Select onClick={onClickSelect(1)}>{contents[index - 1].answers[0].answer}</Select>
            <Select onClick={onClickSelect(2)}>{contents[index - 1].answers[1].answer}</Select>
            <Select onClick={onClickSelect(3)}>{contents[index - 1].answers[2].answer}</Select>
            <Select onClick={onClickSelect(4)}>{contents[index - 1].answers[3].answer}</Select>
            <Select onClick={onClickSelect(5)}>{contents[index - 1].answers[4].answer}</Select>
            <Select onClick={onClickSelect(6)}>{contents[index - 1].answers[5].answer}</Select>
            <Select onClick={onClickSelect(7)}>{contents[index - 1].answers[6].answer}</Select>
            <Select onClick={onClickSelect(8)}>{contents[index - 1].answers[7].answer}</Select>
        
          </StyledSelectContainer>
        ) : (
          index === 3 ? (
            <StyledSelectContainer>
              {/*
              {collegeIndex.map((v) => {
              return (
                <Select key={`college ${v}`} onclick={onClickSelect(v)}>{contents[index-1].answers[v-1].answer}</Select>
              )
              })}
              */}
              <Select onClick={onClickSelect(1)}>{contents[index - 1].answers[0].answer}</Select>
              <Select onClick={onClickSelect(2)}>{contents[index - 1].answers[1].answer}</Select>
              <Select onClick={onClickSelect(3)}>{contents[index - 1].answers[2].answer}</Select>
              <Select onClick={onClickSelect(4)}>{contents[index - 1].answers[3].answer}</Select>
              <Select onClick={onClickSelect(5)}>{contents[index - 1].answers[4].answer}</Select>
              <Select onClick={onClickSelect(6)}>{contents[index - 1].answers[5].answer}</Select>
              <Select onClick={onClickSelect(7)}>{contents[index - 1].answers[6].answer}</Select>
              <Select onClick={onClickSelect(8)}>{contents[index - 1].answers[7].answer}</Select>
              <Select onClick={onClickSelect(9)}>{contents[index - 1].answers[8].answer}</Select>
              <Select onClick={onClickSelect(10)}>{contents[index - 1].answers[9].answer}</Select>
              <Select onClick={onClickSelect(11)}>{contents[index - 1].answers[10].answer}</Select>
              <Select onClick={onClickSelect(12)}>{contents[index - 1].answers[11].answer}</Select>
              <Select onClick={onClickSelect(13)}>{contents[index - 1].answers[12].answer}</Select>
              <Select onClick={onClickSelect(14)}>{contents[index - 1].answers[13].answer}</Select>
            </StyledSelectContainer>
          ) : (
            index === 16 ? (
              <StyledSelectContainer>
                <Select onClick={onClickSelect(1)}>{contents[index - 1].answers[0].answer}</Select>
                <Select onClick={onClickSelect(2)}>{contents[index - 1].answers[1].answer}</Select>
                <Select onClick={onClickSelect(3)}>{contents[index - 1].answers[2].answer}</Select>
                <Select onClick={onClickSelect(4)}>{contents[index - 1].answers[3].answer}</Select>
              </StyledSelectContainer>
            ) : (
              <StyledSelectContainer>
                <Select onClick={onClickSelect(1)}>{contents[index - 1].answers[0].answer}</Select>
                <Select onClick={onClickSelect(2)}>{contents[index - 1].answers[1].answer}</Select>
              </StyledSelectContainer>
            )  
          )
        )
        
      )}
    </div>
  )
}

const StyledSelectContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  /* flexbox 스타일 */
  display: flex;
  flex-direction: row;
  margin-right: auto;
  justify-content: flex-start;
  overflow: auto;
  /* scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 8px;
    background: #f1f3f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dee2e6;
    border-radius: 6px;
  }
`;

export default SelectContainer;
