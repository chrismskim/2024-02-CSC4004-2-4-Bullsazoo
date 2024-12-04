import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./OpenCVStlyled";
import useOpenCV from "../../hooks/useOpenCV";

const OpenCV = () => {
    const { videoRef, canvasRef, cameraInitialized, processVideoFrame } = useOpenCV();
    const navigate = useNavigate();

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
        const videoWidth = video.videoWidth; // 비디오 원본 너비
        const videoHeight = video.videoHeight; // 비디오 원본 높이
        const aspectRatio = videoWidth / videoHeight; // 화면 비율 (가로/세로)
    
        // 캔버스 크기를 비디오와 동일하게 설정
        canvas.width = videoWidth;
        canvas.height = videoHeight;
    
        const ctx = canvas.getContext("2d");
    
        // 비디오를 캔버스에 그리기 (비율 유지)
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
        // 이미지 데이터 생성
        const imageDataURL = canvas.toDataURL("image/png");
    
        // 이미지 다운로드
        const link = document.createElement("a");
        link.href = imageDataURL;
        link.download = "captured_frame.png";
        link.click();
    };

    useEffect(() => {
        if (cameraInitialized) {
            const interval = setInterval(() => {
                processVideoFrame();
            }, 100); // 100ms 간격으로 프레임 처리
            return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
        }
    }, [cameraInitialized, processVideoFrame]);

    return (
        <S.Container>
            <S.CameraFrame>
                {/* 카메라 비디오 스트림 */}
                <video ref={videoRef} style={{ width: "100%", height: "100%" }} />
                {/* 프레임 처리 결과 */}
                <canvas ref={canvasRef} style={{ display: "none" }} />
            </S.CameraFrame>
            <S.ButtonType2 onClick={handleCapture}>
                분석 (캡쳐)
            </S.ButtonType2>
            <S.ButtonType1 onClick={goMyPage}>
                마이페이지
            </S.ButtonType1>
        </S.Container>
    );
};

export default OpenCV;
