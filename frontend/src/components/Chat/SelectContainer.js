import React from 'react';
import styled from 'styled-components';
import Select from './Select';

const SelectContainer = ({index, getSelected}) => {
  const onClickSelect = (selectedIndex) => (e) => {
    getSelected(selectedIndex);
  }

  return (
    <StyledSelectContainer>
      <Select onClick={onClickSelect(1)}>select1 {index}</Select>
      <Select onClick={onClickSelect(2)}>select2 {index}</Select>
    </StyledSelectContainer>
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
