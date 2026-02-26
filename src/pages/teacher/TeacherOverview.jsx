import { useState } from "react";

function TeacherOverview() {

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [milestone, setMilestone] = useState("");
  const [comment, setComment] = useState("");

  // ✅ Get logged-in teacher
  const user = JSON.parse(localStorage.getItem("user"));

  const teacherName = user?.name || "Admin";

  const students = [
    { name: "Ananya Roy", id: "S006", phase: "Frontend Prototype", score: 95, status: "ahead", date: "2026-02-19" },
    { name: "Priya Nair", id: "S002", phase: "Frontend Prototype", score: 91, status: "ahead", date: "2026-02-18" },
    { name: "Sneha Patel", id: "S004", phase: "Literature Review", score: 88, status: "on-track", date: "2026-02-17" },
    { name: "Arjun Mehta", id: "S001", phase: "System Design", score: 72, status: "in-progress", date: "2026-02-15" },
    { name: "Rahul Singh", id: "S003", phase: "Problem Statement", score: 58, status: "behind", date: "2026-02-10" },
  ];

  const handleSubmit = () => {
    if (!milestone || !comment) {
      alert("Please select milestone and write feedback.");
      return;
    }

    alert("Feedback submitted successfully!");

    setMilestone("");
    setComment("");
    setSelectedStudent(null);
  };

  return (
    <div className="teacher-overview">

      <p className="teacher-welcome-text">Welcome back,</p>

      {/* ✅ Dynamic Teacher Name */}
      <h1 className="teacher-title">
        Prof. {teacherName} 
      </h1>

      

      <div className="teacher-table-card">
        <h3>Student Overview</h3>

        <table className="teacher-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Phase</th>
              <th>Score</th>
              <th>Status</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>
                  <div className="teacher-student-cell">
                    <div className="teacher-avatar">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <strong>{student.name}</strong>
                      <p>{student.id}</p>
                    </div>
                  </div>
                </td>

                <td>{student.phase}</td>

                <td className="teacher-score">
                  {student.score}/100
                </td>

                <td>
                  <span className={`teacher-badge ${student.status}`}>
                    {student.status.replace("-", " ")}
                  </span>
                </td>

                <td>{student.date}</td>

                <td>
                  <button
                    className="teacher-feedback-btn"
                    onClick={() => setSelectedStudent(student)}
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
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

export default TeacherOverview;