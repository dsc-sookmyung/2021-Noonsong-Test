import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';


declare global {
  interface Window {
      Kakao: any;
  }
}

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: "Carmen Sans",
    fontSize: "1rem",
    fontWeight: "bold"
  }
}));

const KakaoShareButton = () => {
  const classes = useStyles();

  const createKakaoButton = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    if (window.Kakao) {
      const Kakao = window.Kakao
      
      if (!Kakao.isInitialized()) {
        // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
        Kakao.init('a305397566d158aa2c5d981fbb6c1618')
      }

      {/* 사용하려면 Web 플랫폼 등록해야함 (도메인 있어야 함) */}
      Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '눈송이 유형 테스트',
          description: '나는 어떤 유형의 눈송이일까?',
          imageUrl:
            'https://cdn.discordapp.com/attachments/805692710342098944/807269209432129596/IMG_0566.jpg',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '테스트 하러가기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
        })
    }
  }

  return (
    <div className="Kakao-share-button">
      {/*<button id="kakao-link-btn" onClick={createKakaoButton} style={imageButton}/>*/}
      <Button 
        id="kakao-link-btn" 
        className={classes.button}
        onClick={createKakaoButton}
        variant="text"
        startIcon={<Avatar src={'https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png'} size="2rem" />} >
        테스트 공유하기
      </Button>
    </div>
  )
}

export default KakaoShareButton;
