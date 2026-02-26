import { useState } from "react";

function TeacherSubmissions() {

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [milestone, setMilestone] = useState("");
  const [comment, setComment] = useState("");

  const submissions = [
    {
      name: "Arjun Mehta",
      id: "S001",
      email: "arjun@demo.com",
      score: 82,
      phase: "System Design",
      status: "In Progress",
      due: "2026-02-15",
    },
    {
      name: "Priya Nair",
      id: "S002",
      email: "priya@demo.com",
      score: 91,
      phase: "Frontend Prototype",
      status: "Ahead",
      due: "2026-02-18",
    },
    {
      name: "Rahul Singh",
      id: "S003",
      email: "rahul@demo.com",
      score: 67,
      phase: "Problem Statement",
      status: "Behind",
      due: "2026-02-10",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "Ahead") return "ahead";
    if (status === "Behind") return "behind";
    if (status === "On Track") return "on-track";
    return "in-progress";
  };

  const handleSubmit = () => {
    alert("Feedback submitted successfully!");
    setMilestone("");
    setComment("");
    setSelectedStudent(null);
  };

  return (
    <div className="teacher-submissions-modern">

      <h2>Project Submissions</h2>

      <div className="search-bar">
        <input placeholder="Search by name or student ID..." />
      </div>

      <div className="submission-list">

        {submissions.map((student, index) => (
          <div className="submission-card" key={index}>

            <div className="submission-left">
              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <div>
                <h4>{student.name} ({student.id})</h4>
                <p>{student.email}</p>
              </div>
            </div>

            <div className="submission-middle">
              <div className="score">
                <span>{student.score}</span>
                <p>Score</p>
              </div>

              <div className="phase">
                <p>{student.phase}</p>
                <span className={`status ${getStatusClass(student.status)}`}>
                  {student.status}
                </span>
              </div>

              <div className="due">
                <p>{student.due}</p>
              </div>
            </div>

            <div className="submission-right">
              <button
                className="feedback-btn"
                onClick={() => setSelectedStudent(student)}
              >
                Give Feedback
              </button>
            </div>

            <div className="progress-bar-modern">
              <div
                className="progress-fill-modern"
                style={{ width: `${student.score}%` }}
              ></div>
            </div>

          </div>
        ))}

      </div>

      {/* MODAL POPUP */}
      {selectedStudent && (
        <div className="modal-overlay">

          <div className="modal-card">

            <h3>Give Feedback</h3>
            <p className="modal-student">
              {selectedStudent.name} ({selectedStudent.id})
            </p>

            <div className="modal-group">
              <label>Milestone</label>
              <select
                value={milestone}
                onChange={(e) => setMilestone(e.target.value)}
              >
                <option value="">Select milestone</option>
                <option>Problem Statement</option>
                <option>System Design</option>
                <option>Frontend Prototype</option>
                <option>Backend Development</option>
                <option>Final Submission</option>
              </select>
            </div>

            <div className="modal-group">
              <label>Feedback</label>
              <textarea
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write detailed feedback..."
              />
            </div>

            <div className="modal-buttons">
              <button
                className="cancel-btn"
                onClick={() => setSelectedStudent(null)}
              >
                Cancel
              </button>

              <button
                className="submit-btn-modal"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default TeacherSubmissions;