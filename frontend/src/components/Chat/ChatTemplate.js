import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import SelectContainer from './SelectContainer';
import Messages from './Messages';

const ChatTemplate = ({ isOpened, close }) => {
  const [numbers, setNumbers] = useState([1]);
  const [selected, setSelected] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    }
    else {
      setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
    }
  }, [selected])

  const getSelected = useCallback((selectedIndex) => {
    setSelected([...selected, selectedIndex])
    console.log(selected);
  });

  const handleSelectClick = () => {
    setIsSelected(!isSelected);
  }

  return (
    <>
    { isOpened ? (
      <div>
          <ChatModal>
              <SideBar>
                  <SideBarButton type="button" color={"rgb(237, 105, 94)"} onClick={close}></SideBarButton>
                  <SideBarButton type="button" color={"rgb(244, 190, 79)"}></SideBarButton>
                  <SideBarButton type="button" color={"rgb(98, 194, 84)"}></SideBarButton>
              </SideBar> 
              <ContentWrapper>
                <MBoxWrapper>
                  <Messages numbers={numbers} />
                </MBoxWrapper>
                <SelectContainer 
                  index={Math.ceil(numbers.length / 2)} 
                  getSelected={getSelected}
                  handleSelectClick={handleSelectClick}>
                </SelectContainer>
              </ContentWrapper>
          </ChatModal>
        </div>
    ) : null}
  </>
  );
}

export default ChatTemplate;

const Background = styled.div`
  position: relative;
`;

const ChatModal = styled.div`
  width: 40rem;
  height: 54rem;
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
 
const MBoxWrapper = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  border: 1px solid black;
  padding: 1rem;
`;
