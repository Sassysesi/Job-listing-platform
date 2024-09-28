from flask import Flask, jsonify, request

app = Flask(__name__)


jobs = [
    {
        "id": 1,
        "title": "Software Engineer",
        "location": "Johannesburg",
        "description": "Develop and maintain software applications."
    },
    {
        "id": 2,
        "title": "Data Scientist",
        "location": "Cape Town",
        "description": "Analyze and interpret complex data sets."
    },
    {
        "id": 3,
        "title": "Project Manager",
        "location": "Durban",
        "description": "Lead project teams and ensure successful delivery."
    }
]


@app.route('/jobs', methods=['GET'])
def get_jobs():
    return jsonify(jobs), 200


@app.route('/jobs/<int:id>', methods=['GET'])
def get_job(id):
    job = next((job for job in jobs if job["id"] == id), None)
    if job:
        return jsonify(job), 200
    else:
        return jsonify({"error": "Job not found"}), 404


@app.route('/jobs', methods=['POST'])
def add_job():
    new_job = request.json
    new_job["id"] = len(jobs) + 1 
    jobs.append(new_job)
    return jsonify(new_job), 201

if __name__ == '__main__':
    app.run(debug=True)
