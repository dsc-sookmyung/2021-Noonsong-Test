import React from 'react';
import styled from 'styled-components';


const StyledSelect = styled.button`
  /* 공통 스타일 */
  outline: none;
  border-radius: 16px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  white-space: nowrap;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: none;
  border: 1px solid;
  border-color: #4379b7;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  &:hover {
    color: white;
    background: #4379b7;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Select({children, ...rest}) {
  return <StyledSelect {...rest}>{children}</StyledSelect>;
}

export default Select;
