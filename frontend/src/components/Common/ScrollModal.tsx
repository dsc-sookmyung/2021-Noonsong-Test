import React from 'react';
import styled from 'styled-components';


interface StyledProps {
  children?: any;
}

const StyledScrollModal = styled.div`
  width: 40rem;
  min-height: 40rem;
  height: auto;
  background-color: white;
  position: absolute;
  top: 50%;
  left 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  overflow: scroll;
  z-index: 99;

  @media only screen and (max-width: 638px) {
      width: 100vw;
      height: 100vh;
  }
`;

function ScrollModal({children, ...rest}: StyledProps) {
  return <StyledScrollModal {...rest}>{children}</StyledScrollModal>;
}

export default ScrollModal;
