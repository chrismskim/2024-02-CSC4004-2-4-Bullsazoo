import React from "react";
import * as S from "./MyPageHeaderStyled"; // 파일명 변경
import MainIcon from "../../assets/images/mainIcon.svg";

function MyPageHeader() {
    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError"></img>
            </S.HeaderIcon>
            <S.HeaderText>###님의 정보를 관리합니다</S.HeaderText>
        </S.Container>
    );
}

export default MyPageHeader;
