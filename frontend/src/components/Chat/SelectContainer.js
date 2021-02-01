import React from 'react';
import styled from 'styled-components';


const StyledSelectContainer = styled.div`
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

function SelectContainer({children, ...rest}) {
  return <StyledSelectContainer {...rest}>{children}</StyledSelectContainer>;
}

export default SelectContainer;
