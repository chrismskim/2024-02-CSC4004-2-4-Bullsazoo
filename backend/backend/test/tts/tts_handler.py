from dotenv import load_dotenv
from google.cloud import texttospeech
from pydub import AudioSegment
from pydub.playback import play
from io import BytesIO
from google.oauth2.service_account import Credentials
from backend.base_dir import BASE_DIR
import os
import json

def generate_speech(input_text, output_file=None):
    """
    Google Cloud Text-to-Speech를 사용해 텍스트를 음성으로 변환합니다.
    - input_text: 텍스트 문자열 또는 텍스트 파일 경로
    - output_file: 변환된 음성을 저장할 파일 경로 (없으면 실시간 재생)
    """
    env_path = BASE_DIR + '\\.env'
    # .env 파일 로드
    load_dotenv(env_path)
    google_credentials = os.getenv("GOOGLE_CREDENTIALS")
    google_credentials_dict = json.loads(google_credentials)
    credentials = Credentials.from_service_account_info(google_credentials_dict)

    # Google TTS 클라이언트 생성
    client = texttospeech.TextToSpeechClient(credentials=credentials)

    # 입력 텍스트 처리 (파일 또는 문자열)
    if os.path.isfile(input_text):
        with open(input_text, "r", encoding="utf-8") as textfile:
            text = textfile.read()  # 파일에서 텍스트 읽기
    else:
        text = input_text  # 문자열 직접 사용

    # 텍스트 합성 요청 구성
    synthesis_input = texttospeech.SynthesisInput(text=text)

    # 음성 설정
    voice = texttospeech.VoiceSelectionParams(
        language_code="ko-KR",  # 한국어
        name="ko-KR-Wavenet-A",  # 음성 이름
        ssml_gender=texttospeech.SsmlVoiceGender.FEMALE  # 여성 음성
    )

    # 오디오 출력 설정 (MP3)
    audio_config = texttospeech.AudioConfig(audio_encoding=texttospeech.AudioEncoding.MP3)

    # Google TTS API로 음성 합성 요청
    response = client.synthesize_speech(input=synthesis_input, voice=voice, audio_config=audio_config)

    # 결과 처리 (파일 저장 또는 실시간 재생)
    if output_file is not None:
        with open(output_file, "wb") as out:
            out.write(response.audio_content)
            print(f"Audio content written to file")
            os.startfile(output_file)
    else:
        # MP3 데이터를 메모리로 로드하여 실시간 재생
        audio = AudioSegment.from_file(BytesIO(response.audio_content), format="mp3")
        play(audio)