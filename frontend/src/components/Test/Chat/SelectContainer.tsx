import React from 'react';
import styled from 'styled-components';
import Select from './Select';

const SelectContainer = ({index, getSelected, handleLoad, contents}) => {
  const onClickSelect = (selectedIndex) => (e) => {
    getSelected(selectedIndex);
    handleLoad();
  }

  return (
    <div>
      {index === 1 ? (
        <StyledSelectContainer>
          <Select onClick={onClickSelect(1)}>{contents[index-1].answers[0].answer}</Select>
        </StyledSelectContainer>
      ) : (
        index === 2 ? (
          <StyledSelectContainer>
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
          index === 15 ? (
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
      )}
    </div>
  )
}

const StyledSelectContainer = styled.div`
  width: calc(100% - 2.4rem);
  margin: 0 auto;
  padding: 1.2rem;
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
