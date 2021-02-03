import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import SelectContainer from './SelectContainer';
import Question from './Question';
import Answer from './Answer';
import SpeechBubbleContainer from './SpeechBubbleContainer';

const AlwaysScrollToBottom = () => {
    const scrollRef = useRef();
    useEffect(() => scrollRef.current.scrollIntoView());
    return <div ref={scrollRef} />;
};

function ChatTemplate({ isOpened, close }) {
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

    const [question, setQuestion] = useState(false);
    const [select, setSelect] = useState(false);
    const [answer, setAnswer] = useState(false);
    const [numbers, setNumbers] = useState([1]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        setQuestion(true);
        setAnswer(false);
    }, [])
    
    useEffect(() => {
        setSelect(true);
    }, [question])
    
    useEffect(() => {
        setAnswer(true);
        setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
        setQuestion(false);
        setSelect(false);
    }, [select])
    
    const getSelected = useCallback((selectedIndex) => {
        setSelected([...selected, selectedIndex])
    });
    
    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        }
        else {
            setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
        }
    }, [selected]);

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
                            <SpeechBubbleContainer>
                                {numbers.map((v) => 
                                    <>
                                    <Question 
                                        key={`${v}question`} 
                                        index={v}>
                                    </Question>
                                    <Answer 
                                        key={`${v}answer`} 
                                        index={v}>
                                    </Answer> 
                                    <AlwaysScrollToBottom />
                                    </>
                                )}
                            </SpeechBubbleContainer>
                            <SelectContainer 
                                index={numbers.length - 1} 
                                getSelected={getSelected}>   
                            </SelectContainer>
                        </ContentWrapper>
                    </ChatModal>
                    </div>
            ) : null}
        </>
    );
}

export default ChatTemplate;
