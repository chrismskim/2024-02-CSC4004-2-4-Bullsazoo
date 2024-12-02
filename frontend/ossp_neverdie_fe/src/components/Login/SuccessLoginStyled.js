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
`;

export const HeaderIcon = styled.div`
    width: 160px;
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

export const LoginText = styled.div`
    font-size: 24px;
    font-weight: 900;
    color: #FFE31A;
    margin-bottom: 40px;
`;

export const StartButton = styled.div`
    width: 380px;
    height: 100px;
    border: 3px solid #001F3F;
    border-radius: 36px;
    background-color: #FFE31A;
    color: #000B58;
    font-size: 40px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;
    &:hover {
        background-color: #FFCC00;
        transform: scale(1.03); 
    }

    &:active {
        background-color: #FFD700;
        transform: scale(0.95); 
    }
`;