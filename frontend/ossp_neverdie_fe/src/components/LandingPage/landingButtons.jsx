import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./landingButtonsStyled";
function LandingButtons() {
    const navigate = useNavigate(); 

    const goSignup = () => {
        navigate("/Signup"); 
    };
    const goLogin = () => {
        navigate("/Login"); 
    };

    return (
        <S.Container>
            <S.ButtonType1>
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