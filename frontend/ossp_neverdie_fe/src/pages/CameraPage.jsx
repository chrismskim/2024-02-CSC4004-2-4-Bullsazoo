import React from "react";
import styled from "styled-components";
import OpenCV from "../components/Camera/OpenCV";
import CameraButtons from "../components/Camera/CameraButtons";

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

function CameraPage() {

    return (
        <Container>
            <OpenCV />
            <CameraButtons />
        </Container>
    );
}

export default CameraPage;