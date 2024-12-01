import React from "react";
import * as S from "./headerStyled";
import MainIcon from "../../assets/images/mainIcon.svg";

function Header({ stepText }) {
    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError"></img>
            </S.HeaderIcon>
            <S.HeaderText key={stepText}>{stepText}</S.HeaderText>
            <S.HeaderText id="Detail">질문에 따라 정보를 말씀해 주세요</S.HeaderText>
        </S.Container>
    );
}

export default Header;
