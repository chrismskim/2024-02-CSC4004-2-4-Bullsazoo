import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SuccessLoginStyled";
import MainIcon from "../../assets/images/mainIcon.svg";

function SuccessLogin() {
    const navigate = useNavigate();

    const goCamera = ()=> {
        navigate("/Camera"); 

    };
    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError"></img>
            </S.HeaderIcon>
            <S.HeaderText>환영합니다</S.HeaderText>
            <S.LoginText>@@@님의 눈이 되어드리겠습니다.</S.LoginText>
            <S.StartButton onClick={goCamera}>시작</S.StartButton>
        </S.Container>
    );
}

export default SuccessLogin;
