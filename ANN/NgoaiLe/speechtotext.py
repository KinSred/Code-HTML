import pyttsx3 
import speech_recognition as sr 

# Khởi tạo mô hình nhận diện giọng nói
recognizer = sr.Recognizer()

# Mở micrô
with sr.Microphone() as source:
    # Tạo lời nhắc
    print("Bạn hãy bắt đầu nói.")
    audio = recognizer.listen(source)

# Nhận dạng văn bản từ âm thanh
try:
    # Nhận dạng văn bản bằng mô hình Google
    text = recognizer.recognize_google(audio, language="vi-VN")
    print("Có phải bạn vừa nói là:", text,"đúng không?")

# Nếu không nhận dạng được
except sr.UnknownValueError:
    print("Không nhận dạng được, bạn hãy nói lại thử xem?.")
except sr.RequestError:
    print("Lỗi.")

# Gõ văn bản ra màn hình

engine = pyttsx3.init()
engine.runAndWait()