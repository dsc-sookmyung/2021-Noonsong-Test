import React from 'react';
import styled from 'styled-components';


interface SideBarProps {
  close: (e: React.MouseEvent<HTMLElement>) => void;
}

function SideBar({ close }: SideBarProps) {
  const StyledSideBar = styled.div`
    width: 100%;
    height: 1rem;
    background-color: #333333;
    border-radius: 1rem 1rem 0 0;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  `;

  const SideBarButton = styled.button`
    background-color: ${props => props.color};
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 1rem;
  `;

    return (
      <StyledSideBar>
        <SideBarButton type="button" color={"rgb(237, 105, 94)"} onClick={close}></SideBarButton>
        <SideBarButton type="button" color={"rgb(244, 190, 79)"}></SideBarButton>
        <SideBarButton type="button" color={"rgb(98, 194, 84)"}></SideBarButton>
      </StyledSideBar> 
    );
}

export default SideBar;