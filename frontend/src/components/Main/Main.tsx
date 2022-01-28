import React, { useState, useEffect } from 'react';
import style from './Main.module.css';
import '../../fonts/font.css';

import TestTemplate from '../Test/TestTemplate';
import AboutTemplate from '../About/AboutTemplate';
import BoardTemplate from '../Board/BoardTemplate';

import testImg from '../../Images/frame-test.png';
import aboutImg from '../../Images/frame-about.png';
import bluePin from '../../Images/blue-pin.png';
import tape from '../../Images/tape.png';
import badge from '../../Images/sookmyung-symbol.png';
import noonsong from '../../Images/noonsong1.gif';

function Main() {
  const [isTestModalOpened, setIsTestModalOpened] = useState<boolean>(false);
  const [isAboutModalOpened, setIsAboutModalOpened] = useState<boolean>(false);
  const [isBoardModalOpened, setIsBoardModalOpened] = useState<boolean>(false);

  const openTestModal = (): void => {
    setIsTestModalOpened(true);
    setIsAboutModalOpened(false);
    setIsBoardModalOpened(false);
  }

  const closeTestModal = (): void => {
    setIsTestModalOpened(false);
  }

  const openAboutModal = (): void => {
    setIsTestModalOpened(false);
    setIsAboutModalOpened(true);
    setIsBoardModalOpened(false);
  }

  const closeAboutModal = (): void => {
    setIsAboutModalOpened(false);
  }

  const openBoardModal = (): void => {
    setIsAboutModalOpened(false);
    setIsTestModalOpened(false);
    setIsBoardModalOpened(true);
  }

  const closeBoardModal = (): void => {
    setIsBoardModalOpened(false);
  }

  useEffect(() => {
    window.onload = async () => {
      let typingTxts = document.querySelectorAll('.' + style.typingtxt);
      /* map은 비동기 작업을 기다려주지 않아서 for문 사용 */
      for (let i = 0; i < typingTxts.length; i++) {
        let typingBool = false; 
        let typingIdx = 0; 
        let typingTxt = (typingTxts[i] as HTMLElement).innerText.split('');
        if (typingBool === false) {
          typingBool = true;
          await intervalHandler(typingTxt, typingIdx);
          document.querySelector('.' + style.typing)!.innerHTML = document.querySelector('.' + style.typing)!.innerHTML + '<br/>';
        }
      }
    }
  }, [])

  const intervalHandler = (typingTxt: string[], typingIdx: number) => {
    return new Promise((resolve, reject) => {
      var tyInt = setInterval(() => { 
        if (typingIdx < typingTxt.length) {
          document.querySelector('.' + style.typing)!.append(typingTxt[typingIdx]);
          typingIdx++; 
        } else { 
          clearInterval(tyInt);
          resolve(typingIdx);
        } 
      }, 60);
    })
  }

  return (
    <div className={style.contentwrapper}>
      <div className={style.framewrapper}>
        <div className={style.polaroid} onClick={openAboutModal}>
          <div className={style.imagewrapper}>
            <img src={aboutImg} alt="about" className={style.image}/>
            <img src={bluePin} alt="pin" className={style.pin}/>
          </div>
          <div className={style.postit}>Gitribute 팀원 소개 →</div>
        </div>
        <div className={style.mainpage}>
          <h1 className={style.title}>
            ❄️ 나는 어떤 타입의 <span className={style.highlight}>눈송이</span>일까? 
          </h1>
          <div className={style.textwrapper}>
            <p className={style.typingtxt}>
              n년차 눈송이인 당신! 당신은 어떤 타입의 눈송이인지 확인해보고 싶지 않으셨나요?
            </p>
            <p className={style.typingtxt}>
              그런 당신을 위해 특별히 DSC Sookmyung의 Gitribute 팀에서 야심차게 눈송이 유형 테스트를 준비했습니다.  ٩꒰｡•◡•｡꒱۶ 
            </p>
            <p className={style.typingtxt}>
              눈송이 유형 테스트를 통해 본인도 몰랐던 자신의 귀여움과 특별함을 찾아보세요!
            </p>
            <p className={style.typingtxt}>
            아래의 사진을 눌러 테스트를 시작할 수 있답니다  ◡‿◡✿ 
            </p>
          </div>
          
          <p className={style.typing}></p> 
          <img src={noonsong} alt="noonsong" className={style.noonsong}/>
          <div className={style.linkwrapper}>
            <div className={style.link} onClick={openTestModal}>테스트 바로가기 →</div>
            <div className={style.link} onClick={openAboutModal}>Gitribute 팀원 소개 →</div>
            <div className={style.link} onClick={openBoardModal}>방명록 →</div>
          </div>
        </div>
        <div className={style.original} onClick={openTestModal}>
          <div className={style.postit}>테스트 바로가기 →</div>
            <div className={style.imagewrapper}>
              <img src={testImg} alt="test" className={style.image}/>
              <img src={tape} alt="tape" className={style.tape}/>
            </div>
        </div>
        <div className={style.spacer}></div>
        <div className={style.sticker} onClick={openBoardModal}>
          <div className={style.bedgewrapper}>
            <img src={badge} alt="badge" className={style.bedge + ' ' + style.image}/>
          </div>
          <div className={style.postit}>방명록 →</div>
        </div>
        <TestTemplate isOpened={isTestModalOpened} close={closeTestModal}/>
        <AboutTemplate isOpened={isAboutModalOpened} close={closeAboutModal}/>
        <BoardTemplate isOpened={isBoardModalOpened} close={closeBoardModal}/>
      </div>
    </div>
  );
}

export default Main;
