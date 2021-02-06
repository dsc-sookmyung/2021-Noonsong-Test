import React, { useState } from 'react';
import styled from 'styled-components';
import noonsongImage from '../../Images/noonsong2.gif';

const ResultTemplate = ({ isOpened, close }) => {
    const [open, setOpen] = useState(isOpened);
    return (
        <>
            { open ? (
                <div>
                <ResultModal>
                    <CloseButton type="button" onClick={() => {open = false}}>✕</CloseButton>
                    <ContentWrapper>
                        <NoonsongType>퀸송이</NoonsongType>
                        <NoonsongImage><img src={noonsongImage} alt="loading..." /></NoonsongImage>
                        <NoonsongDescription>짱 멋진 눈송!</NoonsongDescription>
                    </ContentWrapper>
                </ResultModal>
                </div>
            ) : null}
        </>
    );
}

export default ResultTemplate;

const ResultModal = styled.div`
    width: 40rem;
    height: 40rem;
    background-color: white;
    position: absolute;
    top: 50%;
    left 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const CloseButton= styled.button`
    background-color: transparent;
    font-size: 2rem;
    border: none;
`;

const ContentWrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto;

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

const NoonsongType = styled.div`
    width: 80%;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
`;

const NoonsongImage = styled.div`
    margin-bottom: 2rem;
`;

const NoonsongDescription = styled.div`
    width: 80%;
    font-size: 1rem;
    text-align: center;
`;