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
export const loader = styled.div`
    position: absolute;

    width: 50px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #FFE31A;
    --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
    @keyframes l3 {to{transform: rotate(1turn)}}
`;

export const HeaderText = styled.div`
    font-size: 20px;
    font-weight: 900;
    color: #FFFFFF;
    #Detail {
        font-size: 24px;
    }
`;
export const LoadingBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
    position: relative;
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
export const CameraText = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    margin-top: 20px;
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
export const CaptureBox = styled.div`
    width: 90%;
    border: 4px solid #FFE31A;
    border-radius: 20px;
    overflow: hidden;
    img{
        width: 100%;
        overflow: hidden;
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
    top: 100px;
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    background-color: #002080;
    border: 2px solid #FFE31A;
    border-radius: 20px;
    color: #FFE31A;
    img{
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }
`; 

export const HumanAllert = styled.div`
    position: absolute;
    top: 100px;
    width: 400px;
    height: auto;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    background-color: #002080;
    border: 2px solid #FFE31A;
    border-radius: 20px;
    color: #FFE31A;
`;
export const HumanImg = styled.div`
        max-width: 100px;
        height: fit-content;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 8px;
    img{
        max-width: 100px;
        height: 100%;
        border-radius: 10px;
    }
`;
export const GoodsImg = styled.div`
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 8px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
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

export const GoCameraButton = styled.div`
    width: 300px;
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
    margin-bottom: 20px;
    &:hover {
        background-color: #FFCC00;
        transform: scale(1.03); 
    }

    &:active {
        background-color: #FFD700;
        transform: scale(0.95); 
    }
`;