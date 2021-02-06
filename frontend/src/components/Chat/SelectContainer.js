import React, { useEffect } from 'react';
import styled from 'styled-components';
import Select from './Select';

const SelectContainer = ({index, getSelected, handleLoad, contents}) => {
  const onClickSelect = (selectedIndex) => (e) => {
    getSelected(selectedIndex);
    handleLoad();
  }

  return (
    <div>
      <StyledSelectContainer>
        <Select onClick={onClickSelect(1)}>{contents[index - 1].answers[0].answer}</Select>
        <Select onClick={onClickSelect(2)}>{contents[index - 1].answers[1].answer}</Select>
      </StyledSelectContainer>
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
