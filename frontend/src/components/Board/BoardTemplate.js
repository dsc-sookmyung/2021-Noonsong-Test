import React from 'react';
import styled from 'styled-components';
import GuestBook from './GuestBook';

const BoardTemplate = ({ isOpened, close }) => {
    return (
    <>
    { isOpened ? (
      <div>
        <BoardModal>
          <SideBar>
            <SideBarButton type="button" color={"rgb(237, 105, 94)"} onClick={close}></SideBarButton>
            <SideBarButton type="button" color={"rgb(244, 190, 79)"}></SideBarButton>
            <SideBarButton type="button" color={"rgb(98, 194, 84)"}></SideBarButton>
          </SideBar> 
          <ContentWrapper>
            <GuestBook></GuestBook>
            </ContentWrapper>
        </BoardModal>
      </div>
    ) : null}
  </>
  );
}

export default BoardTemplate;

const BoardModal = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: white;
  position: absolute;
  top: 50%;
  left 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const SideBar = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #333333;
  border-radius: 1rem 1rem 0 0;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
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
