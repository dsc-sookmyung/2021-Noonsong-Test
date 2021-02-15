import React from 'react';
import styled from 'styled-components';
import SideBar from '../_Basic/SideBar';
import Profile from './Profile';
import '../../fonts/font.css';

import suyeon from '../../Images/mori8.jpg';
import suhee from '../../Images/0hee0.jpg';
import eunji from '../../Images/heleneunji.jpg';
import jiyeon from '../../Images/hellouz818.png';

function AboutTemplate({ isOpened, close }) {
    const AboutModal = styled.div`
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
        overflow: scroll;
        z-index: 99;

        @media only screen and (max-width: 638px) {
            width: 100vw;
            height: 100vh;
        }
    `;

    const ContentWrapper = styled.div`
        width: calc(100% - 4.8rem);
        min-height: calc(100% - 4.8rem);
        height: auto;
        padding: 2.4rem;
    `;

    const Title = styled.div`
        width: calc(100% - 4rem);
        margin: 1.2rem 0.4rem;
        font-size: 1.7rem;
        font-family: "Carmen Sans";
        font-weight: 700;
    `;

    const Description = styled.div`
        width: calc(100% - 0.8rem);
        margin: 1.2rem 0.4rem 2.4rem;
        font-size: 0.95rem;
        font-family: "Carmen Sans";
        font-weight: 300;
    `;

    const ProfileWrapper = styled.div`
        width: calc(100% - 4rem);
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 2.64rem 0;

        @media only screen and (max-width: 768px) {
            width: 100%;
            margin: 0;
        }
    `;

    return (
        <>
            { isOpened ? (
                <AboutModal>
                    <SideBar close={close}/>
                    <ContentWrapper>
                        <Title>
                            ❄️ Team Gitribute 
                        </Title>
                        <Description>
                            DSC Sookmyung 소속의 Gitribute(깃트리뷰트) 팀입니다. <br/>
                            성격도 나이도 다 달라 걱정했지만 알고보니 우리들 꽤.. 찰떡궁합이랄까? 🤭 🥰
                        </Description>
                        <ProfileWrapper>
                            <Profile 
                                name={"남수연"}
                                major={"컴퓨터과학전공 19"}
                                image={suyeon}
                                insta={"tsusuyomi"}
                                github={"mori8"} 
                                role={"front-end"}
                            />
                            <Profile
                                name={"서희"}
                                major={"IT공학전공 19"}
                                image={suhee}
                                insta={"suhhee_e"}
                                github={"0hee0"}
                                role={"front-end"}
                            />
                            <Profile 
                                name={"권은지"}
                                major={"IT공학전공 18"}
                                image={eunji}
                                insta={"_eunji_99"}
                                github={"heleneunji"}
                                role={"back-end"} 
                            />
                            <Profile 
                                name={"유지연"}
                                major={"소프트웨어융합전공 18"}
                                image={jiyeon}
                                insta={null}
                                github={"hellouz818"}
                                role={"back-end"}
                            />
                        </ProfileWrapper>
                    </ContentWrapper>
                </AboutModal>
            ) : null}
        </>
    );
}

export default AboutTemplate;
