import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import MostPopular from './MostPopular';
import Chart from './Chart';

const options = [
  { value: '15', label: '전체', isToggled: true },
  { value: '1', label: '문과대학', isToggled: false },
  { value: '2', label: '이과대학', isToggled: false },
  { value: '3', label: '공과대학', isToggled: false },
  { value: '4', label: '생활과학대학', isToggled: false },
  { value: '5', label: '사회과학대학', isToggled: false },
  { value: '6', label: '법과대학', isToggled: false },
  { value: '7', label: '경상대학', isToggled: false },
  { value: '8', label: '음악대학', isToggled: false },
  { value: '9', label: '약학대학', isToggled: false },
  { value: '10', label: '미술대학', isToggled: false },
  { value: '11', label: '기초교양대학', isToggled: false },
  { value: '12', label: '글로벌서비스학부', isToggled: false },
  { value: '13', label: '영어영문학부', isToggled: false },
  { value: '14', label: '미디어학부', isToggled: false }
]

const StatTemplate = ({ stat, selectHandler, label }) => {
  return (
    <StatWrapper>
      <div style={{width: '12rem'}}>
        <Select 
          onChange={selectHandler}
          defaultValue={options[0]} 
          options={options}
          value={{label: label}} />
      </div>
      <MostPopular 
        title={stat.maxnoonsong_title} 
        image={stat.maxnoonsong_image} />
      <Chart info={stat}/>
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
