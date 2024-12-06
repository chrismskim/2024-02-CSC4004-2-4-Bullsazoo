import React from "react";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../apis/userData";
import * as S from "./loginStyled";
import MainIcon from "../../assets/images/mainIcon.svg";

function LoginCheck({ name, id }) {
    const navigate = useNavigate();

    const handleSubmit = () => {
        setUserData({ name, id }); // 사용자 정보 저장
        console.log("이름:", name);
        console.log("ID:", id);
        alert(`로그인 완료되었습니다!\n이름: ${name}\nID: ${id}`);
        navigate("/Login/Success");
    };

    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError" />
            </S.HeaderIcon>
            <S.HeaderText>입력 확인</S.HeaderText>
            <S.OutputBox>
                <p>이름: {name}</p>
                <p>ID: {id}</p>
            </S.OutputBox>
            <S.SignupButton onClick={handleSubmit}>로그인</S.SignupButton>
        </S.Container>
    );
}

export default LoginCheck;
