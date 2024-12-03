import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./landingButtonsStyled";
import useTTSSTT from "../../hooks/useTTSSTT"; 
function LandingButtons() {
    const navigate = useNavigate();
    const { speak } = useTTSSTT();
    const goSignup = () => {
        navigate("/Signup");
    };

    const goLogin = () => {
        navigate("/Login");
    };

    const speakIntroduction = () => {
        speak("안녕하세요, 당신의 쇼핑 및 일상 보조 도우미, 심청이 입니다.");
    };

    return (
        <S.Container>
            <S.ButtonType1 onClick={speakIntroduction}>
                설명
            </S.ButtonType1>
            <S.ButtonType2 onClick={goSignup}>
                가입
            </S.ButtonType2>
            <S.ButtonType2 onClick={goLogin}>
                시작
            </S.ButtonType2>
        </S.Container>
    );
}

export default LandingButtons;