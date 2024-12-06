import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./OpenCVStlyled";
import useOpenCV from "../../hooks/useOpenCV";
import useTTSSTT from "../../hooks/useTTSSTT";

const OpenCV = () => {
    const { videoRef, canvasRef, cameraInitialized, processVideoFrame } = useOpenCV();
    const navigate = useNavigate();
    const [capturedImage, setCapturedImage] = useState(null); // 캡처된 이미지를 상태로 저장
    const { speak } = useTTSSTT(); // TTS 기능 가져오기
    const hasSpoken = useRef(false); // 음성 재생 여부를 관리

    const goMyPage = () => {
        navigate("/MyPage");
    };

    // "분석" 버튼 클릭 시 캔버스 내용을 캡쳐하여 저장
    const handleCapture = () => {
        if (!canvasRef.current || !videoRef.current) {
            alert("캔버스 또는 비디오가 초기화되지 않았습니다.");
            return;
        }

        const canvas = canvasRef.current;
        const video = videoRef.current;

        // 비디오 비율 계산
        const videoWidth = video.videoWidth; 
        const videoHeight = video.videoHeight;
        const aspectRatio = videoWidth / videoHeight;

        // 캔버스 크기를 비디오와 동일하게 설정
        canvas.width = videoWidth;
        canvas.height = videoHeight;

        const ctx = canvas.getContext("2d");

        // 비디오를 캔버스에 그리기 (비율 유지)
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // 이미지 데이터 생성
        const imageDataURL = canvas.toDataURL("image/png");

        // 이미지 데이터를 상태에 저장
        setCapturedImage(imageDataURL);

        // `Analyzing` 페이지로 이동하며 이미지 데이터 전달
        navigate("/Analyzing", { state: { image: imageDataURL } });
    };

    useEffect(() => {
        if (cameraInitialized) {
            const interval = setInterval(() => {
                processVideoFrame();
            }, 100); 
            return () => clearInterval(interval); 
        }
    }, [cameraInitialized, processVideoFrame]);

    // 페이지 로딩 시 음성 출력 (최초 1회만)
    useEffect(() => {
        if (!hasSpoken.current) { // 최초 1회만 실행
            speak("상품의 사진을 찍어 주세요. 당신의 눈이 되어 드리겠습니다.");
            hasSpoken.current = true; // 음성 재생 여부 기록
        }
    }, [speak]);

    return (
        <S.Container>
            <S.CameraText>상품의 사진을 찍어 주세요</S.CameraText>
            <S.CameraFrame>
                {/* 카메라 비디오 스트림 */}
                <video ref={videoRef} style={{ width: "100%", height: "100%" }} />
                {/* 프레임 처리 결과 */}
                <canvas ref={canvasRef} style={{ display: "none" }} />
            </S.CameraFrame>
            <S.ButtonType2 onClick={handleCapture}>
                분석 (사진)
            </S.ButtonType2>
            <S.ButtonType1 onClick={goMyPage}>
                마이페이지
            </S.ButtonType1>
        </S.Container>
    );
};

export default OpenCV;
