import React from 'react';
import styled from 'styled-components';

const Chart = () => {
  return (
    <Wrapper>
      <Title>
        차트
      </Title>
    </Wrapper>
  )
}

export default Chart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  //overflow: scroll;
`;

const Title = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.2rem;
  font-weight: bold;
  font-size: 2rem;
`;
