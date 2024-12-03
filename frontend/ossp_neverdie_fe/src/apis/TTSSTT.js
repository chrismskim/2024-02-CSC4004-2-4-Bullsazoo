// TTSSTT.js: Text-to-Speech and Speech-to-Text API functions

// 음성 합성 (TTS) 함수
export const textToSpeech = (text, lang = "ko-KR") => {
    if (!window.speechSynthesis) {
        console.error("This browser does not support Text-to-Speech (TTS).");
        return;
    }
    
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        speechSynthesis.speak(utterance);
    };
    
    // 음성 인식 (STT) 초기화
    const getSpeechRecognition = () => {
        const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    
        if (!SpeechRecognition) {
        console.error("This browser does not support Speech Recognition (STT).");
        return null;
        }
    
        const recognition = new SpeechRecognition();
        recognition.lang = "ko-KR";
        recognition.interimResults = false; // 실시간 결과 비활성화
        recognition.continuous = false; // 연속 인식 비활성화
        return recognition;
    };
    
    // 음성 인식 (STT) 함수
    export const startSpeechRecognition = (onResult, onError) => {
        const recognition = getSpeechRecognition();
        if (!recognition) return;
    
        recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onResult(transcript);
        };
    
        recognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
        if (onError) onError(event.error);
        };
    
        recognition.start();
};