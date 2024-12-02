import React from "react";
import * as S from "./MyPageButtonsStyled";

function MyPageButtons() {

    return (
        <S.Container>
            <S.ButtonType1>
                구매 도움
            </S.ButtonType1>
            <S.ButtonType1>
                개인 기록
            </S.ButtonType1>
            <S.ButtonType1>
                말하기
            </S.ButtonType1>
            <S.ButtonType2>
                종료하기
            </S.ButtonType2>
        </S.Container>
    );
}

export default MyPageButtons;