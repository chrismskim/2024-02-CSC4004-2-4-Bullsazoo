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
export const OutputBox = styled.div`
    width: 90%;
    min-height: 50px;
    padding: 10px;
    border: 2px solid #FFE31A;
    border-radius: 14px;
    background-color: #000B58;
    color: #FFE31A;
    font-size: 20px;
    text-align: left;
    word-wrap: break-word;
    padding-left: 14px;
    margin-bottom: 20px;
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
export const ButtonType_Repeat = styled.div`
    width: 380px;
    height: 100px;
    border: 3px solid #000B58;
    border-radius: 36px;
    background-color: #FFE31A;
    color: #000B58;
    font-size: 40px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        background-color: #FFCC00;
        transform: scale(1.03); /* 살짝 커지는 효과 */
    }

    &:active {
        background-color: #FFD700;
        transform: scale(0.95); /* 눌렀을 때 살짝 작아짐 */
    }
`;

export const ButtonType_Speak = styled.div`
    width: 380px;
    height: 100px;
    border: 3px solid #000B58;
    border-radius: 36px;
    background-color: #FFE31A;
    color: #000B58;
    font-size: 40px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
        background-color: #FFCC00;
        transform: scale(1.03); /* 살짝 커지는 효과 */
    }

    &:active {
        background-color: #FFD700;
        transform: scale(0.95); /* 눌렀을 때 살짝 작아짐 */
    }
`;

export const ButtonType_next = styled.div`
    position: relative;
    width: 380px;
    height: 100px;
    border: 3px solid #FFE31A;
    border-radius: 36px;
    background-color: #000B58;
    color: #FFE31A;
    font-size: 40px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    img {
        position: absolute;
        right: 32px;
        top: 32px;
        width: 18px;
    }

    &:hover {
        background-color: #002080;
        transform: scale(1.03);
    }

    &:active {
        background-color: #001060;
        transform: scale(0.95);
    }
`;

export const ButtonType_prev = styled.div`
    position: relative;
    width: 380px;
    height: 100px;
    border: 3px solid #FFE31A;
    border-radius: 36px;
    background-color: #000B58;
    color: #FFE31A;
    font-size: 40px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    img {
        position: absolute;
        left: 32px;
        top: 32px;
        width: 18px;
    }

    &:hover {
        background-color: #002080;
        transform: scale(1.03);
    }

    &:active {
        background-color: #001060;
        transform: scale(0.95);
    }
`;
export const InputBox = styled.input`
    width: 80%;
    padding: 10px;
    font-size: 18px;
    margin: 20px 0;
    border: 2px solid #FFE31A;
    border-radius: 10px;
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