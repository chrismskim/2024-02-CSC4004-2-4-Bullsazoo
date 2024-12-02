import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Login/Header";
import SignupButtons from "../components/Login/loginButtons";
import SuccessLogin from "../components/Login/SuccessLogin";

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

function LoginPage() {
    // 단계 상태 관리
    const [step, setStep] = useState(1);

    // 단계별 텍스트 정의
    const stepTexts = {
        1: "로그인",
        2: "이름",
        3: "사용자 식별 ID"
    };

    // 다음 단계로 이동
    const handleNext = () => {
        if (step < 4) {
            setStep((prevStep) => prevStep + 1); // 단계 증가
        }
    };

    // 이전 단계로 이동
    const handlePrev = () => {
        if (step > 1) {
            setStep((prevStep) => prevStep - 1); // 단계 감소
        }
    };

    return (
        <Container>
            {step < 4 ? (
                <>
                    {/* 단계별 헤더와 버튼 표시 */}
                    <Header stepText={stepTexts[step]} />
                    <SignupButtons onNext={handleNext} onPrev={handlePrev} />
                </>
            ) : (
                // 로그인 성공 화면
                <SuccessLogin />
            )}
        </Container>
    );
}

export default LoginPage;
