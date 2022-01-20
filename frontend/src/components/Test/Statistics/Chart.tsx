import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

const options = {
  layout: {
    padding: {
      bottom: 5,
    }
  },
  legend: {
    display: true,
    position: "bottom",
    align: "start",
    fullWidth: true,
    labels: {
      padding: 12,
      fontSize: 12,
      usePointStyle: true,
    }
  },
  maintainAspectRatio: false
}

const Chart = ({ info }) => {
  let dataArr = [info.noonsong1_ratio, info.noonsong2_ratio, info.noonsong3_ratio, info.noonsong4_ratio,
    info.noonsong5_ratio, info.noonsong6_ratio, info.noonsong7_ratio, info.noonsong8_ratio]
  let rankColor = ["#a363d9","#ee657a","#db3838","#f6621f","#f9a228","#fecc2f","#b2c225","#33beb8"]
  
  const data = {
    labels: [info.noonsong1_name, info.noonsong2_name, info.noonsong3_name, info.noonsong4_name,
    info.noonsong5_name, info.noonsong6_name, info.noonsong7_name, info.noonsong8_name],
    datasets: [
      {
        data: dataArr, 
        backgroundColor: rankColor,
        borderColor: rankColor,
        borderWidth: 1,
        hoverBackgroundColor: rankColor,
        hoverBorderColor: rankColor
      }
    ]
  };

  return (
    <Wrapper>
      <Title>
        차트
      </Title>
      <ChartContainer>
        <Doughnut
          data={data}
          options={options}
        />
      </ChartContainer>
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
`;

const Title = styled.div`
  width: auto;
  height: auto;
  padding-bottom: 1.2rem;
  font-weight: bold;
  font-size: 2rem;

  /* Mobile */
  @media only screen and (max-width: 767px) and (max-height: 700px) {
    font-size: 1.6rem;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 20rem;
`;
