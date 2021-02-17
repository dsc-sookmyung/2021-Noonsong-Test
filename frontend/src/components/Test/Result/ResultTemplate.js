import React from 'react';
import styled from 'styled-components';
import Button from '../../_Basic/Button';
import KakaoShareButton from './KakaoShareButton';

const ResultTemplate = ({ title, image, explain, viewStat }) => {
  return (
    <ResultWrapper>
      <NoonsongType>{title}</NoonsongType>
      <NoonsongImage><img src={image} alt="loading..." style={{width: "20rem"}} /></NoonsongImage>
      <NoonsongDescription>
        {explain}
      </NoonsongDescription>
      <ButtonsWrapper>
        <StatButton>
          <Button onClick={viewStat}>
            📊 통계보기
          </Button>
        </StatButton>
        <KakaoLink>
          <KakaoShareButton />
        </KakaoLink>
      </ButtonsWrapper>                
    </ResultWrapper>
  )
}

export default ResultTemplate;

const ResultWrapper = styled.div`
    width: calc(100% - 4rem);
    min-height: calc(100% - 3rem);
    height: auto;  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto;
    padding: 2rem;
    font-family: "Carmen Sans";
    overflow-y: scroll;

    /* scrollbar */
    ::-webkit-scrollbar {
      width: 16px;
    }
    ::-webkit-scrollbar-thumb {
        height: 6px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        -webkit-border-radius: 7px;
        background-color: #f1f3f5; // background: #dee2e6;
        -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    }
`;

const NoonsongType = styled.div`
    width: 80%;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
`;

const NoonsongImage = styled.div`
    margin-bottom: 0.4rem;
`;

const NoonsongDescription = styled.div`
    width: 80%;
    font-size: 1rem;
    text-align: center;
    word-break: keep-all;
    margin-bottom: 1rem;
`;

const StatButton = styled.div`
    padding-right: 0.5rem;
`;

const KakaoLink = styled.div`
    padding-left: 0.5rem;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
