import cv2

# quay và ghi video bằng OpenCV
capture = cv2.VideoCapture(0)

while True:
    ret, frame = capture.read()
    if not ret:
        continue
    cv2.imshow('frame',frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

capture.release()
cv2.destroyAllWindows()
