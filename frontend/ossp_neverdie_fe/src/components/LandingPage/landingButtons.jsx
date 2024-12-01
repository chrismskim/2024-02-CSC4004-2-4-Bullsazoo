import React from "react";
import * as S from "./landingButtonsStyled";
function LandingButtons() {

    return (
        <S.Container>
            <S.ButtonType1>
                설명
            </S.ButtonType1>
            <S.ButtonType2>
                가입
            </S.ButtonType2>
            <S.ButtonType2>
                시작
            </S.ButtonType2>
        </S.Container>
    );
}

export default LandingButtons;