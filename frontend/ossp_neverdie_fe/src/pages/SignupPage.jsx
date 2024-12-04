import React, { useState } from "react";
import styled from "styled-components";
import Signup_intro from "../components/Signup/signup_intro";
import Signup_name from "../components/Signup/signup_name";
import Signup_id from "../components/Signup/signup_id";
import SignupCheck from "../components/Signup/signupCheck";

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
    const [currentStep, setCurrentStep] = useState(1); // 현재 단계
    const [name, setName] = useState(""); // 사용자 이름
    const [id, setId] = useState(""); // 사용자 개인 ID

    // 단계 이동 함수
    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4)); // 다음 단계
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1)); // 이전 단계

    return (
        <Container>
            {currentStep === 1 && <Signup_intro nextStep={nextStep} />}
            {currentStep === 2 && (
                <Signup_name
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setName={setName}
                />
            )}
            {currentStep === 3 && (
                <Signup_id
                    nextStep={nextStep}
                    prevStep={prevStep}
                    setId={setId}
                />
            )}
            {currentStep === 4 && <SignupCheck name={name} id={id} />}
        </Container>
    );
}

export default SignupPage;
