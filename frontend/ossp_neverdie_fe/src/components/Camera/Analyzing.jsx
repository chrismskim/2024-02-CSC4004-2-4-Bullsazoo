import React, { useState, useEffect } from "react";
import * as S from "./OpenCVStlyled";
import MainIcon from "../../assets/images/mainIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import JJA_img from "../../assets/images/Ramen_JJA.jpeg";
import useTTSSTT from "../../hooks/useTTSSTT";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import HumanIcon from "../../assets/images/human_icon.svg";

const Analyzing = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { image } = location.state || {}; // 전달된 이미지 데이터
    const [showPopup, setShowPopup] = useState(false); // Popup 표시 여부
    const [isPersonDetected, setIsPersonDetected] = useState(null); // 사람 감지 여부
    const { speak } = useTTSSTT(); // TTS 기능 가져오기

    const goCamera = () => {
        navigate("/Camera");
    };

    // 이미지 분석 함수
    const analyzeImage = async (imageElement) => {
        try {
            const model = await cocoSsd.load();
            const predictions = await model.detect(imageElement);
            const detected = predictions.some(
                (prediction) => prediction.class === "person"
            );
            return detected;
        } catch (error) {
            console.error("이미지 분석 중 오류 발생:", error);
            return false;
        }
    };

    // 분석 후 결과에 따라 Popup 표시
    useEffect(() => {
        if (image) {
            const imgElement = new Image();
            imgElement.src = image;

            imgElement.onload = async () => {
                const detected = await analyzeImage(imgElement);
                setIsPersonDetected(detected); // 사람 감지 여부 업데이트
                setShowPopup(true); // 분석 후 Popup 표시
            };
        }
    }, [image]);

    // Popup 표시 시 음성 출력
    useEffect(() => {
        if (showPopup) {
            if (isPersonDetected) {
                speak("이 사진에는 사람이 포함되어 있습니다.");
            } else {
                speak("해당 상품은 짜파게티입니다.");
            }
        }
    }, [showPopup, isPersonDetected, speak]); // showPopup, isPersonDetected가 변경될 때 실행

    return (
        <S.Container>
            <S.HeaderIcon>
                <img src={MainIcon} alt="MainIconError" />
            </S.HeaderIcon>
            <S.HeaderText id="Detail">해당 상품을 분석중입니다...</S.HeaderText>
            <S.LoadingBox>
                <S.CaptureBox>
                    <img src={image} alt="Captured Frame" />
                </S.CaptureBox>
                <S.loader></S.loader>
            </S.LoadingBox>

            {showPopup && (
                isPersonDetected ? ( // 사람 감지 여부에 따라 표시
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
