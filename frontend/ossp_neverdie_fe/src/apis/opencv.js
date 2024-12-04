export const initializeCamera = async (videoElement) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true, // 비디오 사용
        });
        videoElement.srcObject = stream; // 비디오 엘리먼트에 스트림 연결
        await videoElement.play();
        return stream;
    } catch (error) {
        console.error("카메라 초기화 실패:", error);
        throw error;
    }
};

export const processFrame = (videoElement, canvasElement) => {
    try {
        const context = canvasElement.getContext("2d");
        context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

        // OpenCV.js로 이미지 처리
        // 여기서 OpenCV.js 함수를 적용해 프레임을 처리
        // 예: 이미지 그레이스케일 변환
        // const src = cv.imread(canvasElement);
        // const dst = new cv.Mat();
        // cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
        // cv.imshow(canvasElement, dst);
        // src.delete();
        // dst.delete();

    } catch (error) {
        console.error("프레임 처리 중 오류:", error);
    }
};
