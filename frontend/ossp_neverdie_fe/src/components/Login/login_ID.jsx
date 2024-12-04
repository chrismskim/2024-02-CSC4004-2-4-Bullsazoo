import React from "react";
import * as S from "./loginStyled";
import useTTSSTT from "../../hooks/useTTSSTT";
import MainIcon from "../../assets/images/mainIcon.svg";

function Login_id({ nextStep, prevStep, setId }) {
    const { listening, transcript, speak, startListening } = useTTSSTT();

    const handleNext = () => {
        if (transcript.trim() === "") {
            alert("개인 ID를 입력해주세요.");
        } else {
            setId(transcript); // 변환된 텍스트를 부모 컴포넌트에 저장
            nextStep(); // 다음 단계로 이동
        }
    };

    const handleRepeat = () => {
        speak("개인 아이디를 말씀해주세요."); // 음성 안내
    };

    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError" />
            </S.HeaderIcon>
            <S.HeaderText>로그인</S.HeaderText>
            <S.HeaderText id="Detail">개인 ID를 말씀해 주세요</S.HeaderText>
            <S.OutputBox>
                {transcript || (listening ? "음성을 인식 중입니다..." : "개인 ID를 말씀해 주세요")}
            </S.OutputBox>
            <S.ButtonType_Repeat onClick={handleRepeat}>듣기</S.ButtonType_Repeat>
            <S.ButtonType_Speak onClick={startListening}>
                {listening ? "인식 중지" : "말하기"}
            </S.ButtonType_Speak>
            <S.ButtonType_next onClick={handleNext}>다음</S.ButtonType_next>
        </S.Container>
    );
}

export default Login_id;
