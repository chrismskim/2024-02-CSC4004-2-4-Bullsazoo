import React from "react";
import * as S from "./signupStyled";
import useTTSSTT from "../../hooks/useTTSSTT";
import MainIcon from "../../assets/images/mainIcon.svg";

function Signup_name({ nextStep, prevStep, setName }) {
    const { listening, transcript, speak, startListening } = useTTSSTT();

    const handleNext = () => {
        if (transcript.trim() === "") {
            alert("이름을 입력해주세요.");
        } else {
            setName(transcript); // 변환된 텍스트를 부모 컴포넌트에 저장
            nextStep(); // 다음 단계로 이동
        }
    };

    const handleRepeat = () => {
        speak("이름을 말씀해주세요."); // 음성 안내
    };

    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError" />
            </S.HeaderIcon>
            <S.HeaderText>이름</S.HeaderText>
            <S.HeaderText id="Detail">질문에 따라 이름을 말씀해 주세요</S.HeaderText>
            <S.OutputBox>
                {transcript || (listening ? "음성을 인식 중입니다..." : "여기에 음성으로 변환된 텍스트가 표시됩니다.")}
            </S.OutputBox>
            <S.ButtonType_Repeat onClick={handleRepeat}>듣기</S.ButtonType_Repeat>
            <S.ButtonType_Speak onClick={startListening}>
                {listening ? "인식 중지" : "말하기"}
            </S.ButtonType_Speak>
            {/* <S.ButtonType_prev onClick={prevStep}>이전</S.ButtonType_prev> */}
            <S.ButtonType_next onClick={handleNext}>다음</S.ButtonType_next>
        </S.Container>
    );
}

export default Signup_name;
