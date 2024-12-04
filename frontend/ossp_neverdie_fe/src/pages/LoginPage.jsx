import React, { useState } from "react";
import styled from "styled-components";
import Login_name from "../components/Login/login_name";
import Login_id from "../components/Login/login_ID";
import LoginCheck from "../components/Login/loginCheck";

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
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계
    const [name, setName] = useState(""); // 사용자 이름
    const [id, setId] = useState(""); // 사용자 개인 ID

    // 단계 이동 함수
    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3)); // 다음 단계
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1)); // 이전 단계

    return (
        <Container>
            {currentStep === 1 && (
                <Login_name
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setName={setName}
                />
            )}
            {currentStep === 2 && (
                <Login_id
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setId={setId}
                />
            )}
            {currentStep === 3 && <LoginCheck name={name} id={id} />}
        </Container>
    );
}

export default LoginPage;
