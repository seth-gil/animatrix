# Main Flask container

from flask import Flask, jsonify, request
import os

app = Flask(__name__)

@app.route("/api/v1/video/<string:task_id>",methods=["POST"])
def Animate(task_id):
	try:
		request.files
		None
	except:
		abort(400)
	if not os.path.exists(task_id):
		os.makedirs(task_id)

	i = 0
	for file in request.files.getlist("request"):
		file.save(os.path.join(task_id,str(i)+".jpg"))
		i = i+1
	print("\n\n\n"+str(request.files.getlist("request"))+"\n\n\n")
	return(str(request.files))

if __name__ == "__main__":
	app.run(debug=True,host="192.168.1.113") 