import React from 'react';
import styled from 'styled-components';
import MostPopular from './MostPopular';
import Chart from './Chart';

const StatTemplate = () => {
  return (
    <StatWrapper>
      <MostPopular/>
      <Chart/>
    </StatWrapper>
  )
}

export default StatTemplate;

const StatWrapper = styled.div`
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
