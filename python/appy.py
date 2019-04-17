# Main Flask container

from flask import Flask, jsonify

@app.route("/api/v1/video/<str:task_id>",methods=["POST"])
def Animate(task_id):
	print(request.json)