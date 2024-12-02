import React from "react";
import * as S from "./SuccessLoginStyled";
import MainIcon from "../../assets/images/mainIcon.svg";

function SuccessLogin() {
    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError"></img>
            </S.HeaderIcon>
            <S.HeaderText>환영합니다</S.HeaderText>
            <S.LoginText>@@@님의 눈이 되어드리겠습니다.</S.LoginText>
            <S.StartButton>시작</S.StartButton>
        </S.Container>
    );
}

export default SuccessLogin;
