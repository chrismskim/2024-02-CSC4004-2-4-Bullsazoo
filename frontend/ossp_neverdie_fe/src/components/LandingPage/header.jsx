import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./headerStyled";
import MainIcon from "../../assets/images/mainIcon.svg";

function Header() {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/About"); 
    };

    return (
        <S.Container>
            <S.HeaderIcon onClick={handleClick}>
                <img src={MainIcon} alt="MainIconError" />
            </S.HeaderIcon>
            <S.HeaderText>당신의 시각 도우미</S.HeaderText>
        </S.Container>
    );
}

export default Header;
