import { instance } from "./instance";

// Analyze API 호출 함수
export const analyzeImage = async () => {
    try {
        const response = await instance.post("/analyze/detect/");
        return response.data; // API의 응답 데이터를 반환
    } catch (error) {
        console.error("Error in analyzeImage API call:", error);
        throw error; // 오류를 호출한 곳으로 전달
    }
};
