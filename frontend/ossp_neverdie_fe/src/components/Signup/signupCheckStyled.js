import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    background-color: #000B58;
`;

export const HeaderIcon = styled.div`
    width: 120px;
    margin-top: 30px;
    img {
        width: 100%;
    }
`;

export const HeaderText = styled.div`
    font-size: 20px;
    font-weight: 900;
    color: #FFFFFF;
    #Detail {
        font-size: 24px;
    }
`;

export const LoginButton = styled.div`
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

export const SignupButton = styled.div`
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