import React, { useEffect, useState } from "react";
import * as S from "./OpenCVStlyled";
import MainIcon from "../../assets/images/mainIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import JJA_img from "../../assets/images/Ramen_JJA.jpeg";
import useTTSSTT from "../../hooks/useTTSSTT";
import useAnalyze from "../../hooks/useAnalyze";
import HumanIcon from "../../assets/images/human_icon.svg";

const Analyzing = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { imagePath } = location.state || {}; // 전달된 이미지 경로
    const [showPopup, setShowPopup] = useState(false); // Popup 표시 여부
    const [isPersonDetected, setIsPersonDetected] = useState(null); // 사람 감지 여부
    const { speak } = useTTSSTT(); // TTS 기능 가져오기
    const { analyzeImage, detectedObjects, loading, error } = useAnalyze(); // useAnalyze 훅 가져오기

    const goCamera = () => {
        navigate("/Camera");
    };

    // 서버로 이미지 분석 요청
    useEffect(() => {
        if (imagePath) {
            const img = new Image();
            img.src = imagePath;

            img.onload = async () => {
                const response = await fetch(imagePath);
                const blob = await response.blob();

                // 서버에 분석 요청
                analyzeImage(blob);
            };
        }
    }, [imagePath, analyzeImage]);

    // 분석 후 결과에 따라 Popup 표시
    useEffect(() => {
        if (!loading && detectedObjects.length > 0) {
            const personDetected = detectedObjects.includes("person");
            setIsPersonDetected(personDetected);
            setShowPopup(true); // 분석 후 Popup 표시
        }
    }, [loading, detectedObjects]);

    // Popup 표시 시 음성 출력
    useEffect(() => {
        if (showPopup) {
            if (isPersonDetected) {
                speak("이 사진에는 사람이 포함되어 있습니다.");
            } else {
                speak("해당 상품은 짜파게티입니다.");
            }
        }
    }, [showPopup, isPersonDetected, speak]);

    if (error) {
        console.error("Error during analysis:", error);
    }

    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError" />
            </S.HeaderIcon>
            <S.HeaderText id="Detail">해당 상품을 분석중입니다...</S.HeaderText>
            <S.LoadingBox>
                <S.CaptureBox>
                    <img src={imagePath} alt="Captured Frame" />
                </S.CaptureBox>
                {loading && <S.loader></S.loader>}
            </S.LoadingBox>

            {showPopup && (
                isPersonDetected ? (
                    <S.HumanAllert>
                        <S.HumanImg>
                            <img src={HumanIcon} alt="상품 이미지" />
                        </S.HumanImg>
                        <S.AboutText>사람입니다</S.AboutText>
                        <S.GoCameraButton onClick={goCamera}>
                            다시 찍기
                        </S.GoCameraButton>
                    </S.HumanAllert>
                ) : (
                    <S.PopupGoods>
                        <S.GoodsImg>
                            <img src={JJA_img} alt="상품 이미지" />
                        </S.GoodsImg>
                        <S.AboutText>짜파게티</S.AboutText>
                        <S.AboutText>입니다</S.AboutText>
                        <S.GoCameraButton onClick={goCamera}>
                            다시 찍기
                        </S.GoCameraButton>
                    </S.PopupGoods>
                )
            )}
        </S.Container>
    );
};

export default Analyzing;
