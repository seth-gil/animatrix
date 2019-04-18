# Main Flask container

from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import cv2

app = Flask(__name__)
CORS(app);

# Animates all files in a folder 
def AnimateFolder(imgFolder,video):
	images = [img for img in os.listdir(imgFolder) if img.endswith(".jpg")]
	frame = cv2.imread(os.path.join(imgFolder, images[0]))
	height, width, layers = frame.shape

	vidPath = os.path.join(imgFolder,video+".avi")

	video = cv2.VideoWriter(vidPath, 0, 1, (width,height))

	for image in images:
		video.write(cv2.imread(os.path.join(imgFolder, image)))

	video.release()
	return vidPath


@app.route("/api/v1/upload",methods=["POST"])
def Animate():
	print(request.form["project"])

	task_id = request.form["project"]
	try:
		request.files
		None
	except:
		abort(400)
	if not os.path.exists(task_id):
		os.makedirs(task_id)

	i = 0
	for file in request.files.getlist("files[]"):
		file.save(os.path.join(task_id,str(i)+".jpg"))
		i = i+1
	print("\n\n\n"+str(request.files.getlist("request"))+"\n\n\n")

	os.system("ffmpeg -framerate 1 -i " + task_id + "/%d.jpg "+task_id +".mp4")
	return ("success")

if __name__ == "__main__":
	app.run(debug=True,host="192.168.1.113") 