import { useState } from "react";
import { textToSpeech, startSpeechRecognition } from "../apis/TTSSTT";

const useTTSSTT = () => {
    const [listening, setListening] = useState(false); // 음성 인식 상태
    const [transcript, setTranscript] = useState(""); // 변환된 텍스트 저장

    const speak = (text) => {
        textToSpeech(text);
    };

    const startListening = () => {
        if (listening) {
            setListening(false); // 음성 인식 중지
        } else {
            setListening(true); // 음성 인식 시작
            startSpeechRecognition(
                (result) => {
                    setTranscript(result); // 변환된 텍스트 저장
                    setListening(false); // 음성 인식 자동 종료
                },
                (error) => {
                    console.error("STT Error:", error);
                    setListening(false);
                }
            );
        }
    };

    return {
        listening,
        transcript,
        speak,
        startListening,
    };
};

export default useTTSSTT;
