# Main Flask container

from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/v1/video/<string:task_id>",methods=["POST"])
def Animate(task_id):
	print("\n\n\n"+str(request.files)+"\n\n\n")
	return(request.json)

if __name__ == "__main__":
	app.run(debug=True) 