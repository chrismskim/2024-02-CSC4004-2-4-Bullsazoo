import axios from "axios";
import { baseURL } from "./baseURL";

// Axios 인스턴스 생성
export const instance = axios.create({
    baseURL: baseURL, // 기본 API URL
    withCredentials: true, // 인증 쿠키를 포함
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000, // 요청 제한 시간 (10초)
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
    (config) => {
        // 예: 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 요청 오류 처리
        console.error("Request Error:", error);
        return Promise.reject(error);
    }
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
    (response) => {
        // 응답 데이터를 필요한 대로 가공할 수 있음
        return response;
    },
    (error) => {
        // 응답 오류 처리
        if (error.response) {
            // 서버에서 응답을 받았지만 상태 코드가 2xx 범위를 벗어남
            console.error("상태 코드가 2xx 범위를 벗어남:", error.response.data);
        } else if (error.request) {
            // 요청이 서버에 도달하지 못했거나 응답이 없음
            console.error("No Response from Server:", error.request);
        } else {
            // 요청 설정 중에 발생한 오류
            console.error("Error in Request Setup:", error.message);
        }
        return Promise.reject(error);
    }
);
