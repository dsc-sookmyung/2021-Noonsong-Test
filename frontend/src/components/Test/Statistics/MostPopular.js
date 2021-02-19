import React, { useState } from 'react';
import styled from 'styled-components';
import sookmyungSymbol from '../../../Images/sookmyung-symbol.png';

const MostPopular = ({ title, image }) => {
  let imgWidth = "20rem";
  if (image === "x") {
    image = sookmyungSymbol;
    imgWidth = "12rem";
  }
  
  return (
    <Wrapper>
      <Title>가장 많이 나온 송이 유형</Title>
      <NoonsongType>{title}</NoonsongType>
      <NoonsongImage><img src={image} alt="loading..." style={{width: imgWidth}}/></NoonsongImage>
    </Wrapper>
  )
}

export default MostPopular;

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

const NoonsongType = styled.div`
    width: auto;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
`;

const NoonsongImage = styled.div`
    margin-bottom: 0.4rem;
`;
