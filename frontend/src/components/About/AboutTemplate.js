import React from 'react';
import styled from 'styled-components';
import SideBar from '../_Basic/SideBar';

function AboutTemplate({ isOpened, close }) {
    const ResultModal = styled.div`
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

    const ContentWrapper = styled.div`
        width: 100%;
        height: 100%;
        padding: 2rem;
    `;

    return (
        <>
            { isOpened ? (
                <div>
                <ResultModal>
                    <SideBar close={close}/>
                    <ContentWrapper>
                        ChatTamplate test
                    </ContentWrapper>
                </ResultModal>
                </div>
            ) : null}
        </>
    );
}

export default AboutTemplate;
