import { useEffect, useRef, useState } from "react";
import { initializeCamera, processFrame } from "../apis/opencv";

const useOpenCV = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [cameraInitialized, setCameraInitialized] = useState(false);

    useEffect(() => {
        const setupCamera = async () => {
            if (videoRef.current) {
                try {
                    await initializeCamera(videoRef.current);
                    setCameraInitialized(true);
                } catch (error) {
                    console.error("카메라 설정 실패:", error);
                }
            }
        };

        setupCamera();

        return () => {
            // 클린업: 카메라 스트림 해제
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, []);

    const processVideoFrame = () => {
        if (videoRef.current && canvasRef.current) {
            processFrame(videoRef.current, canvasRef.current);
        }
    };

    return {
        videoRef,
        canvasRef,
        cameraInitialized,
        processVideoFrame,
    };
};

export default useOpenCV;
