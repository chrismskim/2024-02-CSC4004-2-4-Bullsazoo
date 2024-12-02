import React from "react";
import styled from "styled-components";
import MyPageButtons from "../components/MyPage/MyPageButtons";
import MyPageHeader from "../components/MyPage/MyPageHeader";
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


function MyPage() {

    return (
        <Container>
            <MyPageHeader/>
            <MyPageButtons />
        </Container>
    );
}

export default MyPage;