import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Signup/header";
import SignupButtons from "../components/Signup/signupButtons";
import useTTSSTT from "../hooks/useTTSSTT"; // TTSSTT 훅 임포트

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #000B58;
`;

const OutputBox = styled.div`
    width: 80%;
    min-height: 50px;
    margin-top: 20px;
    padding: 10px;
    border: 2px solid #FFE31A;
    border-radius: 5px;
    background-color: #f5f5f5;
    color: #333;
    font-size: 1rem;
    text-align: left;
    word-wrap: break-word;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function SignupPage() {
    const [step, setStep] = useState(1);
    const { speak, startListening, stopListening, transcript, listening } = useTTSSTT();

    const stepTexts = {
        1: "회원 가입",
        2: "이름",
        3: "사용자 식별 ID",
    };

    const stepInstructions = {
        1: "회원 가입 단계입니다. 질문에 따라서 정보를 말씀해 주세요.",
        2: "사용자의 이름을 말씀해 주세요.",
        3: "사용자를 식별할 수 있는 개인 ID를 말씀해 주세요.",
    };

    // 단계 변경 시 음성 출력
    useEffect(() => {
        if (!listening) {
            speak(stepInstructions[step]);
        }
    }, [step, speak, listening]);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleRepeat = () => {
        if (!listening) {
            speak(stepInstructions[step]);
        }
    };

    const handleStartListening = () => {
        startListening(); // 음성 인식 시작
    };

    const handleStopListening = () => {
        stopListening(); // 음성 인식 중지
        console.log(`STT Result for Step ${step}:`, transcript); // 콘솔에 텍스트 출력
    };

    return (
        <Container>
            <Header stepText={stepTexts[step]} />
            <SignupButtons
                onNext={handleNext}
                onPrev={handlePrev}
                onRepeat={handleRepeat}
                onStartListening={handleStartListening}
                onStopListening={handleStopListening}
                currentStep={step}
            />
            <OutputBox>
                {transcript || "여기에 음성 인식된 텍스트가 표시됩니다."}
            </OutputBox>
        </Container>
    );
}

export default SignupPage;
