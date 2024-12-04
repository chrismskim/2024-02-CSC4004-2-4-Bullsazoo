import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 18px;
    gap: 20px;
`;
export const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
`;
export const CameraFrame = styled.div`
    position: relative;
    width: auto;
    height: auto;
    max-width: 380px;
    max-height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFE31A;
    border: 4px solid #FFE31A;
    border-radius: 20px;
    overflow: hidden;
`;

export const  ButtonType1 = styled.div`
    width: 360px;
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
    width: 360px;
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
export const PopupGoods = styled.div`
    position: absolute;
    top: 120px;
    width: 310px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 30px;
    background-color: #002080;
    border: 2px solid #FFE31A;
    border-radius: 20px;
    color: #FFE31A;
    img{
        width: 80px;
        height: 80px;
        margin-bottom: 40px;
    }
`; 

export const PopupDanger = styled.div`
    position: absolute;
    top: 120px;
    width: 310px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 30px;
    background-color: #002080;
    border: 2px solid #FFE31A;
    border-radius: 20px;
    color: #FFE31A;
    img{
        width: 80px;
        height: 80px;
        margin-bottom: 40px;
    }
`; 

export const AboutText = styled.div`
    height: 40px;
    color: #FFE31A;
    font-size: 22px;
`;