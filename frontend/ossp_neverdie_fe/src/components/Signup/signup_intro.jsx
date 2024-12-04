import React from "react";
import * as S from "./signupStyled";
import MainIcon from "../../assets/images/mainIcon.svg";

function Signup_intro({ nextStep }) {
    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError" />
            </S.HeaderIcon>
            <S.HeaderText>회원가입</S.HeaderText>
            <S.HeaderText id="Detail">질문에 따라 정보를 말씀해 주세요</S.HeaderText>
            <S.LoginButton onClick={nextStep}>다음</S.LoginButton>
        </S.Container>
    );
}

export default Signup_intro;
