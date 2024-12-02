import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
`;

export const  ButtonType1 = styled.div`
    width: 380px;
    height: 100px;
    border: 3px solid #FFE31A;
    border-radius: 36px;
    background-color: #000B58;
    color: #FFE31A;
    font-size: 40px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        background-color: #002080;
        transform: scale(1.03);
    }

    &:active {
        background-color: #001060;
        transform: scale(0.95);
    }
    
`;

export const ButtonType2 = styled.div`
    width: 380px;
    height: 100px;
    border: 4px solid #001F3F;
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