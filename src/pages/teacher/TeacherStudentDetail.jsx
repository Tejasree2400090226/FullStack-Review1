function TeacherStudentDetail() {
  return (
    <div className="teacher-page">

      <div className="teacher-page-header">
        <h1>Submissions</h1>
        <p>Monitor all student progress and activity</p>
      </div>

      <div className="teacher-submission-grid">

        {/* CARD 1 */}
        <div className="teacher-submission-card">
          <div className="card-top">
            <div>
              <h3>E-Commerce Platform</h3>
              <p>Alex Johnson</p>
            </div>
            <span className="status in-progress">In Progress</span>
          </div>

          <div className="progress-section">
            <div className="progress-label">
              <span>Progress</span>
              <span>78%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "78%" }}></div>
            </div>
          </div>

          <div className="card-footer">
            <span>Due Mar 15, 2026</span>
            <span>12 files</span>
          </div>
        </div>


        {/* CARD 2 */}
        <div className="teacher-submission-card">
          <div className="card-top">
            <div>
              <h3>Smart Healthcare Appointment System</h3>
              <p>Priya Sharma</p>
            </div>
            <span className="status completed">Completed</span>
          </div>

          <div className="progress-section">
            <div className="progress-label">
              <span>Progress</span>
              <span>92%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "92%" }}></div>
            </div>
          </div>

          <div className="card-footer">
            <span>Due Feb 28, 2026</span>
            <span>19 files</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default TeacherStudentDetail;