from google.cloud import texttospeech
import os

def check_google_credentials():
    """
    Google Cloud Credentials 환경 변수가 설정되어 있는지 확인.

    Raises:
        EnvironmentError: 환경 변수가 설정되지 않은 경우
    """
    credentials = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if not credentials:
        raise EnvironmentError(
            "Google Cloud Credentials가 설정되지 않았습니다. "
            "GOOGLE_APPLICATION_CREDENTIALS 환경 변수를 설정하세요."
        )


def text_to_speech(text, output_dir="media/audio/"):
    """
    텍스트를 음성 파일로 변환하는 함수.
    Google Cloud Text-to-Speech API를 사용.

    Args:
        text (str): 변환할 텍스트
        output_dir (str): 음성 파일을 저장할 디렉토리

    Returns:
        str: 생성된 음성 파일 경로
    """
    # Google TTS 클라이언트 생성
    client = texttospeech.TextToSpeechClient()

    # 입력 텍스트 설정
    synthesis_input = texttospeech.SynthesisInput(text=text)

    # 음성 설정 (언어 및 성별)
    voice = texttospeech.VoiceSelectionParams(
        language_code="ko-KR",  # 한국어
        ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL  # 중립적인 목소리
    )

    # 오디오 설정
    audio_config = texttospeech.AudioConfig(audio_encoding=texttospeech.AudioEncoding.MP3)

    # TTS 요청
    response = client.synthesize_speech(
        input=synthesis_input,
        voice=voice,
        audio_config=audio_config
    )

    # 출력 디렉토리 생성
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # 파일 이름 생성 및 저장
    audio_file_name = f"output_{text[:10].replace(' ', '_')}.mp3"
    audio_file_path = os.path.join(output_dir, audio_file_name)

    with open(audio_file_path, "wb") as audio_file:
        audio_file.write(response.audio_content)

    return audio_file_path
