import React from 'react';
import styled from 'styled-components';
import GuestBook from './GuestBook';
import Modal from '../_Basic/Modal';
import SideBar from '../_Basic/SideBar';

const BoardTemplate = ({ isOpened, close }) => {
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
  width: calc(l00% - 0rem);
  min-height: calc(100% - 3rem);
  height: auto;
  display: flex;
  flex-direction: column;
`;
