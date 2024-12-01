import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Signup/header";
import SignupButtons from "../components/Signup/signupButtons";

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

function SignupPage() {
    // 단계 상태 관리
    const [step, setStep] = useState(1);

    // 단계별 텍스트 정의
    const stepTexts = {
        1: "회원 가입",
        2: "이름",
        3: "사용자 식별 ID"
    };

    // 다음 단계로 이동
    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    // 이전 단계로 이동
    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <Container>
            <Header stepText={stepTexts[step]} />
            <SignupButtons onNext={handleNext} onPrev={handlePrev} />
        </Container>
    );
}

export default SignupPage;
