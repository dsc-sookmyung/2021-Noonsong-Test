import React from 'react';
import styled from 'styled-components';


interface StyledProps {
  children?: any;
}

const StyledModal = styled.div`
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
  z-index: 99;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
  }
`;

function Modal({children, ...rest}: StyledProps) {
  return <StyledModal {...rest}>{children}</StyledModal>;
}

export default Modal;
