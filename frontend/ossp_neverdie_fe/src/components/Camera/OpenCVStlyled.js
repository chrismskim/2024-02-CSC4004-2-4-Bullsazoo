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
`;

export const CameraFrame = styled.div`
        position: relative;
    width: 380px;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFE31A;
    border: 4px solid #FFE31A;
    border-radius: 20px;
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