import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1vw;
    margin-bottom: 60px;
`;

export const HeaderIcon = styled.div`
    width: 140px;
    margin-top: 50px;
    img{
        width: 100%;
    }
`;

export const HeaderText = styled.div`
    font-size: 20px;
    font-weight: 900;
    color: #FFFFFF;
`;

// export const Container = styled.div`
//     display: flex;
//     margin: 0 auto;
//     flex-direction: column;
// `;