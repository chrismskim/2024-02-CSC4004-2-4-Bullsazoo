import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1vw;
    margin-bottom: 30px;
`;

export const HeaderIcon = styled.div`
    width: 100px;
    margin-top: 30px;
    img {
        width: 100%;
    }
`;

export const HeaderText = styled.div`
    font-size: 20px;
    font-weight: 900;
    color: #FFFFFF;
    animation: ${fadeIn} 1s ease-in-out; 
    #Detail {
        font-size: 24px;
    }
`;
