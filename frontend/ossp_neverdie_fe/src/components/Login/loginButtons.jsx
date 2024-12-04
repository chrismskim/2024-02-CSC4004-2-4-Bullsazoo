import React from "react";
import * as S from "./loginButtonsStyled";
import NextIcon from "../../assets/images/NextIcon.svg";
import PrevIcon from "../../assets/images/PrevIcon.svg";

function SignupButtons({ onNext, onPrev }) {
    return (
        <S.Container>
            <S.ButtonType_Repeat onClick={onRepeat}>다시 듣기</S.ButtonType_Repeat>
            <S.ButtonType_Speak onClick={onStartListening}>말하기</S.ButtonType_Speak>
            <S.ButtonType_Speak onClick={onStopListening}>종료하기</S.ButtonType_Speak>
            <S.ButtonType_next onClick={onNext}>
                다음
                <img src={NextIcon} alt="NextIcon"></img>
            </S.ButtonType_next>
            {/* <S.ButtonType_prev onClick={onPrev}>
                <img src={PrevIcon} alt="PrevIcon"></img>
                이전
            </S.ButtonType_prev> */}
        </S.Container>
    );
}

export default SignupButtons;
