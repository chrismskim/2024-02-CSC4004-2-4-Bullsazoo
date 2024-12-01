import React from "react";
import styled from "styled-components";
import Header from "../components/LandingPage/header";
import LandingButtons from "../components/LandingPage/landingButtons";

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


function LandingPage() {

    return (
        <Container>
            <Header/>
            <LandingButtons />
        </Container>
    );
}

export default LandingPage;