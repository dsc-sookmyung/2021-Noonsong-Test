import React from 'react';
import styled from 'styled-components';
import noonsongGIF from '../../Images/noonsongGIF.gif';

const ProgressBar = () => {
  return (
    <Wrapper>
      <Title>결과 분석중...</Title>
      <img src={noonsongGIF} alt="loading..." />
    </Wrapper>
  )
}

export default ProgressBar;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: 80%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.2rem;
  font-weight: bold;
  font-size: 1.5rem;
  border: 2px solid white;
`;
