import React from "react";
import * as S from "./headerStyled";
import MainIcon from "../../assets/images/mainIcon.svg";

function Header() {

    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError"></img>
            </S.HeaderIcon>
            <S.HeaderText>당신의 시각 도우미</S.HeaderText>
        </S.Container>
    );
}

export default Header;