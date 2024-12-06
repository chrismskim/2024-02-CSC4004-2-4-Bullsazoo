import React from "react";
import * as S from "./MyPageHeaderStyled"; // 파일명 변경
import MainIcon from "../../assets/images/mainIcon.svg";
import { getUserData } from "../../apis/userData"; // 사용자 정보 가져오기 함수 import

function MyPageHeader() {
    const user = getUserData(); // 사용자 정보 가져오기

    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError" />
            </S.HeaderIcon>
            <S.HeaderText>
                {user?.name ? `${user.name}님의 정보를 관리합니다` : "사용자님의 정보를 관리합니다"}
            </S.HeaderText>
        </S.Container>
    );
}

export default MyPageHeader;
