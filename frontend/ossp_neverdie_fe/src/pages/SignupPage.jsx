import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Signup/header";
import SignupButtons from "../components/Signup/signupButtons";
import useTTSSTT from "../hooks/useTTSSTT";

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
    width: 90%;
    min-height: 50px;
    padding: 10px;
    border: 2px solid #FFE31A;
    border-radius: 14px;
    background-color: #000B58;
    color: #FFE31A;
    font-size: 20px;
    text-align: left;
    word-wrap: break-word;
    padding-left: 14px;
    margin-bottom: 20px;
`;

function SignupPage() {
    const [step, setStep] = useState(1); // 현재 단계
    const [playedSteps, setPlayedSteps] = useState([]); // 음성 출력된 단계 추적
    const [formData, setFormData] = useState({
        name: "", // 이름 저장
        id: "", // 개인 식별 ID 저장
    });

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

    // 단계 변경 시 음성 출력 (최초 1회만 출력)
    useEffect(() => {
        if (!playedSteps.includes(step)) {
            speak(stepInstructions[step]);
            setPlayedSteps((prev) => [...prev, step]);
        }
    }, [step, speak, playedSteps]);

    const handleNext = () => {
        if (step === 2) {
            // 이름 저장
            setFormData((prev) => ({ ...prev, name: transcript }));
        } else if (step === 3) {
            // 개인 식별 ID 저장
            setFormData((prev) => ({ ...prev, id: transcript }));
        }

        if (step < 3) {
            setStep(step + 1);
        } else {
            // 마지막 단계에서 두 정보 콘솔 출력
            console.log("회원 가입 정보:", formData);
        }
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleRepeat = () => {
        speak(stepInstructions[step]);
    };

    const handleStartListening = () => {
        startListening();
    };

    const handleStopListening = () => {
        stopListening();
        console.log(`STT Result for Step ${step}:`, transcript);
    };

    return (
        <Container>
            <Header stepText={stepTexts[step]} />
            <OutputBox>
                {transcript || "여기에 음성 인식된 텍스트가 표시됩니다."}
            </OutputBox>
            <SignupButtons
                onNext={handleNext}
                onPrev={handlePrev}
                onRepeat={handleRepeat}
                onStartListening={handleStartListening}
                onStopListening={handleStopListening}
                currentStep={step}
            />
        </Container>
    );
}

export default SignupPage;
