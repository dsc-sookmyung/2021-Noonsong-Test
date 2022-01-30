import React from 'react';
import styled from 'styled-components';
import GuestBook from './GuestBook';
import Modal from '../Common/Modal';
import SideBar from '../Common/SideBar';
import type { BoardProps } from './types';


function BoardTemplate({ isOpened, close }: BoardProps) {
    return (
    <>
    { isOpened ? (
      <div>
        <Modal>
          <SideBar close={close}/>
          <ContentWrapper>
            <GuestBook/>
          </ContentWrapper>
        </Modal>
      </div>
    ) : null }
  </>
  );
}

export default BoardTemplate;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: calc(100% - 3rem);
  height: auto;
  display: flex;
  flex-direction: column;
  font-family: "Carmen Sans";
`;
