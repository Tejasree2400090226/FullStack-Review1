function TeacherSubmissions() {
  const submissions = [
    {
      name: "Arjun Mehta",
      id: "S001",
      email: "arjun@demo.com",
      score: 82,
      phase: "System Design",
      status: "In Progress",
      due: "2026-02-15",
      last: "02-15",
    },
    {
      name: "Priya Nair",
      id: "S002",
      email: "priya@demo.com",
      score: 91,
      phase: "Frontend Prototype",
      status: "Ahead",
      due: "2026-02-18",
      last: "02-18",
    },
    {
      name: "Rahul Singh",
      id: "S003",
      email: "rahul@demo.com",
      score: 67,
      phase: "Problem Statement",
      status: "Behind",
      due: "2026-02-10",
      last: "02-10",
    },
    {
      name: "Sneha Patel",
      id: "S004",
      email: "sneha@demo.com",
      score: 88,
      phase: "Literature Review",
      status: "On Track",
      due: "2026-02-17",
      last: "02-17",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "Ahead") return "ahead";
    if (status === "Behind") return "behind";
    if (status === "On Track") return "on-track";
    return "in-progress";
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
              <button className="feedback-btn">
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

    </div>
  );
}

export default TeacherSubmissions;