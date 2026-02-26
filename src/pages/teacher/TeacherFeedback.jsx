import { useState } from "react";

function TeacherFeedback() {

  const [feedbackList, setFeedbackList] = useState([]);
  const [student, setStudent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student || !message) return;

    const newFeedback = {
      id: Date.now(),
      student,
      message,
      date: new Date().toLocaleDateString()
    };

    setFeedbackList([newFeedback, ...feedbackList]);
    setStudent("");
    setMessage("");
  };

  return (
    <div className="teacher-feedback-page">

      <h1 className="page-title">Feedback</h1>

      {/* GIVE FEEDBACK */}
      <div className="feedback-form-card">
        <h3>Give Feedback</h3>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              value={student}
              onChange={(e) => setStudent(e.target.value)}
              placeholder="Enter student name"
            />
          </div>

          <div className="form-group">
            <label>Feedback Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write feedback..."
            />
          </div>

          <button type="submit" className="submit-feedback-btn">
            Submit Feedback
          </button>

        </form>
      </div>

      {/* VIEW GIVEN FEEDBACK */}
      <div className="feedback-list-card">
        <h3>Given Feedback</h3>

        {feedbackList.length === 0 ? (
          <p className="empty-text">No feedback given yet.</p>
        ) : (
          feedbackList.map((item) => (
            <div key={item.id} className="feedback-item">
              <div className="feedback-header">
                <strong>{item.student}</strong>
                <span>{item.date}</span>
              </div>
              <p>{item.message}</p>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default TeacherFeedback;