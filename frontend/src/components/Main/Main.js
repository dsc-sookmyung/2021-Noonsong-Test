import React, { useState } from 'react';
import style from './Main.module.css';

import ChatTemplate from '../Chat/ChatTemplate';
import AboutTemplate from '../About/AboutTemplate';
import ResultTemplate from '../Result/ResultTemplate';

import testImg from '../../Images/frame-test.png';
import aboutImg from '../../Images/frame-about.png';
import bluePin from '../../Images/blue-pin.png';

function Main(props) {
    const [isTestModalOpened, setIsTestModalOpened] = useState(false);
    const [isAboutModalOpened, setIsAboutModalOpened] = useState(false);
    const [isResultModalOpened, setIsResultModalOpened] = useState(false);

    const openTestModal = () => {
        setIsTestModalOpened(true);
        setIsAboutModalOpened(false);
        setIsResultModalOpened(false);
    }

    const closeTestModal = () => {
        setIsTestModalOpened(false);
    }

    const openAboutModal = () => {
        setIsTestModalOpened(false);
        setIsAboutModalOpened(true);
        setIsResultModalOpened(false);
    }

    const closeAboutModal = () => {
        setIsAboutModalOpened(false);
    }

    const openResultModal = () => {
        setIsAboutModalOpened(false);
        setIsTestModalOpened(false);
        setIsResultModalOpened(true);
    }

    const closeResultModal = () => {
        setIsResultModalOpened(false);
    }

    return (
        <div className={style.framewrapper}>
                <div className={style.polaroid} onClick={openAboutModal}>
                    <div className={style.imagewrapper}>
                        <img src={aboutImg} alt="about" className={style.image}/>
                        <img src={bluePin} alt="pin" className={style.pin}/>
                    </div>
                </div>
                <div className={style.original} onClick={openTestModal}>
                    <div className={style.imagewrapper}>
                        <img src={testImg} alt="test" className={style.image}/>
                    </div>
                </div>
                <div className={style.sticker} onClick={openResultModal}>
                    <div>
                        
                    </div>
                </div>
                <ChatTemplate isOpened={isTestModalOpened} close={closeTestModal}/>
                <AboutTemplate isOpened={isAboutModalOpened} close={closeAboutModal}/>
                <ResultTemplate isOpened={isResultModalOpened} close={closeResultModal}/>
        </div>
    );
}

export default Main;
