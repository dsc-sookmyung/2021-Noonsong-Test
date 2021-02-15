import React from 'react';
import styled from 'styled-components';

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

  // Mobile
  @media only screen and (max-width: 767px) {
    width: 100vw;
    position: relative;
  }
`;

function Modal({children, ...rest}) {
  return <StyledModal {...rest}>{children}</StyledModal>;
}

export default Modal;
