import React from "react";
import * as S from "./signupStyled";
import MainIcon from "../../assets/images/mainIcon.svg";

function SignupCheck({ name, id }) {
    const handleSubmit = () => {
        console.log("이름:", name);
        console.log("ID:", id);
        alert(`회원가입이 완료되었습니다!\n이름: ${name}\nID: ${id}`);
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
            <S.SignupButton onClick={handleSubmit}>제출</S.SignupButton>
        </S.Container>
    );
}

export default SignupCheck;
