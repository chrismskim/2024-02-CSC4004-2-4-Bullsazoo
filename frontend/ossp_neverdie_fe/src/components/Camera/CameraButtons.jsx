import React from 'react'
import { useNavigate } from "react-router-dom";
import * as S from "./CameraButtonsStyled";

const CameraButtons = () => {
    const navigate = useNavigate(); 

    const goMyPage = () => {
        navigate("/MyPage"); 
    };

    return (
        <S.Container>
            <S.ButtonType1>
                말하기
            </S.ButtonType1>
            <S.ButtonType2 onClick={goMyPage}>
                마이페이지
            </S.ButtonType2>
        </S.Container>
    );
}

export default CameraButtons;