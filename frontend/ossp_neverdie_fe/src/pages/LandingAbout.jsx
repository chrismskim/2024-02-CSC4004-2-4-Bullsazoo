import React from 'react';
import styled from "styled-components";
import GlobalStyle from './global';
import Kenwoo from './assets/images/kenwoo.svg';
import Jeayong from './assets/images/jeayong.svg';
import Kyeongsub from './assets/images/kyeongsub.svg';
import Keonmin from './assets/images/keonmin.svg';
import Minseong from './assets/images/minseong.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000b58;
`;

const Card = styled.div`
  width: 300px;
  background-color: #000b58;
  color: #e6e9af;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  margin: 20px auto;
  font-size: 40px;
  color: #ffd700; /* 노란색 */
`;

const ImageBox = styled.div`
  height: 80px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px 0;
`;

const Footer = styled.div`
  margin-top: 20px;
`;

const TeamSection = styled.div`
  margin-top: 20px;
  text-align: left;

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .member {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    div {
      font-size: 14px;
      line-height: 1.2;
    }
  }
`;

const Landing_About = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Header>시각 장애인을 위한 쇼핑, 일상 보조 서비스</Header>
          <Icon><img src={Eye_icon} alt="eye_icon" /></Icon>
          <ImageBox></ImageBox>
          <ImageBox />
          <ImageBox />
          <ImageBox />
          <Footer>OSSP Team NeverDie_4</Footer>
          <TeamSection>
            <h3>BE | Back-End Team member</h3>
            <div className="member">
              <img src={Jeayong} alt="jeayong" />
              <div>
                신재용<br />LD / BE / AI<br />YOLO 모델 학습
              </div>
            </div>
            <div className="member">
              <img src={Kyeongsub} alt="Kyeongsub" />
              <div>
                김경섭<br />BE / AI<br />모델 설계 / 홍보 / 배포
              </div>
            </div>
            <div className="member">
              <img src={Keonmin} alt="keonmin" />
              <div>
                이건민<br />BE / AI<br />TTS / STT 모델 설계 / 학습
              </div>
            </div>
            <h3>FE | Front-End Team member</h3>
            <div className="member">
              <img src={Kenwoo} alt="kenwoo" />
              <div>
                강근우<br />PM / Design / FE<br />개발 문서 작성/레이아웃 구성 / 통신
              </div>
            </div>
            <div className="member">
              <img src={Minseong} alt="minseong" />
              <div>
                김민성<br />PM / FE<br />레이아웃 구성 / 배포
              </div>
            </div>
          </TeamSection>
        </Card>
      </Container>
    </>
  );
};

export default Landing_About;
