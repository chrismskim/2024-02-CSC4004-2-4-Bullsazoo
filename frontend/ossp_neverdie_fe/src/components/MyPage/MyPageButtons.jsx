import React from "react";
import * as S from "./MyPageButtonsStyled";

function MyPageButtons() {
    const handleExit = () => {
        // 브라우저 보안 정책으로 인해 창 닫기 제한을 안내
        if (window.opener || window.confirm("현재 창을 닫으시겠습니까?")) {
            window.open("", "_self"); // 현재 창 컨텍스트 재설정
            window.close();
        } else {
            alert("창 닫기가 지원되지 않습니다. 브라우저 탭을 수동으로 닫아주세요.");
        }
    };

    return (
        <S.Container>
            <S.ButtonType1>
                구매 도움
            </S.ButtonType1>
            <S.ButtonType2 onClick={handleExit}>
                종료하기
            </S.ButtonType2>
        </S.Container>
    );
}

export default MyPageButtons;
