# Animator
# Written by Seth Woolley 2019

import cv2
import os
import sys

imgFolder = sys.argv[1]
video = sys.argv[2]

images = [img for img in os.listdir(imgFolder) if img.endswith(".png")]
frame = cv2.imread(os.path.join(imgFolder, images[0]))
height, width, layers = frame.shape

video = cv2.VideoWriter(video, 0, 24, (width,height))

for image in images:
    video.write(cv2.imread(os.path.join(imgFolder, image)))

video.release()