import React from 'react'
import * as S from "./OpenCVStlyled";
import WarningIcon from "../../assets/images/warningIcon.svg";

const OpenCV = () => {
    return (
        <S.Container>
            <S.CameraFrame>
                카메라 프레임 입니다.
            </S.CameraFrame>
            <S.PopupGoods>
                <img src={WarningIcon}></img>
                <S.AboutText>새우깡</S.AboutText>
                <S.AboutText>입니다</S.AboutText>
            </S.PopupGoods>
            <S.PopupDanger>
                <img src={WarningIcon}></img>
                <S.AboutText>전방에 ##가 있습니다</S.AboutText>
                <S.AboutText>조심하세요</S.AboutText>
            </S.PopupDanger>
        </S.Container>
    );
}

export default OpenCV;