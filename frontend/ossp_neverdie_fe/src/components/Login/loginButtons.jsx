import React from "react";
import * as S from "./loginButtonsStyled";
import NextIcon from "../../assets/images/NextIcon.svg";
import PrevIcon from "../../assets/images/PrevIcon.svg";

function SignupButtons({ onNext, onPrev }) {
    return (
        <S.Container>
            <S.ButtonType1>
                다시 듣기
            </S.ButtonType1>
            <S.ButtonType1>
                말하기
            </S.ButtonType1>
            <S.ButtonType_next onClick={onNext}>
                다음
                <img src={NextIcon} alt="NextIcon"></img>
            </S.ButtonType_next>
            <S.ButtonType_prev onClick={onPrev}>
                <img src={PrevIcon} alt="PrevIcon"></img>
                이전
            </S.ButtonType_prev>
        </S.Container>
    );
}

export default SignupButtons;
