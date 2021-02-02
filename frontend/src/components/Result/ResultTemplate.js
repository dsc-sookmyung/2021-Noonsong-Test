import React from 'react';
import styled from 'styled-components';

function ResultTemplate({ isOpened, close }) {
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

    return (
        <>
            { isOpened ? (
                <div>
                <ResultModal>
                    ResultTamplate test
                    <CloseButton type="button" onClick={close}>✕</CloseButton>
                </ResultModal>
                </div>
            ) : null}
        </>
    );
}

export default ResultTemplate;