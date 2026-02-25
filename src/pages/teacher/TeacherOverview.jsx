function TeacherOverview() {

  const students = [
    { name: "Ananya Roy", id: "S006", phase: "Frontend Prototype", score: 95, status: "ahead", date: "2026-02-19" },
    { name: "Priya Nair", id: "S002", phase: "Frontend Prototype", score: 91, status: "ahead", date: "2026-02-18" },
    { name: "Sneha Patel", id: "S004", phase: "Literature Review", score: 88, status: "on-track", date: "2026-02-17" },
    { name: "Arjun Mehta", id: "S001", phase: "System Design", score: 82, status: "in-progress", date: "2026-02-15" },
    { name: "Vikram Gupta", id: "S005", phase: "System Design", score: 74, status: "in-progress", date: "2026-02-14" },
    { name: "Rahul Singh", id: "S003", phase: "Problem Statement", score: 67, status: "behind", date: "2026-02-10" },
    { name: "Karan Joshi", id: "S007", phase: "Problem Statement", score: 58, status: "behind", date: "2026-02-05" },
  ];

  return (
    <div className="teacher-overview">

      <p className="teacher-welcome-text">Welcome back,</p>
      <h1 className="teacher-title">Prof. Admin Dashboard</h1>
      <p className="teacher-subtitle">
        Here's what's happening across all student projects
      </p>

      {/* Summary Cards */}
      <div className="teacher-stats-row">

        <div className="teacher-stat-card">
          <div className="teacher-stat-icon green">👥</div>
          <div>
            <h2>47</h2>
            <p>Total Students</p>
            <span>+5 this week</span>
          </div>
        </div>

        <div className="teacher-stat-card">
          <div className="teacher-stat-icon orange">📄</div>
          <div>
            <h2>12</h2>
            <p>Pending Reviews</p>
            <span>4 urgent</span>
          </div>
        </div>

        <div className="teacher-stat-card">
          <div className="teacher-stat-icon green">📈</div>
          <div>
            <h2>73%</h2>
            <p>Avg Progress</p>
            <span>+8% vs last month</span>
          </div>
        </div>

        <div className="teacher-stat-card">
          <div className="teacher-stat-icon red">⚠</div>
          <div>
            <h2>3</h2>
            <p>Needs Attention</p>
            <span>Behind schedule</span>
          </div>
        </div>

      </div>

      {/* Student Table */}
      <div className="teacher-table-card">
        <h3>Student Overview</h3>

        <table className="teacher-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Current Phase</th>
              <th>Score</th>
              <th>Status</th>
              <th>Last Submit</th>
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
                <td className="teacher-score">{student.score}/100</td>

                <td>
                  <span className={`teacher-badge ${student.status}`}>
                    {student.status.replace("-", " ")}
                  </span>
                </td>

                <td>{student.date}</td>

                <td>
                  <button className="teacher-feedback-btn">
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default TeacherOverview;