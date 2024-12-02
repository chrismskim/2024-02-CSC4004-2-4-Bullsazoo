import React from 'react'
import * as S from "./CameraButtonsStyled";

const CameraButtons = () => {
    return (
        <S.Container>
            <S.ButtonType1>
                말하기
            </S.ButtonType1>
            <S.ButtonType2>
                마이페이지
            </S.ButtonType2>
        </S.Container>
    );
}

export default CameraButtons;